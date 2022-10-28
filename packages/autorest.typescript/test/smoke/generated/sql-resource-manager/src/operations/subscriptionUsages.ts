/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SubscriptionUsages } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  SubscriptionUsage,
  SubscriptionUsagesListByLocationNextOptionalParams,
  SubscriptionUsagesListByLocationOptionalParams,
  SubscriptionUsagesListByLocationResponse,
  SubscriptionUsagesGetOptionalParams,
  SubscriptionUsagesGetResponse,
  SubscriptionUsagesListByLocationNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SubscriptionUsages operations. */
export class SubscriptionUsagesImpl implements SubscriptionUsages {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class SubscriptionUsages class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets all subscription usage metrics in a given location.
   * @param locationName The name of the region where the resource is located.
   * @param options The options parameters.
   */
  public listByLocation(
    locationName: string,
    options?: SubscriptionUsagesListByLocationOptionalParams
  ): PagedAsyncIterableIterator<SubscriptionUsage> {
    const iter = this.listByLocationPagingAll(locationName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        return this.listByLocationPagingPage(locationName, options, settings);
      }
    };
  }

  private async *listByLocationPagingPage(
    locationName: string,
    options?: SubscriptionUsagesListByLocationOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SubscriptionUsage[]> {
    let result: SubscriptionUsagesListByLocationResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByLocation(locationName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByLocationNext(
        locationName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByLocationPagingAll(
    locationName: string,
    options?: SubscriptionUsagesListByLocationOptionalParams
  ): AsyncIterableIterator<SubscriptionUsage> {
    for await (const page of this.listByLocationPagingPage(
      locationName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all subscription usage metrics in a given location.
   * @param locationName The name of the region where the resource is located.
   * @param options The options parameters.
   */
  private _listByLocation(
    locationName: string,
    options?: SubscriptionUsagesListByLocationOptionalParams
  ): Promise<SubscriptionUsagesListByLocationResponse> {
    return this.client.sendOperationRequest(
      { locationName, options },
      listByLocationOperationSpec
    );
  }

  /**
   * Gets a subscription usage metric.
   * @param locationName The name of the region where the resource is located.
   * @param usageName Name of usage metric to return.
   * @param options The options parameters.
   */
  get(
    locationName: string,
    usageName: string,
    options?: SubscriptionUsagesGetOptionalParams
  ): Promise<SubscriptionUsagesGetResponse> {
    return this.client.sendOperationRequest(
      { locationName, usageName, options },
      getOperationSpec
    );
  }

  /**
   * ListByLocationNext
   * @param locationName The name of the region where the resource is located.
   * @param nextLink The nextLink from the previous successful call to the ListByLocation method.
   * @param options The options parameters.
   */
  private _listByLocationNext(
    locationName: string,
    nextLink: string,
    options?: SubscriptionUsagesListByLocationNextOptionalParams
  ): Promise<SubscriptionUsagesListByLocationNextResponse> {
    return this.client.sendOperationRequest(
      { locationName, nextLink, options },
      listByLocationNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByLocationOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/usages",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionUsageListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Sql/locations/{locationName}/usages/{usageName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionUsage
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.locationName,
    Parameters.usageName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByLocationNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SubscriptionUsageListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.locationName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
