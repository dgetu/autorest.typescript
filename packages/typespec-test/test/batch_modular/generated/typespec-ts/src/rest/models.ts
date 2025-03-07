// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Options for creating an Azure Batch Pool. */
export interface BatchPoolCreateOptions {
  /** A string that uniquely identifies the Pool within the Account. The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two Pool IDs within an Account that differ only by case). */
  id: string;
  /** The display name for the Pool. The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
  displayName?: string;
  /** The size of virtual machines in the Pool. All virtual machines in a Pool are the same size. For information about available sizes of virtual machines for Cloud Services Pools (pools created with cloudServiceConfiguration), see Sizes for Cloud Services (https://azure.microsoft.com/documentation/articles/cloud-services-sizes-specs/). Batch supports all Cloud Services VM sizes except ExtraSmall, A1V2 and A2V2. For information about available VM sizes for Pools using Images from the Virtual Machines Marketplace (pools created with virtualMachineConfiguration) see Sizes for Virtual Machines (Linux) (https://azure.microsoft.com/documentation/articles/virtual-machines-linux-sizes/) or Sizes for Virtual Machines (Windows) (https://azure.microsoft.com/documentation/articles/virtual-machines-windows-sizes/). Batch supports all Azure VM sizes except STANDARD_A0 and those with premium storage (STANDARD_GS, STANDARD_DS, and STANDARD_DSV2 series). */
  vmSize: string;
  /** The cloud service configuration for the Pool. This property and virtualMachineConfiguration are mutually exclusive and one of the properties must be specified. This property cannot be specified if the Batch Account was created with its poolAllocationMode property set to 'UserSubscription'. */
  cloudServiceConfiguration?: CloudServiceConfiguration;
  /** The virtual machine configuration for the Pool. This property and cloudServiceConfiguration are mutually exclusive and one of the properties must be specified. */
  virtualMachineConfiguration?: VirtualMachineConfiguration;
  /** The timeout for allocation of Compute Nodes to the Pool. This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
  resizeTimeout?: string;
  /** The desired number of dedicated Compute Nodes in the Pool. This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
  targetDedicatedNodes?: number;
  /** The desired number of Spot/Low-priority Compute Nodes in the Pool. This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
  targetLowPriorityNodes?: number;
  /** Whether the Pool size should automatically adjust over time. If false, at least one of targetDedicatedNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula property is required and the Pool automatically resizes according to the formula. The default value is false. */
  enableAutoScale?: boolean;
  /** A formula for the desired number of Compute Nodes in the Pool. This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the Pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see 'Automatically scale Compute Nodes in an Azure Batch Pool' (https://azure.microsoft.com/documentation/articles/batch-automatic-scaling/). */
  autoScaleFormula?: string;
  /** The time interval at which to automatically adjust the Pool size according to the autoscale formula. The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
  autoScaleEvaluationInterval?: string;
  /** Whether the Pool permits direct communication between Compute Nodes. Enabling inter-node communication limits the maximum size of the Pool due to deployment restrictions on the Compute Nodes of the Pool. This may result in the Pool not reaching its desired size. The default value is false. */
  enableInterNodeCommunication?: boolean;
  /** The network configuration for the Pool. */
  networkConfiguration?: NetworkConfiguration;
  /** A Task specified to run on each Compute Node as it joins the Pool. The Task runs when the Compute Node is added to the Pool or when the Compute Node is restarted. */
  startTask?: StartTask;
  /**
   * For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location.
   * For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location.
   * For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory.
   * Warning: This property is deprecated and will be removed after February, 2024. Please use the [Azure KeyVault Extension](https://learn.microsoft.com/azure/batch/batch-certificate-migration-guide) instead.
   */
  certificateReferences?: Array<CertificateReference>;
  /** The list of Packages to be installed on each Compute Node in the Pool. When creating a pool, the package's application ID must be fully qualified (/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}). Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Package references on any given Pool. */
  applicationPackageReferences?: Array<ApplicationPackageReference>;
  /** The list of application licenses the Batch service will make available on each Compute Node in the Pool. The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, Pool creation will fail. */
  applicationLicenses?: string[];
  /** The number of task slots that can be used to run concurrent tasks on a single compute node in the pool. The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256. */
  taskSlotsPerNode?: number;
  /** How Tasks are distributed across Compute Nodes in a Pool. If not specified, the default is spread. */
  taskSchedulingPolicy?: TaskSchedulingPolicy;
  /** The list of user Accounts to be created on each Compute Node in the Pool. */
  userAccounts?: Array<UserAccount>;
  /** A list of name-value pairs associated with the Pool as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
  metadata?: Array<MetadataItem>;
  /** Mount storage using specified file system for the entire lifetime of the pool. Mount the storage using Azure fileshare, NFS, CIFS or Blobfuse based file system. */
  mountConfiguration?: Array<MountConfiguration>;
  /**
   * The desired node communication mode for the pool. If omitted, the default value is Default.
   *
   * Possible values: "default", "classic", "simplified"
   */
  targetNodeCommunicationMode?: string;
}

/**
 * The configuration for Compute Nodes in a Pool based on the Azure Cloud Services
 * platform.
 */
export interface CloudServiceConfiguration {
  /**
   * Possible values are:
   * 2 - OS Family 2, equivalent to Windows Server 2008 R2
   * SP1.
   * 3 - OS Family 3, equivalent to Windows Server 2012.
   * 4 - OS Family 4,
   * equivalent to Windows Server 2012 R2.
   * 5 - OS Family 5, equivalent to Windows
   * Server 2016.
   * 6 - OS Family 6, equivalent to Windows Server 2019. For more
   * information, see Azure Guest OS Releases
   * (https://azure.microsoft.com/documentation/articles/cloud-services-guestos-update-matrix/#releases).
   */
  osFamily: string;
  /** The Azure Guest OS version to be installed on the virtual machines in the Pool. The default value is * which specifies the latest operating system version for the specified OS family. */
  osVersion?: string;
}

/**
 * The configuration for Compute Nodes in a Pool based on the Azure Virtual
 * Machines infrastructure.
 */
export interface VirtualMachineConfiguration {
  /** A reference to the Azure Virtual Machines Marketplace Image or the custom Virtual Machine Image to use. */
  imageReference: ImageReference;
  /** The SKU of the Batch Compute Node agent to be provisioned on Compute Nodes in the Pool. The Batch Compute Node agent is a program that runs on each Compute Node in the Pool, and provides the command-and-control interface between the Compute Node and the Batch service. There are different implementations of the Compute Node agent, known as SKUs, for different operating systems. You must specify a Compute Node agent SKU which matches the selected Image reference. To get the list of supported Compute Node agent SKUs along with their list of verified Image references, see the 'List supported Compute Node agent SKUs' operation. */
  nodeAgentSKUId: string;
  /** Windows operating system settings on the virtual machine. This property must not be specified if the imageReference property specifies a Linux OS Image. */
  windowsConfiguration?: WindowsConfiguration;
  /** The configuration for data disks attached to the Compute Nodes in the Pool. This property must be specified if the Compute Nodes in the Pool need to have empty data disks attached to them. This cannot be updated. Each Compute Node gets its own disk (the disk is not a file share). Existing disks cannot be attached, each attached disk is empty. When the Compute Node is removed from the Pool, the disk and all data associated with it is also deleted. The disk is not formatted after being attached, it must be formatted before use - for more information see https://docs.microsoft.com/en-us/azure/virtual-machines/linux/classic/attach-disk#initialize-a-new-data-disk-in-linux and https://docs.microsoft.com/en-us/azure/virtual-machines/windows/attach-disk-ps#add-an-empty-data-disk-to-a-virtual-machine. */
  dataDisks?: Array<DataDisk>;
  /**
   * This only applies to Images that contain the Windows operating system, and
   * should only be used when you hold valid on-premises licenses for the Compute
   * Nodes which will be deployed. If omitted, no on-premises licensing discount is
   * applied. Values are:
   *
   *  Windows_Server - The on-premises license is for Windows
   * Server.
   *  Windows_Client - The on-premises license is for Windows Client.
   *
   */
  licenseType?: string;
  /** The container configuration for the Pool. If specified, setup is performed on each Compute Node in the Pool to allow Tasks to run in containers. All regular Tasks and Job manager Tasks run on this Pool must specify the containerSettings property, and all other Tasks may specify it. */
  containerConfiguration?: ContainerConfiguration;
  /** The disk encryption configuration for the pool. If specified, encryption is performed on each node in the pool during node provisioning. */
  diskEncryptionConfiguration?: DiskEncryptionConfiguration;
  /** The node placement configuration for the pool. This configuration will specify rules on how nodes in the pool will be physically allocated. */
  nodePlacementConfiguration?: NodePlacementConfiguration;
  /** The virtual machine extension for the pool. If specified, the extensions mentioned in this configuration will be installed on each node. */
  extensions?: Array<VMExtension>;
  /** Settings for the operating system disk of the Virtual Machine. */
  osDisk?: OSDisk;
}

/**
 * A reference to an Azure Virtual Machines Marketplace Image or a Shared Image
 * Gallery Image. To get the list of all Azure Marketplace Image references
 * verified by Azure Batch, see the 'List Supported Images' operation.
 */
export interface ImageReference {
  /** The publisher of the Azure Virtual Machines Marketplace Image. For example, Canonical or MicrosoftWindowsServer. */
  publisher?: string;
  /** The offer type of the Azure Virtual Machines Marketplace Image. For example, UbuntuServer or WindowsServer. */
  offer?: string;
  /** The SKU of the Azure Virtual Machines Marketplace Image. For example, 18.04-LTS or 2019-Datacenter. */
  sku?: string;
  /** The version of the Azure Virtual Machines Marketplace Image. A value of 'latest' can be specified to select the latest version of an Image. If omitted, the default is 'latest'. */
  version?: string;
  /** The ARM resource identifier of the Shared Image Gallery Image. Compute Nodes in the Pool will be created using this Image Id. This is of the form /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageDefinitionName}/versions/{VersionId} or /subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageDefinitionName} for always defaulting to the latest image version. This property is mutually exclusive with other ImageReference properties. The Shared Image Gallery Image must have replicas in the same region and must be in the same subscription as the Azure Batch account. If the image version is not specified in the imageId, the latest version will be used. For information about the firewall settings for the Batch Compute Node agent to communicate with the Batch service see https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. */
  virtualMachineImageId?: string;
}

/** Windows operating system settings to apply to the virtual machine. */
export interface WindowsConfiguration {
  /** Whether automatic updates are enabled on the virtual machine. If omitted, the default value is true. */
  enableAutomaticUpdates?: boolean;
}

/**
 * Settings which will be used by the data disks associated to Compute Nodes in
 * the Pool. When using attached data disks, you need to mount and format the
 * disks from within a VM to use them.
 */
export interface DataDisk {
  /** The logical unit number. The lun is used to uniquely identify each data disk. If attaching multiple disks, each should have a distinct lun. The value must be between 0 and 63, inclusive. */
  lun: number;
  /**
   * The type of caching to be enabled for the data disks. The default value for caching is readwrite. For information about the caching options see: https://blogs.msdn.microsoft.com/windowsazurestorage/2012/06/27/exploring-windows-azure-drives-disks-and-images/.
   *
   * Possible values: "none", "readonly", "readwrite"
   */
  caching?: string;
  /** The initial disk size in gigabytes. */
  diskSizeGB: number;
  /**
   * The storage Account type to be used for the data disk. If omitted, the default is "standard_lrs".
   *
   * Possible values: "standard_lrs", "premium_lrs"
   */
  storageAccountType?: string;
}

/** The configuration for container-enabled Pools. */
export interface ContainerConfiguration {
  /**
   * The container technology to be used.
   *
   * Possible values: "dockerCompatible", "criCompatible"
   */
  type: string;
  /** The collection of container Image names. This is the full Image reference, as would be specified to "docker pull". An Image will be sourced from the default Docker registry unless the Image is fully qualified with an alternative registry. */
  containerImageNames?: string[];
  /** Additional private registries from which containers can be pulled. If any Images must be downloaded from a private registry which requires credentials, then those credentials must be provided here. */
  containerRegistries?: Array<ContainerRegistry>;
}

/** A private container registry. */
export interface ContainerRegistry {
  /** The user name to log into the registry server. */
  username?: string;
  /** The password to log into the registry server. */
  password?: string;
  /** The registry URL. If omitted, the default is "docker.io". */
  registryServer?: string;
  /** The reference to the user assigned identity to use to access an Azure Container Registry instead of username and password. */
  identityReference?: BatchNodeIdentityReference;
}

/**
 * The reference to a user assigned identity associated with the Batch pool which
 * a compute node will use.
 */
export interface BatchNodeIdentityReference {
  /** The ARM resource id of the user assigned identity. */
  resourceId?: string;
}

/**
 * The disk encryption configuration applied on compute nodes in the pool. Disk
 * encryption configuration is not supported on Linux pool created with Shared
 * Image Gallery Image.
 */
export interface DiskEncryptionConfiguration {
  /** The list of disk targets Batch Service will encrypt on the compute node. If omitted, no disks on the compute nodes in the pool will be encrypted. On Linux pool, only "TemporaryDisk" is supported; on Windows pool, "OsDisk" and "TemporaryDisk" must be specified. */
  targets?: string[];
}

/**
 * For regional placement, nodes in the pool will be allocated in the same region.
 * For zonal placement, nodes in the pool will be spread across different zones
 * with best effort balancing.
 */
export interface NodePlacementConfiguration {
  /**
   * Node placement Policy type on Batch Pools. Allocation policy used by Batch Service to provision the nodes. If not specified, Batch will use the regional policy.
   *
   * Possible values: "regional", "zonal"
   */
  policy?: string;
}

