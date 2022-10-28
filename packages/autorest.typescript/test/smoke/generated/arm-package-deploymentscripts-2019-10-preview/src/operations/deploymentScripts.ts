/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { DeploymentScripts } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DeploymentScriptsClient } from "../deploymentScriptsClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DeploymentScriptUnion,
  DeploymentScriptsListBySubscriptionNextOptionalParams,
  DeploymentScriptsListBySubscriptionOptionalParams,
  DeploymentScriptsListBySubscriptionResponse,
  DeploymentScriptsListByResourceGroupNextOptionalParams,
  DeploymentScriptsListByResourceGroupOptionalParams,
  DeploymentScriptsListByResourceGroupResponse,
  DeploymentScriptsCreateOptionalParams,
  DeploymentScriptsCreateResponse,
  DeploymentScriptsUpdateOptionalParams,
  DeploymentScriptsUpdateResponse,
  DeploymentScriptsGetOptionalParams,
  DeploymentScriptsGetResponse,
  DeploymentScriptsDeleteOptionalParams,
  DeploymentScriptsGetLogsOptionalParams,
  DeploymentScriptsGetLogsResponse,
  DeploymentScriptsGetLogsDefaultOptionalParams,
  DeploymentScriptsGetLogsDefaultResponse,
  DeploymentScriptsListBySubscriptionNextResponse,
  DeploymentScriptsListByResourceGroupNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DeploymentScripts operations. */
export class DeploymentScriptsImpl implements DeploymentScripts {
  private readonly client: DeploymentScriptsClient;

  /**
   * Initialize a new instance of the class DeploymentScripts class.
   * @param client Reference to the service client
   */
  constructor(client: DeploymentScriptsClient) {
    this.client = client;
  }

