/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DatabaseTables } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  DatabaseTable,
  DatabaseTablesListBySchemaNextOptionalParams,
  DatabaseTablesListBySchemaOptionalParams,
  DatabaseTablesListBySchemaResponse,
  DatabaseTablesGetOptionalParams,
  DatabaseTablesGetResponse,
  DatabaseTablesListBySchemaNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DatabaseTables operations. */
export class DatabaseTablesImpl implements DatabaseTables {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class DatabaseTables class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * List database tables
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param options The options parameters.
   */
  public listBySchema(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    schemaName: string,
    options?: DatabaseTablesListBySchemaOptionalParams
  ): PagedAsyncIterableIterator<DatabaseTable> {
    const iter = this.listBySchemaPagingAll(
      resourceGroupName,
      serverName,
      databaseName,
      schemaName,
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
        return this.listBySchemaPagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          schemaName,
          options,
          settings
        );
      }
    };
  }

  private async *listBySchemaPagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    schemaName: string,
    options?: DatabaseTablesListBySchemaOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DatabaseTable[]> {
    let result: DatabaseTablesListBySchemaResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySchema(
        resourceGroupName,
        serverName,
        databaseName,
        schemaName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySchemaNext(
        resourceGroupName,
        serverName,
        databaseName,
        schemaName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySchemaPagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    schemaName: string,
    options?: DatabaseTablesListBySchemaOptionalParams
  ): AsyncIterableIterator<DatabaseTable> {
    for await (const page of this.listBySchemaPagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      schemaName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List database tables
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param options The options parameters.
   */
  private _listBySchema(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    schemaName: string,
    options?: DatabaseTablesListBySchemaOptionalParams
  ): Promise<DatabaseTablesListBySchemaResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, schemaName, options },
      listBySchemaOperationSpec
    );
  }

  /**
   * Get database table
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param tableName The name of the table.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    schemaName: string,
    tableName: string,
    options?: DatabaseTablesGetOptionalParams
  ): Promise<DatabaseTablesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        schemaName,
        tableName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListBySchemaNext
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param schemaName The name of the schema.
   * @param nextLink The nextLink from the previous successful call to the ListBySchema method.
   * @param options The options parameters.
   */
  private _listBySchemaNext(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    schemaName: string,
    nextLink: string,
    options?: DatabaseTablesListBySchemaNextOptionalParams
  ): Promise<DatabaseTablesListBySchemaNextResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        schemaName,
        nextLink,
        options
      },
      listBySchemaNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listBySchemaOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/schemas/{schemaName}/tables",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseTableListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2, Parameters.filter1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.schemaName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/schemas/{schemaName}/tables/{tableName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseTable
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.schemaName,
    Parameters.tableName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySchemaNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatabaseTableListResult
    },
    default: {}
  },
  queryParameters: [Parameters.apiVersion2, Parameters.filter1],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.nextLink,
    Parameters.schemaName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
