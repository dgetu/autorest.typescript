import { ModularCodeModel, Type } from "./modularCodeModel.js";
import { InterfaceStructure } from "./helpers/modelUtils.js";
import { FunctionDeclarationStructure, OptionalKind } from "ts-morph";
import { UsageFlags } from "@typespec/compiler";
import _ from "lodash";
import { isDefined } from "@azure/core-util";
import { toCamelCase } from "../utils/casingUtils.js";
import * as path from "path";
import {
  addImportToSpecifier,
  addImportsToFiles
} from "@azure-tools/rlc-common";

type SerializeMapEntry = {
  serialize?: OptionalKind<FunctionDeclarationStructure>;
  deserialize?: OptionalKind<FunctionDeclarationStructure>;
  imports: Record<"rlc" | "modular", ImportName> | undefined;
};

type ImportName = {
  name: string;
  alias?: string;
};

// get all function definitions, list of types to import from rlc and from models
export function buildSerializerFunctions(
  codeModel: ModularCodeModel,
  modelMap: Map<Type, InterfaceStructure>
): Map<Type, SerializeMapEntry> {
  const serializeMap = Array.from(modelMap.entries())
    .map(([type, interfaceStructure]) => {
      const rlcImportName = type.alias ?? (type.name || "FIXMYNAME");

      const isInput = type.usage && type.usage & UsageFlags.Input;
      const isOutput = type.usage && type.usage & UsageFlags.Output;
      if (!(isInput || isOutput)) {
        return;
      }

      const imports = {
        rlc: {
          name: rlcImportName,
          alias: `RLC${rlcImportName}`
        },
        modular: {
          name: interfaceStructure.name
        }
      };

      const serialize = (isInput && buildSerialize(imports)) || undefined;
      const deserialize = (isOutput && buildDeserialize(imports)) || undefined;

      const entry: SerializeMapEntry | undefined = {
        serialize,
        deserialize,
        imports
      };
      return [type, entry] as const;
    })
    .filter(isDefined);

  if (serializeMap.length) {
    const sourceFile = codeModel.project.createSourceFile(
      path.join(
        `${codeModel.modularOptions.sourceRoot}/`,
        `util/serializeUtil.ts`
      )
    );

    const [functions, rlcImports, modularImports] = serializeMap.reduce(
      (acc, [_, { serialize, deserialize, imports }]) => {
        acc[0].push(serialize, deserialize);
        acc[1].push(imports?.rlc);
        acc[2].push(imports?.modular);
        return acc;
      },
      [[], [], []] as [
        Array<OptionalKind<FunctionDeclarationStructure> | undefined>,
        Array<ImportName | undefined>,
        Array<ImportName | undefined>
      ]
    );

    sourceFile.addFunctions(functions.filter(isDefined));

    rlcImports
      .filter(isDefined)
      .map((i) => (i.alias ? `${i.name} as ${i.alias}` : `${i.name}`))
      .forEach((name) =>
        addImportToSpecifier("rlcIndex", codeModel.runtimeImports, name)
      );
    modularImports
      .filter(isDefined)
      .map((i) => (i.alias ? `${i.name} as ${i.alias}` : `${i.name}`))
      .forEach((name) =>
        addImportToSpecifier("modularModel", codeModel.runtimeImports, name)
      );
    addImportsToFiles(codeModel.runtimeImports, sourceFile, {
      rlcIndex: "../rest/index.js",
      modularModel: "../models/models.js"
    });
  }

  return new Map(serializeMap);
}

function buildSerialize(
  imports: Record<"rlc" | "modular", ImportName>
): OptionalKind<FunctionDeclarationStructure> {
  const functionStructure: OptionalKind<FunctionDeclarationStructure> = {
    ...buildHelper(imports, "serialize"),
    statements: []
  };
  return functionStructure;
}

function buildDeserialize(
  imports: Record<"rlc" | "modular", ImportName>
): OptionalKind<FunctionDeclarationStructure> {
  const functionStructure: OptionalKind<FunctionDeclarationStructure> = {
    ...buildHelper(imports, "deserialize"),
    statements: []
  };
  return functionStructure;
}

function buildHelper(
  imports: Record<"rlc" | "modular", ImportName>,
  kind: "serialize" | "deserialize"
): OptionalKind<FunctionDeclarationStructure> {
  const typeTuple = (["rlc", "modular"] as const)
    .map((key) => imports[key])
    .map((value) => value.name);
  if (kind === "serialize") {
    typeTuple.reverse();
  }
  const [parameter, returnType] = typeTuple;

  const name = toCamelCase(`${kind} ${parameter}`);
  const parameters = [{ name: "obj", type: parameter }];

  return { isExported: true, name, parameters, returnType };
}
