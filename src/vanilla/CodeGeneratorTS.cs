// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License. See License.txt in the project root for license information.
//

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using AutoRest.Core;
using AutoRest.Core.Model;
using AutoRest.Core.Utilities;
using AutoRest.TypeScript.Model;
using AutoRest.TypeScript.vanilla.Templates;

namespace AutoRest.TypeScript
{
    public class CodeGeneratorTS : CodeGenerator
    {
        private const string ClientRuntimePackage = "ms-rest-js version 1.0.0";


        public override string ImplementationFileExtension => ".ts";


        public override string UsageInstructions => $"The {ClientRuntimePackage} or higher npm package is required to execute the generated code.";

        /// <summary>
        ///     Generate TypeScript client code
        /// </summary>
        /// <param name="serviceClient"></param>
        /// <returns></returns>
        public override async Task Generate(CodeModel cm)
        {
            var codeModel = cm as CodeModelTS;
            if (codeModel == null)
            {
                throw new InvalidCastException("CodeModel is not a TypeScript code model.");
            }

            await Generate(new VanillaTemplateFactory(), codeModel);

            if (IsNotDefaultApiVersion(codeModel))
            {
                if (ShouldWriteParameterMappersFile(codeModel))
                {
                    await WriteParameterMappersFile(codeModel);
                }

                if (ShouldWriteMethodGroupFiles(codeModel))
                {
                    await WriteMethodGroupIndexFile(codeModel);

                    bool shouldWriteMappersIndexFile = ShouldWriteMappersIndexFile(codeModel);

                    foreach (MethodGroupTS methodGroup in codeModel.MethodGroupModels)
                    {
                        if (shouldWriteMappersIndexFile)
                        {
                            await WriteMethodGroupMappersFile(methodGroup);
                        }
                        await WriteMethodGroupFile(new MethodGroupTemplate { Model = methodGroup });
                    }
                }
            }

            if (ShouldWritePackageJsonFile(codeModel))
            {
                await WritePackageJsonFile(codeModel);
            }

            if (ShouldWriteReadmeMdFile(codeModel))
            {
                await WriteReadmeMdFile(new ReadmeTemplate { Model = codeModel });
            }

            if (ShouldWriteLicenseFile(codeModel))
            {
                await WriteLicenseFile(codeModel);
            }

            if (ShouldWriteMultiApiMetadata(codeModel))
            {
                await WriteMultiApiPackageJson(codeModel);
                await WriteMultiApiTsConfig(codeModel);
                await WriteMultiApiWebpackTsConfig(codeModel);
            }

            if (ShouldWriteNonMultiApiMetadata(codeModel))
            {
                await WriteTsConfig(codeModel);
                await WriteWebpackTsConfig(codeModel);
                await WriteWebpackConfig(codeModel);
                await WriteNpmIgnore(codeModel);
            }
        }

        protected async Task Generate<T>(TemplateFactory<T> templateFactory, T codeModel) where T : CodeModelTS
        {
            if (IsNotDefaultApiVersion(codeModel))
            {
                await WriteServiceClientCodeFile(templateFactory, codeModel);
                await WriteServiceClientContextCodeFile(templateFactory, codeModel);

                if (ShouldWriteModelsFiles(codeModel))
                {
                    await WriteModelsIndexFile(templateFactory.CreateModelsIndexTemplate(codeModel));
                    if (ShouldWriteMappersIndexFile(codeModel))
                    {
                        await WriteMappersIndexFile(templateFactory.CreateMappersIndexTemplate(codeModel));
                    }
                }
            }
        }

        public static bool HasMappableParameters(IEnumerable<Method> methods)
        {
            return methods
                .SelectMany(m => m.LogicalParameters)
                .Any(p => p.Location != ParameterLocation.Body);
        }

        protected bool ShouldWriteParameterMappersFile(CodeModelTS codeModel)
        {
            return HasMappableParameters(codeModel.Methods);
        }

