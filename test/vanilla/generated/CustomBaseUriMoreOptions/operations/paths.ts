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
import * as Mappers from "../models/pathsMappers";
import * as Parameters from "../models/parameters";
import { AutoRestParameterizedCustomHostTestClientContext } from "../autoRestParameterizedCustomHostTestClientContext";

/** Class representing a Paths. */
export class Paths {
  private readonly client: AutoRestParameterizedCustomHostTestClientContext;

  /**
   * Create a Paths.
   * @param {AutoRestParameterizedCustomHostTestClientContext} client Reference to the service client.
   */
  constructor(client: AutoRestParameterizedCustomHostTestClientContext) {
    this.client = client;
  }

  /**
   * Get a 200 to test a valid base uri
   *
   * @param {string} vault The vault name, e.g. https://myvault
   *
   * @param {string} secret Secret value.
   *
   * @param {string} keyName The key name with value 'key1'.
   *
   * @param {PathsGetEmptyOptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getEmpty(vault: string, secret: string, keyName: string): Promise<msRest.RestResponse>;
  getEmpty(vault: string, secret: string, keyName: string, options: Models.PathsGetEmptyOptionalParams): Promise<msRest.RestResponse>;
  getEmpty(vault: string, secret: string, keyName: string, callback: msRest.ServiceCallback<void>): void;
  getEmpty(vault: string, secret: string, keyName: string, options: Models.PathsGetEmptyOptionalParams, callback: msRest.ServiceCallback<void>): void;
  getEmpty(vault: string, secret: string, keyName: string, options?: Models.PathsGetEmptyOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        vault,
        secret,
        keyName,
        options
      },
      getEmptyOperationSpec,
      callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "customuri/{subscriptionId}/{keyName}",
  urlParameters: [
    Parameters.vault,
    Parameters.secret,
    Parameters.dnsSuffix,
    Parameters.keyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.keyVersion
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
