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
import { ResourceManagementClientContext } from "../resourceManagementClientContext";
import {
  TagDetails,
  TagsCreateOrUpdateValueResponse,
  TagsCreateOrUpdateResponse,
  TagsListResponse,
  TagsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class representing a Tags. */
export class Tags {
  private readonly client: ResourceManagementClientContext;

  /**
   * Initialize a new instance of the class Tags class.
   * @param client Reference to the service client
   */
  constructor(client: ResourceManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets the names and values of all resource tags that are defined in a subscription.
   * @param options The options parameters.
   */
  public list(
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<TagDetails> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<TagDetails[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<TagDetails> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Deletes a tag value.
   * @param tagName The name of the tag.
   * @param tagValue The value of the tag to delete.
   * @param options The options parameters.
   */
  deleteValue(
    tagName: string,
    tagValue: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      tagName,
      tagValue,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteValueOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Creates a tag value. The name of the tag must already exist.
   * @param tagName The name of the tag.
   * @param tagValue The value of the tag to create.
   * @param options The options parameters.
   */
  createOrUpdateValue(
    tagName: string,
    tagValue: string,
    options?: coreHttp.OperationOptions
  ): Promise<TagsCreateOrUpdateValueResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      tagName,
      tagValue,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOrUpdateValueOperationSpec
    ) as Promise<TagsCreateOrUpdateValueResponse>;
  }

  /**
   * The tag name can have a maximum of 512 characters and is case insensitive. Tag names created by
   * Azure have prefixes of microsoft, azure, or windows. You cannot create tags with one of these
   * prefixes.
   * @param tagName The name of the tag to create.
   * @param options The options parameters.
   */
  createOrUpdate(
    tagName: string,
    options?: coreHttp.OperationOptions
  ): Promise<TagsCreateOrUpdateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      tagName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOrUpdateOperationSpec
    ) as Promise<TagsCreateOrUpdateResponse>;
  }

  /**
   * You must remove all values from a resource tag before you can delete it.
   * @param tagName The name of the tag.
   * @param options The options parameters.
   */
  delete(
    tagName: string,
    options?: coreHttp.OperationOptions
  ): Promise<coreHttp.RestResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      tagName,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<coreHttp.RestResponse>;
  }

  /**
   * Gets the names and values of all resource tags that are defined in a subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: coreHttp.OperationOptions
  ): Promise<TagsListResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listOperationSpec
    ) as Promise<TagsListResponse>;
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<TagsListNextResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listNextOperationSpec
    ) as Promise<TagsListNextResponse>;
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const deleteValueOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.tagName,
    Parameters.tagValue
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateValueOperationSpec: coreHttp.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/tagNames/{tagName}/tagValues/{tagValue}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TagValue
    },
    201: {
      bodyMapper: Mappers.TagValue
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.tagName,
    Parameters.tagValue
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/tagNames/{tagName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.TagDetails
    },
    201: {
      bodyMapper: Mappers.TagDetails
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.tagName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/tagNames/{tagName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.tagName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreHttp.OperationSpec = {
  path: "/subscriptions/{subscriptionId}/tagNames",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.TagsListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
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
