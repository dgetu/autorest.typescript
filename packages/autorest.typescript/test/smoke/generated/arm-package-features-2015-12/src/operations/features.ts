/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { Features } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { FeatureClient } from "../featureClient";
import {
  FeatureResult,
  FeaturesListAllNextOptionalParams,
  FeaturesListAllOptionalParams,
  FeaturesListAllResponse,
  FeaturesListNextOptionalParams,
  FeaturesListOptionalParams,
  FeaturesListResponse,
  FeaturesGetOptionalParams,
  FeaturesGetResponse,
  FeaturesRegisterOptionalParams,
  FeaturesRegisterResponse,
  FeaturesUnregisterOptionalParams,
  FeaturesUnregisterResponse,
  FeaturesListAllNextResponse,
  FeaturesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing Features operations. */
export class FeaturesImpl implements Features {
  private readonly client: FeatureClient;

  /**
   * Initialize a new instance of the class Features class.
   * @param client Reference to the service client
   */
  constructor(client: FeatureClient) {
    this.client = client;
  }

  /**
   * Gets all the preview features that are available through AFEC for the subscription.
   * @param options The options parameters.
   */
  public listAll(
    options?: FeaturesListAllOptionalParams
  ): PagedAsyncIterableIterator<FeatureResult> {
    const iter = this.listAllPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        return this.listAllPagingPage(options, settings);
      }
    };
  }

  private async *listAllPagingPage(
    options?: FeaturesListAllOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<FeatureResult[]> {
    let result: FeaturesListAllResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listAll(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listAllNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listAllPagingAll(
    options?: FeaturesListAllOptionalParams
  ): AsyncIterableIterator<FeatureResult> {
    for await (const page of this.listAllPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets all the preview features in a provider namespace that are available through AFEC for the
   * subscription.
   * @param resourceProviderNamespace The namespace of the resource provider for getting features.
   * @param options The options parameters.
   */
  public list(
    resourceProviderNamespace: string,
    options?: FeaturesListOptionalParams
  ): PagedAsyncIterableIterator<FeatureResult> {
    const iter = this.listPagingAll(resourceProviderNamespace, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        return this.listPagingPage(
          resourceProviderNamespace,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    resourceProviderNamespace: string,
    options?: FeaturesListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<FeatureResult[]> {
    let result: FeaturesListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(resourceProviderNamespace, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        resourceProviderNamespace,
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
    resourceProviderNamespace: string,
    options?: FeaturesListOptionalParams
  ): AsyncIterableIterator<FeatureResult> {
    for await (const page of this.listPagingPage(
      resourceProviderNamespace,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets all the preview features that are available through AFEC for the subscription.
   * @param options The options parameters.
   */
  private _listAll(
    options?: FeaturesListAllOptionalParams
  ): Promise<FeaturesListAllResponse> {
    return this.client.sendOperationRequest({ options }, listAllOperationSpec);
  }

  /**
   * Gets all the preview features in a provider namespace that are available through AFEC for the
   * subscription.
   * @param resourceProviderNamespace The namespace of the resource provider for getting features.
   * @param options The options parameters.
   */
  private _list(
    resourceProviderNamespace: string,
    options?: FeaturesListOptionalParams
  ): Promise<FeaturesListResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, options },
      listOperationSpec
    );
  }

  /**
   * Gets the preview feature with the specified name.
   * @param resourceProviderNamespace The resource provider namespace for the feature.
   * @param featureName The name of the feature to get.
   * @param options The options parameters.
   */
  get(
    resourceProviderNamespace: string,
    featureName: string,
    options?: FeaturesGetOptionalParams
  ): Promise<FeaturesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, featureName, options },
      getOperationSpec
    );
  }

  /**
   * Registers the preview feature for the subscription.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param featureName The name of the feature to register.
   * @param options The options parameters.
   */
  register(
    resourceProviderNamespace: string,
    featureName: string,
    options?: FeaturesRegisterOptionalParams
  ): Promise<FeaturesRegisterResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, featureName, options },
      registerOperationSpec
    );
  }

  /**
   * Unregisters the preview feature for the subscription.
   * @param resourceProviderNamespace The namespace of the resource provider.
   * @param featureName The name of the feature to unregister.
   * @param options The options parameters.
   */
  unregister(
    resourceProviderNamespace: string,
    featureName: string,
    options?: FeaturesUnregisterOptionalParams
  ): Promise<FeaturesUnregisterResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, featureName, options },
      unregisterOperationSpec
    );
  }

  /**
   * ListAllNext
   * @param nextLink The nextLink from the previous successful call to the ListAll method.
   * @param options The options parameters.
   */
  private _listAllNext(
    nextLink: string,
    options?: FeaturesListAllNextOptionalParams
  ): Promise<FeaturesListAllNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listAllNextOperationSpec
    );
  }

  /**
   * ListNext
   * @param resourceProviderNamespace The namespace of the resource provider for getting features.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceProviderNamespace: string,
    nextLink: string,
    options?: FeaturesListNextOptionalParams
  ): Promise<FeaturesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceProviderNamespace, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listAllOperationSpec: coreClient.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/providers/Microsoft.Features/features",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureOperationsListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureOperationsListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features/{featureName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace,
    Parameters.featureName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const registerOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features/{featureName}/register",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace,
    Parameters.featureName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const unregisterOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Features/providers/{resourceProviderNamespace}/features/{featureName}/unregister",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace,
    Parameters.featureName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listAllNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureOperationsListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FeatureOperationsListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.nextLink,
    Parameters.subscriptionId,
    Parameters.resourceProviderNamespace
  ],
  headerParameters: [Parameters.accept],
  serializer
};
