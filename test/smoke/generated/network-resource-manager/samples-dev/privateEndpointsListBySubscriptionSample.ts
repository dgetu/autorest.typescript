/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@msinternal/network-resource-manager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets all private endpoints in a subscription.
 *
 * @summary Gets all private endpoints in a subscription.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/PrivateEndpointListAll.json
 */
async function listAllPrivateEndpoints() {
  const subscriptionId = "subId";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.privateEndpoints.listBySubscription()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllPrivateEndpoints().catch(console.error);
