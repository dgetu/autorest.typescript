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
  SecretPatchParameters,
  KeyVaultManagementClient
} from "@msinternal/keyvault-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Update a secret in the specified subscription.  NOTE: This API is intended for internal use in ARM deployments.  Users should use the data-plane REST service for interaction with vault secrets.
 *
 * @summary Update a secret in the specified subscription.  NOTE: This API is intended for internal use in ARM deployments.  Users should use the data-plane REST service for interaction with vault secrets.
 * x-ms-original-file: specification/keyvault/resource-manager/Microsoft.KeyVault/preview/2021-06-01-preview/examples/updateSecret.json
 */
async function updateASecret() {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = "sample-group";
  const vaultName = "sample-vault";
  const secretName = "secret-name";
  const parameters: SecretPatchParameters = {
    properties: { value: "secret-value2" }
  };
  const credential = new DefaultAzureCredential();
  const client = new KeyVaultManagementClient(credential, subscriptionId);
  const result = await client.secrets.update(
    resourceGroupName,
    vaultName,
    secretName,
    parameters
  );
  console.log(result);
}

updateASecret().catch(console.error);
