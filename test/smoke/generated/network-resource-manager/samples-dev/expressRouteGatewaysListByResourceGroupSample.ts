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
 * This sample demonstrates how to Lists ExpressRoute gateways in a given resource group.
 *
 * @summary Lists ExpressRoute gateways in a given resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2021-05-01/examples/ExpressRouteGatewayListByResourceGroup.json
 */
async function expressRouteGatewayListByResourceGroup() {
  const subscriptionId = "subid";
  const resourceGroupName = "resourceGroupName";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.expressRouteGateways.listByResourceGroup(
    resourceGroupName
  );
  console.log(result);
}

expressRouteGatewayListByResourceGroup().catch(console.error);
