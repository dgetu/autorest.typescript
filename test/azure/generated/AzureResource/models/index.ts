/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing ErrorModel.
 */
export interface ErrorModel {
  /**
   * @member {number} [status]
   */
  status?: number;
  /**
   * @member {string} [message]
   */
  message?: string;
}

/**
 * @interface
 * An interface representing Resource.
 * Some resource
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Resource Id
   */
  readonly id?: string;
  /**
   * @member {string} [type] Resource Type
   */
  readonly type?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags]
   */
  tags?: { [propertyName: string]: string };
  /**
   * @member {string} [location] Resource Location
   */
  location?: string;
  /**
   * @member {string} [name] Resource Name
   */
  readonly name?: string;
}

/**
 * @interface
 * An interface representing FlattenedProduct.
 * @extends Resource
 */
export interface FlattenedProduct extends Resource {
  /**
   * @member {string} [pname]
   */
  pname?: string;
  /**
   * @member {number} [lsize]
   */
  lsize?: number;
  /**
   * @member {string} [provisioningState]
   */
  provisioningState?: string;
}

/**
 * @interface
 * An interface representing ResourceCollection.
 */
export interface ResourceCollection {
  /**
   * @member {FlattenedProduct} [productresource]
   */
  productresource?: FlattenedProduct;
  /**
   * @member {FlattenedProduct[]} [arrayofresources]
   */
  arrayofresources?: FlattenedProduct[];
  /**
   * @member {{ [propertyName: string]: FlattenedProduct }}
   * [dictionaryofresources]
   */
  dictionaryofresources?: { [propertyName: string]: FlattenedProduct };
}

/**
 * @interface
 * An interface representing AutoRestResourceFlatteningTestServicePutArrayOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AutoRestResourceFlatteningTestServicePutArrayOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {Resource[]} [resourceArray] External Resource as an Array to put
   */
  resourceArray?: Resource[];
}

/**
 * @interface
 * An interface representing AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AutoRestResourceFlatteningTestServicePutDictionaryOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {{ [propertyName: string]: FlattenedProduct }}
   * [resourceDictionary] External Resource as a Dictionary to put
   */
  resourceDictionary?: { [propertyName: string]: FlattenedProduct };
}

/**
 * @interface
 * An interface representing AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AutoRestResourceFlatteningTestServicePutResourceCollectionOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {ResourceCollection} [resourceComplexObject] External Resource as
   * a ResourceCollection to put
   */
  resourceComplexObject?: ResourceCollection;
}


/**
 * Contains response data for the getArray operation.
 */
export type GetArrayResponse = Array<FlattenedProduct> & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: FlattenedProduct[];
    };
};

/**
 * Contains response data for the getDictionary operation.
 */
export type GetDictionaryResponse = {
  /**
   * The response body properties.
   */
  [propertyName: string]: FlattenedProduct;
} & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: { [propertyName: string]: FlattenedProduct };
    };
};

/**
 * Contains response data for the getResourceCollection operation.
 */
export type GetResourceCollectionResponse = {
  productresource: FlattenedProduct;
  arrayofresources: FlattenedProduct[];
  dictionaryofresources: { [propertyName: string]: FlattenedProduct };
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: ResourceCollection;
    };
};
