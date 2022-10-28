/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { DataMaskingRules } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClient } from "../sqlManagementClient";
import {
  DataMaskingRule,
  DataMaskingRulesListByDatabaseOptionalParams,
  DataMaskingRulesListByDatabaseResponse,
  DataMaskingRulesCreateOrUpdateOptionalParams,
  DataMaskingRulesCreateOrUpdateResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DataMaskingRules operations. */
export class DataMaskingRulesImpl implements DataMaskingRules {
  private readonly client: SqlManagementClient;

  /**
   * Initialize a new instance of the class DataMaskingRules class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of database data masking rules.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  public listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DataMaskingRulesListByDatabaseOptionalParams
  ): PagedAsyncIterableIterator<DataMaskingRule> {
    const iter = this.listByDatabasePagingAll(
      resourceGroupName,
      serverName,
      databaseName,
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
        return this.listByDatabasePagingPage(
          resourceGroupName,
          serverName,
          databaseName,
          options,
          settings
        );
      }
    };
  }

  private async *listByDatabasePagingPage(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DataMaskingRulesListByDatabaseOptionalParams,
    _settings?: PageSettings
  ): AsyncIterableIterator<DataMaskingRule[]> {
    let result: DataMaskingRulesListByDatabaseResponse;
    result = await this._listByDatabase(
      resourceGroupName,
      serverName,
      databaseName,
      options
    );
    yield result.value || [];
  }

  private async *listByDatabasePagingAll(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DataMaskingRulesListByDatabaseOptionalParams
  ): AsyncIterableIterator<DataMaskingRule> {
    for await (const page of this.listByDatabasePagingPage(
      resourceGroupName,
      serverName,
      databaseName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates or updates a database data masking rule.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param dataMaskingRuleName The name of the data masking rule.
   * @param parameters The required parameters for creating or updating a data masking rule.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    dataMaskingRuleName: string,
    parameters: DataMaskingRule,
    options?: DataMaskingRulesCreateOrUpdateOptionalParams
  ): Promise<DataMaskingRulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serverName,
        databaseName,
        dataMaskingRuleName,
        parameters,
        options
      },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Gets a list of database data masking rules.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param databaseName The name of the database.
   * @param options The options parameters.
   */
  private _listByDatabase(
    resourceGroupName: string,
    serverName: string,
    databaseName: string,
    options?: DataMaskingRulesListByDatabaseOptionalParams
  ): Promise<DataMaskingRulesListByDatabaseResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, databaseName, options },
      listByDatabaseOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules/{dataMaskingRuleName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DataMaskingRule
    },
    201: {
      bodyMapper: Mappers.DataMaskingRule
    }
  },
  requestBody: Parameters.parameters1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.dataMaskingPolicyName,
    Parameters.dataMaskingRuleName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const listByDatabaseOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/databases/{databaseName}/dataMaskingPolicies/{dataMaskingPolicyName}/rules",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DataMaskingRuleListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.databaseName,
    Parameters.dataMaskingPolicyName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
