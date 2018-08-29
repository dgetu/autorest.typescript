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
import * as Mappers from "../models/httpRetryMappers";
import { AutoRestHttpInfrastructureTestServiceContext } from "../autoRestHttpInfrastructureTestServiceContext";

/** Class representing a HttpRetry. */
export class HttpRetry {
  private readonly client: AutoRestHttpInfrastructureTestServiceContext;

  /**
   * Create a HttpRetry.
   * @param {AutoRestHttpInfrastructureTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestHttpInfrastructureTestServiceContext) {
    this.client = client;
  }

  /**
   * Return 408 status code, then 200 after retry
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  head408(): Promise<msRest.RestResponse>;
  head408(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  head408(callback: msRest.ServiceCallback<void>): void;
  head408(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  head408(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      head408OperationSpec,
      callback);
  }

  /**
   * Return 500 status code, then 200 after retry
   *
   * @param {HttpRetryPut500OptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  put500(): Promise<msRest.RestResponse>;
  put500(options: Models.HttpRetryPut500OptionalParams): Promise<msRest.RestResponse>;
  put500(callback: msRest.ServiceCallback<void>): void;
  put500(options: Models.HttpRetryPut500OptionalParams, callback: msRest.ServiceCallback<void>): void;
  put500(options?: Models.HttpRetryPut500OptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      put500OperationSpec,
      callback);
  }

  /**
   * Return 500 status code, then 200 after retry
   *
   * @param {HttpRetryPatch500OptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  patch500(): Promise<msRest.RestResponse>;
  patch500(options: Models.HttpRetryPatch500OptionalParams): Promise<msRest.RestResponse>;
  patch500(callback: msRest.ServiceCallback<void>): void;
  patch500(options: Models.HttpRetryPatch500OptionalParams, callback: msRest.ServiceCallback<void>): void;
  patch500(options?: Models.HttpRetryPatch500OptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      patch500OperationSpec,
      callback);
  }

  /**
   * Return 502 status code, then 200 after retry
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  get502(): Promise<msRest.RestResponse>;
  get502(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  get502(callback: msRest.ServiceCallback<void>): void;
  get502(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  get502(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      get502OperationSpec,
      callback);
  }

  /**
   * Return 503 status code, then 200 after retry
   *
   * @param {HttpRetryPost503OptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  post503(): Promise<msRest.RestResponse>;
  post503(options: Models.HttpRetryPost503OptionalParams): Promise<msRest.RestResponse>;
  post503(callback: msRest.ServiceCallback<void>): void;
  post503(options: Models.HttpRetryPost503OptionalParams, callback: msRest.ServiceCallback<void>): void;
  post503(options?: Models.HttpRetryPost503OptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      post503OperationSpec,
      callback);
  }

  /**
   * Return 503 status code, then 200 after retry
   *
   * @param {HttpRetryDelete503OptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  delete503(): Promise<msRest.RestResponse>;
  delete503(options: Models.HttpRetryDelete503OptionalParams): Promise<msRest.RestResponse>;
  delete503(callback: msRest.ServiceCallback<void>): void;
  delete503(options: Models.HttpRetryDelete503OptionalParams, callback: msRest.ServiceCallback<void>): void;
  delete503(options?: Models.HttpRetryDelete503OptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      delete503OperationSpec,
      callback);
  }

  /**
   * Return 504 status code, then 200 after retry
   *
   * @param {HttpRetryPut504OptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  put504(): Promise<msRest.RestResponse>;
  put504(options: Models.HttpRetryPut504OptionalParams): Promise<msRest.RestResponse>;
  put504(callback: msRest.ServiceCallback<void>): void;
  put504(options: Models.HttpRetryPut504OptionalParams, callback: msRest.ServiceCallback<void>): void;
  put504(options?: Models.HttpRetryPut504OptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      put504OperationSpec,
      callback);
  }

  /**
   * Return 504 status code, then 200 after retry
   *
   * @param {HttpRetryPatch504OptionalParams} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  patch504(): Promise<msRest.RestResponse>;
  patch504(options: Models.HttpRetryPatch504OptionalParams): Promise<msRest.RestResponse>;
  patch504(callback: msRest.ServiceCallback<void>): void;
  patch504(options: Models.HttpRetryPatch504OptionalParams, callback: msRest.ServiceCallback<void>): void;
  patch504(options?: Models.HttpRetryPatch504OptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      patch504OperationSpec,
      callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const head408OperationSpec: msRest.OperationSpec = {
  httpMethod: "HEAD",
  path: "http/retry/408",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const put500OperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "http/retry/500",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
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

const patch500OperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "http/retry/500",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
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

const get502OperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "http/retry/502",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const post503OperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "http/retry/503",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
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

const delete503OperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "http/retry/503",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
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

const put504OperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "http/retry/504",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
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

const patch504OperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "http/retry/504",
  requestBody: {
    parameterPath: [
      "options",
      "booleanValue"
    ],
    mapper: {
      serializedName: "booleanValue",
      type: {
        name: "Boolean"
      }
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
