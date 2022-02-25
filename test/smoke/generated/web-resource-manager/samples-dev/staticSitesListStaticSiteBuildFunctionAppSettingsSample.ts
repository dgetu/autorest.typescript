/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { WebSiteManagementClient } from "@msinternal/web-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Description for Gets the application settings of a static site build.
 *
 * @summary Description for Gets the application settings of a static site build.
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2021-02-01/examples/ListStaticSiteBuildFunctionAppSettings.json
 */
async function getFunctionAppSettingsOfAStaticSiteBuild() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testStaticSite0";
  const environmentName = "12";
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.staticSites.listStaticSiteBuildFunctionAppSettings(
    resourceGroupName,
    name,
    environmentName
  );
  console.log(result);
}

getFunctionAppSettingsOfAStaticSiteBuild().catch(console.error);