        public static bool ShouldWriteModelsFiles(CodeModelTS codeModel)
        {
            return ShouldWriteMappersIndexFile(codeModel) || codeModel.MethodsWithCustomResponseType.Any();
        }

        public static bool ShouldWriteMappersIndexFile(CodeModelTS codeModel)
        {
            // We should always generate a mappers index file in the Azure scenario because we
            // export CloudError from that file.
            return codeModel.ModelTypes.Any() || codeModel.Settings.AzureArm == true;
        }

        public static bool ShouldWriteMethodGroupFiles(CodeModelTS codeModel)
        {
            return codeModel.MethodGroupModels.Any();
        }

        protected bool ShouldWritePackageJsonFile(CodeModelTS codeModel)
        {
            return (codeModel.Settings.GeneratePackageJson ?? codeModel.Settings.GenerateMetadata) &&
                !IsMultiApiVersionButNotDefaultVersion(codeModel);
        }

        protected bool ShouldWriteReadmeMdFile(CodeModelTS codeModel)
        {
            return (codeModel.Settings.GenerateReadmeMd ?? codeModel.Settings.GenerateMetadata) &&
                !IsMultiApiVersionButNotDefaultVersion(codeModel);
        }

        protected bool ShouldWriteLicenseFile(CodeModelTS codeModel)
        {
            return (codeModel.Settings.GenerateLicenseTxt ?? codeModel.Settings.GenerateMetadata) &&
                !IsMultiApiVersionButNotDefaultVersion(codeModel);
        }

        protected bool ShouldWriteTSCongiFile(CodeModelTS codeModel)
        {
            return codeModel.Settings.GenerateMetadata && !IsMultiApiVersionButNotDefaultVersion(codeModel);
        }

        protected bool IsNotDefaultApiVersion(CodeModelTS codeModel)
        {
            return string.IsNullOrEmpty(codeModel.Settings.DefaultApiVersion);
        }

        protected bool IsMultiApiVersionButNotDefaultVersion(CodeModelTS codeModel)
        {
            return codeModel.Settings.Multiapi && IsNotDefaultApiVersion(codeModel);
        }

        protected bool ShouldWriteMultiApiMetadata(CodeModelTS codeModel)
        {
            return codeModel.Settings.GenerateMetadata && IsMultiApiVersionButNotDefaultVersion(codeModel);
        }

        protected bool ShouldWriteNonMultiApiMetadata(CodeModelTS codeModel)
        {
            return codeModel.Settings.GenerateMetadata && !IsMultiApiVersionButNotDefaultVersion(codeModel);
        }

        protected Task WriteServiceClientCodeFile<TCodeModel>(TemplateFactory<TCodeModel> templateFactory, TCodeModel codeModel) where TCodeModel : CodeModelTS
        {
            Template<TCodeModel> serviceClientTemplate = templateFactory.CreateServiceClientTemplate(codeModel);
            string fileName = codeModel.Name.ToCamelCase() + ".ts";
            string filePath = GetSourceCodeFilePath(codeModel, fileName);
            return Write(serviceClientTemplate, filePath);
        }

        protected Task WriteServiceClientContextCodeFile<TCodeModel>(TemplateFactory<TCodeModel> templateFactory, TCodeModel codeModel) where TCodeModel : CodeModelTS
        {
            Template<TCodeModel> serviceClientContextTemplate = templateFactory.CreateServiceClientContextTemplate(codeModel);
            string fileName = codeModel.ContextName.ToCamelCase() + ".ts";
            string filePath = GetSourceCodeFilePath(codeModel, fileName);
            return Write(serviceClientContextTemplate, filePath);
        }

        protected Task WriteModelsIndexFile<T>(Template<T> modelIndexTemplate) where T : CodeModelTS
        {
            CodeModelTS codeModel = modelIndexTemplate.Model;
            string filePath = GetSourceCodeFilePath(codeModel, "models", "index.ts");
            return Write(modelIndexTemplate, filePath);
        }

