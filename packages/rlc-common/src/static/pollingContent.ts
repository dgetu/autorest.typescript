// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export const pollingContent = `
import { Client, HttpResponse } from "@azure-rest/core-client";
{{#if useLegacyLro}}
import {
  LongRunningOperation,
  LroEngine,
  LroEngineOptions,
  LroResponse,
  PollerLike,
  PollOperationState
} from "@azure/core-lro";
{{else}}
import {
  CreateHttpPollerOptions,
  LongRunningOperation,
  LroResponse,
  OperationState,
  SimplePollerLike,
  createHttpPoller
} from "@azure/core-lro";
{{#if clientOverload}}
import {
  {{#each importedResponses}}
  {{this}},
  {{/each}}
} from "./responses{{#if isModularLibrary}}.js{{/if}}";
{{/if}}
{{/if}}
/**
 * Helper function that builds a Poller object to help polling a long running operation.
 * @param client - Client to use for sending the request to get additional pages.
 * @param initialResponse - The initial response.
 * @param options - Options to set a resume state or custom polling interval.
 * @returns - A poller object to poll for operation state updates and eventually get the final response.
 */
{{#if clientOverload}}
{{#each overloadMap}}
export async function getLongRunningPoller<
  TResult extends {{ this.finalResponses }}
>(
  client: Client,
  initialResponse: {{ this.initalResponses }},
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
{{/each}}
{{/if}}
export {{#unless useLegacyLro}}async {{/unless}}function getLongRunningPoller<TResult extends HttpResponse>(
  client: Client,
  initialResponse: TResult,
  {{#if useLegacyLro}}
  options: LroEngineOptions<TResult, PollOperationState<TResult>> = {}
  ): PollerLike<PollOperationState<TResult>, TResult> {
    {{else}}
    options: CreateHttpPollerOptions<TResult, OperationState<TResult>> = {}
    ): Promise<SimplePollerLike<OperationState<TResult>, TResult>> {
    {{/if}}  
    const poller: LongRunningOperation<TResult> = {
    requestMethod: initialResponse.request.method,
    requestPath: initialResponse.request.url,
    sendInitialRequest: async () => {
      // In the case of Rest Clients we are building the LRO poller object from a response that's the reason
      // we are not triggering the initial request here, just extracting the information from the
      // response we were provided.
      return getLroResponse(initialResponse);
    },
    sendPollRequest: async path => {
      // This is the callback that is going to be called to poll the service
      // to get the latest status. We use the client provided and the polling path
      // which is an opaque URL provided by caller, the service sends this in one of the following headers: operation-location, azure-asyncoperation or location
      // depending on the lro pattern that the service implements. If non is provided we default to the initial path.
      const response = await client
        .pathUnchecked(path ?? initialResponse.request.url)
        .get();
      const lroResponse = getLroResponse(response as TResult);
      lroResponse.rawResponse.headers["x-ms-original-url"] =
        initialResponse.request.url;
      return lroResponse;
    }
  };

  {{#if useLegacyLro}}
  return new LroEngine(poller, options);
  {{else}}
  options.resolveOnUnsuccessful = options.resolveOnUnsuccessful ?? true;
  return createHttpPoller(poller, options);
  {{/if}}
}

/**
 * Converts a Rest Client response to a response that the LRO implementation understands
 * @param response - a rest client http response
 * @returns - An LRO response that the LRO implementation understands
 */
function getLroResponse<TResult extends HttpResponse>(
  response: TResult
): LroResponse<TResult> {
  if (Number.isNaN(response.status)) {
    throw new TypeError(
      \`Status code of the response is not a number. Value: \${response.status}\`
    );
  }

  return {
    flatResponse: response,
    rawResponse: {
      ...response,
      statusCode: Number.parseInt(response.status),
      body: response.body
    }
  };
}
`;