  /**
   * Lists all deployment scripts for a given subscription.
   * @param options The options parameters.
   */
  public listBySubscription(
    options?: DeploymentScriptsListBySubscriptionOptionalParams
  ): PagedAsyncIterableIterator<DeploymentScriptUnion> {
    const iter = this.listBySubscriptionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        return this.listBySubscriptionPagingPage(options, settings);
      }
    };
  }

  private async *listBySubscriptionPagingPage(
    options?: DeploymentScriptsListBySubscriptionOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeploymentScriptUnion[]> {
    let result: DeploymentScriptsListBySubscriptionResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listBySubscription(options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listBySubscriptionNext(continuationToken, options);
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listBySubscriptionPagingAll(
    options?: DeploymentScriptsListBySubscriptionOptionalParams
  ): AsyncIterableIterator<DeploymentScriptUnion> {
    for await (const page of this.listBySubscriptionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Lists deployments scripts.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  public listByResourceGroup(
    resourceGroupName: string,
    options?: DeploymentScriptsListByResourceGroupOptionalParams
  ): PagedAsyncIterableIterator<DeploymentScriptUnion> {
    const iter = this.listByResourceGroupPagingAll(resourceGroupName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        return this.listByResourceGroupPagingPage(
          resourceGroupName,
          options,
          settings
        );
      }
    };
  }

  private async *listByResourceGroupPagingPage(
    resourceGroupName: string,
    options?: DeploymentScriptsListByResourceGroupOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<DeploymentScriptUnion[]> {
    let result: DeploymentScriptsListByResourceGroupResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._listByResourceGroup(resourceGroupName, options);
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listByResourceGroupNext(
        resourceGroupName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listByResourceGroupPagingAll(
    resourceGroupName: string,
    options?: DeploymentScriptsListByResourceGroupOptionalParams
  ): AsyncIterableIterator<DeploymentScriptUnion> {
    for await (const page of this.listByResourceGroupPagingPage(
      resourceGroupName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Creates a deployment script.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param deploymentScript Deployment script supplied to the operation.
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    scriptName: string,
    deploymentScript: DeploymentScriptUnion,
    options?: DeploymentScriptsCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeploymentScriptsCreateResponse>,
      DeploymentScriptsCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeploymentScriptsCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, scriptName, deploymentScript, options },
      createOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Creates a deployment script.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param deploymentScript Deployment script supplied to the operation.
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    scriptName: string,
    deploymentScript: DeploymentScriptUnion,
    options?: DeploymentScriptsCreateOptionalParams
  ): Promise<DeploymentScriptsCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      scriptName,
      deploymentScript,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Updates deployment script tags with specified values.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    scriptName: string,
    options?: DeploymentScriptsUpdateOptionalParams
  ): Promise<DeploymentScriptsUpdateResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scriptName, options },
      updateOperationSpec
    );
  }

  /**
   * Gets a deployment script with a given name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    scriptName: string,
    options?: DeploymentScriptsGetOptionalParams
  ): Promise<DeploymentScriptsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scriptName, options },
      getOperationSpec
    );
  }

  /**
   * Deletes a deployment script. When operation completes, status code 200 returned without content.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    scriptName: string,
    options?: DeploymentScriptsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scriptName, options },
      deleteOperationSpec
    );
  }

  /**
   * Lists all deployment scripts for a given subscription.
   * @param options The options parameters.
   */
  private _listBySubscription(
    options?: DeploymentScriptsListBySubscriptionOptionalParams
  ): Promise<DeploymentScriptsListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listBySubscriptionOperationSpec
    );
  }

  /**
   * Gets deployment script logs for a given deployment script name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  getLogs(
    resourceGroupName: string,
    scriptName: string,
    options?: DeploymentScriptsGetLogsOptionalParams
  ): Promise<DeploymentScriptsGetLogsResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scriptName, options },
      getLogsOperationSpec
    );
  }

  /**
   * Gets deployment script logs for a given deployment script name.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param scriptName Name of the deployment script.
   * @param options The options parameters.
   */
  getLogsDefault(
    resourceGroupName: string,
    scriptName: string,
    options?: DeploymentScriptsGetLogsDefaultOptionalParams
  ): Promise<DeploymentScriptsGetLogsDefaultResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, scriptName, options },
      getLogsDefaultOperationSpec
    );
  }

  /**
   * Lists deployments scripts.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  private _listByResourceGroup(
    resourceGroupName: string,
    options?: DeploymentScriptsListByResourceGroupOptionalParams
  ): Promise<DeploymentScriptsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, options },
      listByResourceGroupOperationSpec
    );
  }

  /**
   * ListBySubscriptionNext
   * @param nextLink The nextLink from the previous successful call to the ListBySubscription method.
   * @param options The options parameters.
   */
  private _listBySubscriptionNext(
    nextLink: string,
    options?: DeploymentScriptsListBySubscriptionNextOptionalParams
  ): Promise<DeploymentScriptsListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listBySubscriptionNextOperationSpec
    );
  }

  /**
   * ListByResourceGroupNext
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param nextLink The nextLink from the previous successful call to the ListByResourceGroup method.
   * @param options The options parameters.
   */
  private _listByResourceGroupNext(
    resourceGroupName: string,
    nextLink: string,
    options?: DeploymentScriptsListByResourceGroupNextOptionalParams
  ): Promise<DeploymentScriptsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, nextLink, options },
      listByResourceGroupNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScript
    },
    201: {
      bodyMapper: Mappers.DeploymentScript
    },
    202: {
      bodyMapper: Mappers.DeploymentScript
    },
    204: {
      bodyMapper: Mappers.DeploymentScript
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  requestBody: Parameters.deploymentScript,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const updateOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScript
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  requestBody: Parameters.deploymentScript1,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  headerParameters: [Parameters.contentType, Parameters.accept],
  mediaType: "json",
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScript
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Resources/deploymentScripts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScriptListResult
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const getLogsOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}/logs",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptLogsList
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getLogsDefaultOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts/{scriptName}/logs/default",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ScriptLog
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.tail],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.scriptName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Resources/deploymentScripts",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScriptListResult
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBySubscriptionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScriptListResult
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByResourceGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentScriptListResult
    },
    default: {
      bodyMapper: Mappers.DeploymentScriptsError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