/** The configuration for virtual machine extensions. */
export interface VMExtension {
  /** The name of the virtual machine extension. */
  name: string;
  /** The name of the extension handler publisher. */
  publisher: string;
  /** The type of the extension. */
  type: string;
  /** The version of script handler. */
  typeHandlerVersion?: string;
  /** Indicates whether the extension should use a newer minor version if one is available at deployment time. Once deployed, however, the extension will not upgrade minor versions unless redeployed, even with this property set to true. */
  autoUpgradeMinorVersion?: boolean;
  /** Indicates whether the extension should be automatically upgraded by the platform if there is a newer version of the extension available. */
  enableAutomaticUpgrade?: boolean;
  /** JSON formatted public settings for the extension. */
  settings?: Record<string, string>;
  /** The extension can contain either protectedSettings or protectedSettingsFromKeyVault or no protected settings at all. */
  protectedSettings?: Record<string, string>;
  /** The collection of extension names. Collection of extension names after which this extension needs to be provisioned. */
  provisionAfterExtensions?: string[];
}

/** Settings for the operating system disk of the compute node (VM). */
export interface OSDisk {
  /** Specifies the ephemeral Disk Settings for the operating system disk used by the compute node (VM). */
  ephemeralOSDiskSettings?: DiffDiskSettings;
}

/**
 * Specifies the ephemeral Disk Settings for the operating system disk used by the
 * compute node (VM).
 */
export interface DiffDiskSettings {
  /**
   * Specifies the ephemeral disk placement for operating system disk for all VMs in the pool. This property can be used by user in the request to choose the location e.g., cache disk space for Ephemeral OS disk provisioning. For more information on Ephemeral OS disk size requirements, please refer to Ephemeral OS disk size requirements for Windows VMs at https://docs.microsoft.com/en-us/azure/virtual-machines/windows/ephemeral-os-disks#size-requirements and Linux VMs at https://docs.microsoft.com/en-us/azure/virtual-machines/linux/ephemeral-os-disks#size-requirements.
   *
   * Possible values: "cachedisk"
   */
  placement?: string;
}

/** The network configuration for a Pool. */
export interface NetworkConfiguration {
  /** The ARM resource identifier of the virtual network subnet which the Compute Nodes of the Pool will join. This is of the form /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}. The virtual network must be in the same region and subscription as the Azure Batch Account. The specified subnet should have enough free IP addresses to accommodate the number of Compute Nodes in the Pool. If the subnet doesn't have enough free IP addresses, the Pool will partially allocate Nodes and a resize error will occur. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet. The specified subnet must allow communication from the Azure Batch service to be able to schedule Tasks on the Nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the Nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the Compute Nodes to unusable. For Pools created with virtualMachineConfiguration only ARM virtual networks ('Microsoft.Network/virtualNetworks') are supported, but for Pools created with cloudServiceConfiguration both ARM and classic virtual networks are supported. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication. For Pools created with a virtual machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. For Pools created with a cloud service configuration, enable ports 10100, 20100, and 30100. Also enable outbound connections to Azure Storage on port 443. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. */
  subnetId?: string;
  /**
   * The scope of dynamic vnet assignment.
   *
   * Possible values: "none", "job"
   */
  dynamicVNetAssignmentScope?: string;
  /** The configuration for endpoints on Compute Nodes in the Batch Pool. Pool endpoint configuration is only supported on Pools with the virtualMachineConfiguration property. */
  endpointConfiguration?: PoolEndpointConfiguration;
  /** The Public IPAddress configuration for Compute Nodes in the Batch Pool. Public IP configuration property is only supported on Pools with the virtualMachineConfiguration property. */
  publicIPAddressConfiguration?: PublicIPAddressConfiguration;
  /** Whether this pool should enable accelerated networking. Accelerated networking enables single root I/O virtualization (SR-IOV) to a VM, which may lead to improved networking performance. For more details, see: https://learn.microsoft.com/azure/virtual-network/accelerated-networking-overview. */
  enableAcceleratedNetworking?: boolean;
}

/** The endpoint configuration for a Pool. */
export interface PoolEndpointConfiguration {
  /** A list of inbound NAT Pools that can be used to address specific ports on an individual Compute Node externally. The maximum number of inbound NAT Pools per Batch Pool is 5. If the maximum number of inbound NAT Pools is exceeded the request fails with HTTP status code 400. This cannot be specified if the IPAddressProvisioningType is NoPublicIPAddresses. */
  inboundNATPools: Array<InboundNATPool>;
}

/**
 * A inbound NAT Pool that can be used to address specific ports on Compute Nodes
 * in a Batch Pool externally.
 */
export interface InboundNATPool {
  /** The name of the endpoint. The name must be unique within a Batch Pool, can contain letters, numbers, underscores, periods, and hyphens. Names must start with a letter or number, must end with a letter, number, or underscore, and cannot exceed 77 characters.  If any invalid values are provided the request fails with HTTP status code 400. */
  name: string;
  /**
   * The protocol of the endpoint.
   *
   * Possible values: "tcp", "udp"
   */
  protocol: string;
  /** The port number on the Compute Node. This must be unique within a Batch Pool. Acceptable values are between 1 and 65535 except for 22, 3389, 29876 and 29877 as these are reserved. If any reserved values are provided the request fails with HTTP status code 400. */
  backendPort: number;
  /** The first port number in the range of external ports that will be used to provide inbound access to the backendPort on individual Compute Nodes. Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved. All ranges within a Pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400. */
  frontendPortRangeStart: number;
  /** The last port number in the range of external ports that will be used to provide inbound access to the backendPort on individual Compute Nodes. Acceptable values range between 1 and 65534 except ports from 50000 to 55000 which are reserved by the Batch service. All ranges within a Pool must be distinct and cannot overlap. Each range must contain at least 40 ports. If any reserved or overlapping values are provided the request fails with HTTP status code 400. */
  frontendPortRangeEnd: number;
  /** A list of network security group rules that will be applied to the endpoint. The maximum number of rules that can be specified across all the endpoints on a Batch Pool is 25. If no network security group rules are specified, a default rule will be created to allow inbound access to the specified backendPort. If the maximum number of network security group rules is exceeded the request fails with HTTP status code 400. */
  networkSecurityGroupRules?: Array<NetworkSecurityGroupRule>;
}

/** A network security group rule to apply to an inbound endpoint. */
export interface NetworkSecurityGroupRule {
  /** The priority for this rule. Priorities within a Pool must be unique and are evaluated in order of priority. The lower the number the higher the priority. For example, rules could be specified with order numbers of 150, 250, and 350. The rule with the order number of 150 takes precedence over the rule that has an order of 250. Allowed priorities are 150 to 4096. If any reserved or duplicate values are provided the request fails with HTTP status code 400. */
  priority: number;
  /**
   * The action that should be taken for a specified IP address, subnet range or tag.
   *
   * Possible values: "allow", "deny"
   */
  access: string;
  /** The source address prefix or tag to match for the rule. Valid values are a single IP address (i.e. 10.10.10.10), IP subnet (i.e. 192.168.1.0/24), default tag, or * (for all addresses).  If any other values are provided the request fails with HTTP status code 400. */
  sourceAddressPrefix: string;
  /** The source port ranges to match for the rule. Valid values are '*' (for all ports 0 - 65535), a specific port (i.e. 22), or a port range (i.e. 100-200). The ports must be in the range of 0 to 65535. Each entry in this collection must not overlap any other entry (either a range or an individual port). If any other values are provided the request fails with HTTP status code 400. The default value is '*'. */
  sourcePortRanges?: string[];
}

/** The public IP Address configuration of the networking configuration of a Pool. */
export interface PublicIPAddressConfiguration {
  /**
   * The provisioning type for Public IP Addresses for the Pool. The default value is BatchManaged.
   *
   * Possible values: "batchmanaged", "usermanaged", "nopublicipaddresses"
   */
  provision?: string;
  /** The list of public IPs which the Batch service will use when provisioning Compute Nodes. The number of IPs specified here limits the maximum size of the Pool - 100 dedicated nodes or 100 Spot/Low-priority nodes can be allocated for each public IP. For example, a pool needing 250 dedicated VMs would need at least 3 public IPs specified. Each element of this collection is of the form: /subscriptions/{subscription}/resourceGroups/{group}/providers/Microsoft.Network/publicIPAddresses/{ip}. */
  ipAddressIds?: string[];
}

/**
 * Batch will retry Tasks when a recovery operation is triggered on a Node.
 * Examples of recovery operations include (but are not limited to) when an
 * unhealthy Node is rebooted or a Compute Node disappeared due to host failure.
 * Retries due to recovery operations are independent of and are not counted
 * against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal
 * retry due to a recovery operation may occur. Because of this, all Tasks should
 * be idempotent. This means Tasks need to tolerate being interrupted and
 * restarted without causing any corruption or duplicate data. The best practice
 * for long running Tasks is to use some form of checkpointing. In some cases the
 * StartTask may be re-run even though the Compute Node was not rebooted. Special
 * care should be taken to avoid StartTasks which create breakaway process or
 * install/launch services from the StartTask working directory, as this will
 * block Batch from being able to re-run the StartTask.
 */
export interface StartTask {
  /** The command line of the StartTask. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). */
  commandLine: string;
  /** The settings for the container under which the StartTask runs. When this is specified, all directories recursively below the AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the node) are mapped into the container, all Task environment variables are mapped into the container, and the Task command line is executed in the container. Files produced in the container outside of AZ_BATCH_NODE_ROOT_DIR might not be reflected to the host disk, meaning that Batch file APIs will not be able to access those files. */
  containerSettings?: TaskContainerSettings;
  /** A list of files that the Batch service will download to the Compute Node before running the command line.  There is a maximum size for the list of resource files. When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Files listed under this element are located in the Task's working directory. */
  resourceFiles?: Array<ResourceFile>;
  /** A list of environment variable settings for the StartTask. */
  environmentSettings?: Array<EnvironmentSetting>;
  /** The user identity under which the StartTask runs. If omitted, the Task runs as a non-administrative user unique to the Task. */
  userIdentity?: UserIdentity;
  /** The maximum number of times the Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task. If the maximum retry count is -1, the Batch service retries the Task without limit, however this is not recommended for a start task or any task. The default value is 0 (no retries). */
  maxTaskRetryCount?: number;
  /** Whether the Batch service should wait for the StartTask to complete successfully (that is, to exit with exit code 0) before scheduling any Tasks on the Compute Node. If true and the StartTask fails on a Node, the Batch service retries the StartTask up to its maximum retry count (maxTaskRetryCount). If the Task has still not completed successfully after all retries, then the Batch service marks the Node unusable, and will not schedule Tasks to it. This condition can be detected via the Compute Node state and failure info details. If false, the Batch service will not wait for the StartTask to complete. In this case, other Tasks can start executing on the Compute Node while the StartTask is still running; and even if the StartTask fails, new Tasks will continue to be scheduled on the Compute Node. The default is true. */
  waitForSuccess?: boolean;
}

/** The container settings for a Task. */
export interface TaskContainerSettings {
  /** Additional options to the container create command. These additional options are supplied as arguments to the "docker create" command, in addition to those controlled by the Batch Service. */
  containerRunOptions?: string;
  /** The Image to use to create the container in which the Task will run. This is the full Image reference, as would be specified to "docker pull". If no tag is provided as part of the Image name, the tag ":latest" is used as a default. */
  imageName: string;
  /** The private registry which contains the container Image. This setting can be omitted if was already provided at Pool creation. */
  registry?: ContainerRegistry;
  /**
   * The location of the container Task working directory. The default is 'taskWorkingDirectory'.
   *
   * Possible values: "taskWorkingDirectory", "containerImageDefault"
   */
  workingDirectory?: string;
}

/** A single file or multiple files to be downloaded to a Compute Node. */
export interface ResourceFile {
  /** The storage container name in the auto storage Account. The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. */
  autoStorageContainerName?: string;
  /** The URL of the blob container within Azure Blob Storage. The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. This URL must be readable and listable from compute nodes. There are three ways to get such a URL for a container in Azure storage: include a Shared Access Signature (SAS) granting read and list permissions on the container, use a managed identity with read and list permissions, or set the ACL for the container to allow public access. */
  storageContainerUrl?: string;
  /** The URL of the file to download. The autoStorageContainerName, storageContainerUrl and httpUrl properties are mutually exclusive and one of them must be specified. If the URL points to Azure Blob Storage, it must be readable from compute nodes. There are three ways to get such a URL for a blob in Azure storage: include a Shared Access Signature (SAS) granting read permissions on the blob, use a managed identity with read permission, or set the ACL for the blob or its container to allow public access. */
  httpUrl?: string;
  /** The blob prefix to use when downloading blobs from an Azure Storage container. Only the blobs whose names begin with the specified prefix will be downloaded. The property is valid only when autoStorageContainerName or storageContainerUrl is used. This prefix can be a partial filename or a subdirectory. If a prefix is not specified, all the files in the container will be downloaded. */
  blobPrefix?: string;
  /** The location on the Compute Node to which to download the file(s), relative to the Task's working directory. If the httpUrl property is specified, the filePath is required and describes the path which the file will be downloaded to, including the filename. Otherwise, if the autoStorageContainerName or storageContainerUrl property is specified, filePath is optional and is the directory to download the files to. In the case where filePath is used as a directory, any directory structure already associated with the input data will be retained in full and appended to the specified filePath directory. The specified relative path cannot break out of the Task's working directory (for example by using '..'). */
  filePath?: string;
  /** The file permission mode attribute in octal format. This property applies only to files being downloaded to Linux Compute Nodes. It will be ignored if it is specified for a resourceFile which will be downloaded to a Windows Compute Node. If this property is not specified for a Linux Compute Node, then a default value of 0770 is applied to the file. */
  fileMode?: string;
  /** The reference to the user assigned identity to use to access Azure Blob Storage specified by storageContainerUrl or httpUrl. */
  identityReference?: BatchNodeIdentityReference;
}

/** An environment variable to be set on a Task process. */
export interface EnvironmentSetting {
  /** The name of the environment variable. */
  name: string;
  /** The value of the environment variable. */
  value?: string;
}

/** The definition of the user identity under which the Task is run. Specify either the userName or autoUser property, but not both. */
export interface UserIdentity {
  /** The name of the user identity under which the Task is run. The userName and autoUser properties are mutually exclusive; you must specify one but not both. */
  username?: string;
  /** The auto user under which the Task is run. The userName and autoUser properties are mutually exclusive; you must specify one but not both. */
  autoUser?: AutoUserSpecification;
}