        protected Task WriteMappersIndexFile<T>(Template<T> mappersIndexTemplate) where T : CodeModelTS
        {
            CodeModelTS codeModel = mappersIndexTemplate.Model;
            string filePath = GetSourceCodeFilePath(codeModel, "models", "mappers.ts");
            return Write(mappersIndexTemplate, filePath);
        }

        protected Task WriteParameterMappersFile(CodeModelTS codeModel)
        {
            string filePath = GetSourceCodeFilePath(codeModel, "models", "parameters.ts");
            return Write(new ParameterTemplate { Model = codeModel }, filePath);
        }

        protected Task WriteMethodGroupIndexFile(CodeModelTS codeModel)
        {
            string filePath = GetSourceCodeFilePath(codeModel, "operations", "index.ts");
            return Write(new MethodGroupIndexTemplate { Model = codeModel }, filePath);
        }

        protected Task WriteMethodGroupMappersFile(MethodGroupTS methodGroup)
        {
            string filePath = GetSourceCodeFilePath(methodGroup.CodeModelTS, "models", methodGroup.MappersModuleName + ".ts");
            return Write(new MethodGroupMappersTemplate { Model = methodGroup }, filePath);
        }

        protected Task WriteMethodGroupFile<T>(Template<T> methodGroupTemplate) where T : MethodGroupTS
        {
            MethodGroupTS methodGroup = methodGroupTemplate.Model;
            CodeModelTS codeModel = methodGroup.CodeModelTS;
            string filePath = GetSourceCodeFilePath(codeModel, "operations", methodGroup.TypeName.ToCamelCase() + ".ts");
            return Write(methodGroupTemplate, filePath);
        }

        protected Task WritePackageJsonFile(CodeModelTS codeModel)
        {
            return Write(new PackageJson { Model = codeModel }, "package.json");
        }

        protected Task WriteReadmeMdFile<T>(Template<T> readmeTemplate) where T : CodeModelTS
        {
            return Write(readmeTemplate, "README.md");
        }

        protected Task WriteLicenseFile(CodeModelTS codeModel)
        {
            return Write(new LicenseTemplate { Model = codeModel }, "LICENSE.txt");
        }

        protected Task WriteMultiApiPackageJson(CodeModelTS codeModel)
        {
            return Write(new PackageJsonMultiApi() { Model = codeModel }, "package.json");
        }

        protected Task WriteMultiApiTsConfig(CodeModelTS codeModel)
        {
            return Write(new TsConfigMultiApi() { Model = codeModel }, "tsconfig.json");
        }

        protected Task WriteMultiApiWebpackTsConfig(CodeModelTS codeModel)
        {
            return Write(new TsConfigWebpackMultiApi() { Model = codeModel }, "tsconfig.esm.json");
        }

        protected Task WriteTsConfig(CodeModelTS codeModel)
        {
            return Write(new TsConfig { Model = codeModel }, "tsconfig.json");
        }

        protected Task WriteWebpackTsConfig(CodeModelTS codeModel)
        {
            return Write(new TsConfigWebpack { Model = codeModel }, "tsconfig.esm.json");
        }

        protected Task WriteWebpackConfig(CodeModelTS codeModel)
        {
            return Write(new WebpackConfig { Model = codeModel }, "webpack.config.js");
        }

        protected Task WriteNpmIgnore(CodeModelTS codeModel)
        {
            return Write(new NpmIgnore { Model = codeModel }, ".npmignore");
        }

        protected string GetSourceCodeFilePath(CodeModelTS codeModel, params string[] pathSegments)
        {
            return GetSourceCodeFilePath(codeModel.Settings, pathSegments);
        }

        protected string GetSourceCodeFilePath(GeneratorSettingsTS generatorSettings, params string[] pathSegments)
        {
            string[] totalPathSegments = new string[pathSegments.Length + 1];
            totalPathSegments[0] = generatorSettings.SourceCodeFolderPath;
            for (int i = 0; i < pathSegments.Length; i++)
            {
                totalPathSegments[1 + i] = pathSegments[i];
            }
            return Path.Combine(totalPathSegments).Replace('\\', '/');
        }
    }
}
