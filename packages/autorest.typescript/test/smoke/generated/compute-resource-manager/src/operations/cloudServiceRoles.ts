/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { CloudServiceRoles } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import {
  CloudServiceRole,
  CloudServiceRolesListNextOptionalParams,
  CloudServiceRolesListOptionalParams,
  CloudServiceRolesListResponse,
  CloudServiceRolesGetOptionalParams,
  CloudServiceRolesGetResponse,
  CloudServiceRolesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing CloudServiceRoles operations. */
export class CloudServiceRolesImpl implements CloudServiceRoles {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class CloudServiceRoles class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of all roles in a cloud service. Use nextLink property in the response to get the next
   * page of roles. Do this till nextLink is null to fetch all the roles.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRolesListOptionalParams
  ): PagedAsyncIterableIterator<CloudServiceRole> {
    const iter = this.listPagingAll(
      resourceGroupName,
      cloudServiceName,
      options
    );
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
          cloudServiceName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRolesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<CloudServiceRole[]> {
    let result: CloudServiceRolesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceGroupName, cloudServiceName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        cloudServiceName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRolesListOptionalParams
  ): AsyncIterableIterator<CloudServiceRole> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      cloudServiceName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a role from a cloud service.
   * @param roleName Name of the role.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  get(
    roleName: string,
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRolesGetOptionalParams
  ): Promise<CloudServiceRolesGetResponse> {
    return this.client.sendOperationRequest(
      { roleName, resourceGroupName, cloudServiceName, options },
      getOperationSpec
    );
  }

  /**
   * Gets a list of all roles in a cloud service. Use nextLink property in the response to get the next
   * page of roles. Do this till nextLink is null to fetch all the roles.
   * @param resourceGroupName
   * @param cloudServiceName
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    cloudServiceName: string,
    options?: CloudServiceRolesListOptionalParams
  ): Promise<CloudServiceRolesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudServiceName, options },
      listOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceGroupName
   * @param cloudServiceName
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    cloudServiceName: string,
    nextLink: string,
    options?: CloudServiceRolesListNextOptionalParams
  ): Promise<CloudServiceRolesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, cloudServiceName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/roles/{roleName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceRole
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cloudServiceName,
    Parameters.roleName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Compute/cloudServices/{cloudServiceName}/roles",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceRoleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.CloudServiceRoleListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.resourceGroupName,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.cloudServiceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
