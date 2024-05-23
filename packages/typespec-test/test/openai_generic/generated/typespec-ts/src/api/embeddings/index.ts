// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CreateEmbeddingRequest,
  CreateEmbeddingResponse,
} from "../../models/models.js";
import {
  serializeCreateEmbeddingRequest,
  deserializeCreateEmbeddingResponse,
} from "../../utils/serializeUtil.js";
import {
  EmbeddingsCreate200Response,
  EmbeddingsCreateDefaultResponse,
  isUnexpected,
  OpenAIContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { EmbeddingsCreateOptionalParams } from "../../models/options.js";

export function _createSend(
  context: Client,
  embedding: CreateEmbeddingRequest,
  options: EmbeddingsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod<
  EmbeddingsCreate200Response | EmbeddingsCreateDefaultResponse
> {
  return context
    .path("/embeddings")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: serializeCreateEmbeddingRequest(embedding),
    });
}

export async function _createDeserialize(
  result: EmbeddingsCreate200Response | EmbeddingsCreateDefaultResponse,
): Promise<CreateEmbeddingResponse> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return deserializeCreateEmbeddingResponse(result.body);
}

export async function create(
  context: Client,
  embedding: CreateEmbeddingRequest,
  options: EmbeddingsCreateOptionalParams = { requestOptions: {} },
): Promise<CreateEmbeddingResponse> {
  const result = await _createSend(context, embedding, options);
  return _createDeserialize(result);
}
