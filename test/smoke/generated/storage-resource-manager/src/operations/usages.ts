/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClientContext } from "../storageManagementClientContext";
import { Usage, UsagesListByLocationResponse } from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a Usages. */
export class Usages {
  private readonly client: StorageManagementClientContext;

  /**
   * Initialize a new instance of the class Usages class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the current usage count and the limit for the resources of the location under the subscription.
   * @param location The location of the Azure Storage resource.
   * @param options The options parameters.
   */
  public listByLocation(
    location: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<Usage> {
    const iter = this.listByLocationPagingAll(location, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByLocationPagingPage(location, options);
      }
    };
  }

  private async *listByLocationPagingPage(
    location: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Usage[]> {
    let result = await this._listByLocation(location, options);
    yield result.value || [];
  }

  private async *listByLocationPagingAll(
    location: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<Usage> {
    for await (const page of this.listByLocationPagingPage(location, options)) {
      yield* page;
    }
  }

  /**
   * Gets the current usage count and the limit for the resources of the location under the subscription.
   * @param location The location of the Azure Storage resource.
   * @param options The options parameters.
   */
  private _listByLocation(
    location: string,
    options?: coreHttp.OperationOptions
  ): Promise<UsagesListByLocationResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      location,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listByLocationOperationSpec
    ) as Promise<UsagesListByLocationResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const listByLocationOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Storage/locations/{location}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UsageListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location
  ],
  headerParameters: [Parameters.accept],
  serializer
};
