/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ServerAutomaticTuning,
  SqlManagementClient
} from "@msinternal/sql-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update automatic tuning options on server.
 *
 * @summary Update automatic tuning options on server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ServerAutomaticTuningUpdateMax.json
 */
async function updatesServerAutomaticTuningSettingsWithAllProperties() {
  const subscriptionId = "c3aa9078-0000-0000-0000-e36f151182d7";
  const resourceGroupName = "default-sql-onebox";
  const serverName = "testsvr11";
  const parameters: ServerAutomaticTuning = {
    desiredState: "Auto",
    options: {
      createIndex: { desiredState: "Off" },
      dropIndex: { desiredState: "On" },
      forceLastGoodPlan: { desiredState: "Default" }
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverAutomaticTuningOperations.update(
    resourceGroupName,
    serverName,
    parameters
  );
  console.log(result);
}

updatesServerAutomaticTuningSettingsWithAllProperties().catch(console.error);

/**
 * This sample demonstrates how to Update automatic tuning options on server.
 *
 * @summary Update automatic tuning options on server.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2020-11-01-preview/examples/ServerAutomaticTuningUpdateMin.json
 */
async function updatesServerAutomaticTuningSettingsWithMinimalProperties() {
  const subscriptionId = "c3aa9078-0000-0000-0000-e36f151182d7";
  const resourceGroupName = "default-sql-onebox";
  const serverName = "testsvr11";
  const parameters: ServerAutomaticTuning = { desiredState: "Auto" };
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result = await client.serverAutomaticTuningOperations.update(
    resourceGroupName,
    serverName,
    parameters
  );
  console.log(result);
}

updatesServerAutomaticTuningSettingsWithMinimalProperties().catch(
  console.error
);
