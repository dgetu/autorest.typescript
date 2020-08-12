/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import {
  Operations,
  Skus,
  StorageAccounts,
  Usages,
  ManagementPolicies,
  PrivateEndpointConnections,
  PrivateLinkResources,
  ObjectReplicationPolicies,
  EncryptionScopes,
  BlobServices,
  BlobContainers,
  FileServices,
  FileShares
} from "./operations";
import { StorageManagementClientContext } from "./storageManagementClientContext";
import { StorageManagementClientOptionalParams } from "./models";

export class StorageManagementClient extends StorageManagementClientContext {
  /**
   * Initializes a new instance of the StorageManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    subscriptionId: string,
    options?: StorageManagementClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.operations = new Operations(this);
    this.skus = new Skus(this);
    this.storageAccounts = new StorageAccounts(this);
    this.usages = new Usages(this);
    this.managementPolicies = new ManagementPolicies(this);
    this.privateEndpointConnections = new PrivateEndpointConnections(this);
    this.privateLinkResources = new PrivateLinkResources(this);
    this.objectReplicationPolicies = new ObjectReplicationPolicies(this);
    this.encryptionScopes = new EncryptionScopes(this);
    this.blobServices = new BlobServices(this);
    this.blobContainers = new BlobContainers(this);
    this.fileServices = new FileServices(this);
    this.fileShares = new FileShares(this);
  }

  operations: Operations;
  skus: Skus;
  storageAccounts: StorageAccounts;
  usages: Usages;
  managementPolicies: ManagementPolicies;
  privateEndpointConnections: PrivateEndpointConnections;
  privateLinkResources: PrivateLinkResources;
  objectReplicationPolicies: ObjectReplicationPolicies;
  encryptionScopes: EncryptionScopes;
  blobServices: BlobServices;
  blobContainers: BlobContainers;
  fileServices: FileServices;
  fileShares: FileShares;
}
