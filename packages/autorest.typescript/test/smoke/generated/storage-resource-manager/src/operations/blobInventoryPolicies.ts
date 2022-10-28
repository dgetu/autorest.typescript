/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { BlobInventoryPolicies } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClient } from "../storageManagementClient";
import {
  BlobInventoryPolicy,
  BlobInventoryPoliciesListOptionalParams,
  BlobInventoryPoliciesListResponse,
  BlobInventoryPolicyName,
  BlobInventoryPoliciesGetOptionalParams,
  BlobInventoryPoliciesGetResponse,
  BlobInventoryPoliciesCreateOrUpdateOptionalParams,
  BlobInventoryPoliciesCreateOrUpdateResponse,
  BlobInventoryPoliciesDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing BlobInventoryPolicies operations. */
export class BlobInventoryPoliciesImpl implements BlobInventoryPolicies {
  private readonly client: StorageManagementClient;

  /**
   * Initialize a new instance of the class BlobInventoryPolicies class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClient) {
    this.client = client;
  }

  /**
   * Gets the blob inventory policy associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    accountName: string,
    options?: BlobInventoryPoliciesListOptionalParams
  ): PagedAsyncIterableIterator<BlobInventoryPolicy> {
    const iter = this.listPagingAll(resourceGroupName, accountName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        return this.listPagingPage(
          resourceGroupName,
          accountName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    accountName: string,
    options?: BlobInventoryPoliciesListOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<BlobInventoryPolicy[]> {
    let result: BlobInventoryPoliciesListResponse;
    result = await this._list(resourceGroupName, accountName, options);
    yield result.value || [];
  }

  private async *listPagingAll(
    resourceGroupName: string,
    accountName: string,
    options?: BlobInventoryPoliciesListOptionalParams
  ): AsyncIterableIterator<BlobInventoryPolicy> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      accountName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets the blob inventory policy associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param blobInventoryPolicyName The name of the storage account blob inventory policy. It should
   *                                always be 'default'
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    blobInventoryPolicyName: BlobInventoryPolicyName,
    options?: BlobInventoryPoliciesGetOptionalParams
  ): Promise<BlobInventoryPoliciesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, blobInventoryPolicyName, options },
      getOperationSpec
    );
  }

  /**
   * Sets the blob inventory policy to the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param blobInventoryPolicyName The name of the storage account blob inventory policy. It should
   *                                always be 'default'
   * @param properties The blob inventory policy set to a storage account.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    accountName: string,
    blobInventoryPolicyName: BlobInventoryPolicyName,
    properties: BlobInventoryPolicy,
    options?: BlobInventoryPoliciesCreateOrUpdateOptionalParams
  ): Promise<BlobInventoryPoliciesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        blobInventoryPolicyName,
        properties,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes the blob inventory policy associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param blobInventoryPolicyName The name of the storage account blob inventory policy. It should
   *                                always be 'default'
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    accountName: string,
    blobInventoryPolicyName: BlobInventoryPolicyName,
    options?: BlobInventoryPoliciesDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, blobInventoryPolicyName, options },
      deleteOperationSpec
    );
  }

  /**
   * Gets the blob inventory policy associated with the specified storage account.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    accountName: string,
    options?: BlobInventoryPoliciesListOptionalParams
  ): Promise<BlobInventoryPoliciesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/inventoryPolicies/{blobInventoryPolicyName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BlobInventoryPolicy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.blobInventoryPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/inventoryPolicies/{blobInventoryPolicyName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.BlobInventoryPolicy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.properties1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.blobInventoryPolicyName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/inventoryPolicies/{blobInventoryPolicyName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.blobInventoryPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/inventoryPolicies",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListBlobInventoryPolicy
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
