/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/arrayModelMappers";
import * as Parameters from "../models/parameters";
import { AzureCompositeModelContext } from "../azureCompositeModelContext";

/** Class representing a ArrayModel. */
export class ArrayModel {
  private readonly client: AzureCompositeModelContext;

  /**
   * Create a ArrayModel.
   * @param {AzureCompositeModelContext} client Reference to the service client.
   */
  constructor(client: AzureCompositeModelContext) {
    this.client = client;
  }

  /**
   * Get complex types with array property
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getValid(): Promise<Models.ArrayModelGetValidResponse>;
  getValid(options: msRest.RequestOptionsBase): Promise<Models.ArrayModelGetValidResponse>;
  getValid(callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ArrayWrapper>): Promise<Models.ArrayModelGetValidResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getValidOperationSpec,
      callback) as Promise<Models.ArrayModelGetValidResponse>;
  }

  /**
   * Put complex types with array property
   *
   * @param {ArrayModelPutValidOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putValid(): Promise<msRest.RestResponse>;
  putValid(options: Models.ArrayModelPutValidOptionalParams): Promise<msRest.RestResponse>;
  putValid(callback: msRest.ServiceCallback<void>): void;
  putValid(options: Models.ArrayModelPutValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putValid(options?: Models.ArrayModelPutValidOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putValidOperationSpec,
      callback);
  }

  /**
   * Get complex types with array property which is empty
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getEmpty(): Promise<Models.ArrayModelGetEmptyResponse>;
  getEmpty(options: msRest.RequestOptionsBase): Promise<Models.ArrayModelGetEmptyResponse>;
  getEmpty(callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getEmpty(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getEmpty(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ArrayWrapper>): Promise<Models.ArrayModelGetEmptyResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getEmptyOperationSpec,
      callback) as Promise<Models.ArrayModelGetEmptyResponse>;
  }

  /**
   * Put complex types with array property which is empty
   *
   * @param {ArrayModelPutEmptyOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  putEmpty(): Promise<msRest.RestResponse>;
  putEmpty(options: Models.ArrayModelPutEmptyOptionalParams): Promise<msRest.RestResponse>;
  putEmpty(callback: msRest.ServiceCallback<void>): void;
  putEmpty(options: Models.ArrayModelPutEmptyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  putEmpty(options?: Models.ArrayModelPutEmptyOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      putEmptyOperationSpec,
      callback);
  }

  /**
   * Get complex types with array property while server doesn't provide a response payload
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getNotProvided(): Promise<Models.ArrayModelGetNotProvidedResponse>;
  getNotProvided(options: msRest.RequestOptionsBase): Promise<Models.ArrayModelGetNotProvidedResponse>;
  getNotProvided(callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getNotProvided(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ArrayWrapper>): void;
  getNotProvided(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ArrayWrapper>): Promise<Models.ArrayModelGetNotProvidedResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNotProvidedOperationSpec,
      callback) as Promise<Models.ArrayModelGetNotProvidedResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/array/valid",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/array/valid",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      arrayProperty: [
        "options",
        "arrayProperty"
      ]
    },
    mapper: {
      ...Mappers.ArrayWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/array/empty",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const putEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "complex/array/empty",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: {
      arrayProperty: [
        "options",
        "arrayProperty"
      ]
    },
    mapper: {
      ...Mappers.ArrayWrapper,
      required: true
    }
  },
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getNotProvidedOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "complex/array/notprovided",
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ArrayWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
