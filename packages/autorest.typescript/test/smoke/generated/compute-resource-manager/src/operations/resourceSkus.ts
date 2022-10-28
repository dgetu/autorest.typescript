/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { ResourceSkus } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import {
  ResourceSku,
  ResourceSkusListNextOptionalParams,
  ResourceSkusListOptionalParams,
  ResourceSkusListResponse,
  ResourceSkusListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ResourceSkus operations. */
export class ResourceSkusImpl implements ResourceSkus {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class ResourceSkus class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * Gets the list of Microsoft.Compute SKUs available for your Subscription.
   * @param options The options parameters.
   */
  public list(
    options?: ResourceSkusListOptionalParams
  ): PagedAsyncIterableIterator<ResourceSku> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        return this.listPagingPage(options, settings);
      }
    };
  }

  private async *listPagingPage(
    options?: ResourceSkusListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<ResourceSku[]> {
    let result: ResourceSkusListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    options?: ResourceSkusListOptionalParams
  ): AsyncIterableIterator<ResourceSku> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets the list of Microsoft.Compute SKUs available for your Subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: ResourceSkusListOptionalParams
  ): Promise<ResourceSkusListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: ResourceSkusListNextOptionalParams
  ): Promise<ResourceSkusListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/skus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSkusResult
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.includeExtendedLocations
  ],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ResourceSkusResult
    }
  },
  queryParameters: [
    Parameters.apiVersion,
    Parameters.filter,
    Parameters.includeExtendedLocations
  ],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
