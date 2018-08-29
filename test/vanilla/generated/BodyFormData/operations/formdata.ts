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
import * as Mappers from "../models/formdataMappers";
import * as Parameters from "../models/parameters";
import { AutoRestSwaggerBATFormDataServiceContext } from "../autoRestSwaggerBATFormDataServiceContext";

/** Class representing a Formdata. */
export class Formdata {
  private readonly client: AutoRestSwaggerBATFormDataServiceContext;

  /**
   * Create a Formdata.
   * @param {AutoRestSwaggerBATFormDataServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestSwaggerBATFormDataServiceContext) {
    this.client = client;
  }

  /**
   * Upload file
   *
   * @param {msRest.HttpRequestBody} fileContent File to upload.
   *
   * @param {string} fileName File name to upload. Name has to be spelled exactly as written here.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  uploadFile(fileContent: msRest.HttpRequestBody, fileName: string): Promise<Models.FormdataUploadFileResponse>;
  uploadFile(fileContent: msRest.HttpRequestBody, fileName: string, options: msRest.RequestOptionsBase): Promise<Models.FormdataUploadFileResponse>;
  uploadFile(fileContent: msRest.HttpRequestBody, fileName: string, callback: msRest.ServiceCallback<void>): void;
  uploadFile(fileContent: msRest.HttpRequestBody, fileName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  uploadFile(fileContent: msRest.HttpRequestBody, fileName: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<Models.FormdataUploadFileResponse> {
    return this.client.sendOperationRequest(
      {
        fileContent,
        fileName,
        options
      },
      uploadFileOperationSpec,
      callback) as Promise<Models.FormdataUploadFileResponse>;
  }

  /**
   * Upload file
   *
   * @param {msRest.HttpRequestBody} fileContent File to upload.
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  uploadFileViaBody(fileContent: msRest.HttpRequestBody): Promise<Models.FormdataUploadFileViaBodyResponse>;
  uploadFileViaBody(fileContent: msRest.HttpRequestBody, options: msRest.RequestOptionsBase): Promise<Models.FormdataUploadFileViaBodyResponse>;
  uploadFileViaBody(fileContent: msRest.HttpRequestBody, callback: msRest.ServiceCallback<void>): void;
  uploadFileViaBody(fileContent: msRest.HttpRequestBody, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  uploadFileViaBody(fileContent: msRest.HttpRequestBody, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<Models.FormdataUploadFileViaBodyResponse> {
    return this.client.sendOperationRequest(
      {
        fileContent,
        options
      },
      uploadFileViaBodyOperationSpec,
      callback) as Promise<Models.FormdataUploadFileViaBodyResponse>;
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const uploadFileOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "formdata/stream/uploadfile",
  formDataParameters: [
    Parameters.fileContent,
    Parameters.fileName
  ],
  contentType: "multipart/form-data",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const uploadFileViaBodyOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "formdata/stream/uploadfile",
  requestBody: {
    parameterPath: "fileContent",
    mapper: {
      required: true,
      serializedName: "fileContent",
      type: {
        name: "Stream"
      }
    }
  },
  contentType: "application/octet-stream",
  responses: {
    200: {
      bodyMapper: {
        serializedName: "parsedResponse",
        type: {
          name: "Stream"
        }
      }
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
