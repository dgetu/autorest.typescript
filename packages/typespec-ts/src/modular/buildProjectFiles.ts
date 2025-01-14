import { NameType } from "@azure-tools/rlc-common";

import { ModularEmitterOptions } from "./interfaces.js";
import { getClassicalLayerPrefix } from "./helpers/namingHelpers.js";
import { SdkContext } from "@azure-tools/typespec-client-generator-core";
import { getModularClientOptions } from "../utils/clientUtils.js";
import { getMethodHierarchiesMap } from "../utils/operationUtil.js";
import { useContext } from "../contextManager.js";
import path from "path/posix";

function buildExportsForMultiClient(
  context: SdkContext,
  emitterOptions: ModularEmitterOptions,
  packageInfo: any
) {
  if (context.sdkPackage.clients.length > 1) {
    delete packageInfo.exports["./api"];
    for (const client of context.sdkPackage.clients) {
      const { subfolder } = getModularClientOptions(context, client);
      packageInfo.exports[`./${subfolder}`] = path.join(
        emitterOptions.modularOptions.sourceRoot,
        `./${subfolder}/index.ts`
      );

      packageInfo.exports[`./${subfolder}/api`] = path.join(
        emitterOptions.modularOptions.sourceRoot,
        `./${subfolder}/api/index.ts`
      );
    }
  }

  if (emitterOptions.options.hierarchyClient) {
    for (const client of context.sdkPackage.clients) {
      const { subfolder } = getModularClientOptions(context, client);
      const methodMap = getMethodHierarchiesMap(context, client);
      for (const [prefixKey, _] of methodMap) {
        const prefixes = prefixKey.split("/");
        if (prefixKey === "") {
          continue;
        }
        const subApiPath = `api/${getClassicalLayerPrefix(
          prefixes,
          NameType.File,
          "/"
        )}`;
        packageInfo.exports[
          `./${subfolder ? subfolder + "/" : ""}${subApiPath}`
        ] = path.join(
          emitterOptions.modularOptions.sourceRoot,
          `./${subfolder ? subfolder + "/" : ""}${subApiPath}/index.ts`
        );
      }
    }
    delete packageInfo.exports["./models"];
    const modelSubpaths = getModelSubpaths(emitterOptions);
    for (const modelSubpath of modelSubpaths) {
      packageInfo.exports[`./${modelSubpath.replace("/index.ts", "")}`] =
        path.join(
          emitterOptions.modularOptions.sourceRoot,
          `./${modelSubpath}`
        );
    }
  }

  return packageInfo.exports;
}

export function getModuleExports(
  context: SdkContext,
  emitterOptions: ModularEmitterOptions
) {
  const exports: Record<string, any> = {
    exports: {
      ".": path.join(emitterOptions.modularOptions.sourceRoot, "./index.ts"),
      "./models": path.join(
        emitterOptions.modularOptions.sourceRoot,
        "./models/index.ts"
      )
    }
  };
  if (!emitterOptions.options.azureArm) {
    exports["exports"]["./api"] = path.join(
      emitterOptions.modularOptions.sourceRoot,
      "./api/index.ts"
    );
  }

  return buildExportsForMultiClient(context, emitterOptions, exports);
}

function getModelSubpaths(emitterOptions: ModularEmitterOptions) {
  const outputProject = useContext("outputProject");
  const modelFiles = outputProject.getSourceFiles(
    path.join(emitterOptions.modularOptions.sourceRoot, `models/**/*.ts`)
  );
  const subpath = new Set<string>();
  for (const modelFile of modelFiles) {
    const filepath = modelFile.getFilePath();
    if (!filepath.endsWith("index.ts")) {
      continue;
    }
    subpath.add(
      path.relative(emitterOptions.modularOptions.sourceRoot, filepath)
    );
  }
  return Array.from(subpath);
}
