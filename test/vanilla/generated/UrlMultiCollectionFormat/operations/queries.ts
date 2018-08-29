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
import * as Mappers from "../models/queriesMappers";
import * as Parameters from "../models/parameters";
import { AutoRestUrlMutliCollectionFormatTestServiceContext } from "../autoRestUrlMutliCollectionFormatTestServiceContext";

/** Class representing a Queries. */
export class Queries {
  private readonly client: AutoRestUrlMutliCollectionFormatTestServiceContext;

  /**
   * Create a Queries.
   * @param {AutoRestUrlMutliCollectionFormatTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestUrlMutliCollectionFormatTestServiceContext) {
    this.client = client;
  }

  /**
   * Get a null array of string using the multi-array format
   *
   * @param {QueriesArrayStringMultiNullOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  arrayStringMultiNull(): Promise<msRest.RestResponse>;
  arrayStringMultiNull(options: Models.QueriesArrayStringMultiNullOptionalParams): Promise<msRest.RestResponse>;
  arrayStringMultiNull(callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiNull(options: Models.QueriesArrayStringMultiNullOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiNull(options?: Models.QueriesArrayStringMultiNullOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      arrayStringMultiNullOperationSpec,
      callback);
  }

  /**
   * Get an empty array [] of string using the multi-array format
   *
   * @param {QueriesArrayStringMultiEmptyOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  arrayStringMultiEmpty(): Promise<msRest.RestResponse>;
  arrayStringMultiEmpty(options: Models.QueriesArrayStringMultiEmptyOptionalParams): Promise<msRest.RestResponse>;
  arrayStringMultiEmpty(callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiEmpty(options: Models.QueriesArrayStringMultiEmptyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiEmpty(options?: Models.QueriesArrayStringMultiEmptyOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      arrayStringMultiEmptyOperationSpec,
      callback);
  }

  /**
   * Get an array of string ['ArrayQuery1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * mult-array format
   *
   * @param {QueriesArrayStringMultiValidOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  arrayStringMultiValid(): Promise<msRest.RestResponse>;
  arrayStringMultiValid(options: Models.QueriesArrayStringMultiValidOptionalParams): Promise<msRest.RestResponse>;
  arrayStringMultiValid(callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiValid(options: Models.QueriesArrayStringMultiValidOptionalParams, callback: msRest.ServiceCallback<void>): void;
  arrayStringMultiValid(options?: Models.QueriesArrayStringMultiValidOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      arrayStringMultiValidOperationSpec,
      callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const arrayStringMultiNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/array/multi/string/null",
  queryParameters: [
    Parameters.arrayQuery
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const arrayStringMultiEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/array/multi/string/empty",
  queryParameters: [
    Parameters.arrayQuery
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const arrayStringMultiValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "queries/array/multi/string/valid",
  queryParameters: [
    Parameters.arrayQuery
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
