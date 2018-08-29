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
import { AutoRestUrlTestServiceContext } from "../autoRestUrlTestServiceContext";

/** Class representing a Paths. */
export class Paths {
  private readonly client: AutoRestUrlTestServiceContext;

  /**
   * Create a Paths.
   * @param {AutoRestUrlTestServiceContext} client Reference to the service client.
   */
  constructor(client: AutoRestUrlTestServiceContext) {
    this.client = client;
  }

  /**
   * Get true Boolean value on path
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getBooleanTrue(): Promise<msRest.RestResponse>;
  getBooleanTrue(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  getBooleanTrue(callback: msRest.ServiceCallback<void>): void;
  getBooleanTrue(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getBooleanTrue(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBooleanTrueOperationSpec,
      callback);
  }

  /**
   * Get false Boolean value on path
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getBooleanFalse(): Promise<msRest.RestResponse>;
  getBooleanFalse(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  getBooleanFalse(callback: msRest.ServiceCallback<void>): void;
  getBooleanFalse(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getBooleanFalse(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getBooleanFalseOperationSpec,
      callback);
  }

  /**
   * Get '1000000' integer value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getIntOneMillion(): Promise<msRest.RestResponse>;
  getIntOneMillion(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  getIntOneMillion(callback: msRest.ServiceCallback<void>): void;
  getIntOneMillion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getIntOneMillion(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getIntOneMillionOperationSpec,
      callback);
  }

  /**
   * Get '-1000000' integer value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getIntNegativeOneMillion(): Promise<msRest.RestResponse>;
  getIntNegativeOneMillion(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  getIntNegativeOneMillion(callback: msRest.ServiceCallback<void>): void;
  getIntNegativeOneMillion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getIntNegativeOneMillion(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getIntNegativeOneMillionOperationSpec,
      callback);
  }

  /**
   * Get '10000000000' 64 bit integer value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getTenBillion(): Promise<msRest.RestResponse>;
  getTenBillion(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  getTenBillion(callback: msRest.ServiceCallback<void>): void;
  getTenBillion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getTenBillion(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getTenBillionOperationSpec,
      callback);
  }

  /**
   * Get '-10000000000' 64 bit integer value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  getNegativeTenBillion(): Promise<msRest.RestResponse>;
  getNegativeTenBillion(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  getNegativeTenBillion(callback: msRest.ServiceCallback<void>): void;
  getNegativeTenBillion(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  getNegativeTenBillion(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      getNegativeTenBillionOperationSpec,
      callback);
  }

  /**
   * Get '1.034E+20' numeric value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  floatScientificPositive(): Promise<msRest.RestResponse>;
  floatScientificPositive(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  floatScientificPositive(callback: msRest.ServiceCallback<void>): void;
  floatScientificPositive(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  floatScientificPositive(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      floatScientificPositiveOperationSpec,
      callback);
  }

  /**
   * Get '-1.034E-20' numeric value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  floatScientificNegative(): Promise<msRest.RestResponse>;
  floatScientificNegative(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  floatScientificNegative(callback: msRest.ServiceCallback<void>): void;
  floatScientificNegative(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  floatScientificNegative(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      floatScientificNegativeOperationSpec,
      callback);
  }

  /**
   * Get '9999999.999' numeric value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  doubleDecimalPositive(): Promise<msRest.RestResponse>;
  doubleDecimalPositive(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  doubleDecimalPositive(callback: msRest.ServiceCallback<void>): void;
  doubleDecimalPositive(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  doubleDecimalPositive(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      doubleDecimalPositiveOperationSpec,
      callback);
  }

  /**
   * Get '-9999999.999' numeric value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  doubleDecimalNegative(): Promise<msRest.RestResponse>;
  doubleDecimalNegative(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  doubleDecimalNegative(callback: msRest.ServiceCallback<void>): void;
  doubleDecimalNegative(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  doubleDecimalNegative(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      doubleDecimalNegativeOperationSpec,
      callback);
  }

  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multi-byte string value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  stringUnicode(): Promise<msRest.RestResponse>;
  stringUnicode(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  stringUnicode(callback: msRest.ServiceCallback<void>): void;
  stringUnicode(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  stringUnicode(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      stringUnicodeOperationSpec,
      callback);
  }

  /**
   * Get 'begin!*'();:@ &=+$,/?#[]end
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  stringUrlEncoded(): Promise<msRest.RestResponse>;
  stringUrlEncoded(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  stringUrlEncoded(callback: msRest.ServiceCallback<void>): void;
  stringUrlEncoded(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  stringUrlEncoded(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      stringUrlEncodedOperationSpec,
      callback);
  }

  /**
   * Get ''
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  stringEmpty(): Promise<msRest.RestResponse>;
  stringEmpty(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  stringEmpty(callback: msRest.ServiceCallback<void>): void;
  stringEmpty(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  stringEmpty(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      stringEmptyOperationSpec,
      callback);
  }

  /**
   * Get null (should throw)
   *
   * @param {string} stringPath null string value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  stringNull(stringPath: string): Promise<msRest.RestResponse>;
  stringNull(stringPath: string, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  stringNull(stringPath: string, callback: msRest.ServiceCallback<void>): void;
  stringNull(stringPath: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  stringNull(stringPath: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        stringPath,
        options
      },
      stringNullOperationSpec,
      callback);
  }

  /**
   * Get using uri with 'green color' in path parameter
   *
   * @param {UriColor} enumPath send the value green. Possible values include: 'red color', 'green
   * color', 'blue color'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  enumValid(enumPath: Models.UriColor): Promise<msRest.RestResponse>;
  enumValid(enumPath: Models.UriColor, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  enumValid(enumPath: Models.UriColor, callback: msRest.ServiceCallback<void>): void;
  enumValid(enumPath: Models.UriColor, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  enumValid(enumPath: Models.UriColor, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        enumPath,
        options
      },
      enumValidOperationSpec,
      callback);
  }

  /**
   * Get null (should throw on the client before the request is sent on wire)
   *
   * @param {UriColor} enumPath send null should throw. Possible values include: 'red color', 'green
   * color', 'blue color'
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  enumNull(enumPath: Models.UriColor): Promise<msRest.RestResponse>;
  enumNull(enumPath: Models.UriColor, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  enumNull(enumPath: Models.UriColor, callback: msRest.ServiceCallback<void>): void;
  enumNull(enumPath: Models.UriColor, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  enumNull(enumPath: Models.UriColor, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        enumPath,
        options
      },
      enumNullOperationSpec,
      callback);
  }

  /**
   * Get '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   *
   * @param {Uint8Array} bytePath '啊齄丂狛狜隣郎隣兀﨩' multibyte value as utf-8 encoded byte array
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  byteMultiByte(bytePath: Uint8Array): Promise<msRest.RestResponse>;
  byteMultiByte(bytePath: Uint8Array, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  byteMultiByte(bytePath: Uint8Array, callback: msRest.ServiceCallback<void>): void;
  byteMultiByte(bytePath: Uint8Array, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  byteMultiByte(bytePath: Uint8Array, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        bytePath,
        options
      },
      byteMultiByteOperationSpec,
      callback);
  }

  /**
   * Get '' as byte array
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  byteEmpty(): Promise<msRest.RestResponse>;
  byteEmpty(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  byteEmpty(callback: msRest.ServiceCallback<void>): void;
  byteEmpty(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  byteEmpty(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      byteEmptyOperationSpec,
      callback);
  }

  /**
   * Get null as byte array (should throw)
   *
   * @param {Uint8Array} bytePath null as byte array (should throw)
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  byteNull(bytePath: Uint8Array): Promise<msRest.RestResponse>;
  byteNull(bytePath: Uint8Array, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  byteNull(bytePath: Uint8Array, callback: msRest.ServiceCallback<void>): void;
  byteNull(bytePath: Uint8Array, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  byteNull(bytePath: Uint8Array, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        bytePath,
        options
      },
      byteNullOperationSpec,
      callback);
  }

  /**
   * Get '2012-01-01' as date
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  dateValid(): Promise<msRest.RestResponse>;
  dateValid(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  dateValid(callback: msRest.ServiceCallback<void>): void;
  dateValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  dateValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      dateValidOperationSpec,
      callback);
  }

  /**
   * Get null as date - this should throw or be unusable on the client side, depending on date
   * representation
   *
   * @param {Date | string} datePath null as date (should throw)
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  dateNull(datePath: Date | string): Promise<msRest.RestResponse>;
  dateNull(datePath: Date | string, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  dateNull(datePath: Date | string, callback: msRest.ServiceCallback<void>): void;
  dateNull(datePath: Date | string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  dateNull(datePath: Date | string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        datePath,
        options
      },
      dateNullOperationSpec,
      callback);
  }

  /**
   * Get '2012-01-01T01:01:01Z' as date-time
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  dateTimeValid(): Promise<msRest.RestResponse>;
  dateTimeValid(options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  dateTimeValid(callback: msRest.ServiceCallback<void>): void;
  dateTimeValid(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  dateTimeValid(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      dateTimeValidOperationSpec,
      callback);
  }

  /**
   * Get null as date-time, should be disallowed or throw depending on representation of date-time
   *
   * @param {Date | string} dateTimePath null as date-time
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  dateTimeNull(dateTimePath: Date | string): Promise<msRest.RestResponse>;
  dateTimeNull(dateTimePath: Date | string, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  dateTimeNull(dateTimePath: Date | string, callback: msRest.ServiceCallback<void>): void;
  dateTimeNull(dateTimePath: Date | string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  dateTimeNull(dateTimePath: Date | string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        dateTimePath,
        options
      },
      dateTimeNullOperationSpec,
      callback);
  }

  /**
   * Get 'lorem' encoded value as 'bG9yZW0' (base64url)
   *
   * @param {Uint8Array} base64UrlPath base64url encoded value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  base64Url(base64UrlPath: Uint8Array): Promise<msRest.RestResponse>;
  base64Url(base64UrlPath: Uint8Array, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  base64Url(base64UrlPath: Uint8Array, callback: msRest.ServiceCallback<void>): void;
  base64Url(base64UrlPath: Uint8Array, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  base64Url(base64UrlPath: Uint8Array, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        base64UrlPath,
        options
      },
      base64UrlOperationSpec,
      callback);
  }

  /**
   * Get an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' , null, ''] using the
   * csv-array format
   *
   * @param {string[]} arrayPath an array of string ['ArrayPath1', 'begin!*'();:@ &=+$,/?#[]end' ,
   * null, ''] using the csv-array format
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  arrayCsvInPath(arrayPath: string[]): Promise<msRest.RestResponse>;
  arrayCsvInPath(arrayPath: string[], options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  arrayCsvInPath(arrayPath: string[], callback: msRest.ServiceCallback<void>): void;
  arrayCsvInPath(arrayPath: string[], options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  arrayCsvInPath(arrayPath: string[], options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        arrayPath,
        options
      },
      arrayCsvInPathOperationSpec,
      callback);
  }

  /**
   * Get the date 2016-04-13 encoded value as '1460505600' (Unix time)
   *
   * @param {Date | string} unixTimeUrlPath Unix time encoded value
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} The deserialized result object.
   *
   * @reject {Error|ServiceError} The error object.
   */
  unixTimeUrl(unixTimeUrlPath: Date | string): Promise<msRest.RestResponse>;
  unixTimeUrl(unixTimeUrlPath: Date | string, options: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  unixTimeUrl(unixTimeUrlPath: Date | string, callback: msRest.ServiceCallback<void>): void;
  unixTimeUrl(unixTimeUrlPath: Date | string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  unixTimeUrl(unixTimeUrlPath: Date | string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        unixTimeUrlPath,
        options
      },
      unixTimeUrlOperationSpec,
      callback);
  }

}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getBooleanTrueOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/bool/true/{boolPath}",
  urlParameters: [
    Parameters.boolPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getBooleanFalseOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/bool/false/{boolPath}",
  urlParameters: [
    Parameters.boolPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getIntOneMillionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/int/1000000/{intPath}",
  urlParameters: [
    Parameters.intPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getIntNegativeOneMillionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/int/-1000000/{intPath}",
  urlParameters: [
    Parameters.intPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getTenBillionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/long/10000000000/{longPath}",
  urlParameters: [
    Parameters.longPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const getNegativeTenBillionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/long/-10000000000/{longPath}",
  urlParameters: [
    Parameters.longPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const floatScientificPositiveOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/float/1.034E+20/{floatPath}",
  urlParameters: [
    Parameters.floatPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const floatScientificNegativeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/float/-1.034E-20/{floatPath}",
  urlParameters: [
    Parameters.floatPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const doubleDecimalPositiveOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/double/9999999.999/{doublePath}",
  urlParameters: [
    Parameters.doublePath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const doubleDecimalNegativeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/double/-9999999.999/{doublePath}",
  urlParameters: [
    Parameters.doublePath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringUnicodeOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/unicode/{stringPath}",
  urlParameters: [
    Parameters.stringPath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringUrlEncodedOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/begin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend/{stringPath}",
  urlParameters: [
    Parameters.stringPath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/empty/{stringPath}",
  urlParameters: [
    Parameters.stringPath2
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const stringNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/null/{stringPath}",
  urlParameters: [
    Parameters.stringPath3
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const enumValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/enum/green%20color/{enumPath}",
  urlParameters: [
    Parameters.enumPath
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const enumNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/null/{enumPath}",
  urlParameters: [
    Parameters.enumPath
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const byteMultiByteOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/byte/multibyte/{bytePath}",
  urlParameters: [
    Parameters.bytePath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const byteEmptyOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/byte/empty/{bytePath}",
  urlParameters: [
    Parameters.bytePath1
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const byteNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/byte/null/{bytePath}",
  urlParameters: [
    Parameters.bytePath0
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/date/2012-01-01/{datePath}",
  urlParameters: [
    Parameters.datePath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/date/null/{datePath}",
  urlParameters: [
    Parameters.datePath1
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateTimeValidOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/datetime/2012-01-01T01%3A01%3A01Z/{dateTimePath}",
  urlParameters: [
    Parameters.dateTimePath0
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const dateTimeNullOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/datetime/null/{dateTimePath}",
  urlParameters: [
    Parameters.dateTimePath1
  ],
  responses: {
    400: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const base64UrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/string/bG9yZW0/{base64UrlPath}",
  urlParameters: [
    Parameters.base64UrlPath
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const arrayCsvInPathOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/array/ArrayPath1%2cbegin%21%2A%27%28%29%3B%3A%40%20%26%3D%2B%24%2C%2F%3F%23%5B%5Dend%2c%2c/{arrayPath}",
  urlParameters: [
    Parameters.arrayPath
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};

const unixTimeUrlOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "paths/int/1460505600/{unixTimeUrlPath}",
  urlParameters: [
    Parameters.unixTimeUrlPath
  ],
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  serializer
};