/** Specifies the options for the auto user that runs an Azure Batch Task. */
export interface AutoUserSpecification {
  /**
   * The scope for the auto user. The default value is pool. If the pool is running Windows a value of Task should be specified if stricter isolation between tasks is required. For example, if the task mutates the registry in a way which could impact other tasks, or if certificates have been specified on the pool which should not be accessible by normal tasks but should be accessible by StartTasks.
   *
   * Possible values: "task", "pool"
   */
  scope?: string;
  /**
   * The elevation level of the auto user. The default value is nonAdmin.
   *
   * Possible values: "nonadmin", "admin"
   */
  elevationLevel?: string;
}

/** A reference to a Certificate to be installed on Compute Nodes in a Pool. Warning: This object is deprecated and will be removed after February, 2024. Please use the [Azure KeyVault Extension](https://learn.microsoft.com/azure/batch/batch-certificate-migration-guide) instead. */
export interface CertificateReference {
  /** The thumbprint of the Certificate. */
  thumbprint: string;
  /** The algorithm with which the thumbprint is associated. This must be sha1. */
  thumbprintAlgorithm: string;
  /**
   * The location of the Certificate store on the Compute Node into which to install the Certificate. The default value is currentuser. This property is applicable only for Pools configured with Windows Compute Nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows Image reference). For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory.
   *
   * Possible values: "currentuser", "localmachine"
   */
  storeLocation?: string;
  /** The name of the Certificate store on the Compute Node into which to install the Certificate. This property is applicable only for Pools configured with Windows Compute Nodes (that is, created with cloudServiceConfiguration, or with virtualMachineConfiguration using a Windows Image reference). Common store names include: My, Root, CA, Trust, Disallowed, TrustedPeople, TrustedPublisher, AuthRoot, AddressBook, but any custom store name can also be used. The default value is My. */
  storeName?: string;
  /** Which user Accounts on the Compute Node should have access to the private data of the Certificate. You can specify more than one visibility in this collection. The default is all Accounts. */
  visibility?: string[];
}

/** A reference to an Package to be deployed to Compute Nodes. */
export interface ApplicationPackageReference {
  /** The ID of the application to deploy. When creating a pool, the package's application ID must be fully qualified (/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}). */
  applicationId: string;
  /** The version of the application to deploy. If omitted, the default version is deployed. If this is omitted on a Pool, and no default version is specified for this application, the request fails with the error code InvalidApplicationPackageReferences and HTTP status code 409. If this is omitted on a Task, and no default version is specified for this application, the Task fails with a pre-processing error. */
  version?: string;
}

/** Specifies how Tasks should be distributed across Compute Nodes. */
export interface TaskSchedulingPolicy {
  /**
   * How Tasks are distributed across Compute Nodes in a Pool. If not specified, the default is spread.
   *
   * Possible values: "spread", "pack"
   */
  nodeFillType: string;
}

/**
 * Properties used to create a user used to execute Tasks on an Azure Batch
 * Compute Node.
 */
export interface UserAccount {
  /** The name of the user Account. Names can contain any Unicode characters up to a maximum length of 20. */
  name: string;
  /** The password for the user Account. */
  password: string;
  /**
   * The elevation level of the user Account. The default value is nonAdmin.
   *
   * Possible values: "nonadmin", "admin"
   */
  elevationLevel?: string;
  /** The Linux-specific user configuration for the user Account. This property is ignored if specified on a Windows Pool. If not specified, the user is created with the default options. */
  linuxUserConfiguration?: LinuxUserConfiguration;
  /** The Windows-specific user configuration for the user Account. This property can only be specified if the user is on a Windows Pool. If not specified and on a Windows Pool, the user is created with the default options. */
  windowsUserConfiguration?: WindowsUserConfiguration;
}

/** Properties used to create a user Account on a Linux Compute Node. */
export interface LinuxUserConfiguration {
  /** The user ID of the user Account. The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the uid. */
  uid?: number;
  /** The group ID for the user Account. The uid and gid properties must be specified together or not at all. If not specified the underlying operating system picks the gid. */
  gid?: number;
  /** The SSH private key for the user Account. The private key must not be password protected. The private key is used to automatically configure asymmetric-key based authentication for SSH between Compute Nodes in a Linux Pool when the Pool's enableInterNodeCommunication property is true (it is ignored if enableInterNodeCommunication is false). It does this by placing the key pair into the user's .ssh directory. If not specified, password-less SSH is not configured between Compute Nodes (no modification of the user's .ssh directory is done). */
  sshPrivateKey?: string;
}

/** Properties used to create a user Account on a Windows Compute Node. */
export interface WindowsUserConfiguration {
  /**
   * The login mode for the user. The default value for VirtualMachineConfiguration Pools is 'batch' and for CloudServiceConfiguration Pools is 'interactive'.
   *
   * Possible values: "batch", "interactive"
   */
  loginMode?: string;
}

/**
 * The Batch service does not assign any meaning to this metadata; it is solely
 * for the use of user code.
 */
export interface MetadataItem {
  /** The name of the metadata item. */
  name: string;
  /** The value of the metadata item. */
  value: string;
}

/** The file system to mount on each node. */
export interface MountConfiguration {
  /** The Azure Storage Container to mount using blob FUSE on each node. This property is mutually exclusive with all other properties. */
  azureBlobFileSystemConfiguration?: AzureBlobFileSystemConfiguration;
  /** The NFS file system to mount on each node. This property is mutually exclusive with all other properties. */
  nfsMountConfiguration?: NFSMountConfiguration;
  /** The CIFS/SMB file system to mount on each node. This property is mutually exclusive with all other properties. */
  cifsMountConfiguration?: CifsMountConfiguration;
  /** The Azure File Share to mount on each node. This property is mutually exclusive with all other properties. */
  azureFileShareConfiguration?: AzureFileShareConfiguration;
}

/** Information used to connect to an Azure Storage Container using Blobfuse. */
export interface AzureBlobFileSystemConfiguration {
  /** The Azure Storage Account name. */
  accountName: string;
  /** The Azure Blob Storage Container name. */
  containerName: string;
  /** The Azure Storage Account key. This property is mutually exclusive with both sasKey and identity; exactly one must be specified. */
  accountKey?: string;
  /** The Azure Storage SAS token. This property is mutually exclusive with both accountKey and identity; exactly one must be specified. */
  sasKey?: string;
  /** Additional command line options to pass to the mount command. These are 'net use' options in Windows and 'mount' options in Linux. */
  blobfuseOptions?: string;
  /** The relative path on the compute node where the file system will be mounted. All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable. */
  relativeMountPath: string;
  /** The reference to the user assigned identity to use to access containerName. This property is mutually exclusive with both accountKey and sasKey; exactly one must be specified. */
  identityReference?: BatchNodeIdentityReference;
}

/** Information used to connect to an NFS file system. */
export interface NFSMountConfiguration {
  /** The URI of the file system to mount. */
  source: string;
  /** The relative path on the compute node where the file system will be mounted. All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable. */
  relativeMountPath: string;
  /** Additional command line options to pass to the mount command. These are 'net use' options in Windows and 'mount' options in Linux. */
  mountOptions?: string;
}

/** Information used to connect to a CIFS file system. */
export interface CifsMountConfiguration {
  /** The user to use for authentication against the CIFS file system. */
  username: string;
  /** The URI of the file system to mount. */
  source: string;
  /** The relative path on the compute node where the file system will be mounted. All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable. */
  relativeMountPath: string;
  /** Additional command line options to pass to the mount command. These are 'net use' options in Windows and 'mount' options in Linux. */
  mountOptions?: string;
  /** The password to use for authentication against the CIFS file system. */
  password: string;
}

/** Information used to connect to an Azure Fileshare. */
export interface AzureFileShareConfiguration {
  /** The Azure Storage account name. */
  accountName: string;
  /** The Azure Files URL. This is of the form 'https://{account}.file.core.windows.net/'. */
  azureFileUrl: string;
  /** The Azure Storage account key. */
  accountKey: string;
  /** The relative path on the compute node where the file system will be mounted. All file systems are mounted relative to the Batch mounts directory, accessible via the AZ_BATCH_NODE_MOUNTS_DIR environment variable. */
  relativeMountPath: string;
  /** Additional command line options to pass to the mount command. These are 'net use' options in Windows and 'mount' options in Linux. */
  mountOptions?: string;
}

/** Represents a name-value pair. */
export interface NameValuePair {
  /** The name in the name-value pair. */
  name?: string;
  /** The value in the name-value pair. */
  value?: string;
}

/** Options for updating an Azure Batch Pool. */
export interface BatchPoolUpdateOptions {
  /** A Task to run on each Compute Node as it joins the Pool. The Task runs when the Compute Node is added to the Pool or when the Compute Node is restarted. If this element is present, it overwrites any existing StartTask. If omitted, any existing StartTask is left unchanged. */
  startTask?: StartTask;
  /**
   * If this element is present, it replaces any existing Certificate references configured on the Pool.
   * If omitted, any existing Certificate references are left unchanged.
   * For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location.
   * For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location.
   * For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory.
   * Warning: This property is deprecated and will be removed after February, 2024. Please use the [Azure KeyVault Extension](https://learn.microsoft.com/azure/batch/batch-certificate-migration-guide) instead.
   */
  certificateReferences?: Array<CertificateReference>;
  /** A list of Packages to be installed on each Compute Node in the Pool. Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. If this element is present, it replaces any existing Package references. If you specify an empty collection, then all Package references are removed from the Pool. If omitted, any existing Package references are left unchanged. */
  applicationPackageReferences?: Array<ApplicationPackageReference>;
  /** A list of name-value pairs associated with the Pool as metadata. If this element is present, it replaces any existing metadata configured on the Pool. If you specify an empty collection, any metadata is removed from the Pool. If omitted, any existing metadata is left unchanged. */
  metadata?: Array<MetadataItem>;
  /**
   * The desired node communication mode for the pool. If this element is present, it replaces the existing targetNodeCommunicationMode configured on the Pool. If omitted, any existing metadata is left unchanged.
   *
   * Possible values: "default", "classic", "simplified"
   */
  targetNodeCommunicationMode?: string;
}

/** Options for enabling automatic scaling on an Azure Batch Pool. */
export interface BatchPoolEnableAutoScaleOptions {
  /** The formula for the desired number of Compute Nodes in the Pool. The formula is checked for validity before it is applied to the Pool. If the formula is not valid, the Batch service rejects the request with detailed error information. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling). */
  autoScaleFormula?: string;
  /** The time interval at which to automatically adjust the Pool size according to the autoscale formula. The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If you specify a new interval, then the existing autoscale evaluation schedule will be stopped and a new autoscale evaluation schedule will be started, with its starting time being the time when this request was issued. */
  autoScaleEvaluationInterval?: string;
}

/** Options for evaluating an automatic scaling formula on an Azure Batch Pool. */
export interface BatchPoolEvaluateAutoScaleOptions {
  /** The formula for the desired number of Compute Nodes in the Pool. The formula is validated and its results calculated, but it is not applied to the Pool. To apply the formula to the Pool, 'Enable automatic scaling on a Pool'. For more information about specifying this formula, see Automatically scale Compute Nodes in an Azure Batch Pool (https://azure.microsoft.com/en-us/documentation/articles/batch-automatic-scaling). */
  autoScaleFormula: string;
}

/** Options for changing the size of an Azure Batch Pool. */
export interface BatchPoolResizeOptions {
  /** The desired number of dedicated Compute Nodes in the Pool. */
  targetDedicatedNodes?: number;
  /** The desired number of Spot/Low-priority Compute Nodes in the Pool. */
  targetLowPriorityNodes?: number;
  /** The timeout for allocation of Nodes to the Pool or removal of Compute Nodes from the Pool. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
  resizeTimeout?: string;
  /**
   * Determines what to do with a Compute Node and its running task(s) if the Pool size is decreasing. The default value is requeue.
   *
   * Possible values: "requeue", "terminate", "taskcompletion", "retaineddata"
   */
  nodeDeallocationOption?: string;
}

/** Options for replacing properties on an Azure Batch Pool. */
export interface BatchPoolReplaceOptions {
  /** A Task to run on each Compute Node as it joins the Pool. The Task runs when the Compute Node is added to the Pool or when the Compute Node is restarted. If this element is present, it overwrites any existing StartTask. If omitted, any existing StartTask is removed from the Pool. */
  startTask?: StartTask;
  /**
   * This list replaces any existing Certificate references configured on the Pool.
   * If you specify an empty collection, any existing Certificate references are removed from the Pool.
   * For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location.
   * For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location.
   * For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory.
   * Warning: This property is deprecated and will be removed after February, 2024. Please use the [Azure KeyVault Extension](https://learn.microsoft.com/azure/batch/batch-certificate-migration-guide) instead.
   */
  certificateReferences: Array<CertificateReference>;
  /** The list of Application Packages to be installed on each Compute Node in the Pool. The list replaces any existing Application Package references on the Pool. Changes to Application Package references affect all new Compute Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Application Package references on any given Pool. If omitted, or if you specify an empty collection, any existing Application Packages references are removed from the Pool. A maximum of 10 references may be specified on a given Pool. */
  applicationPackageReferences: Array<ApplicationPackageReference>;
  /** A list of name-value pairs associated with the Pool as metadata. This list replaces any existing metadata configured on the Pool. If omitted, or if you specify an empty collection, any existing metadata is removed from the Pool. */
  metadata: Array<MetadataItem>;
  /**
   * The desired node communication mode for the pool. This setting replaces any existing targetNodeCommunication setting on the Pool. If omitted, the existing setting is default.
   *
   * Possible values: "default", "classic", "simplified"
   */
  targetNodeCommunicationMode?: string;
}

/** Options for removing nodes from an Azure Batch Pool. */
export interface NodeRemoveOptions {
  /** A list containing the IDs of the Compute Nodes to be removed from the specified Pool. A maximum of 100 nodes may be removed per request. */
  nodeList: string[];
  /** The timeout for removal of Compute Nodes to the Pool. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
  resizeTimeout?: string;
  /**
   * Determines what to do with a Compute Node and its running task(s) after it has been selected for deallocation. The default value is requeue.
   *
   * Possible values: "requeue", "terminate", "taskcompletion", "retaineddata"
   */
  nodeDeallocationOption?: string;
}

