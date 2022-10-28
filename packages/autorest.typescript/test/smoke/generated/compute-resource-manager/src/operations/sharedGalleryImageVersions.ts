/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator, PageSettings } from "@azure/core-paging";
import { setContinuationToken } from "../pagingHelper";
import { SharedGalleryImageVersions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { ComputeManagementClient } from "../computeManagementClient";
import {
  SharedGalleryImageVersion,
  SharedGalleryImageVersionsListNextOptionalParams,
  SharedGalleryImageVersionsListOptionalParams,
  SharedGalleryImageVersionsListResponse,
  SharedGalleryImageVersionsGetOptionalParams,
  SharedGalleryImageVersionsGetResponse,
  SharedGalleryImageVersionsListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing SharedGalleryImageVersions operations. */
export class SharedGalleryImageVersionsImpl
  implements SharedGalleryImageVersions {
  private readonly client: ComputeManagementClient;

  /**
   * Initialize a new instance of the class SharedGalleryImageVersions class.
   * @param client Reference to the service client
   */
  constructor(client: ComputeManagementClient) {
    this.client = client;
  }

  /**
   * List shared gallery image versions by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param options The options parameters.
   */
  public list(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    options?: SharedGalleryImageVersionsListOptionalParams
  ): PagedAsyncIterableIterator<SharedGalleryImageVersion> {
    const iter = this.listPagingAll(
      location,
      galleryUniqueName,
      galleryImageName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: (settings?: PageSettings) => {
        return this.listPagingPage(
          location,
          galleryUniqueName,
          galleryImageName,
          options,
          settings
        );
      }
    };
  }

  private async *listPagingPage(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    options?: SharedGalleryImageVersionsListOptionalParams,
    settings?: PageSettings
  ): AsyncIterableIterator<SharedGalleryImageVersion[]> {
    let result: SharedGalleryImageVersionsListResponse;
    let continuationToken = settings?.continuationToken;
    if (!continuationToken) {
      result = await this._list(
        location,
        galleryUniqueName,
        galleryImageName,
        options
      );
      let page = result.value || [];
      continuationToken = result.nextLink;
      setContinuationToken(page, continuationToken);
      yield page;
    }
    while (continuationToken) {
      result = await this._listNext(
        location,
        galleryUniqueName,
        galleryImageName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      let page = result.value || [];
      setContinuationToken(page, continuationToken);
      yield page;
    }
  }

  private async *listPagingAll(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    options?: SharedGalleryImageVersionsListOptionalParams
  ): AsyncIterableIterator<SharedGalleryImageVersion> {
    for await (const page of this.listPagingPage(
      location,
      galleryUniqueName,
      galleryImageName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * List shared gallery image versions by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param options The options parameters.
   */
  private _list(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    options?: SharedGalleryImageVersionsListOptionalParams
  ): Promise<SharedGalleryImageVersionsListResponse> {
    return this.client.sendOperationRequest(
      { location, galleryUniqueName, galleryImageName, options },
      listOperationSpec
    );
  }

  /**
   * Get a shared gallery image version by subscription id or tenant id.
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param galleryImageVersionName The name of the gallery image version to be created. Needs to follow
   *                                semantic version name pattern: The allowed characters are digit and period. Digits must be within
   *                                the range of a 32-bit integer. Format: <MajorVersion>.<MinorVersion>.<Patch>
   * @param options The options parameters.
   */
  get(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    galleryImageVersionName: string,
    options?: SharedGalleryImageVersionsGetOptionalParams
  ): Promise<SharedGalleryImageVersionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        location,
        galleryUniqueName,
        galleryImageName,
        galleryImageVersionName,
        options
      },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param location Resource location.
   * @param galleryUniqueName The unique name of the Shared Gallery.
   * @param galleryImageName The name of the Shared Gallery Image Definition from which the Image
   *                         Versions are to be listed.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    location: string,
    galleryUniqueName: string,
    galleryImageName: string,
    nextLink: string,
    options?: SharedGalleryImageVersionsListNextOptionalParams
  ): Promise<SharedGalleryImageVersionsListNextResponse> {
    return this.client.sendOperationRequest(
      { location, galleryUniqueName, galleryImageName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/sharedGalleries/{galleryUniqueName}/images/{galleryImageName}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedGalleryImageVersionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.sharedTo],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.galleryImageName,
    Parameters.galleryUniqueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Compute/locations/{location}/sharedGalleries/{galleryUniqueName}/images/{galleryImageName}/versions/{galleryImageVersionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedGalleryImageVersion
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.location,
    Parameters.galleryImageName,
    Parameters.galleryImageVersionName,
    Parameters.galleryUniqueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SharedGalleryImageVersionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.sharedTo],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.location,
    Parameters.galleryImageName,
    Parameters.galleryUniqueName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
