// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getClient, ClientOptions } from "@azure-rest/core-client";
import { logger } from "./logger";
import { KeyCredential } from "@azure/core-auth";
import { AnomalyDetectorClient } from "./clientDefinitions";

export interface AnomalyDetectorClientOptions extends ClientOptions {
  apiVersion?: string;
}

/**
 * Initialize a new instance of `AnomalyDetectorClient`
 * @param endpoint - Supported Cognitive Services endpoints (protocol and hostname, for example:
 * https://westus2.api.cognitive.microsoft.com).
 * @param credentials - uniquely identify client credential
 * @param options - the parameter for all optional parameters
 */
export default function createClient(
  endpoint: string,
  credentials: KeyCredential,
  options: AnomalyDetectorClientOptions = {},
): AnomalyDetectorClient {
  const apiVersion = options.apiVersion ?? "v1.1";
  const baseUrl =
    options.baseUrl ?? `${endpoint}/anomalydetector/${apiVersion}`;

  const userAgentInfo = `azsdk-js-ai-anomaly-detector-rest/1.0.0-beta.1`;
  const userAgentPrefix =
    options.userAgentOptions && options.userAgentOptions.userAgentPrefix
      ? `${options.userAgentOptions.userAgentPrefix} ${userAgentInfo}`
      : `${userAgentInfo}`;
  options = {
    ...options,
    userAgentOptions: {
      userAgentPrefix,
    },
    loggingOptions: {
      logger: options.loggingOptions?.logger ?? logger.info,
    },
    credentials: {
      apiKeyHeaderName:
        options.credentials?.apiKeyHeaderName ?? "Ocp-Apim-Subscription-Key",
    },
  };

  const client = getClient(
    baseUrl,
    credentials,
    options,
  ) as AnomalyDetectorClient;

  client.pipeline.removePolicy({ name: "ApiVersionPolicy" });

  return client;
}
