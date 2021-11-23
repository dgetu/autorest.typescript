/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DeletedApplications } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { GraphRbacManagementClient } from "../graphRbacManagementClient";
import {
  Application,
  DeletedApplicationsListNextOptionalParams,
  DeletedApplicationsListOptionalParams,
  DeletedApplicationsRestoreOptionalParams,
  DeletedApplicationsRestoreResponse,
  DeletedApplicationsListResponse,
  DeletedApplicationsHardDeleteOptionalParams,
  DeletedApplicationsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DeletedApplications operations. */
export class DeletedApplicationsImpl implements DeletedApplications {
  private readonly client: GraphRbacManagementClient;

  /**
   * Initialize a new instance of the class DeletedApplications class.
   * @param client Reference to the service client
   */
  constructor(client: GraphRbacManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of deleted applications in the directory.
   * @param options The options parameters.
   */
  public list(
    options?: DeletedApplicationsListOptionalParams
  ): PagedAsyncIterableIterator<Application> {
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
    options?: DeletedApplicationsListOptionalParams
  ): AsyncIterableIterator<Application[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: DeletedApplicationsListOptionalParams
  ): AsyncIterableIterator<Application> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of deleted applications in the directory.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  public listNext(
    nextLink: string,
    options?: DeletedApplicationsListNextOptionalParams
  ): PagedAsyncIterableIterator<Application> {
    const iter = this.listNextPagingAll(nextLink, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listNextPagingPage(nextLink, options);
      }
    };
  }

  private async *listNextPagingPage(
    nextLink: string,
    options?: DeletedApplicationsListNextOptionalParams
  ): AsyncIterableIterator<Application[]> {
    let result = await this._listNext(nextLink, options);
    yield result.value || [];
    let continuationToken = result.odataNextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.odataNextLink;
      yield result.value || [];
    }
  }

  private async *listNextPagingAll(
    nextLink: string,
    options?: DeletedApplicationsListNextOptionalParams
  ): AsyncIterableIterator<Application> {
    for await (const page of this.listNextPagingPage(nextLink, options)) {
      yield* page;
    }
  }

  /**
   * Restores the deleted application in the directory.
   * @param objectId Application object ID.
   * @param options The options parameters.
   */
  restore(
    objectId: string,
    options?: DeletedApplicationsRestoreOptionalParams
  ): Promise<DeletedApplicationsRestoreResponse> {
    return this.client.sendOperationRequest(
      { objectId, options },
      restoreOperationSpec
    );
  }

  /**
   * Gets a list of deleted applications in the directory.
   * @param options The options parameters.
   */
  private _list(
    options?: DeletedApplicationsListOptionalParams
  ): Promise<DeletedApplicationsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Hard-delete an application.
   * @param applicationObjectId Application object ID.
   * @param options The options parameters.
   */
  hardDelete(
    applicationObjectId: string,
    options?: DeletedApplicationsHardDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { applicationObjectId, options },
      hardDeleteOperationSpec
    );
  }

  /**
   * Gets a list of deleted applications in the directory.
   * @param nextLink Next link for the list operation.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: DeletedApplicationsListNextOptionalParams
  ): Promise<DeletedApplicationsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const restoreOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/deletedApplications/{objectId}/restore",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Application
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.objectId],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/deletedApplications",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.$host, Parameters.tenantID],
  headerParameters: [Parameters.accept],
  serializer
};
const hardDeleteOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/deletedApplications/{applicationObjectId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.tenantID,
    Parameters.applicationObjectId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "/{tenantID}/{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationListResult
    },
    default: {
      bodyMapper: Mappers.GraphError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.tenantID, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer
};