/** An Azure Batch Job. */
export interface BatchJob {
  /** The priority of the Job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. */
  priority?: number;
  /** Whether Tasks in this job can be preempted by other high priority jobs. If the value is set to True, other high priority jobs submitted to the system will take precedence and will be able requeue tasks from this job. You can update a job's allowTaskPreemption after it has been created using the update job API. */
  allowTaskPreemption?: boolean;
  /** The maximum number of tasks that can be executed in parallel for the job. The value of maxParallelTasks must be -1 or greater than 0 if specified. If not specified, the default value is -1, which means there's no limit to the number of tasks that can be run at once. You can update a job's maxParallelTasks after it has been created using the update job API. */
  maxParallelTasks?: number;
  /** The execution constraints for the Job. */
  constraints?: JobConstraints;
  /** The Pool settings associated with the Job. */
  poolInfo: PoolInformation;
  /**
   * The action the Batch service should take when all Tasks in the Job are in the completed state. The default is noaction.
   *
   * Possible values: "noaction", "terminatejob"
   */
  onAllTasksComplete?: string;
  /** A list of name-value pairs associated with the Job as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
  metadata?: Array<MetadataItem>;
}

/** The execution constraints for a Job. */
export interface JobConstraints {
  /** The maximum elapsed time that the Job may run, measured from the time the Job is created. If the Job does not complete within the time limit, the Batch service terminates it and any Tasks that are still running. In this case, the termination reason will be MaxWallClockTimeExpiry. If this property is not specified, there is no time limit on how long the Job may run. */
  maxWallClockTime?: string;
  /** The maximum number of times each Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries. The Batch service will try each Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries a Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry Tasks. If the maximum retry count is -1, the Batch service retries Tasks without limit. The default value is 0 (no retries). */
  maxTaskRetryCount?: number;
}

/**
 * Specifies details of a Job Manager Task.
 * The Job Manager Task is automatically started when the Job is created. The
 * Batch service tries to schedule the Job Manager Task before any other Tasks in
 * the Job. When shrinking a Pool, the Batch service tries to preserve Nodes where
 * Job Manager Tasks are running for as long as possible (that is, Compute Nodes
 * running 'normal' Tasks are removed before Compute Nodes running Job Manager
 * Tasks). When a Job Manager Task fails and needs to be restarted, the system
 * tries to schedule it at the highest priority. If there are no idle Compute
 * Nodes available, the system may terminate one of the running Tasks in the Pool
 * and return it to the queue in order to make room for the Job Manager Task to
 * restart. Note that a Job Manager Task in one Job does not have priority over
 * Tasks in other Jobs. Across Jobs, only Job level priorities are observed. For
 * example, if a Job Manager in a priority 0 Job needs to be restarted, it will
 * not displace Tasks of a priority 1 Job. Batch will retry Tasks when a recovery
 * operation is triggered on a Node. Examples of recovery operations include (but
 * are not limited to) when an unhealthy Node is rebooted or a Compute Node
 * disappeared due to host failure. Retries due to recovery operations are
 * independent of and are not counted against the maxTaskRetryCount. Even if the
 * maxTaskRetryCount is 0, an internal retry due to a recovery operation may
 * occur. Because of this, all Tasks should be idempotent. This means Tasks need
 * to tolerate being interrupted and restarted without causing any corruption or
 * duplicate data. The best practice for long running Tasks is to use some form of
 * checkpointing.
 */
export interface JobManagerTask {
  /** A string that uniquely identifies the Job Manager Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. */
  id: string;
  /** The display name of the Job Manager Task. It need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
  displayName?: string;
  /** The command line of the Job Manager Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). */
  commandLine: string;
  /** The settings for the container under which the Job Manager Task runs. If the Pool that will run this Task has containerConfiguration set, this must be set as well. If the Pool that will run this Task doesn't have containerConfiguration set, this must not be set. When this is specified, all directories recursively below the AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the node) are mapped into the container, all Task environment variables are mapped into the container, and the Task command line is executed in the container. Files produced in the container outside of AZ_BATCH_NODE_ROOT_DIR might not be reflected to the host disk, meaning that Batch file APIs will not be able to access those files. */
  containerSettings?: TaskContainerSettings;
  /** A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. */
  resourceFiles?: Array<ResourceFile>;
  /** A list of files that the Batch service will upload from the Compute Node after running the command line. For multi-instance Tasks, the files will only be uploaded from the Compute Node on which the primary Task is executed. */
  outputFiles?: Array<OutputFile>;
  /** A list of environment variable settings for the Job Manager Task. */
  environmentSettings?: Array<EnvironmentSetting>;
  /** Constraints that apply to the Job Manager Task. */
  constraints?: TaskConstraints;
  /** The number of scheduling slots that the Task requires to run. The default is 1. A Task can only be scheduled to run on a compute node if the node has enough free scheduling slots available. For multi-instance Tasks, this property is not supported and must not be specified. */
  requiredSlots?: number;
  /** Whether completion of the Job Manager Task signifies completion of the entire Job. If true, when the Job Manager Task completes, the Batch service marks the Job as complete. If any Tasks are still running at this time (other than Job Release), those Tasks are terminated. If false, the completion of the Job Manager Task does not affect the Job status. In this case, you should either use the onAllTasksComplete attribute to terminate the Job, or have a client or user terminate the Job explicitly. An example of this is if the Job Manager creates a set of Tasks but then takes no further role in their execution. The default value is true. If you are using the onAllTasksComplete and onTaskFailure attributes to control Job lifetime, and using the Job Manager Task only to create the Tasks for the Job (not to monitor progress), then it is important to set killJobOnCompletion to false. */
  killJobOnCompletion?: boolean;
  /** The user identity under which the Job Manager Task runs. If omitted, the Task runs as a non-administrative user unique to the Task. */
  userIdentity?: UserIdentity;
  /** Whether the Job Manager Task requires exclusive use of the Compute Node where it runs. If true, no other Tasks will run on the same Node for as long as the Job Manager is running. If false, other Tasks can run simultaneously with the Job Manager on a Compute Node. The Job Manager Task counts normally against the Compute Node's concurrent Task limit, so this is only relevant if the Compute Node allows multiple concurrent Tasks. The default value is true. */
  runExclusive?: boolean;
  /**
   * A list of Application Packages that the Batch service will deploy to the
   * Compute Node before running the command line.Application Packages are
   * downloaded and deployed to a shared directory, not the Task working
   * directory. Therefore, if a referenced Application Package is already
   * on the Compute Node, and is up to date, then it is not re-downloaded;
   * the existing copy on the Compute Node is used. If a referenced Application
   * Package cannot be installed, for example because the package has been deleted
   * or because download failed, the Task fails.
   */
  applicationPackageReferences?: Array<ApplicationPackageReference>;
  /** The settings for an authentication token that the Task can use to perform Batch service operations. If this property is set, the Batch service provides the Task with an authentication token which can be used to authenticate Batch service operations without requiring an Account access key. The token is provided via the AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The operations that the Task can carry out using the token depend on the settings. For example, a Task can request Job permissions in order to add other Tasks to the Job, or check the status of the Job or of other Tasks under the Job. */
  authenticationTokenSettings?: AuthenticationTokenSettings;
  /** Whether the Job Manager Task may run on a Spot/Low-priority Compute Node. The default value is true. */
  allowLowPriorityNode?: boolean;
}

/** On every file uploads, Batch service writes two log files to the compute node, 'fileuploadout.txt' and 'fileuploaderr.txt'. These log files are used to learn more about a specific failure. */
export interface OutputFile {
  /** A pattern indicating which file(s) to upload. Both relative and absolute paths are supported. Relative paths are relative to the Task working directory. The following wildcards are supported: * matches 0 or more characters (for example pattern abc* would match abc or abcdef), ** matches any directory, ? matches any single character, [abc] matches one character in the brackets, and [a-c] matches one character in the range. */
  filePattern: string;
  /** The destination for the output file(s). */
  destination: OutputFileDestination;
  /** Additional options for the upload operation, including under what conditions to perform the upload. */
  uploadOptions: OutputFileUploadOptions;
}

/** The destination to which a file should be uploaded. */
export interface OutputFileDestination {
  /** A location in Azure blob storage to which files are uploaded. */
  container?: OutputFileBlobContainerDestination;
}

/** Specifies a file upload destination within an Azure blob storage container. */
export interface OutputFileBlobContainerDestination {
  /** The destination blob or virtual directory within the Azure Storage container. If filePattern refers to a specific file (i.e. contains no wildcards), then path is the name of the blob to which to upload that file. If filePattern contains one or more wildcards (and therefore may match multiple files), then path is the name of the blob virtual directory (which is prepended to each blob name) to which to upload the file(s). If omitted, file(s) are uploaded to the root of the container with a blob name matching their file name. */
  path?: string;
  /** The URL of the container within Azure Blob Storage to which to upload the file(s). If not using a managed identity, the URL must include a Shared Access Signature (SAS) granting write permissions to the container. */
  containerUrl: string;
  /** The reference to the user assigned identity to use to access Azure Blob Storage specified by containerUrl. The identity must have write access to the Azure Blob Storage container. */
  identityReference?: BatchNodeIdentityReference;
  /** A list of name-value pairs for headers to be used in uploading output files. These headers will be specified when uploading files to Azure Storage. Official document on allowed headers when uploading blobs: https://docs.microsoft.com/en-us/rest/api/storageservices/put-blob#request-headers-all-blob-types. */
  uploadHeaders?: Array<HttpHeader>;
}

/** An HTTP header name-value pair */
export interface HttpHeader {
  /** The case-insensitive name of the header to be used while uploading output files. */
  name: string;
  /** The value of the header to be used while uploading output files. */
  value?: string;
}

/**
 * Options for an output file upload operation, including under what conditions
 * to perform the upload.
 */
export interface OutputFileUploadOptions {
  /**
   * The conditions under which the Task output file or set of files should be uploaded. The default is taskcompletion.
   *
   * Possible values: "tasksuccess", "taskfailure", "taskcompletion"
   */
  uploadCondition: string;
}

/** Execution constraints to apply to a Task. */
export interface TaskConstraints {
  /** The maximum elapsed time that the Task may run, measured from the time the Task starts. If the Task does not complete within the time limit, the Batch service terminates it. If this is not specified, there is no time limit on how long the Task may run. */
  maxWallClockTime?: string;
  /** The minimum time to retain the Task directory on the Compute Node where it ran, from the time it completes execution. After this time, the Batch service may delete the Task directory and all its contents. The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted. */
  retentionTime?: string;
  /** The maximum number of times the Task may be retried. The Batch service retries a Task if its exit code is nonzero. Note that this value specifically controls the number of retries for the Task executable due to a nonzero exit code. The Batch service will try the Task once, and may then retry up to this limit. For example, if the maximum retry count is 3, Batch tries the Task up to 4 times (one initial try and 3 retries). If the maximum retry count is 0, the Batch service does not retry the Task after the first attempt. If the maximum retry count is -1, the Batch service retries the Task without limit, however this is not recommended for a start task or any task. The default value is 0 (no retries). */
  maxTaskRetryCount?: number;
}

/**
 * The settings for an authentication token that the Task can use to perform Batch
 * service operations.
 */
export interface AuthenticationTokenSettings {
  /** The Batch resources to which the token grants access. The authentication token grants access to a limited set of Batch service operations. Currently the only supported value for the access property is 'job', which grants access to all operations related to the Job which contains the Task. */
  access?: string[];
}

/**
 * A Job Preparation Task to run before any Tasks of the Job on any given Compute Node.
 * You can use Job Preparation to prepare a Node to run Tasks for the Job.
 * Activities commonly performed in Job Preparation include: Downloading common
 * resource files used by all the Tasks in the Job. The Job Preparation Task can
 * download these common resource files to the shared location on the Node.
 * (AZ_BATCH_NODE_ROOT_DIR\shared), or starting a local service on the Node so
 * that all Tasks of that Job can communicate with it. If the Job Preparation Task
 * fails (that is, exhausts its retry count before exiting with exit code 0),
 * Batch will not run Tasks of this Job on the Node. The Compute Node remains
 * ineligible to run Tasks of this Job until it is reimaged. The Compute Node
 * remains active and can be used for other Jobs. The Job Preparation Task can run
 * multiple times on the same Node. Therefore, you should write the Job
 * Preparation Task to handle re-execution. If the Node is rebooted, the Job
 * Preparation Task is run again on the Compute Node before scheduling any other
 * Task of the Job, if rerunOnNodeRebootAfterSuccess is true or if the Job
 * Preparation Task did not previously complete. If the Node is reimaged, the Job
 * Preparation Task is run again before scheduling any Task of the Job. Batch will
 * retry Tasks when a recovery operation is triggered on a Node. Examples of
 * recovery operations include (but are not limited to) when an unhealthy Node is
 * rebooted or a Compute Node disappeared due to host failure. Retries due to
 * recovery operations are independent of and are not counted against the
 * maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal retry due to
 * a recovery operation may occur. Because of this, all Tasks should be
 * idempotent. This means Tasks need to tolerate being interrupted and restarted
 * without causing any corruption or duplicate data. The best practice for long
 * running Tasks is to use some form of checkpointing.
 */
export interface JobPreparationTask {
  /** A string that uniquely identifies the Job Preparation Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobpreparation'. No other Task in the Job can have the same ID as the Job Preparation Task. If you try to submit a Task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobPreparationTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict). */
  id?: string;
  /** The command line of the Job Preparation Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). */
  commandLine: string;
  /** The settings for the container under which the Job Preparation Task runs. When this is specified, all directories recursively below the AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the node) are mapped into the container, all Task environment variables are mapped into the container, and the Task command line is executed in the container. Files produced in the container outside of AZ_BATCH_NODE_ROOT_DIR might not be reflected to the host disk, meaning that Batch file APIs will not be able to access those files. */
  containerSettings?: TaskContainerSettings;
  /** A list of files that the Batch service will download to the Compute Node before running the command line. Files listed under this element are located in the Task's working directory.  There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. */
  resourceFiles?: Array<ResourceFile>;
  /** A list of environment variable settings for the Job Preparation Task. */
  environmentSettings?: Array<EnvironmentSetting>;
  /** Constraints that apply to the Job Preparation Task. */
  constraints?: TaskConstraints;
  /** Whether the Batch service should wait for the Job Preparation Task to complete successfully before scheduling any other Tasks of the Job on the Compute Node. A Job Preparation Task has completed successfully if it exits with exit code 0. If true and the Job Preparation Task fails on a Node, the Batch service retries the Job Preparation Task up to its maximum retry count (as specified in the constraints element). If the Task has still not completed successfully after all retries, then the Batch service will not schedule Tasks of the Job to the Node. The Node remains active and eligible to run Tasks of other Jobs. If false, the Batch service will not wait for the Job Preparation Task to complete. In this case, other Tasks of the Job can start executing on the Compute Node while the Job Preparation Task is still running; and even if the Job Preparation Task fails, new Tasks will continue to be scheduled on the Compute Node. The default value is true. */
  waitForSuccess?: boolean;
  /** The user identity under which the Job Preparation Task runs. If omitted, the Task runs as a non-administrative user unique to the Task on Windows Compute Nodes, or a non-administrative user unique to the Pool on Linux Compute Nodes. */
  userIdentity?: UserIdentity;
  /** Whether the Batch service should rerun the Job Preparation Task after a Compute Node reboots. The Job Preparation Task is always rerun if a Compute Node is reimaged, or if the Job Preparation Task did not complete (e.g. because the reboot occurred while the Task was running). Therefore, you should always write a Job Preparation Task to be idempotent and to behave correctly if run multiple times. The default value is true. */
  rerunOnNodeRebootAfterSuccess?: boolean;
}

/**
 * A Job Release Task to run on Job completion on any Compute Node where the Job has run.
 * The Job Release Task runs when the Job ends, because of one of the following:
 * The user calls the Terminate Job API, or the Delete Job API while the Job is
 * still active, the Job's maximum wall clock time constraint is reached, and the
 * Job is still active, or the Job's Job Manager Task completed, and the Job is
 * configured to terminate when the Job Manager completes. The Job Release Task
 * runs on each Node where Tasks of the Job have run and the Job Preparation Task
 * ran and completed. If you reimage a Node after it has run the Job Preparation
 * Task, and the Job ends without any further Tasks of the Job running on that
 * Node (and hence the Job Preparation Task does not re-run), then the Job Release
 * Task does not run on that Compute Node. If a Node reboots while the Job Release
 * Task is still running, the Job Release Task runs again when the Compute Node
 * starts up. The Job is not marked as complete until all Job Release Tasks have
 * completed. The Job Release Task runs in the background. It does not occupy a
 * scheduling slot; that is, it does not count towards the taskSlotsPerNode limit
 * specified on the Pool.
 */
export interface JobReleaseTask {
  /** A string that uniquely identifies the Job Release Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores and cannot contain more than 64 characters. If you do not specify this property, the Batch service assigns a default value of 'jobrelease'. No other Task in the Job can have the same ID as the Job Release Task. If you try to submit a Task with the same id, the Batch service rejects the request with error code TaskIdSameAsJobReleaseTask; if you are calling the REST API directly, the HTTP status code is 409 (Conflict). */
  id?: string;
  /** The command line of the Job Release Task. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). */
  commandLine: string;
  /** The settings for the container under which the Job Release Task runs. When this is specified, all directories recursively below the AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the node) are mapped into the container, all Task environment variables are mapped into the container, and the Task command line is executed in the container. Files produced in the container outside of AZ_BATCH_NODE_ROOT_DIR might not be reflected to the host disk, meaning that Batch file APIs will not be able to access those files. */
  containerSettings?: TaskContainerSettings;
  /** A list of files that the Batch service will download to the Compute Node before running the command line.  There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. Files listed under this element are located in the Task's working directory. */
  resourceFiles?: Array<ResourceFile>;
  /** A list of environment variable settings for the Job Release Task. */
  environmentSettings?: Array<EnvironmentSetting>;
  /** The maximum elapsed time that the Job Release Task may run on a given Compute Node, measured from the time the Task starts. If the Task does not complete within the time limit, the Batch service terminates it. The default value is 15 minutes. You may not specify a timeout longer than 15 minutes. If you do, the Batch service rejects it with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
  maxWallClockTime?: string;
  /** The minimum time to retain the Task directory for the Job Release Task on the Compute Node. After this time, the Batch service may delete the Task directory and all its contents. The default is 7 days, i.e. the Task directory will be retained for 7 days unless the Compute Node is removed or the Job is deleted. */
  retentionTime?: string;
  /** The user identity under which the Job Release Task runs. If omitted, the Task runs as a non-administrative user unique to the Task. */
  userIdentity?: UserIdentity;
}

/** Specifies how a Job should be assigned to a Pool. */
export interface PoolInformation {
  /** The ID of an existing Pool. All the Tasks of the Job will run on the specified Pool. You must ensure that the Pool referenced by this property exists. If the Pool does not exist at the time the Batch service tries to schedule a Job, no Tasks for the Job will run until you create a Pool with that id. Note that the Batch service will not reject the Job request; it will simply not run Tasks until the Pool exists. You must specify either the Pool ID or the auto Pool specification, but not both. */
  poolId?: string;
  /** Characteristics for a temporary 'auto pool'. The Batch service will create this auto Pool when the Job is submitted. If auto Pool creation fails, the Batch service moves the Job to a completed state, and the Pool creation error is set in the Job's scheduling error property. The Batch service manages the lifetime (both creation and, unless keepAlive is specified, deletion) of the auto Pool. Any user actions that affect the lifetime of the auto Pool while the Job is active will result in unexpected behavior. You must specify either the Pool ID or the auto Pool specification, but not both. */
  autoPoolSpecification?: AutoPoolSpecification;
}

/**
 * Specifies characteristics for a temporary 'auto pool'. The Batch service will
 * create this auto Pool when the Job is submitted.
 */
export interface AutoPoolSpecification {
  /** A prefix to be added to the unique identifier when a Pool is automatically created. The Batch service assigns each auto Pool a unique identifier on creation. To distinguish between Pools created for different purposes, you can specify this element to add a prefix to the ID that is assigned. The prefix can be up to 20 characters long. */
  autoPoolIdPrefix?: string;
  /**
   * The minimum lifetime of created auto Pools, and how multiple Jobs on a schedule are assigned to Pools.
   *
   * Possible values: "jobschedule", "job"
   */
  poolLifetimeOption: string;
  /** Whether to keep an auto Pool alive after its lifetime expires. If false, the Batch service deletes the Pool once its lifetime (as determined by the poolLifetimeOption setting) expires; that is, when the Job or Job Schedule completes. If true, the Batch service does not delete the Pool automatically. It is up to the user to delete auto Pools created with this option. */
  keepAlive?: boolean;
  /** The Pool specification for the auto Pool. */
  pool?: PoolSpecification;
}

/** Specification for creating a new Pool. */
export interface PoolSpecification {
  /** The display name for the Pool. The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
  displayName?: string;
  /** The size of the virtual machines in the Pool. All virtual machines in a Pool are the same size. For information about available sizes of virtual machines in Pools, see Choose a VM size for Compute Nodes in an Azure Batch Pool (https://docs.microsoft.com/azure/batch/batch-pool-vm-sizes). */
  vmSize: string;
  /** The cloud service configuration for the Pool. This property must be specified if the Pool needs to be created with Azure PaaS VMs. This property and virtualMachineConfiguration are mutually exclusive and one of the properties must be specified. If neither is specified then the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). This property cannot be specified if the Batch Account was created with its poolAllocationMode property set to 'UserSubscription'. */
  cloudServiceConfiguration?: CloudServiceConfiguration;
  /** The virtual machine configuration for the Pool. This property must be specified if the Pool needs to be created with Azure IaaS VMs. This property and cloudServiceConfiguration are mutually exclusive and one of the properties must be specified. If neither is specified then the Batch service returns an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
  virtualMachineConfiguration?: VirtualMachineConfiguration;
  /** The number of task slots that can be used to run concurrent tasks on a single compute node in the pool. The default value is 1. The maximum value is the smaller of 4 times the number of cores of the vmSize of the pool or 256. */
  taskSlotsPerNode?: number;
  /** How Tasks are distributed across Compute Nodes in a Pool. If not specified, the default is spread. */
  taskSchedulingPolicy?: TaskSchedulingPolicy;
  /** The timeout for allocation of Compute Nodes to the Pool. This timeout applies only to manual scaling; it has no effect when enableAutoScale is set to true. The default value is 15 minutes. The minimum value is 5 minutes. If you specify a value less than 5 minutes, the Batch service rejects the request with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
  resizeTimeout?: string;
  /** The desired number of dedicated Compute Nodes in the Pool. This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
  targetDedicatedNodes?: number;
  /** The desired number of Spot/Low-priority Compute Nodes in the Pool. This property must not be specified if enableAutoScale is set to true. If enableAutoScale is set to false, then you must set either targetDedicatedNodes, targetLowPriorityNodes, or both. */
  targetLowPriorityNodes?: number;
  /** Whether the Pool size should automatically adjust over time. If false, at least one of targetDedicatedNodes and targetLowPriorityNodes must be specified. If true, the autoScaleFormula element is required. The Pool automatically resizes according to the formula. The default value is false. */
  enableAutoScale?: boolean;
  /** The formula for the desired number of Compute Nodes in the Pool. This property must not be specified if enableAutoScale is set to false. It is required if enableAutoScale is set to true. The formula is checked for validity before the Pool is created. If the formula is not valid, the Batch service rejects the request with detailed error information. */
  autoScaleFormula?: string;
  /** The time interval at which to automatically adjust the Pool size according to the autoscale formula. The default value is 15 minutes. The minimum and maximum value are 5 minutes and 168 hours respectively. If you specify a value less than 5 minutes or greater than 168 hours, the Batch service rejects the request with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
  autoScaleEvaluationInterval?: string;
  /** Whether the Pool permits direct communication between Compute Nodes. Enabling inter-node communication limits the maximum size of the Pool due to deployment restrictions on the Compute Nodes of the Pool. This may result in the Pool not reaching its desired size. The default value is false. */
  enableInterNodeCommunication?: boolean;
  /** The network configuration for the Pool. */
  networkConfiguration?: NetworkConfiguration;
  /** A Task to run on each Compute Node as it joins the Pool. The Task runs when the Compute Node is added to the Pool or when the Compute Node is restarted. */
  startTask?: StartTask;
  /**
   * For Windows Nodes, the Batch service installs the Certificates to the specified Certificate store and location. For Linux Compute Nodes, the Certificates are stored in a directory inside the Task working directory and an environment variable AZ_BATCH_CERTIFICATES_DIR is supplied to the Task to query for this location. For Certificates with visibility of 'remoteUser', a 'certs' directory is created in the user's home directory (e.g., /home/{user-name}/certs) and Certificates are placed in that directory.
   * Warning: This property is deprecated and will be removed after February, 2024.
   * Please use the [Azure KeyVault Extension](https://learn.microsoft.com/azure/batch/batch-certificate-migration-guide) instead.
   */
  certificateReferences?: Array<CertificateReference>;
  /** The list of Packages to be installed on each Compute Node in the Pool. When creating a pool, the package's application ID must be fully qualified (/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/applications/{applicationName}). Changes to Package references affect all new Nodes joining the Pool, but do not affect Compute Nodes that are already in the Pool until they are rebooted or reimaged. There is a maximum of 10 Package references on any given Pool. */
  applicationPackageReferences?: Array<ApplicationPackageReference>;
  /** The list of application licenses the Batch service will make available on each Compute Node in the Pool. The list of application licenses must be a subset of available Batch service application licenses. If a license is requested which is not supported, Pool creation will fail. The permitted licenses available on the Pool are 'maya', 'vray', '3dsmax', 'arnold'. An additional charge applies for each application license added to the Pool. */
  applicationLicenses?: string[];
  /** The list of user Accounts to be created on each Compute Node in the Pool. */
  userAccounts?: Array<UserAccount>;
  /** A list of name-value pairs associated with the Pool as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
  metadata?: Array<MetadataItem>;
  /** A list of file systems to mount on each node in the pool. This supports Azure Files, NFS, CIFS/SMB, and Blobfuse. */
  mountConfiguration?: Array<MountConfiguration>;
  /**
   * The desired node communication mode for the pool. If omitted, the default value is Default.
   *
   * Possible values: "default", "classic", "simplified"
   */
  targetNodeCommunicationMode?: string;
}

/** The network configuration for the Job. */
export interface JobNetworkConfiguration {
  /** The ARM resource identifier of the virtual network subnet which Compute Nodes running Tasks from the Job will join for the duration of the Task. This will only work with a VirtualMachineConfiguration Pool. The virtual network must be in the same region and subscription as the Azure Batch Account. The specified subnet should have enough free IP addresses to accommodate the number of Compute Nodes which will run Tasks from the Job. This can be up to the number of Compute Nodes in the Pool. The 'MicrosoftAzureBatch' service principal must have the 'Classic Virtual Machine Contributor' Role-Based Access Control (RBAC) role for the specified VNet so that Azure Batch service can schedule Tasks on the Nodes. This can be verified by checking if the specified VNet has any associated Network Security Groups (NSG). If communication to the Nodes in the specified subnet is denied by an NSG, then the Batch service will set the state of the Compute Nodes to unusable. This is of the form /subscriptions/{subscription}/resourceGroups/{group}/providers/{provider}/virtualNetworks/{network}/subnets/{subnet}. If the specified VNet has any associated Network Security Groups (NSG), then a few reserved system ports must be enabled for inbound communication from the Azure Batch service. For Pools created with a Virtual Machine configuration, enable ports 29876 and 29877, as well as port 22 for Linux and port 3389 for Windows. Port 443 is also required to be open for outbound connections for communications to Azure Storage. For more details see: https://docs.microsoft.com/en-us/azure/batch/batch-api-basics#virtual-network-vnet-and-firewall-configuration. */
  subnetId: string;
}

/** Contains information about the execution of a Job in the Azure Batch service. */
export interface JobExecutionInformation {
  /** The start time of the Job. This is the time at which the Job was created. */
  startTime: Date | string;
  /** The completion time of the Job. This property is set only if the Job is in the completed state. */
  endTime?: Date | string;
  /** The ID of the Pool to which this Job is assigned. This element contains the actual Pool where the Job is assigned. When you get Job details from the service, they also contain a poolInfo element, which contains the Pool configuration data from when the Job was added or updated. That poolInfo element may also contain a poolId element. If it does, the two IDs are the same. If it does not, it means the Job ran on an auto Pool, and this property contains the ID of that auto Pool. */
  poolId?: string;
  /** Details of any error encountered by the service in starting the Job. This property is not set if there was no error starting the Job. */
  schedulingError?: JobSchedulingError;
  /** A string describing the reason the Job ended. This property is set only if the Job is in the completed state. If the Batch service terminates the Job, it sets the reason as follows: JMComplete - the Job Manager Task completed, and killJobOnCompletion was set to true. MaxWallClockTimeExpiry - the Job reached its maxWallClockTime constraint. TerminateJobSchedule - the Job ran as part of a schedule, and the schedule terminated. AllTasksComplete - the Job's onAllTasksComplete attribute is set to terminatejob, and all Tasks in the Job are complete. TaskFailed - the Job's onTaskFailure attribute is set to performExitOptionsJobAction, and a Task in the Job failed with an exit condition that specified a jobAction of terminatejob. Any other string is a user-defined reason specified in a call to the 'Terminate a Job' operation. */
  terminateReason?: string;
}

/** An error encountered by the Batch service when scheduling a Job. */
export interface JobSchedulingError {
  /**
   * The category of the Job scheduling error.
   *
   * Possible values: "usererror", "servererror"
   */
  category: string;
  /** An identifier for the Job scheduling error. Codes are invariant and are intended to be consumed programmatically. */
  code?: string;
  /** A message describing the Job scheduling error, intended to be suitable for display in a user interface. */
  message?: string;
  /** A list of additional error details related to the scheduling error. */
  details?: Array<NameValuePair>;
}

/** Resource usage statistics for a Job. */
export interface JobStatistics {
  /** The URL of the statistics. */
  url: string;
  /** The start time of the time range covered by the statistics. */
  startTime: Date | string;
  /** The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime. */
  lastUpdateTime: Date | string;
  /** The total user mode CPU time (summed across all cores and all Compute Nodes) consumed by all Tasks in the Job. */
  userCPUTime: string;
  /** The total kernel mode CPU time (summed across all cores and all Compute Nodes) consumed by all Tasks in the Job. */
  kernelCPUTime: string;
  /** The total wall clock time of all Tasks in the Job.  The wall clock time is the elapsed time from when the Task started running on a Compute Node to when it finished (or to the last time the statistics were updated, if the Task had not finished by then). If a Task was retried, this includes the wall clock time of all the Task retries. */
  wallClockTime: string;
  /** The total number of disk read operations made by all Tasks in the Job. */
  readIOps: number;
  /** The total number of disk write operations made by all Tasks in the Job. */
  writeIOps: number;
  /** The total amount of data in GiB read from disk by all Tasks in the Job. */
  readIOGiB: number;
  /** The total amount of data in GiB written to disk by all Tasks in the Job. */
  writeIOGiB: number;
  /** The total number of Tasks successfully completed in the Job during the given time range. A Task completes successfully if it returns exit code 0. */
  numSucceededTasks: number;
  /** The total number of Tasks in the Job that failed during the given time range. A Task fails if it exhausts its maximum retry count without returning exit code 0. */
  numFailedTasks: number;
  /** The total number of retries on all the Tasks in the Job during the given time range. */
  numTaskRetries: number;
  /** The total wait time of all Tasks in the Job. The wait time for a Task is defined as the elapsed time between the creation of the Task and the start of Task execution. (If the Task is retried due to failures, the wait time is the time to the most recent Task execution.) This value is only reported in the Account lifetime statistics; it is not included in the Job statistics. */
  waitTime: string;
}

/** Options for updating an Azure Batch Job. */
export interface BatchJobUpdateOptions {
  /** The priority of the Job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. If omitted, the priority of the Job is left unchanged. */
  priority?: number;
  /** Whether Tasks in this job can be preempted by other high priority jobs. If the value is set to True, other high priority jobs submitted to the system will take precedence and will be able requeue tasks from this job. You can update a job's allowTaskPreemption after it has been created using the update job API. */
  allowTaskPreemption?: boolean;
  /** The maximum number of tasks that can be executed in parallel for the job. The value of maxParallelTasks must be -1 or greater than 0 if specified. If not specified, the default value is -1, which means there's no limit to the number of tasks that can be run at once. You can update a job's maxParallelTasks after it has been created using the update job API. */
  maxParallelTasks?: number;
  /** The execution constraints for the Job. If omitted, the existing execution constraints are left unchanged. */
  constraints?: JobConstraints;
  /** The Pool on which the Batch service runs the Job's Tasks. You may change the Pool for a Job only when the Job is disabled. The Patch Job call will fail if you include the poolInfo element and the Job is not disabled. If you specify an autoPoolSpecification in the poolInfo, only the keepAlive property of the autoPoolSpecification can be updated, and then only if the autoPoolSpecification has a poolLifetimeOption of Job (other job properties can be updated as normal). If omitted, the Job continues to run on its current Pool. */
  poolInfo?: PoolInformation;
  /**
   * The action the Batch service should take when all Tasks in the Job are in the completed state. If omitted, the completion behavior is left unchanged. You may not change the value from terminatejob to noaction - that is, once you have engaged automatic Job termination, you cannot turn it off again. If you try to do this, the request fails with an 'invalid property value' error response; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
   *
   * Possible values: "noaction", "terminatejob"
   */
  onAllTasksComplete?: string;
  /** A list of name-value pairs associated with the Job as metadata. If omitted, the existing Job metadata is left unchanged. */
  metadata?: Array<MetadataItem>;
}

/** Options for disabling an Azure Batch Job. */
export interface BatchJobDisableOptions {
  /**
   * What to do with active Tasks associated with the Job.
   *
   * Possible values: "requeue", "terminate", "wait"
   */
  disableTasks: string;
}

/** Options for terminating an Azure Batch Job. */
export interface BatchJobTerminateOptions {
  /** The text you want to appear as the Job's TerminateReason. The default is 'UserTerminate'. */
  terminateReason?: string;
}

/** Options for creating an Azure Batch Job. */
export interface BatchJobCreateOptions {
  /** A string that uniquely identifies the Job within the Account. The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case). */
  id: string;
  /** The display name for the Job. The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
  displayName?: string;
  /** Whether Tasks in the Job can define dependencies on each other. The default is false. */
  usesTaskDependencies?: boolean;
  /** The priority of the Job. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. */
  priority?: number;
  /** Whether Tasks in this job can be preempted by other high priority jobs. If the value is set to True, other high priority jobs submitted to the system will take precedence and will be able requeue tasks from this job. You can update a job's allowTaskPreemption after it has been created using the update job API. */
  allowTaskPreemption?: boolean;
  /** The maximum number of tasks that can be executed in parallel for the job. The value of maxParallelTasks must be -1 or greater than 0 if specified. If not specified, the default value is -1, which means there's no limit to the number of tasks that can be run at once. You can update a job's maxParallelTasks after it has been created using the update job API. */
  maxParallelTasks?: number;
  /** The execution constraints for the Job. */
  constraints?: JobConstraints;
  /** Details of a Job Manager Task to be launched when the Job is started. If the Job does not specify a Job Manager Task, the user must explicitly add Tasks to the Job. If the Job does specify a Job Manager Task, the Batch service creates the Job Manager Task when the Job is created, and will try to schedule the Job Manager Task before scheduling other Tasks in the Job. The Job Manager Task's typical purpose is to control and/or monitor Job execution, for example by deciding what additional Tasks to run, determining when the work is complete, etc. (However, a Job Manager Task is not restricted to these activities - it is a fully-fledged Task in the system and perform whatever actions are required for the Job.) For example, a Job Manager Task might download a file specified as a parameter, analyze the contents of that file and submit additional Tasks based on those contents. */
  jobManagerTask?: JobManagerTask;
  /** The Job Preparation Task. If a Job has a Job Preparation Task, the Batch service will run the Job Preparation Task on a Node before starting any Tasks of that Job on that Compute Node. */
  jobPreparationTask?: JobPreparationTask;
  /** The Job Release Task. A Job Release Task cannot be specified without also specifying a Job Preparation Task for the Job. The Batch service runs the Job Release Task on the Nodes that have run the Job Preparation Task. The primary purpose of the Job Release Task is to undo changes to Compute Nodes made by the Job Preparation Task. Example activities include deleting local files, or shutting down services that were started as part of Job preparation. */
  jobReleaseTask?: JobReleaseTask;
  /** The list of common environment variable settings. These environment variables are set for all Tasks in the Job (including the Job Manager, Job Preparation and Job Release Tasks). Individual Tasks can override an environment setting specified here by specifying the same setting name with a different value. */
  commonEnvironmentSettings?: Array<EnvironmentSetting>;
  /** The Pool on which the Batch service runs the Job's Tasks. */
  poolInfo: PoolInformation;
  /**
   * The action the Batch service should take when all Tasks in the Job are in the completed state. Note that if a Job contains no Tasks, then all Tasks are considered complete. This option is therefore most commonly used with a Job Manager task; if you want to use automatic Job termination without a Job Manager, you should initially set onAllTasksComplete to noaction and update the Job properties to set onAllTasksComplete to terminatejob once you have finished adding Tasks. The default is noaction.
   *
   * Possible values: "noaction", "terminatejob"
   */
  onAllTasksComplete?: string;
  /**
   * The action the Batch service should take when any Task in the Job fails. A Task is considered to have failed if has a failureInfo. A failureInfo is set if the Task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the Task, for example due to a resource file download error. The default is noaction.
   *
   * Possible values: "noaction", "performexitoptionsjobaction"
   */
  onTaskFailure?: string;
  /** The network configuration for the Job. */
  networkConfiguration?: JobNetworkConfiguration;
  /** A list of name-value pairs associated with the Job as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
  metadata?: Array<MetadataItem>;
}

/** Contains information about the container which a Task is executing. */
export interface TaskContainerExecutionInformation {
  /** The ID of the container. */
  containerId?: string;
  /** The state of the container. This is the state of the container according to the Docker service. It is equivalent to the status field returned by "docker inspect". */
  state?: string;
  /** Detailed error information about the container. This is the detailed error string from the Docker service, if available. It is equivalent to the error field returned by "docker inspect". */
  error?: string;
}

/** Information about a Task failure. */
export interface TaskFailureInformation {
  /**
   * The category of the Task error.
   *
   * Possible values: "usererror", "servererror"
   */
  category: string;
  /** An identifier for the Task error. Codes are invariant and are intended to be consumed programmatically. */
  code?: string;
  /** A message describing the Task error, intended to be suitable for display in a user interface. */
  message?: string;
  /** A list of additional details related to the error. */
  details?: Array<NameValuePair>;
}

/**
 * A Certificate that can be installed on Compute Nodes and can be used to
 * authenticate operations on the machine.
 */
export interface BatchCertificate {
  /** The X.509 thumbprint of the Certificate. This is a sequence of up to 40 hex digits (it may include spaces but these are removed). */
  thumbprint: string;
  /** The algorithm used to derive the thumbprint. This must be sha1. */
  thumbprintAlgorithm: string;
  /** The base64-encoded contents of the Certificate. The maximum size is 10KB. */
  data: string;
  /**
   * The format of the Certificate data.
   *
   * Possible values: "pfx", "cer"
   */
  certificateFormat?: string;
  /** The password to access the Certificate's private key. This must be omitted if the Certificate format is cer. */
  password?: string;
}

/** An error encountered by the Batch service when deleting a Certificate. */
export interface DeleteCertificateError {
  /** An identifier for the Certificate deletion error. Codes are invariant and are intended to be consumed programmatically. */
  code?: string;
  /** A message describing the Certificate deletion error, intended to be suitable for display in a user interface. */
  message?: string;
  /** A list of additional error details related to the Certificate deletion error. This list includes details such as the active Pools and Compute Nodes referencing this Certificate. However, if a large number of resources reference the Certificate, the list contains only about the first hundred. */
  values?: Array<NameValuePair>;
}

/**
 * A Job Schedule that allows recurring Jobs by specifying when to run Jobs and a
 * specification used to create each Job.
 */
export interface BatchJobSchedule {
  /** The schedule according to which Jobs will be created. All times are fixed respective to UTC and are not impacted by daylight saving time. */
  schedule: Schedule;
  /** The details of the Jobs to be created on this schedule. */
  jobSpecification: JobSpecification;
  /** A list of name-value pairs associated with the schedule as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
  metadata?: Array<MetadataItem>;
}

/**
 * The schedule according to which Jobs will be created. All times are fixed
 * respective to UTC and are not impacted by daylight saving time.
 */
export interface Schedule {
  /** The earliest time at which any Job may be created under this Job Schedule. If you do not specify a doNotRunUntil time, the schedule becomes ready to create Jobs immediately. */
  doNotRunUntil?: Date | string;
  /** A time after which no Job will be created under this Job Schedule. The schedule will move to the completed state as soon as this deadline is past and there is no active Job under this Job Schedule. If you do not specify a doNotRunAfter time, and you are creating a recurring Job Schedule, the Job Schedule will remain active until you explicitly terminate it. */
  doNotRunAfter?: Date | string;
  /** The time interval, starting from the time at which the schedule indicates a Job should be created, within which a Job must be created. If a Job is not created within the startWindow interval, then the 'opportunity' is lost; no Job will be created until the next recurrence of the schedule. If the schedule is recurring, and the startWindow is longer than the recurrence interval, then this is equivalent to an infinite startWindow, because the Job that is 'due' in one recurrenceInterval is not carried forward into the next recurrence interval. The default is infinite. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
  startWindow?: string;
  /** The time interval between the start times of two successive Jobs under the Job Schedule. A Job Schedule can have at most one active Job under it at any given time. Because a Job Schedule can have at most one active Job under it at any given time, if it is time to create a new Job under a Job Schedule, but the previous Job is still running, the Batch service will not create the new Job until the previous Job finishes. If the previous Job does not finish within the startWindow period of the new recurrenceInterval, then no new Job will be scheduled for that interval. For recurring Jobs, you should normally specify a jobManagerTask in the jobSpecification. If you do not use jobManagerTask, you will need an external process to monitor when Jobs are created, add Tasks to the Jobs and terminate the Jobs ready for the next recurrence. The default is that the schedule does not recur: one Job is created, within the startWindow after the doNotRunUntil time, and the schedule is complete as soon as that Job finishes. The minimum value is 1 minute. If you specify a lower value, the Batch service rejects the schedule with an error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
  recurrenceInterval?: string;
}

/** Specifies details of the Jobs to be created on a schedule. */
export interface JobSpecification {
  /** The priority of Jobs created under this schedule. Priority values can range from -1000 to 1000, with -1000 being the lowest priority and 1000 being the highest priority. The default value is 0. This priority is used as the default for all Jobs under the Job Schedule. You can update a Job's priority after it has been created using by using the update Job API. */
  priority?: number;
  /** Whether Tasks in this job can be preempted by other high priority jobs. If the value is set to True, other high priority jobs submitted to the system will take precedence and will be able requeue tasks from this job. You can update a job's allowTaskPreemption after it has been created using the update job API. */
  allowTaskPreemption?: boolean;
  /** The maximum number of tasks that can be executed in parallel for the job. The value of maxParallelTasks must be -1 or greater than 0 if specified. If not specified, the default value is -1, which means there's no limit to the number of tasks that can be run at once. You can update a job's maxParallelTasks after it has been created using the update job API. */
  maxParallelTasks?: number;
  /** The display name for Jobs created under this schedule. The name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
  displayName?: string;
  /** Whether Tasks in the Job can define dependencies on each other. The default is false. */
  usesTaskDependencies?: boolean;
  /**
   * The action the Batch service should take when all Tasks in a Job created under this schedule are in the completed state. Note that if a Job contains no Tasks, then all Tasks are considered complete. This option is therefore most commonly used with a Job Manager task; if you want to use automatic Job termination without a Job Manager, you should initially set onAllTasksComplete to noaction and update the Job properties to set onAllTasksComplete to terminatejob once you have finished adding Tasks. The default is noaction.
   *
   * Possible values: "noaction", "terminatejob"
   */
  onAllTasksComplete?: string;
  /**
   * The action the Batch service should take when any Task fails in a Job created under this schedule. A Task is considered to have failed if it have failed if has a failureInfo. A failureInfo is set if the Task completes with a non-zero exit code after exhausting its retry count, or if there was an error starting the Task, for example due to a resource file download error. The default is noaction.
   *
   * Possible values: "noaction", "performexitoptionsjobaction"
   */
  onTaskFailure?: string;
  /** The network configuration for the Job. */
  networkConfiguration?: JobNetworkConfiguration;
  /** The execution constraints for Jobs created under this schedule. */
  constraints?: JobConstraints;
  /** The details of a Job Manager Task to be launched when a Job is started under this schedule. If the Job does not specify a Job Manager Task, the user must explicitly add Tasks to the Job using the Task API. If the Job does specify a Job Manager Task, the Batch service creates the Job Manager Task when the Job is created, and will try to schedule the Job Manager Task before scheduling other Tasks in the Job. */
  jobManagerTask?: JobManagerTask;
  /** The Job Preparation Task for Jobs created under this schedule. If a Job has a Job Preparation Task, the Batch service will run the Job Preparation Task on a Node before starting any Tasks of that Job on that Compute Node. */
  jobPreparationTask?: JobPreparationTask;
  /** The Job Release Task for Jobs created under this schedule. The primary purpose of the Job Release Task is to undo changes to Nodes made by the Job Preparation Task. Example activities include deleting local files, or shutting down services that were started as part of Job preparation. A Job Release Task cannot be specified without also specifying a Job Preparation Task for the Job. The Batch service runs the Job Release Task on the Compute Nodes that have run the Job Preparation Task. */
  jobReleaseTask?: JobReleaseTask;
  /** A list of common environment variable settings. These environment variables are set for all Tasks in Jobs created under this schedule (including the Job Manager, Job Preparation and Job Release Tasks). Individual Tasks can override an environment setting specified here by specifying the same setting name with a different value. */
  commonEnvironmentSettings?: Array<EnvironmentSetting>;
  /** The Pool on which the Batch service runs the Tasks of Jobs created under this schedule. */
  poolInfo: PoolInformation;
  /** A list of name-value pairs associated with each Job created under this schedule as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
  metadata?: Array<MetadataItem>;
}

/**
 * Contains information about Jobs that have been and will be run under a Job
 * Schedule.
 */
export interface JobScheduleExecutionInformation {
  /** The next time at which a Job will be created under this schedule. This property is meaningful only if the schedule is in the active state when the time comes around. For example, if the schedule is disabled, no Job will be created at nextRunTime unless the Job is enabled before then. */
  nextRunTime?: Date | string;
  /** Information about the most recent Job under the Job Schedule. This property is present only if the at least one Job has run under the schedule. */
  recentJob?: RecentJob;
  /** The time at which the schedule ended. This property is set only if the Job Schedule is in the completed state. */
  endTime?: Date | string;
}

/** Information about the most recent Job to run under the Job Schedule. */
export interface RecentJob {
  /** The ID of the Job. */
  id?: string;
  /** The URL of the Job. */
  url?: string;
}

/** Resource usage statistics for a Job Schedule. */
export interface JobScheduleStatistics {
  /** The URL of the statistics. */
  url: string;
  /** The start time of the time range covered by the statistics. */
  startTime: Date | string;
  /** The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime. */
  lastUpdateTime: Date | string;
  /** The total user mode CPU time (summed across all cores and all Compute Nodes) consumed by all Tasks in all Jobs created under the schedule. */
  userCPUTime: string;
  /** The total kernel mode CPU time (summed across all cores and all Compute Nodes) consumed by all Tasks in all Jobs created under the schedule. */
  kernelCPUTime: string;
  /** The total wall clock time of all the Tasks in all the Jobs created under the schedule. The wall clock time is the elapsed time from when the Task started running on a Compute Node to when it finished (or to the last time the statistics were updated, if the Task had not finished by then). If a Task was retried, this includes the wall clock time of all the Task retries. */
  wallClockTime: string;
  /** The total number of disk read operations made by all Tasks in all Jobs created under the schedule. */
  readIOps: number;
  /** The total number of disk write operations made by all Tasks in all Jobs created under the schedule. */
  writeIOps: number;
  /** The total gibibytes read from disk by all Tasks in all Jobs created under the schedule. */
  readIOGiB: number;
  /** The total gibibytes written to disk by all Tasks in all Jobs created under the schedule. */
  writeIOGiB: number;
  /** The total number of Tasks successfully completed during the given time range in Jobs created under the schedule. A Task completes successfully if it returns exit code 0. */
  numSucceededTasks: number;
  /** The total number of Tasks that failed during the given time range in Jobs created under the schedule. A Task fails if it exhausts its maximum retry count without returning exit code 0. */
  numFailedTasks: number;
  /** The total number of retries during the given time range on all Tasks in all Jobs created under the schedule. */
  numTaskRetries: number;
  /** The total wait time of all Tasks in all Jobs created under the schedule. The wait time for a Task is defined as the elapsed time between the creation of the Task and the start of Task execution. (If the Task is retried due to failures, the wait time is the time to the most recent Task execution.). This value is only reported in the Account lifetime statistics; it is not included in the Job statistics. */
  waitTime: string;
}

/** Options for updating an Azure Batch Job Schedule. */
export interface BatchJobScheduleUpdateOptions {
  /** The schedule according to which Jobs will be created. All times are fixed respective to UTC and are not impacted by daylight saving time. If you do not specify this element, the existing schedule is left unchanged. */
  schedule?: Schedule;
  /** The details of the Jobs to be created on this schedule. Updates affect only Jobs that are started after the update has taken place. Any currently active Job continues with the older specification. */
  jobSpecification?: JobSpecification;
  /** A list of name-value pairs associated with the Job Schedule as metadata. If you do not specify this element, existing metadata is left unchanged. */
  metadata?: Array<MetadataItem>;
}

/** Options for creating an Azure Batch Job Schedule */
export interface BatchJobScheduleCreateOptions {
  /** A string that uniquely identifies the schedule within the Account. The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within an Account that differ only by case). */
  id: string;
  /** The display name for the schedule. The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
  displayName?: string;
  /** The schedule according to which Jobs will be created. All times are fixed respective to UTC and are not impacted by daylight saving time. */
  schedule: Schedule;
  /** The details of the Jobs to be created on this schedule. */
  jobSpecification: JobSpecification;
  /** A list of name-value pairs associated with the schedule as metadata. The Batch service does not assign any meaning to metadata; it is solely for the use of user code. */
  metadata?: Array<MetadataItem>;
}

/** Options for creating an Azure Batch Task. */
export interface BatchTaskCreateOptions {
  /** A string that uniquely identifies the Task within the Job. The ID can contain any combination of alphanumeric characters including hyphens and underscores, and cannot contain more than 64 characters. The ID is case-preserving and case-insensitive (that is, you may not have two IDs within a Job that differ only by case). */
  id: string;
  /** A display name for the Task. The display name need not be unique and can contain any Unicode characters up to a maximum length of 1024. */
  displayName?: string;
  /** How the Batch service should respond when the Task completes. */
  exitConditions?: ExitConditions;
  /** The command line of the Task. For multi-instance Tasks, the command line is executed as the primary Task, after the primary Task and all subtasks have finished executing the coordination command line. The command line does not run under a shell, and therefore cannot take advantage of shell features such as environment variable expansion. If you want to take advantage of such features, you should invoke the shell in the command line, for example using "cmd /c MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command line refers to file paths, it should use a relative path (relative to the Task working directory), or use the Batch provided environment variable (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables). */
  commandLine: string;
  /** The settings for the container under which the Task runs. If the Pool that will run this Task has containerConfiguration set, this must be set as well. If the Pool that will run this Task doesn't have containerConfiguration set, this must not be set. When this is specified, all directories recursively below the AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the node) are mapped into the container, all Task environment variables are mapped into the container, and the Task command line is executed in the container. Files produced in the container outside of AZ_BATCH_NODE_ROOT_DIR might not be reflected to the host disk, meaning that Batch file APIs will not be able to access those files. */
  containerSettings?: TaskContainerSettings;
  /** A list of files that the Batch service will download to the Compute Node before running the command line. For multi-instance Tasks, the resource files will only be downloaded to the Compute Node on which the primary Task is executed. There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. */
  resourceFiles?: Array<ResourceFile>;
  /** A list of files that the Batch service will upload from the Compute Node after running the command line. For multi-instance Tasks, the files will only be uploaded from the Compute Node on which the primary Task is executed. */
  outputFiles?: Array<OutputFile>;
  /** A list of environment variable settings for the Task. */
  environmentSettings?: Array<EnvironmentSetting>;
  /** A locality hint that can be used by the Batch service to select a Compute Node on which to start the new Task. */
  affinityInfo?: AffinityInformation;
  /** The execution constraints that apply to this Task. If you do not specify constraints, the maxTaskRetryCount is the maxTaskRetryCount specified for the Job, the maxWallClockTime is infinite, and the retentionTime is 7 days. */
  constraints?: TaskConstraints;
  /** The number of scheduling slots that the Task required to run. The default is 1. A Task can only be scheduled to run on a compute node if the node has enough free scheduling slots available. For multi-instance Tasks, this must be 1. */
  requiredSlots?: number;
  /** The user identity under which the Task runs. If omitted, the Task runs as a non-administrative user unique to the Task. */
  userIdentity?: UserIdentity;
  /** An object that indicates that the Task is a multi-instance Task, and contains information about how to run the multi-instance Task. */
  multiInstanceSettings?: MultiInstanceSettings;
  /** The Tasks that this Task depends on. This Task will not be scheduled until all Tasks that it depends on have completed successfully. If any of those Tasks fail and exhaust their retry counts, this Task will never be scheduled. If the Job does not have usesTaskDependencies set to true, and this element is present, the request fails with error code TaskDependenciesNotSpecifiedOnJob. */
  dependsOn?: TaskDependencies;
  /** A list of Packages that the Batch service will deploy to the Compute Node before running the command line. Application packages are downloaded and deployed to a shared directory, not the Task working directory. Therefore, if a referenced package is already on the Node, and is up to date, then it is not re-downloaded; the existing copy on the Compute Node is used. If a referenced Package cannot be installed, for example because the package has been deleted or because download failed, the Task fails. */
  applicationPackageReferences?: Array<ApplicationPackageReference>;
  /** The settings for an authentication token that the Task can use to perform Batch service operations. If this property is set, the Batch service provides the Task with an authentication token which can be used to authenticate Batch service operations without requiring an Account access key. The token is provided via the AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The operations that the Task can carry out using the token depend on the settings. For example, a Task can request Job permissions in order to add other Tasks to the Job, or check the status of the Job or of other Tasks under the Job. */
  authenticationTokenSettings?: AuthenticationTokenSettings;
}

/** Specifies how the Batch service should respond when the Task completes. */
export interface ExitConditions {
  /** A list of individual Task exit codes and how the Batch service should respond to them. */
  exitCodes?: Array<ExitCodeMapping>;
  /** A list of Task exit code ranges and how the Batch service should respond to them. */
  exitCodeRanges?: Array<ExitCodeRangeMapping>;
  /** How the Batch service should respond if the Task fails to start due to an error. */
  preProcessingError?: ExitOptions;
  /** How the Batch service should respond if a file upload error occurs. If the Task exited with an exit code that was specified via exitCodes or exitCodeRanges, and then encountered a file upload error, then the action specified by the exit code takes precedence. */
  fileUploadError?: ExitOptions;
  /** How the Batch service should respond if the Task fails with an exit condition not covered by any of the other properties. This value is used if the Task exits with any nonzero exit code not listed in the exitCodes or exitCodeRanges collection, with a pre-processing error if the preProcessingError property is not present, or with a file upload error if the fileUploadError property is not present. If you want non-default behavior on exit code 0, you must list it explicitly using the exitCodes or exitCodeRanges collection. */
  default?: ExitOptions;
}

/**
 * How the Batch service should respond if a Task exits with a particular exit
 * code.
 */
export interface ExitCodeMapping {
  /** A process exit code. */
  code: number;
  /** How the Batch service should respond if the Task exits with this exit code. */
  exitOptions: ExitOptions;
}

/** Specifies how the Batch service responds to a particular exit condition. */
export interface ExitOptions {
  /**
   * An action to take on the Job containing the Task, if the Task completes with the given exit condition and the Job's onTaskFailed property is 'performExitOptionsJobAction'. The default is none for exit code 0 and terminate for all other exit conditions. If the Job's onTaskFailed property is noaction, then specifying this property returns an error and the add Task request fails with an invalid property value error; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request).
   *
   * Possible values: "none", "disable", "terminate"
   */
  jobAction?: string;
  /**
   * An action that the Batch service performs on Tasks that depend on this Task. Possible values are 'satisfy' (allowing dependent tasks to progress) and 'block' (dependent tasks continue to wait). Batch does not yet support cancellation of dependent tasks.
   *
   * Possible values: "satisfy", "block"
   */
  dependencyAction?: string;
}

/**
 * A range of exit codes and how the Batch service should respond to exit codes
 * within that range.
 */
export interface ExitCodeRangeMapping {
  /** The first exit code in the range. */
  start: number;
  /** The last exit code in the range. */
  end: number;
  /** How the Batch service should respond if the Task exits with an exit code in the range start to end (inclusive). */
  exitOptions: ExitOptions;
}

/**
 * A locality hint that can be used by the Batch service to select a Compute Node
 * on which to start a Task.
 */
export interface AffinityInformation {
  /** An opaque string representing the location of a Compute Node or a Task that has run previously. You can pass the affinityId of a Node to indicate that this Task needs to run on that Compute Node. Note that this is just a soft affinity. If the target Compute Node is busy or unavailable at the time the Task is scheduled, then the Task will be scheduled elsewhere. */
  affinityId: string;
}

/**
 * Multi-instance Tasks are commonly used to support MPI Tasks. In the MPI case,
 * if any of the subtasks fail (for example due to exiting with a non-zero exit
 * code) the entire multi-instance Task fails. The multi-instance Task is then
 * terminated and retried, up to its retry limit.
 */
export interface MultiInstanceSettings {
  /** The number of Compute Nodes required by the Task. If omitted, the default is 1. */
  numberOfInstances?: number;
  /** The command line to run on all the Compute Nodes to enable them to coordinate when the primary runs the main Task command. A typical coordination command line launches a background service and verifies that the service is ready to process inter-node messages. */
  coordinationCommandLine: string;
  /** A list of files that the Batch service will download before running the coordination command line. The difference between common resource files and Task resource files is that common resource files are downloaded for all subtasks including the primary, whereas Task resource files are downloaded only for the primary. Also note that these resource files are not downloaded to the Task working directory, but instead are downloaded to the Task root directory (one directory above the working directory).  There is a maximum size for the list of resource files.  When the max size is exceeded, the request will fail and the response error code will be RequestEntityTooLarge. If this occurs, the collection of ResourceFiles must be reduced in size. This can be achieved using .zip files, Application Packages, or Docker Containers. */
  commonResourceFiles?: Array<ResourceFile>;
}

/**
 * Specifies any dependencies of a Task. Any Task that is explicitly specified or
 * within a dependency range must complete before the dependant Task will be
 * scheduled.
 */
export interface TaskDependencies {
  /** The list of Task IDs that this Task depends on. All Tasks in this list must complete successfully before the dependent Task can be scheduled. The taskIds collection is limited to 64000 characters total (i.e. the combined length of all Task IDs). If the taskIds collection exceeds the maximum length, the Add Task request fails with error code TaskDependencyListTooLong. In this case consider using Task ID ranges instead. */
  taskIds?: string[];
  /** The list of Task ID ranges that this Task depends on. All Tasks in all ranges must complete successfully before the dependent Task can be scheduled. */
  taskIdRanges?: Array<TaskIdRange>;
}

/**
 * The start and end of the range are inclusive. For example, if a range has start
 * 9 and end 12, then it represents Tasks '9', '10', '11' and '12'.
 */
export interface TaskIdRange {
  /** The first Task ID in the range. */
  start: number;
  /** The last Task ID in the range. */
  end: number;
}

/**
 * Batch will retry Tasks when a recovery operation is triggered on a Node.
 * Examples of recovery operations include (but are not limited to) when an
 * unhealthy Node is rebooted or a Compute Node disappeared due to host failure.
 * Retries due to recovery operations are independent of and are not counted
 * against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0, an internal
 * retry due to a recovery operation may occur. Because of this, all Tasks should
 * be idempotent. This means Tasks need to tolerate being interrupted and
 * restarted without causing any corruption or duplicate data. The best practice
 * for long running Tasks is to use some form of checkpointing.
 */
export interface BatchTask {
  /** The execution constraints that apply to this Task. */
  constraints?: TaskConstraints;
}

/** Information about the execution of a Task. */
export interface TaskExecutionInformation {
  /** The time at which the Task started running. 'Running' corresponds to the running state, so if the Task specifies resource files or Packages, then the start time reflects the time at which the Task started downloading or deploying these. If the Task has been restarted or retried, this is the most recent time at which the Task started running. This property is present only for Tasks that are in the running or completed state. */
  startTime?: Date | string;
  /** The time at which the Task completed. This property is set only if the Task is in the Completed state. */
  endTime?: Date | string;
  /** The exit code of the program specified on the Task command line. This property is set only if the Task is in the completed state. In general, the exit code for a process reflects the specific convention implemented by the application developer for that process. If you use the exit code value to make decisions in your code, be sure that you know the exit code convention used by the application process. However, if the Batch service terminates the Task (due to timeout, or user termination via the API) you may see an operating system-defined exit code. */
  exitCode?: number;
  /** Information about the container under which the Task is executing. This property is set only if the Task runs in a container context. */
  containerInfo?: TaskContainerExecutionInformation;
  /** Information describing the Task failure, if any. This property is set only if the Task is in the completed state and encountered a failure. */
  failureInfo?: TaskFailureInformation;
  /** The number of times the Task has been retried by the Batch service. Task application failures (non-zero exit code) are retried, pre-processing errors (the Task could not be run) and file upload errors are not retried. The Batch service will retry the Task up to the limit specified by the constraints. */
  retryCount: number;
  /** The most recent time at which a retry of the Task started running. This element is present only if the Task was retried (i.e. retryCount is nonzero). If present, this is typically the same as startTime, but may be different if the Task has been restarted for reasons other than retry; for example, if the Compute Node was rebooted during a retry, then the startTime is updated but the lastRetryTime is not. */
  lastRetryTime?: Date | string;
  /** The number of times the Task has been requeued by the Batch service as the result of a user request. When the user removes Compute Nodes from a Pool (by resizing/shrinking the pool) or when the Job is being disabled, the user can specify that running Tasks on the Compute Nodes be requeued for execution. This count tracks how many times the Task has been requeued for these reasons. */
  requeueCount: number;
  /** The most recent time at which the Task has been requeued by the Batch service as the result of a user request. This property is set only if the requeueCount is nonzero. */
  lastRequeueTime?: Date | string;
  /**
   * The result of the Task execution. If the value is 'failed', then the details of the failure can be found in the failureInfo property.
   *
   * Possible values: "success", "failure"
   */
  result?: string;
}

/** Information about the Compute Node on which a Task ran. */
export interface BatchNodeInformation {
  /** An identifier for the Node on which the Task ran, which can be passed when adding a Task to request that the Task be scheduled on this Compute Node. */
  affinityId?: string;
  /** The URL of the Compute Node on which the Task ran. */
  nodeUrl?: string;
  /** The ID of the Pool on which the Task ran. */
  poolId?: string;
  /** The ID of the Compute Node on which the Task ran. */
  nodeId?: string;
  /** The root directory of the Task on the Compute Node. */
  taskRootDirectory?: string;
  /** The URL to the root directory of the Task on the Compute Node. */
  taskRootDirectoryUrl?: string;
}

/** Resource usage statistics for a Task. */
export interface TaskStatistics {
  /** The URL of the statistics. */
  url: string;
  /** The start time of the time range covered by the statistics. */
  startTime: Date | string;
  /** The time at which the statistics were last updated. All statistics are limited to the range between startTime and lastUpdateTime. */
  lastUpdateTime: Date | string;
  /** The total user mode CPU time (summed across all cores and all Compute Nodes) consumed by the Task. */
  userCPUTime: string;
  /** The total kernel mode CPU time (summed across all cores and all Compute Nodes) consumed by the Task. */
  kernelCPUTime: string;
  /** The total wall clock time of the Task. The wall clock time is the elapsed time from when the Task started running on a Compute Node to when it finished (or to the last time the statistics were updated, if the Task had not finished by then). If the Task was retried, this includes the wall clock time of all the Task retries. */
  wallClockTime: string;
  /** The total number of disk read operations made by the Task. */
  readIOps: number;
  /** The total number of disk write operations made by the Task. */
  writeIOps: number;
  /** The total gibibytes read from disk by the Task. */
  readIOGiB: number;
  /** The total gibibytes written to disk by the Task. */
  writeIOGiB: number;
  /** The total wait time of the Task. The wait time for a Task is defined as the elapsed time between the creation of the Task and the start of Task execution. (If the Task is retried due to failures, the wait time is the time to the most recent Task execution.). */
  waitTime: string;
}

/** A collection of Azure Batch Tasks to add. */
export interface BatchTaskCollection {
  /** The collection of Tasks to add. The maximum count of Tasks is 100. The total serialized size of this collection must be less than 1MB. If it is greater than 1MB (for example if each Task has 100's of resource files or environment variables), the request will fail with code 'RequestBodyTooLarge' and should be retried again with fewer Tasks. */
  value: Array<BatchTaskCreateOptions>;
}

/** Options for creating a user account for RDP or SSH access on an Azure Batch Compute Node. */
export interface BatchNodeUserCreateOptions {
  /** The user name of the Account. */
  name: string;
  /** Whether the Account should be an administrator on the Compute Node. The default value is false. */
  isAdmin?: boolean;
  /** The time at which the Account should expire. If omitted, the default is 1 day from the current time. For Linux Compute Nodes, the expiryTime has a precision up to a day. */
  expiryTime?: Date | string;
  /** The password of the Account. The password is required for Windows Compute Nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows Image reference). For Linux Compute Nodes, the password can optionally be specified along with the sshPublicKey property. */
  password?: string;
  /** The SSH public key that can be used for remote login to the Compute Node. The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux Compute Nodes. If this is specified for a Windows Compute Node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). */
  sshPublicKey?: string;
}

/** Options for updating a user account for RDP or SSH access on an Azure Batch Compute Node. */
export interface BatchNodeUserUpdateOptions {
  /** The password of the Account. The password is required for Windows Compute Nodes (those created with 'cloudServiceConfiguration', or created with 'virtualMachineConfiguration' using a Windows Image reference). For Linux Compute Nodes, the password can optionally be specified along with the sshPublicKey property. If omitted, any existing password is removed. */
  password?: string;
  /** The time at which the Account should expire. If omitted, the default is 1 day from the current time. For Linux Compute Nodes, the expiryTime has a precision up to a day. */
  expiryTime?: Date | string;
  /** The SSH public key that can be used for remote login to the Compute Node. The public key should be compatible with OpenSSH encoding and should be base 64 encoded. This property can be specified only for Linux Compute Nodes. If this is specified for a Windows Compute Node, then the Batch service rejects the request; if you are calling the REST API directly, the HTTP status code is 400 (Bad Request). If omitted, any existing SSH public key is removed. */
  sshPublicKey?: string;
}

/** Options for rebooting an Azure Batch Compute Node. */
export interface NodeRebootOptions {
  /**
   * When to reboot the Compute Node and what to do with currently running Tasks. The default value is requeue.
   *
   * Possible values: "requeue", "terminate", "taskcompletion", "retaineddata"
   */
  nodeRebootOption?: string;
}

/** Options for reimaging an Azure Batch Compute Node. */
export interface NodeReimageOptions {
  /**
   * When to reimage the Compute Node and what to do with currently running Tasks. The default value is requeue.
   *
   * Possible values: "requeue", "terminate", "taskcompletion", "retaineddata"
   */
  nodeReimageOption?: string;
}

/** Options for disabling scheduling on an Azure Batch Compute Node. */
export interface NodeDisableSchedulingOptions {
  /**
   * What to do with currently running Tasks when disabling Task scheduling on the Compute Node. The default value is requeue.
   *
   * Possible values: "requeue", "terminate", "taskcompletion"
   */
  nodeDisableSchedulingOption?: string;
}

/** The Azure Batch service log files upload options for a Compute Node. */
export interface UploadBatchServiceLogsOptions {
  /** The URL of the container within Azure Blob Storage to which to upload the Batch Service log file(s). If a user assigned managed identity is not being used, the URL must include a Shared Access Signature (SAS) granting write permissions to the container. The SAS duration must allow enough time for the upload to finish. The start time for SAS is optional and recommended to not be specified. */
  containerUrl: string;
  /** The start of the time range from which to upload Batch Service log file(s). Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested. */
  startTime: Date | string;
  /** The end of the time range from which to upload Batch Service log file(s). Any log file containing a log message in the time range will be uploaded. This means that the operation might retrieve more logs than have been requested since the entire log file is always uploaded, but the operation should not retrieve fewer logs than have been requested. If omitted, the default is to upload all logs available after the startTime. */
  endTime?: Date | string;
  /** The reference to the user assigned identity to use to access Azure Blob Storage specified by containerUrl. The identity must have write access to the Azure Blob Storage container. */
  identityReference?: BatchNodeIdentityReference;
}
