// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export interface KqlScriptResource {
  id?: string;
  name?: string;
  type?: string;
  /** Properties of sql script. */
  properties?: KqlScript;
}

export interface KqlScript {
  content?: KqlScriptContent;
}

export interface KqlScriptContent {
  query?: string;
  metadata?: KqlScriptContentMetadata;
  currentConnection?: KqlScriptContentCurrentConnection;
}

export interface KqlScriptContentMetadata {
  language?: string;
}

export interface KqlScriptContentCurrentConnection {
  name?: string;
  poolName?: string;
  databaseName?: string;
  type?: string;
}

/** Request body structure for rename artifact. */
export interface ArtifactRenameRequest {
  /** New name of the artifact. */
  newName?: string;
}

export interface MetastoreRegisterObject {
  /** The input folder containing CDM files. */
  inputFolder: string;
}

export interface MetastoreUpdateObject {
  /** The input folder containing CDM files. */
  inputFolder: string;
}

/** Spark Configuration resource type. */
export interface SparkConfigurationResource extends SubResource {
  /** Properties of Spark Configuration. */
  properties: SparkConfiguration;
}

/** SparkConfiguration Artifact information */
export interface SparkConfiguration {
  /** Description about the SparkConfiguration. */
  description?: string;
  /** SparkConfiguration configs. */
  configs: Record<string, string>;
  /** Annotations for SparkConfiguration. */
  annotations?: Array<string>;
  /** additional Notes. */
  notes?: string;
  /** The identity that created the resource. */
  createdBy?: string;
  /** The timestamp of resource creation. */
  created?: Date | string;
  /** SparkConfiguration configMergeRule. */
  configMergeRule?: Record<string, string>;
}

/** Azure Synapse nested resource, which belongs to a workspace. */
export interface SubResource extends AzureEntityResource {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResource extends Resource {}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {}

/** A Big Data pool */
export interface BigDataPoolResourceInfo extends TrackedResource {
  /** Big Data pool properties */
  properties?: BigDataPoolResourceProperties;
}

/** Properties of a Big Data pool powered by Apache Spark */
export interface BigDataPoolResourceProperties {
  /** The state of the Big Data pool. */
  provisioningState?: string;
  /** Auto-scaling properties */
  autoScale?: AutoScaleProperties;
  /** The time when the Big Data pool was created. */
  creationDate?: Date | string;
  /** Auto-pausing properties */
  autoPause?: AutoPauseProperties;
  /** Whether compute isolation is required or not. */
  isComputeIsolationEnabled?: boolean;
  /** Whether session level packages enabled. */
  sessionLevelPackagesEnabled?: boolean;
  /** The cache size */
  cacheSize?: number;
  /** Dynamic Executor Allocation */
  dynamicExecutorAllocation?: DynamicExecutorAllocation;
  /** The Spark events folder */
  sparkEventsFolder?: string;
  /** The number of nodes in the Big Data pool. */
  nodeCount?: number;
  /** Library version requirements */
  libraryRequirements?: LibraryRequirements;
  /** List of custom libraries/packages associated with the spark pool. */
  customLibraries?: Array<LibraryInfo>;
  /** Spark configuration file to specify additional properties */
  sparkConfigProperties?: LibraryRequirements;
  /** The Apache Spark version. */
  sparkVersion?: string;
  /** The default folder where Spark logs will be written. */
  defaultSparkLogFolder?: string;
  /** The level of compute power that each node in the Big Data pool has. */
  nodeSize?:
    | "None"
    | "Small"
    | "Medium"
    | "Large"
    | "XLarge"
    | "XXLarge"
    | "XXXLarge";
  /** The kind of nodes that the Big Data pool provides. */
  nodeSizeFamily?: "None" | "MemoryOptimized";
}

/** Auto-scaling properties of a Big Data pool powered by Apache Spark */
export interface AutoScaleProperties {
  /** The minimum number of nodes the Big Data pool can support. */
  minNodeCount?: number;
  /** Whether automatic scaling is enabled for the Big Data pool. */
  enabled?: boolean;
  /** The maximum number of nodes the Big Data pool can support. */
  maxNodeCount?: number;
}

/** Auto-pausing properties of a Big Data pool powered by Apache Spark */
export interface AutoPauseProperties {
  /** Number of minutes of idle time before the Big Data pool is automatically paused. */
  delayInMinutes?: number;
  /** Whether auto-pausing is enabled for the Big Data pool. */
  enabled?: boolean;
}

/** Dynamic Executor Allocation Properties */
export interface DynamicExecutorAllocation {
  /** Indicates whether Dynamic Executor Allocation is enabled or not. */
  enabled?: boolean;
}

/** Library requirements for a Big Data pool powered by Apache Spark */
export interface LibraryRequirements {
  /** The library requirements. */
  content?: string;
  /** The filename of the library requirements file. */
  filename?: string;
}

/** Library/package information of a Big Data pool powered by Apache Spark */
export interface LibraryInfo {
  /** Name of the library. */
  name?: string;
  /** Storage blob path of library. */
  path?: string;
  /** Storage blob container name. */
  containerName?: string;
  /** The last update time of the library. */
  uploadedTimestamp?: Date | string;
  /** Type of the library. */
  type?: string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

/** Data flow resource type. */
export interface DataFlowResource extends SubResource {
  /** Data flow properties. */
  properties: DataFlow;
}

/** Azure Synapse nested object which contains a flow with data movements and transformations. */
export interface DataFlowParent {
  /** The description of the data flow. */
  description?: string;
  /** List of tags that can be used for describing the data flow. */
  annotations?: Array<any>;
  /** The folder that this data flow is in. If not specified, Data flow will appear at the root level. */
  folder?: DataFlowFolder;
  type: "DataFlow" | "MappingDataFlow" | "Flowlet";
}

/** The folder that this data flow is in. If not specified, Data flow will appear at the root level. */
export interface DataFlowFolder {
  /** The name of the folder that this data flow is in. */
  name?: string;
}

/** Request body structure for creating data flow debug session. */
export interface CreateDataFlowDebugSessionRequest {
  /** Compute type of the cluster. The value will be overwritten by the same setting in integration runtime if provided. */
  computeType?: string;
  /** Core count of the cluster. The value will be overwritten by the same setting in integration runtime if provided. */
  coreCount?: number;
  /** Time to live setting of the cluster in minutes. */
  timeToLive?: number;
  /** Set to use integration runtime setting for data flow debug session. */
  integrationRuntime?: IntegrationRuntimeDebugResource;
}

/** Integration runtime debug resource. */
export interface IntegrationRuntimeDebugResource
  extends SubResourceDebugResource {
  /** Integration runtime properties. */
  properties: IntegrationRuntime;
}

/** Azure Synapse nested object which serves as a compute resource for activities. */
export interface IntegrationRuntimeParent extends Record<string, unknown> {
  /** Integration runtime description. */
  description?: string;
  type: "IntegrationRuntime" | "Managed" | "SelfHosted";
}

/** Azure Synapse nested debug resource. */
export interface SubResourceDebugResource {
  /** The resource name. */
  name?: string;
}

/** Request body structure for starting data flow debug session. */
export interface DataFlowDebugPackage extends Record<string, unknown> {
  /** The ID of data flow debug session. */
  sessionId?: string;
  /** Data flow instance. */
  dataFlow?: DataFlowDebugResource;
  /** List of Data flows */
  dataFlows?: Array<DataFlowDebugResource>;
  /** List of datasets. */
  datasets?: Array<DatasetDebugResource>;
  /** List of linked services. */
  linkedServices?: Array<LinkedServiceDebugResource>;
  /** Staging info for debug session. */
  staging?: DataFlowStagingInfo;
  /** Data flow debug settings. */
  debugSettings?: DataFlowDebugPackageDebugSettings;
}

/** Data flow debug resource. */
export interface DataFlowDebugResource extends SubResourceDebugResource {
  /** Data flow properties. */
  properties: DataFlow;
}

/** Dataset debug resource. */
export interface DatasetDebugResource extends SubResourceDebugResource {
  /** Dataset properties. */
  properties: Dataset;
}

/** The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents. */
export interface DatasetParent extends Record<string, unknown> {
  /** Dataset description. */
  description?: string;
  /** Columns that define the structure of the dataset. Type: array (or Expression with resultType array), itemType: DatasetDataElement. */
  structure?: any;
  /** Columns that define the physical type schema of the dataset. Type: array (or Expression with resultType array), itemType: DatasetSchemaDataElement. */
  schema?: any;
  /** Linked service reference. */
  linkedServiceName: LinkedServiceReference;
  /** Parameters for dataset. */
  parameters?: Record<string, ParameterSpecification>;
  /** List of tags that can be used for describing the Dataset. */
  annotations?: Array<any>;
  /** The folder that this Dataset is in. If not specified, Dataset will appear at the root level. */
  folder?: DatasetFolder;
  type:
    | "Dataset"
    | "AmazonS3Object"
    | "Avro"
    | "Excel"
    | "Parquet"
    | "DelimitedText"
    | "Json"
    | "Xml"
    | "Orc"
    | "Binary"
    | "AzureBlob"
    | "AzureTable"
    | "AzureSqlTable"
    | "AzureSqlMITable"
    | "AzureSqlDWTable"
    | "CassandraTable"
    | "CustomDataset"
    | "CosmosDbSqlApiCollection"
    | "DocumentDbCollection"
    | "DynamicsEntity"
    | "DynamicsCrmEntity"
    | "CommonDataServiceForAppsEntity"
    | "AzureDataLakeStoreFile"
    | "AzureBlobFSFile"
    | "Office365Table"
    | "FileShare"
    | "MongoDbCollection"
    | "MongoDbAtlasCollection"
    | "MongoDbV2Collection"
    | "CosmosDbMongoDbApiCollection"
    | "ODataResource"
    | "OracleTable"
    | "AmazonRdsForOracleTable"
    | "TeradataTable"
    | "AzureMySqlTable"
    | "AmazonRedshiftTable"
    | "Db2Table"
    | "RelationalTable"
    | "InformixTable"
    | "OdbcTable"
    | "MySqlTable"
    | "PostgreSqlTable"
    | "MicrosoftAccessTable"
    | "SalesforceObject"
    | "SalesforceServiceCloudObject"
    | "SybaseTable"
    | "SapBwCube"
    | "SapCloudForCustomerResource"
    | "SapEccResource"
    | "SapHanaTable"
    | "SapOpenHubTable"
    | "SqlServerTable"
    | "AmazonRdsForSqlServerTable"
    | "RestResource"
    | "SapTableResource"
    | "WebTable"
    | "AzureSearchIndex"
    | "HttpFile"
    | "AmazonMWSObject"
    | "AzurePostgreSqlTable"
    | "ConcurObject"
    | "CouchbaseTable"
    | "DrillTable"
    | "EloquaObject"
    | "GoogleBigQueryObject"
    | "GreenplumTable"
    | "HBaseObject"
    | "HiveObject"
    | "HubspotObject"
    | "ImpalaObject"
    | "JiraObject"
    | "MagentoObject"
    | "MariaDBTable"
    | "AzureMariaDBTable"
    | "MarketoObject"
    | "PaypalObject"
    | "PhoenixObject"
    | "PrestoObject"
    | "QuickBooksObject"
    | "ServiceNowObject"
    | "ShopifyObject"
    | "SparkObject"
    | "SquareObject"
    | "XeroObject"
    | "ZohoObject"
    | "NetezzaTable"
    | "VerticaTable"
    | "SalesforceMarketingCloudObject"
    | "ResponsysObject"
    | "DynamicsAXResource"
    | "OracleServiceCloudObject"
    | "AzureDataExplorerTable"
    | "GoogleAdWordsObject"
    | "SnowflakeTable"
    | "SharePointOnlineListResource"
    | "AzureDatabricksDeltaLakeDataset";
}

/** Linked service reference type. */
export interface LinkedServiceReference {
  /** Linked service reference type. */
  type: "LinkedServiceReference";
  /** Reference LinkedService name. */
  referenceName: string;
  /** Arguments for LinkedService. */
  parameters?: Record<string, any>;
}

/** Definition of a single parameter for an entity. */
export interface ParameterSpecification {
  /** Parameter type. */
  type:
    | "Object"
    | "String"
    | "Int"
    | "Float"
    | "Bool"
    | "Array"
    | "SecureString";
  /** Default value of parameter. */
  defaultValue?: any;
}

/** The folder that this Dataset is in. If not specified, Dataset will appear at the root level. */
export interface DatasetFolder {
  /** The name of the folder that this Dataset is in. */
  name?: string;
}

/** Linked service debug resource. */
export interface LinkedServiceDebugResource extends SubResourceDebugResource {
  /** Properties of linked service. */
  properties: LinkedService;
}

/** The Azure Synapse nested object which contains the information and credential which can be used to connect with related store or compute resource. */
export interface LinkedServiceParent extends Record<string, unknown> {
  /** The integration runtime reference. */
  connectVia?: IntegrationRuntimeReference;
  /** Linked service description. */
  description?: string;
  /** Parameters for linked service. */
  parameters?: Record<string, ParameterSpecification>;
  /** List of tags that can be used for describing the linked service. */
  annotations?: Array<any>;
  type:
    | "LinkedService"
    | "AzureStorage"
    | "AzureBlobStorage"
    | "AzureTableStorage"
    | "AzureSqlDW"
    | "SqlServer"
    | "AmazonRdsForSqlServer"
    | "AzureSqlDatabase"
    | "AzureSqlMI"
    | "AzureBatch"
    | "AzureKeyVault"
    | "CosmosDb"
    | "Dynamics"
    | "DynamicsCrm"
    | "CommonDataServiceForApps"
    | "HDInsight"
    | "FileServer"
    | "AzureFileStorage"
    | "GoogleCloudStorage"
    | "Oracle"
    | "AmazonRdsForOracle"
    | "AzureMySql"
    | "MySql"
    | "PostgreSql"
    | "Sybase"
    | "Db2"
    | "Teradata"
    | "AzureML"
    | "AzureMLService"
    | "Odbc"
    | "Informix"
    | "MicrosoftAccess"
    | "Hdfs"
    | "OData"
    | "Web"
    | "Cassandra"
    | "MongoDb"
    | "MongoDbAtlas"
    | "MongoDbV2"
    | "CosmosDbMongoDbApi"
    | "AzureDataLakeStore"
    | "AzureBlobFS"
    | "Office365"
    | "Salesforce"
    | "SalesforceServiceCloud"
    | "SapCloudForCustomer"
    | "SapEcc"
    | "SapOpenHub"
    | "RestService"
    | "AmazonS3"
    | "AmazonRedshift"
    | "CustomDataSource"
    | "AzureSearch"
    | "HttpServer"
    | "FtpServer"
    | "Sftp"
    | "SapBW"
    | "SapHana"
    | "AmazonMWS"
    | "AzurePostgreSql"
    | "Concur"
    | "Couchbase"
    | "Drill"
    | "Eloqua"
    | "GoogleBigQuery"
    | "Greenplum"
    | "HBase"
    | "Hive"
    | "Hubspot"
    | "Impala"
    | "Jira"
    | "Magento"
    | "MariaDB"
    | "AzureMariaDB"
    | "Marketo"
    | "Paypal"
    | "Phoenix"
    | "Presto"
    | "QuickBooks"
    | "ServiceNow"
    | "Shopify"
    | "Spark"
    | "Square"
    | "Xero"
    | "Zoho"
    | "Vertica"
    | "Netezza"
    | "SalesforceMarketingCloud"
    | "HDInsightOnDemand"
    | "AzureDataLakeAnalytics"
    | "AzureDatabricks"
    | "AzureDatabricksDeltaLake"
    | "Responsys"
    | "DynamicsAX"
    | "OracleServiceCloud"
    | "GoogleAdWords"
    | "SapTable"
    | "AzureDataExplorer"
    | "AzureFunction"
    | "Snowflake"
    | "SharePointOnlineList";
}

/** Integration runtime reference type. */
export interface IntegrationRuntimeReference {
  /** Type of integration runtime. */
  type: "IntegrationRuntimeReference";
  /** Reference integration runtime name. */
  referenceName: string;
  /** Arguments for integration runtime. */
  parameters?: Record<string, any>;
}

/** Staging info for execute data flow activity. */
export interface DataFlowStagingInfo {
  /** Staging linked service reference. */
  linkedService?: LinkedServiceReference;
  /** Folder path for staging blob. */
  folderPath?: string;
}

/** Data flow debug settings. */
export interface DataFlowDebugPackageDebugSettings {
  /** Source setting for data flow debug. */
  sourceSettings?: Array<DataFlowSourceSetting>;
  /** Data flow parameters. */
  parameters?: Record<string, any>;
  /** Parameters for dataset. */
  datasetParameters?: any;
}

/** Definition of data flow source setting for debug. */
export interface DataFlowSourceSetting extends Record<string, unknown> {
  /** The data flow source name. */
  sourceName?: string;
  /** Defines the row limit of data flow source in debug. */
  rowLimit?: number;
}

/** Request body structure for deleting data flow debug session. */
export interface DeleteDataFlowDebugSessionRequest {
  /** The ID of data flow debug session. */
  sessionId?: string;
  /** The data flow which contains the debug session. */
  dataFlowName?: string;
}

/** Request body structure for data flow expression preview. */
export interface DataFlowDebugCommandRequest {
  /** The ID of data flow debug session. */
  sessionId?: string;
  /** The command type. */
  command?:
    | "executePreviewQuery"
    | "executeStatisticsQuery"
    | "executeExpressionQuery";
  /** The command payload object. */
  commandPayload?: DataFlowDebugCommandPayload;
}

/** Structure of command payload. */
export interface DataFlowDebugCommandPayload {
  /** The stream name which is used for preview. */
  streamName: string;
  /** Row limits for preview response. */
  rowLimits?: number;
  /** Array of column names. */
  columns?: Array<string>;
  /** The expression which is used for preview. */
  expression?: string;
}

/** Dataset resource type. */
export interface DatasetResource extends SubResource {
  /** Dataset properties. */
  properties: Dataset;
}

export interface GitHubAccessTokenRequest {
  /** The GitHub Client Id. */
  gitHubClientId: string;
  /** The GitHub Access code. */
  gitHubAccessCode: string;
  /** The GitHub access token base URL. */
  gitHubAccessTokenBaseUrl: string;
}

/** Integration runtime resource type. */
export interface IntegrationRuntimeResource extends SubResource {
  /** Integration runtime properties. */
  properties: IntegrationRuntime;
}

/** Library response details */
export interface LibraryResource extends SubResource {
  /** Library/package properties. */
  properties: LibraryResourceProperties;
}

/** Library/package properties */
export interface LibraryResourceProperties {}

/** Linked service resource type. */
export interface LinkedServiceResource extends SubResource {
  /** Properties of linked service. */
  properties: LinkedService;
}

/** Notebook resource type. */
export interface NotebookResource {
  /** The name of the resource */
  name: string;
  /** Properties of Notebook. */
  properties: Notebook;
}

/** Notebook. */
export interface Notebook extends Record<string, unknown> {
  /** The description of the notebook. */
  description?: string;
  /** Big data pool reference. */
  bigDataPool?: BigDataPoolReference;
  /** Session properties. */
  sessionProperties?: NotebookSessionProperties;
  /** Notebook root-level metadata. */
  metadata: NotebookMetadata;
  /** Notebook format (major number). Incremented between backwards incompatible changes to the notebook format. */
  nbformat: number;
  /** Notebook format (minor number). Incremented for backward compatible changes to the notebook format. */
  nbformat_minor: number;
  /** Array of cells of the current notebook. */
  cells: Array<NotebookCell>;
  /** The folder that this notebook is in. If not specified, this notebook will appear at the root level. */
  folder?: NotebookFolder;
}

/** Big data pool reference. */
export interface BigDataPoolReference {
  /** Big data pool reference type. */
  type: "BigDataPoolReference";
  /** Reference big data pool name. */
  referenceName: string;
}

/** Session properties. */
export interface NotebookSessionProperties {
  /** Amount of memory to use for the driver process. */
  driverMemory: string;
  /** Number of cores to use for the driver. */
  driverCores: number;
  /** Amount of memory to use per executor process. */
  executorMemory: string;
  /** Number of cores to use for each executor. */
  executorCores: number;
  /** Number of executors to launch for this session. */
  numExecutors: number;
}

/** Notebook root-level metadata. */
export interface NotebookMetadata extends Record<string, unknown> {
  /** Kernel information. */
  kernelspec?: NotebookKernelSpec;
  /** Language info. */
  language_info?: NotebookLanguageInfo;
}

/** Kernel information. */
export interface NotebookKernelSpec extends Record<string, unknown> {
  /** Name of the kernel specification. */
  name: string;
  /** Name to display in UI. */
  display_name: string;
}

/** Language info. */
export interface NotebookLanguageInfo extends Record<string, unknown> {
  /** The programming language which this kernel runs. */
  name: string;
  /** The codemirror mode to use for code in this language. */
  codemirror_mode?: string;
}

/** Notebook cell. */
export interface NotebookCell extends Record<string, unknown> {
  /** String identifying the type of cell. */
  cell_type: string;
  /** Cell-level metadata. */
  metadata: any;
  /** Contents of the cell, represented as an array of lines. */
  source: Array<string>;
  /** Attachments associated with the cell. */
  attachments?: any;
  /** Cell-level output items. */
  outputs?: Array<NotebookCellOutputItem>;
}

/** An item of the notebook cell execution output. */
export interface NotebookCellOutputItem {
  /** For output_type=stream, determines the name of stream (stdout / stderr). */
  name?: string;
  /** Execution sequence number. */
  execution_count?: number;
  /** Execution, display, or stream outputs. */
  output_type: "execute_result" | "display_data" | "stream" | "error";
  /** For output_type=stream, the stream's text output, represented as a string or an array of strings. */
  text?: any;
  /** Output data. Use MIME type as key, and content as value. */
  data?: any;
  /** Metadata for the output item. */
  metadata?: any;
}

/** The folder that this notebook is in. If not specified, this notebook will appear at the root level. */
export interface NotebookFolder {
  /** The name of the folder that this notebook is in. */
  name?: string;
}

/** Pipeline resource type. */
export interface PipelineResource extends SubResource, Record<string, unknown> {
  /** Properties of the pipeline. */
  properties: Pipeline;
}

/** A workspace pipeline. */
export interface Pipeline {
  /** The description of the pipeline. */
  description?: string;
  /** List of activities in pipeline. */
  activities?: Array<Activity>;
  /** List of parameters for pipeline. */
  parameters?: Record<string, ParameterSpecification>;
  /** List of variables for pipeline. */
  variables?: Record<string, VariableSpecification>;
  /** The max number of concurrent runs for the pipeline. */
  concurrency?: number;
  /** List of tags that can be used for describing the Pipeline. */
  annotations?: Array<any>;
  /** Dimensions emitted by Pipeline. */
  runDimensions?: Record<string, any>;
  /** The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level. */
  folder?: PipelineFolder;
}

/** A pipeline activity. */
export interface ActivityParent extends Record<string, unknown> {
  /** Activity name. */
  name: string;
  /** Activity description. */
  description?: string;
  /** Activity depends on condition. */
  dependsOn?: Array<ActivityDependency>;
  /** Activity user properties. */
  userProperties?: Array<UserProperty>;
  type:
    | "Activity"
    | "Container"
    | "Execution"
    | "Copy"
    | "HDInsightHive"
    | "HDInsightPig"
    | "HDInsightMapReduce"
    | "HDInsightStreaming"
    | "HDInsightSpark"
    | "ExecuteSSISPackage"
    | "Custom"
    | "SqlServerStoredProcedure"
    | "ExecutePipeline"
    | "Delete"
    | "AzureDataExplorerCommand"
    | "Lookup"
    | "WebActivity"
    | "GetMetadata"
    | "IfCondition"
    | "Switch"
    | "ForEach"
    | "AzureMLBatchExecution"
    | "AzureMLUpdateResource"
    | "AzureMLExecutePipeline"
    | "DataLakeAnalyticsU-SQL"
    | "Wait"
    | "Until"
    | "Validation"
    | "Filter"
    | "DatabricksNotebook"
    | "DatabricksSparkJar"
    | "DatabricksSparkPython"
    | "SetVariable"
    | "AppendVariable"
    | "AzureFunctionActivity"
    | "WebHook"
    | "ExecuteDataFlow"
    | "SynapseNotebook"
    | "SparkJob"
    | "SqlPoolStoredProcedure";
}

/** Activity dependency information. */
export interface ActivityDependency extends Record<string, unknown> {
  /** Activity name. */
  activity: string;
  /** Match-Condition for the dependency. */
  dependencyConditions: Array<"Succeeded" | "Failed" | "Skipped" | "Completed">;
}

/** User property. */
export interface UserProperty {
  /** User property name. */
  name: string;
  /** User property value. Type: string (or Expression with resultType string). */
  value: any;
}

/** Definition of a single variable for a Pipeline. */
export interface VariableSpecification {
  /** Variable type. */
  type: "String" | "Bool" | "Boolean" | "Array";
  /** Default value of variable. */
  defaultValue?: any;
}

/** The folder that this Pipeline is in. If not specified, Pipeline will appear at the root level. */
export interface PipelineFolder {
  /** The name of the folder that this Pipeline is in. */
  name?: string;
}

/** Query parameters for listing runs. */
export interface RunFilterParameters {
  /** The continuation token for getting the next page of results. Null for first page. */
  continuationToken?: string;
  /** The time at or after which the run event was updated in 'ISO 8601' format. */
  lastUpdatedAfter: Date | string;
  /** The time at or before which the run event was updated in 'ISO 8601' format. */
  lastUpdatedBefore: Date | string;
  /** List of filters. */
  filters?: Array<RunQueryFilter>;
  /** List of OrderBy option. */
  orderBy?: Array<RunQueryOrderBy>;
}

/** Query filter option for listing runs. */
export interface RunQueryFilter {
  /** Parameter name to be used for filter. The allowed operands to query pipeline runs are PipelineName, RunStart, RunEnd and Status; to query activity runs are ActivityName, ActivityRunStart, ActivityRunEnd, ActivityType and Status, and to query trigger runs are TriggerName, TriggerRunTimestamp and Status. */
  operand:
    | "PipelineName"
    | "Status"
    | "RunStart"
    | "RunEnd"
    | "ActivityName"
    | "ActivityRunStart"
    | "ActivityRunEnd"
    | "ActivityType"
    | "TriggerName"
    | "TriggerRunTimestamp"
    | "RunGroupId"
    | "LatestOnly";
  /** Operator to be used for filter. */
  operator: "Equals" | "NotEquals" | "In" | "NotIn";
  /** List of filter values. */
  values: Array<string>;
}

/** An object to provide order by options for listing runs. */
export interface RunQueryOrderBy {
  /** Parameter name to be used for order by. The allowed parameters to order by for pipeline runs are PipelineName, RunStart, RunEnd and Status; for activity runs are ActivityName, ActivityRunStart, ActivityRunEnd and Status; for trigger runs are TriggerName, TriggerRunTimestamp and Status. */
  orderBy:
    | "RunStart"
    | "RunEnd"
    | "PipelineName"
    | "Status"
    | "ActivityName"
    | "ActivityRunStart"
    | "ActivityRunEnd"
    | "TriggerName"
    | "TriggerRunTimestamp";
  /** Sorting order of the parameter. */
  order: "ASC" | "DESC";
}

/** Spark job definition resource type. */
export interface SparkJobDefinitionResource extends SubResource {
  /** Properties of spark job definition. */
  properties: SparkJobDefinition;
}

/** Spark job definition. */
export interface SparkJobDefinition extends Record<string, unknown> {
  /** The description of the Spark job definition. */
  description?: string;
  /** Big data pool reference. */
  targetBigDataPool: BigDataPoolReference;
  /** The required Spark version of the application. */
  requiredSparkVersion?: string;
  /** The language of the Spark application. */
  language?: string;
  /** The properties of the Spark job. */
  jobProperties: SparkJobProperties;
  /** The folder that this Spark job definition is in. If not specified, this Spark job definition will appear at the root level. */
  folder?: SparkJobDefinitionFolder;
}

/** The properties of the Spark job. */
export interface SparkJobProperties extends Record<string, unknown> {
  /** The name of the job. */
  name?: string;
  /** File containing the application to execute. */
  file: string;
  /** Main class for Java/Scala application. */
  className?: string;
  /** Spark configuration properties. */
  conf?: any;
  /** Command line arguments for the application. */
  args?: Array<string>;
  /** Jars to be used in this job. */
  jars?: Array<string>;
  /** files to be used in this job. */
  files?: Array<string>;
  /** Archives to be used in this job. */
  archives?: Array<string>;
  /** Amount of memory to use for the driver process. */
  driverMemory: string;
  /** Number of cores to use for the driver. */
  driverCores: number;
  /** Amount of memory to use per executor process. */
  executorMemory: string;
  /** Number of cores to use for each executor. */
  executorCores: number;
  /** Number of executors to launch for this job. */
  numExecutors: number;
}

/** The folder that this Spark job definition is in. If not specified, this Spark job definition will appear at the root level. */
export interface SparkJobDefinitionFolder {
  /** The name of the folder that this Spark job definition is in. */
  name?: string;
}

/** A SQL Analytics pool */
export interface SqlPool extends TrackedResource {
  /** SQL pool SKU */
  sku?: Sku;
  /** SQL pool properties */
  properties?: SqlPoolResourceProperties;
}

/** SQL pool SKU */
export interface Sku {
  /** The service tier */
  tier?: string;
  /** The SKU name */
  name?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

/** Properties of a SQL Analytics pool */
export interface SqlPoolResourceProperties {
  /** Maximum size in bytes */
  maxSizeBytes?: number;
  /** Collation mode */
  collation?: string;
  /** Source database to create from */
  sourceDatabaseId?: string;
  /** Backup database to restore from */
  recoverableDatabaseId?: string;
  /** Resource state */
  provisioningState?: string;
  /** Resource status */
  status?: string;
  /** Snapshot time to restore */
  restorePointInTime?: string;
  /**
   * Specifies the mode of sql pool creation.
   *
   * Default: regular sql pool creation.
   *
   * PointInTimeRestore: Creates a sql pool by restoring a point in time backup of an existing sql pool. sourceDatabaseId must be specified as the resource ID of the existing sql pool, and restorePointInTime must be specified.
   *
   * Recovery: Creates a sql pool by a geo-replicated backup. sourceDatabaseId  must be specified as the recoverableDatabaseId to restore.
   *
   * Restore: Creates a sql pool by restoring a backup of a deleted sql  pool. SourceDatabaseId should be the sql pool's original resource ID. SourceDatabaseId and sourceDatabaseDeletionDate must be specified.
   */
  createMode?: "Default" | "PointInTimeRestore" | "Recovery" | "Restore";
  /** Date the SQL pool was created */
  creationDate?: Date | string;
}

/** Sql Script resource type. */
export interface SqlScriptResource {
  /** The name of the resource */
  name: string;
  /** Properties of sql script. */
  properties: SqlScript;
}

/** SQL script. */
export interface SqlScript extends Record<string, unknown> {
  /** The description of the SQL script. */
  description?: string;
  /** The type of the SQL script. */
  type?: "SqlQuery";
  /** The content of the SQL script. */
  content: SqlScriptContent;
  /** The folder that this SQL script is in. If not specified, this SQL script will appear at the root level. */
  folder?: SqlScriptFolder;
}

/** The content of the SQL script. */
export interface SqlScriptContent extends Record<string, unknown> {
  /** SQL query to execute. */
  query: string;
  /** The connection used to execute the SQL script. */
  currentConnection?: SqlConnection;
  /** Limit of results, '-1' for no limit. */
  resultLimit?: number;
  /** The metadata of the SQL script. */
  metadata?: SqlScriptMetadata;
}

/** The connection used to execute the SQL script. */
export interface SqlConnection extends Record<string, unknown> {
  /** The type of the connection. */
  type?: "SqlOnDemand" | "SqlPool";
  /** The identifier of the connection. */
  name?: string;
  /** The associated SQL pool name (supported by SQL pool v3) */
  poolName?: string;
  /** The associated database name (supported by SQL pool v3) */
  databaseName?: string;
}

/** The metadata of the SQL script. */
export interface SqlScriptMetadata extends Record<string, unknown> {
  /** The language of the SQL script. */
  language?: string;
}

/** The folder that this SQL script is in. If not specified, this SQL script will appear at the root level. */
export interface SqlScriptFolder {
  /** The name of the folder that this SQL script is in. */
  name?: string;
}

/** Trigger resource type. */
export interface TriggerResource extends SubResource {
  /** Properties of the trigger. */
  properties: Trigger;
}

/** Azure Synapse nested object which contains information about creating pipeline run */
export interface TriggerParent extends Record<string, unknown> {
  /** Trigger description. */
  description?: string;
  /** List of tags that can be used for describing the trigger. */
  annotations?: Array<any>;
  type:
    | "Trigger"
    | "RerunTumblingWindowTrigger"
    | "MultiplePipelineTrigger"
    | "ScheduleTrigger"
    | "BlobTrigger"
    | "BlobEventsTrigger"
    | "CustomEventsTrigger"
    | "TumblingWindowTrigger"
    | "ChainingTrigger";
}

/** A workspace */
export interface Workspace extends TrackedResource {
  /** Workspace resource properties */
  properties?: WorkspaceProperties;
  /** Identity of the workspace */
  identity?: ManagedIdentity;
}

/** Workspace properties */
export interface WorkspaceProperties {
  /** Workspace default data lake storage account details */
  defaultDataLakeStorage?: DataLakeStorageAccountDetails;
  /** SQL administrator login password */
  sqlAdministratorLoginPassword?: string;
  /** Workspace managed resource group. The resource group name uniquely identifies the resource group within the user subscriptionId. The resource group name must be no longer than 90 characters long, and must be alphanumeric characters (Char.IsLetterOrDigit()) and '-', '_', '(', ')' and'.'. Note that the name cannot end with '.' */
  managedResourceGroupName?: string;
  /** Login for workspace SQL active directory administrator */
  sqlAdministratorLogin?: string;
  /** Virtual Network profile */
  virtualNetworkProfile?: VirtualNetworkProfile;
  /** Connectivity endpoints */
  connectivityEndpoints?: Record<string, string>;
  /** Setting this to 'default' will ensure that all compute for this workspace is in a virtual network managed on behalf of the user. */
  managedVirtualNetwork?: string;
  /** Private endpoint connections to the workspace */
  privateEndpointConnections?: Array<PrivateEndpointConnection>;
  /** The encryption details of the workspace */
  encryption?: EncryptionDetails;
  /** Managed Virtual Network Settings */
  managedVirtualNetworkSettings?: ManagedVirtualNetworkSettings;
  /** Git integration settings */
  workspaceRepositoryConfiguration?: WorkspaceRepositoryConfiguration;
  /** Purview Configuration */
  purviewConfiguration?: PurviewConfiguration;
}

/** Details of the data lake storage account associated with the workspace */
export interface DataLakeStorageAccountDetails {
  /** Account URL */
  accountUrl?: string;
  /** Filesystem name */
  filesystem?: string;
}

/** Virtual Network Profile */
export interface VirtualNetworkProfile {
  /** Subnet ID used for computes in workspace */
  computeSubnetId?: string;
}

/** A private endpoint connection */
export interface PrivateEndpointConnection extends ProxyResource {
  /** Private endpoint connection properties. */
  properties?: PrivateEndpointConnectionProperties;
}

/** Properties of a private endpoint connection. */
export interface PrivateEndpointConnectionProperties {
  /** The private endpoint which the connection belongs to. */
  privateEndpoint?: PrivateEndpoint;
  /** Connection state of the private endpoint connection. */
  privateLinkServiceConnectionState?: PrivateLinkServiceConnectionState;
}

/** Private endpoint details */
export interface PrivateEndpoint {}

/** Connection state details of the private endpoint */
export interface PrivateLinkServiceConnectionState {
  /** The private link service connection status. */
  status?: string;
  /** The private link service connection description. */
  description?: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** Details of the encryption associated with the workspace */
export interface EncryptionDetails {
  /** Customer Managed Key Details */
  cmk?: CustomerManagedKeyDetails;
}

/** Details of the customer managed key associated with the workspace */
export interface CustomerManagedKeyDetails {
  /** The key object of the workspace */
  key?: WorkspaceKeyDetails;
}

/** Details of the customer managed key associated with the workspace */
export interface WorkspaceKeyDetails {
  /** Workspace Key sub-resource name */
  name?: string;
  /** Workspace Key sub-resource key vault url */
  keyVaultUrl?: string;
}

/** Managed Virtual Network Settings */
export interface ManagedVirtualNetworkSettings {
  /** Prevent Data Exfiltration */
  preventDataExfiltration?: boolean;
  /** Linked Access Check On Target Resource */
  linkedAccessCheckOnTargetResource?: boolean;
  /** Allowed Aad Tenant Ids For Linking */
  allowedAadTenantIdsForLinking?: Array<string>;
}

/** Git integration settings */
export interface WorkspaceRepositoryConfiguration {
  /** Type of workspace repositoryID configuration. Example WorkspaceVSTSConfiguration, WorkspaceGitHubConfiguration */
  type?: string;
  /** GitHub Enterprise host name. For example: https://github.mydomain.com */
  hostName?: string;
  /** Account name */
  accountName?: string;
  /** VSTS project name */
  projectName?: string;
  /** Repository name */
  repositoryName?: string;
  /** Collaboration branch */
  collaborationBranch?: string;
  /** Root folder to use in the repository */
  rootFolder?: string;
  /** The last commit ID */
  lastCommitId?: string;
  /**
   * The VSTS tenant ID
   *
   * Value may contain a UUID
   */
  tenantId?: string;
  /** GitHub bring your own app client id */
  clientId?: string;
  /** GitHub bring your own app client secret information. */
  clientSecret?: GitHubClientSecret;
}

/** Client secret information for factory's bring your own app repository configuration */
export interface GitHubClientSecret {
  /** Bring your own app client secret AKV URL */
  byoaSecretAkvUrl?: string;
  /** Bring your own app client secret name in AKV */
  byoaSecretName?: string;
}

/** Purview Configuration */
export interface PurviewConfiguration {
  /** Purview Resource ID */
  purviewResourceId?: string;
}

/** The workspace managed identity */
export interface ManagedIdentity {
  /** The type of managed identity for the workspace */
  type?: "None" | "SystemAssigned";
}

/** Azure Synapse expression definition. */
export interface Expression {
  /** Expression type. */
  type: "Expression";
  /** Expression value. */
  value: string;
}

/** Azure Synapse secure string definition. The string value will be masked with asterisks '*' during Get or List API calls. */
export interface SecureString extends SecretBaseParent {
  /** Value of secure string. */
  value: string;
  type: "SecureString";
}

/** The base definition of a secret type. */
export interface SecretBaseParent {
  type: "SecretBase" | "SecureString" | "AzureKeyVaultSecret";
}

/** Azure Key Vault secret reference. */
export interface AzureKeyVaultSecretReference extends SecretBaseParent {
  /** The Azure Key Vault linked service reference. */
  store: LinkedServiceReference;
  /** The name of the secret in Azure Key Vault. Type: string (or Expression with resultType string). */
  secretName: any;
  /** The version of the secret in Azure Key Vault. The default value is the latest version of the secret. Type: string (or Expression with resultType string). */
  secretVersion?: any;
  type: "AzureKeyVaultSecret";
}

/** Pipeline reference type. */
export interface PipelineReference {
  /** Pipeline reference type. */
  type: "PipelineReference";
  /** Reference pipeline name. */
  referenceName: string;
  /** Reference name. */
  name?: string;
}

/** Pipeline that needs to be triggered with the given parameters. */
export interface TriggerPipelineReference {
  /** Pipeline reference. */
  pipelineReference?: PipelineReference;
  /** Pipeline parameters. */
  parameters?: Record<string, any>;
}

/** Dataset reference type. */
export interface DatasetReference {
  /** Dataset reference type. */
  type: "DatasetReference";
  /** Reference dataset name. */
  referenceName: string;
  /** Arguments for dataset. */
  parameters?: Record<string, any>;
}

/** Data flow reference type. */
export interface DataFlowReference extends Record<string, unknown> {
  /** Data flow reference type. */
  type: "DataFlowReference";
  /** Reference data flow name. */
  referenceName: string;
  /** Reference data flow parameters from dataset. */
  datasetParameters?: any;
  /** Data flow parameters */
  parameters?: Record<string, any>;
}

/** RerunTrigger resource type. */
export interface RerunTriggerResource extends SubResource {
  /** Properties of the rerun trigger. */
  properties: RerunTumblingWindowTrigger;
}

/** Trigger that schedules pipeline reruns for all fixed time interval windows from a requested start time to requested end time. */
export interface RerunTumblingWindowTrigger extends TriggerParent {
  /** Rerun Trigger properties. */
  typeProperties: RerunTumblingWindowTriggerTypeProperties;
  type: "RerunTumblingWindowTrigger";
}

/** Rerun Trigger properties. */
export interface RerunTumblingWindowTriggerTypeProperties {
  /** The parent trigger reference. */
  parentTrigger: any;
  /** The start time for the time period for which restatement is initiated. Only UTC time is currently supported. */
  requestedStartTime: Date | string;
  /** The end time for the time period for which restatement is initiated. Only UTC time is currently supported. */
  requestedEndTime: Date | string;
  /** The max number of parallel time windows (ready for execution) for which a rerun is triggered. */
  rerunConcurrency: number;
}

/** Synapse notebook reference type. */
export interface SynapseNotebookReference {
  /** Synapse notebook reference type. */
  type: "NotebookReference";
  /** Reference notebook name. */
  referenceName: string;
}

/** Synapse spark job reference type. */
export interface SynapseSparkJobReference {
  /** Synapse spark job reference type. */
  type: "SparkJobDefinitionReference";
  /** Reference spark job name. */
  referenceName: string;
}

/** SQL pool reference type. */
export interface SqlPoolReference {
  /** SQL pool reference type. */
  type: "SqlPoolReference";
  /** Reference SQL pool name. */
  referenceName: string;
}

/** Mapping data flow. */
export interface MappingDataFlow extends DataFlowParent {
  /** Mapping data flow type properties. */
  typeProperties?: MappingDataFlowTypeProperties;
  type: "MappingDataFlow";
}

/** Mapping data flow type properties. */
export interface MappingDataFlowTypeProperties {
  /** List of sources in data flow. */
  sources?: Array<DataFlowSource>;
  /** List of sinks in data flow. */
  sinks?: Array<DataFlowSink>;
  /** List of transformations in data flow. */
  transformations?: Array<Transformation>;
  /** DataFlow script. */
  script?: string;
  /** Data flow script lines. */
  scriptLines?: Array<string>;
}

/** Transformation for data flow source. */
export interface DataFlowSource extends Transformation {
  /** Schema linked service reference. */
  schemaLinkedService?: LinkedServiceReference;
}

/** A data flow transformation. */
export interface Transformation {
  /** Transformation name. */
  name: string;
  /** Transformation description. */
  description?: string;
  /** Dataset reference. */
  dataset?: DatasetReference;
  /** Linked service reference. */
  linkedService?: LinkedServiceReference;
  /** Flowlet Reference */
  flowlet?: DataFlowReference;
}

/** Transformation for data flow sink. */
export interface DataFlowSink extends Transformation {
  /** Schema linked service reference. */
  schemaLinkedService?: LinkedServiceReference;
}

/** Data flow flowlet */
export interface Flowlet extends DataFlowParent {
  /** Flowlet type properties. */
  typeProperties?: FlowletTypeProperties;
  type: "Flowlet";
}

/** Flowlet type properties. */
export interface FlowletTypeProperties {
  /** List of sources in Flowlet. */
  sources?: Array<DataFlowSource>;
  /** List of sinks in Flowlet. */
  sinks?: Array<DataFlowSink>;
  /** List of transformations in Flowlet. */
  transformations?: Array<Transformation>;
  /** Flowlet script. */
  script?: string;
  /** Flowlet script lines. */
  scriptLines?: Array<string>;
}

/** Dataset location. */
export interface DatasetLocationParent extends Record<string, unknown> {
  /** Specify the folder path of dataset. Type: string (or Expression with resultType string) */
  folderPath?: any;
  /** Specify the file name of dataset. Type: string (or Expression with resultType string). */
  fileName?: any;
  type:
    | "DatasetLocation"
    | "AzureBlobStorageLocation"
    | "AzureBlobFSLocation"
    | "AzureDataLakeStoreLocation"
    | "AmazonS3Location"
    | "FileServerLocation"
    | "AzureFileStorageLocation"
    | "GoogleCloudStorageLocation"
    | "FtpServerLocation"
    | "SftpLocation"
    | "HttpServerLocation"
    | "HdfsLocation";
}

/** The location of azure blob dataset. */
export interface AzureBlobStorageLocation extends DatasetLocationParent {
  /** Specify the container of azure blob. Type: string (or Expression with resultType string). */
  container?: any;
  type: "AzureBlobStorageLocation";
}

/** The location of azure blobFS dataset. */
export interface AzureBlobFSLocation extends DatasetLocationParent {
  /** Specify the fileSystem of azure blobFS. Type: string (or Expression with resultType string). */
  fileSystem?: any;
  type: "AzureBlobFSLocation";
}

/** The location of azure data lake store dataset. */
export interface AzureDataLakeStoreLocation extends DatasetLocationParent {
  type: "AzureDataLakeStoreLocation";
}

/** The location of amazon S3 dataset. */
export interface AmazonS3Location extends DatasetLocationParent {
  /** Specify the bucketName of amazon S3. Type: string (or Expression with resultType string) */
  bucketName?: any;
  /** Specify the version of amazon S3. Type: string (or Expression with resultType string). */
  version?: any;
  type: "AmazonS3Location";
}

/** The location of file server dataset. */
export interface FileServerLocation extends DatasetLocationParent {
  type: "FileServerLocation";
}

/** The location of file server dataset. */
export interface AzureFileStorageLocation extends DatasetLocationParent {
  type: "AzureFileStorageLocation";
}

/** The location of Google Cloud Storage dataset. */
export interface GoogleCloudStorageLocation extends DatasetLocationParent {
  /** Specify the bucketName of Google Cloud Storage. Type: string (or Expression with resultType string) */
  bucketName?: any;
  /** Specify the version of Google Cloud Storage. Type: string (or Expression with resultType string). */
  version?: any;
  type: "GoogleCloudStorageLocation";
}

/** The location of ftp server dataset. */
export interface FtpServerLocation extends DatasetLocationParent {
  type: "FtpServerLocation";
}

/** The location of SFTP dataset. */
export interface SftpLocation extends DatasetLocationParent {
  type: "SftpLocation";
}

/** The location of http server. */
export interface HttpServerLocation extends DatasetLocationParent {
  /** Specify the relativeUrl of http server. Type: string (or Expression with resultType string) */
  relativeUrl?: any;
  type: "HttpServerLocation";
}

/** The location of HDFS. */
export interface HdfsLocation extends DatasetLocationParent {
  type: "HdfsLocation";
}

/** The format definition of a storage. */
export interface DatasetStorageFormatParent extends Record<string, unknown> {
  /** Serializer. Type: string (or Expression with resultType string). */
  serializer?: any;
  /** Deserializer. Type: string (or Expression with resultType string). */
  deserializer?: any;
  type:
    | "DatasetStorageFormat"
    | "TextFormat"
    | "JsonFormat"
    | "AvroFormat"
    | "OrcFormat"
    | "ParquetFormat";
}

/** The data stored in text format. */
export interface TextFormat extends DatasetStorageFormatParent {
  /** The column delimiter. Type: string (or Expression with resultType string). */
  columnDelimiter?: any;
  /** The row delimiter. Type: string (or Expression with resultType string). */
  rowDelimiter?: any;
  /** The escape character. Type: string (or Expression with resultType string). */
  escapeChar?: any;
  /** The quote character. Type: string (or Expression with resultType string). */
  quoteChar?: any;
  /** The null value string. Type: string (or Expression with resultType string). */
  nullValue?: any;
  /** The code page name of the preferred encoding. If miss, the default value is ΓÇ£utf-8ΓÇ¥, unless BOM denotes another Unicode encoding. Refer to the ΓÇ£NameΓÇ¥ column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
  encodingName?: any;
  /** Treat empty column values in the text file as null. The default value is true. Type: boolean (or Expression with resultType boolean). */
  treatEmptyAsNull?: any;
  /** The number of lines/rows to be skipped when parsing text files. The default value is 0. Type: integer (or Expression with resultType integer). */
  skipLineCount?: any;
  /** When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). */
  firstRowAsHeader?: any;
  type: "TextFormat";
}

/** The data stored in JSON format. */
export interface JsonFormat extends DatasetStorageFormatParent {
  /** File pattern of JSON. To be more specific, the way of separating a collection of JSON objects. The default value is 'setOfObjects'. It is case-sensitive. */
  filePattern?: any;
  /** The character used to separate nesting levels. Default value is '.' (dot). Type: string (or Expression with resultType string). */
  nestingSeparator?: any;
  /** The code page name of the preferred encoding. If not provided, the default value is 'utf-8', unless the byte order mark (BOM) denotes another Unicode encoding. The full list of supported values can be found in the 'Name' column of the table of encodings in the following reference: https://go.microsoft.com/fwlink/?linkid=861078. Type: string (or Expression with resultType string). */
  encodingName?: any;
  /** The JSONPath of the JSON array element to be flattened. Example: "$.ArrayPath". Type: string (or Expression with resultType string). */
  jsonNodeReference?: any;
  /** The JSONPath definition for each column mapping with a customized column name to extract data from JSON file. For fields under root object, start with "$"; for fields inside the array chosen by jsonNodeReference property, start from the array element. Example: {"Column1": "$.Column1Path", "Column2": "Column2PathInArray"}. Type: object (or Expression with resultType object). */
  jsonPathDefinition?: any;
  type: "JsonFormat";
}

/** The data stored in Avro format. */
export interface AvroFormat extends DatasetStorageFormatParent {
  type: "AvroFormat";
}

/** The data stored in Optimized Row Columnar (ORC) format. */
export interface OrcFormat extends DatasetStorageFormatParent {
  type: "OrcFormat";
}

/** The data stored in Parquet format. */
export interface ParquetFormat extends DatasetStorageFormatParent {
  type: "ParquetFormat";
}

/** The compression method used on a dataset. */
export interface DatasetCompression extends Record<string, unknown> {
  /** Type of dataset compression. Type: string (or Expression with resultType string). */
  type: any;
  /** The dataset compression level. Type: string (or Expression with resultType string). */
  level?: any;
}

/** A single Amazon Simple Storage Service (S3) object or a set of S3 objects. */
export interface AmazonS3Dataset extends DatasetParent {
  /** Amazon S3 dataset properties. */
  typeProperties: AmazonS3DatasetTypeProperties;
  type: "AmazonS3Object";
}

/** Amazon S3 dataset properties. */
export interface AmazonS3DatasetTypeProperties {
  /** The name of the Amazon S3 bucket. Type: string (or Expression with resultType string). */
  bucketName: any;
  /** The key of the Amazon S3 object. Type: string (or Expression with resultType string). */
  key?: any;
  /** The prefix filter for the S3 object name. Type: string (or Expression with resultType string). */
  prefix?: any;
  /** The version for the S3 object. Type: string (or Expression with resultType string). */
  version?: any;
  /** The start of S3 object's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of S3 object's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  /** The format of files. */
  format?: DatasetStorageFormat;
  /** The data compression method used for the Amazon S3 object. */
  compression?: DatasetCompression;
}

/** Avro dataset. */
export interface AvroDataset extends DatasetParent {
  /** Avro dataset properties. */
  typeProperties?: AvroDatasetTypeProperties;
  type: "Avro";
}

/** Avro dataset properties. */
export interface AvroDatasetTypeProperties {
  /** The location of the avro storage. */
  location: DatasetLocation;
  /** A string from AvroCompressionCodecEnum or an expression */
  avroCompressionCodec?: any;
  avroCompressionLevel?: number;
}

/** Excel dataset. */
export interface ExcelDataset extends DatasetParent {
  /** Excel dataset properties. */
  typeProperties?: ExcelDatasetTypeProperties;
  type: "Excel";
}

/** Excel dataset properties. */
export interface ExcelDatasetTypeProperties {
  /** The location of the excel storage. */
  location: DatasetLocation;
  /** The sheet of excel file. Type: string (or Expression with resultType string). */
  sheetName: any;
  /** The partial data of one sheet. Type: string (or Expression with resultType string). */
  range?: any;
  /** When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). */
  firstRowAsHeader?: any;
  /** The data compression method used for the json dataset. */
  compression?: DatasetCompression;
  /** The null value string. Type: string (or Expression with resultType string). */
  nullValue?: any;
}

/** Parquet dataset. */
export interface ParquetDataset extends DatasetParent {
  /** Parquet dataset properties. */
  typeProperties?: ParquetDatasetTypeProperties;
  type: "Parquet";
}

/** Parquet dataset properties. */
export interface ParquetDatasetTypeProperties {
  /** The location of the parquet storage. */
  location: DatasetLocation;
  /** A string from ParquetCompressionCodecEnum or an expression */
  compressionCodec?: any;
}

/** Delimited text dataset. */
export interface DelimitedTextDataset extends DatasetParent {
  /** Delimited text dataset properties. */
  typeProperties?: DelimitedTextDatasetTypeProperties;
  type: "DelimitedText";
}

/** DelimitedText dataset properties. */
export interface DelimitedTextDatasetTypeProperties {
  /** The location of the delimited text storage. */
  location: DatasetLocation;
  /** The column delimiter. Type: string (or Expression with resultType string). */
  columnDelimiter?: any;
  /** The row delimiter. Type: string (or Expression with resultType string). */
  rowDelimiter?: any;
  /** The code page name of the preferred encoding. If miss, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
  encodingName?: any;
  /** The data compressionCodec. Type: string (or Expression with resultType string). */
  compressionCodec?: any;
  /** The data compression method used for DelimitedText. */
  compressionLevel?: any;
  /** The quote character. Type: string (or Expression with resultType string). */
  quoteChar?: any;
  /** The escape character. Type: string (or Expression with resultType string). */
  escapeChar?: any;
  /** When used as input, treat the first row of data as headers. When used as output,write the headers into the output as the first row of data. The default value is false. Type: boolean (or Expression with resultType boolean). */
  firstRowAsHeader?: any;
  /** The null value string. Type: string (or Expression with resultType string). */
  nullValue?: any;
}

/** Json dataset. */
export interface JsonDataset extends DatasetParent {
  /** Json dataset properties. */
  typeProperties?: JsonDatasetTypeProperties;
  type: "Json";
}

/** Json dataset properties. */
export interface JsonDatasetTypeProperties {
  /** The location of the json data storage. */
  location: DatasetLocation;
  /** The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
  encodingName?: any;
  /** The data compression method used for the json dataset. */
  compression?: DatasetCompression;
}

/** Xml dataset. */
export interface XmlDataset extends DatasetParent {
  /** Xml dataset properties. */
  typeProperties?: XmlDatasetTypeProperties;
  type: "Xml";
}

/** Xml dataset properties. */
export interface XmlDatasetTypeProperties {
  /** The location of the json data storage. */
  location: DatasetLocation;
  /** The code page name of the preferred encoding. If not specified, the default value is UTF-8, unless BOM denotes another Unicode encoding. Refer to the name column of the table in the following link to set supported values: https://msdn.microsoft.com/library/system.text.encoding.aspx. Type: string (or Expression with resultType string). */
  encodingName?: any;
  /** The null value string. Type: string (or Expression with resultType string). */
  nullValue?: any;
  /** The data compression method used for the json dataset. */
  compression?: DatasetCompression;
}

/** ORC dataset. */
export interface OrcDataset extends DatasetParent {
  /** ORC dataset properties. */
  typeProperties?: OrcDatasetTypeProperties;
  type: "Orc";
}

/** ORC dataset properties. */
export interface OrcDatasetTypeProperties {
  /** The location of the ORC data storage. */
  location: DatasetLocation;
  /** The data orcCompressionCodec. Type: string (or Expression with resultType string). */
  orcCompressionCodec?: any;
}

/** Binary dataset. */
export interface BinaryDataset extends DatasetParent {
  /** Binary dataset properties. */
  typeProperties?: BinaryDatasetTypeProperties;
  type: "Binary";
}

/** Binary dataset properties. */
export interface BinaryDatasetTypeProperties {
  /** The location of the Binary storage. */
  location: DatasetLocation;
  /** The data compression method used for the binary dataset. */
  compression?: DatasetCompression;
}

/** The Azure Blob storage. */
export interface AzureBlobDataset extends DatasetParent {
  /** Azure Blob dataset properties. */
  typeProperties?: AzureBlobDatasetTypeProperties;
  type: "AzureBlob";
}

/** Azure Blob dataset properties. */
export interface AzureBlobDatasetTypeProperties {
  /** The path of the Azure Blob storage. Type: string (or Expression with resultType string). */
  folderPath?: any;
  /** The root of blob path. Type: string (or Expression with resultType string). */
  tableRootLocation?: any;
  /** The name of the Azure Blob. Type: string (or Expression with resultType string). */
  fileName?: any;
  /** The start of Azure Blob's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of Azure Blob's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  /** The format of the Azure Blob storage. */
  format?: DatasetStorageFormat;
  /** The data compression method used for the blob storage. */
  compression?: DatasetCompression;
}

/** The Azure Table storage dataset. */
export interface AzureTableDataset extends DatasetParent {
  /** Azure Table dataset properties. */
  typeProperties: AzureTableDatasetTypeProperties;
  type: "AzureTable";
}

/** Azure Table dataset properties. */
export interface AzureTableDatasetTypeProperties {
  /** The table name of the Azure Table storage. Type: string (or Expression with resultType string). */
  tableName: any;
}

/** The Azure SQL Server database dataset. */
export interface AzureSqlTableDataset extends DatasetParent {
  /** Azure SQL dataset properties. */
  typeProperties?: AzureSqlTableDatasetTypeProperties;
  type: "AzureSqlTable";
}

/** Azure SQL dataset properties. */
export interface AzureSqlTableDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The schema name of the Azure SQL database. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the Azure SQL database. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The Azure SQL Managed Instance dataset. */
export interface AzureSqlMITableDataset extends DatasetParent {
  /** Azure SQL Managed Instance dataset properties. */
  typeProperties?: AzureSqlMITableDatasetTypeProperties;
  type: "AzureSqlMITable";
}

/** Azure SQL Managed Instance dataset properties. */
export interface AzureSqlMITableDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The schema name of the Azure SQL Managed Instance. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the Azure SQL Managed Instance dataset. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The Azure SQL Data Warehouse dataset. */
export interface AzureSqlDWTableDataset extends DatasetParent {
  /** Azure SQL Data Warehouse dataset properties. */
  typeProperties?: AzureSqlDWTableDatasetTypeProperties;
  type: "AzureSqlDWTable";
}

/** Azure SQL Data Warehouse dataset properties. */
export interface AzureSqlDWTableDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The schema name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The Cassandra database dataset. */
export interface CassandraTableDataset extends DatasetParent {
  /** Cassandra dataset properties. */
  typeProperties?: CassandraTableDatasetTypeProperties;
  type: "CassandraTable";
}

/** Cassandra dataset properties. */
export interface CassandraTableDatasetTypeProperties {
  /** The table name of the Cassandra database. Type: string (or Expression with resultType string). */
  tableName?: any;
  /** The keyspace of the Cassandra database. Type: string (or Expression with resultType string). */
  keyspace?: any;
}

/** The custom dataset. */
export interface CustomDataset extends DatasetParent {
  /** Custom dataset properties. */
  typeProperties?: any;
  type: "CustomDataset";
}

/** Microsoft Azure CosmosDB (SQL API) Collection dataset. */
export interface CosmosDbSqlApiCollectionDataset extends DatasetParent {
  /** CosmosDB (SQL API) Collection dataset properties. */
  typeProperties: CosmosDbSqlApiCollectionDatasetTypeProperties;
  type: "CosmosDbSqlApiCollection";
}

/** CosmosDB (SQL API) Collection dataset properties. */
export interface CosmosDbSqlApiCollectionDatasetTypeProperties {
  /** CosmosDB (SQL API) collection name. Type: string (or Expression with resultType string). */
  collectionName: any;
}

/** Microsoft Azure Document Database Collection dataset. */
export interface DocumentDbCollectionDataset extends DatasetParent {
  /** DocumentDB Collection dataset properties. */
  typeProperties: DocumentDbCollectionDatasetTypeProperties;
  type: "DocumentDbCollection";
}

/** DocumentDB Collection dataset properties. */
export interface DocumentDbCollectionDatasetTypeProperties {
  /** Document Database collection name. Type: string (or Expression with resultType string). */
  collectionName: any;
}

/** The Dynamics entity dataset. */
export interface DynamicsEntityDataset extends DatasetParent {
  /** Dynamics entity dataset properties. */
  typeProperties?: DynamicsEntityDatasetTypeProperties;
  type: "DynamicsEntity";
}

/** Dynamics entity dataset properties. */
export interface DynamicsEntityDatasetTypeProperties {
  /** The logical name of the entity. Type: string (or Expression with resultType string). */
  entityName?: any;
}

/** The Dynamics CRM entity dataset. */
export interface DynamicsCrmEntityDataset extends DatasetParent {
  /** Dynamics CRM entity dataset properties. */
  typeProperties?: DynamicsCrmEntityDatasetTypeProperties;
  type: "DynamicsCrmEntity";
}

/** Dynamics CRM entity dataset properties. */
export interface DynamicsCrmEntityDatasetTypeProperties {
  /** The logical name of the entity. Type: string (or Expression with resultType string). */
  entityName?: any;
}

/** The Common Data Service for Apps entity dataset. */
export interface CommonDataServiceForAppsEntityDataset extends DatasetParent {
  /** Common Data Service for Apps entity dataset properties. */
  typeProperties?: CommonDataServiceForAppsEntityDatasetTypeProperties;
  type: "CommonDataServiceForAppsEntity";
}

/** Common Data Service for Apps entity dataset properties. */
export interface CommonDataServiceForAppsEntityDatasetTypeProperties {
  /** The logical name of the entity. Type: string (or Expression with resultType string). */
  entityName?: any;
}

/** Azure Data Lake Store dataset. */
export interface AzureDataLakeStoreDataset extends DatasetParent {
  /** Azure Data Lake Store dataset properties. */
  typeProperties?: AzureDataLakeStoreDatasetTypeProperties;
  type: "AzureDataLakeStoreFile";
}

/** Azure Data Lake Store dataset properties. */
export interface AzureDataLakeStoreDatasetTypeProperties {
  /** Path to the folder in the Azure Data Lake Store. Type: string (or Expression with resultType string). */
  folderPath?: any;
  /** The name of the file in the Azure Data Lake Store. Type: string (or Expression with resultType string). */
  fileName?: any;
  /** The format of the Data Lake Store. */
  format?: DatasetStorageFormat;
  /** The data compression method used for the item(s) in the Azure Data Lake Store. */
  compression?: DatasetCompression;
}

/** The Azure Data Lake Storage Gen2 storage. */
export interface AzureBlobFSDataset extends DatasetParent {
  /** Azure Data Lake Storage Gen2 dataset properties. */
  typeProperties?: AzureBlobFSDatasetTypeProperties;
  type: "AzureBlobFSFile";
}

/** Azure Data Lake Storage Gen2 dataset properties. */
export interface AzureBlobFSDatasetTypeProperties {
  /** The path of the Azure Data Lake Storage Gen2 storage. Type: string (or Expression with resultType string). */
  folderPath?: any;
  /** The name of the Azure Data Lake Storage Gen2. Type: string (or Expression with resultType string). */
  fileName?: any;
  /** The format of the Azure Data Lake Storage Gen2 storage. */
  format?: DatasetStorageFormat;
  /** The data compression method used for the blob storage. */
  compression?: DatasetCompression;
}

/** The Office365 account. */
export interface Office365Dataset extends DatasetParent {
  /** Office365 dataset properties. */
  typeProperties: Office365DatasetTypeProperties;
  type: "Office365Table";
}

/** Office365 dataset properties. */
export interface Office365DatasetTypeProperties {
  /** Name of the dataset to extract from Office 365. Type: string (or Expression with resultType string). */
  tableName: any;
  /** A predicate expression that can be used to filter the specific rows to extract from Office 365. Type: string (or Expression with resultType string). */
  predicate?: any;
}

/** An on-premises file system dataset. */
export interface FileShareDataset extends DatasetParent {
  /** On-premises file system dataset properties. */
  typeProperties?: FileShareDatasetTypeProperties;
  type: "FileShare";
}

/** On-premises file system dataset properties. */
export interface FileShareDatasetTypeProperties {
  /** The path of the on-premises file system. Type: string (or Expression with resultType string). */
  folderPath?: any;
  /** The name of the on-premises file system. Type: string (or Expression with resultType string). */
  fileName?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  /** The format of the files. */
  format?: DatasetStorageFormat;
  /** Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string). */
  fileFilter?: any;
  /** The data compression method used for the file system. */
  compression?: DatasetCompression;
}

/** The MongoDB database dataset. */
export interface MongoDbCollectionDataset extends DatasetParent {
  /** MongoDB database dataset properties. */
  typeProperties: MongoDbCollectionDatasetTypeProperties;
  type: "MongoDbCollection";
}

/** MongoDB database dataset properties. */
export interface MongoDbCollectionDatasetTypeProperties {
  /** The table name of the MongoDB database. Type: string (or Expression with resultType string). */
  collectionName: any;
}

/** The MongoDB Atlas database dataset. */
export interface MongoDbAtlasCollectionDataset extends DatasetParent {
  /** MongoDB Atlas database dataset properties. */
  typeProperties: MongoDbAtlasCollectionDatasetTypeProperties;
  type: "MongoDbAtlasCollection";
}

/** MongoDB Atlas database dataset properties. */
export interface MongoDbAtlasCollectionDatasetTypeProperties {
  /** The collection name of the MongoDB Atlas database. Type: string (or Expression with resultType string). */
  collection: any;
}

/** The MongoDB database dataset. */
export interface MongoDbV2CollectionDataset extends DatasetParent {
  /** MongoDB database dataset properties. */
  typeProperties: MongoDbV2CollectionDatasetTypeProperties;
  type: "MongoDbV2Collection";
}

/** MongoDB database dataset properties. */
export interface MongoDbV2CollectionDatasetTypeProperties {
  /** The collection name of the MongoDB database. Type: string (or Expression with resultType string). */
  collection: any;
}

/** The CosmosDB (MongoDB API) database dataset. */
export interface CosmosDbMongoDbApiCollectionDataset extends DatasetParent {
  /** CosmosDB (MongoDB API) database dataset properties. */
  typeProperties: CosmosDbMongoDbApiCollectionDatasetTypeProperties;
  type: "CosmosDbMongoDbApiCollection";
}

/** CosmosDB (MongoDB API) database dataset properties. */
export interface CosmosDbMongoDbApiCollectionDatasetTypeProperties {
  /** The collection name of the CosmosDB (MongoDB API) database. Type: string (or Expression with resultType string). */
  collection: any;
}

/** The Open Data Protocol (OData) resource dataset. */
export interface ODataResourceDataset extends DatasetParent {
  /** OData dataset properties. */
  typeProperties?: ODataResourceDatasetTypeProperties;
  type: "ODataResource";
}

/** OData dataset properties. */
export interface ODataResourceDatasetTypeProperties {
  /** The OData resource path. Type: string (or Expression with resultType string). */
  path?: any;
}

/** The on-premises Oracle database dataset. */
export interface OracleTableDataset extends DatasetParent {
  /** On-premises Oracle dataset properties. */
  typeProperties?: OracleTableDatasetTypeProperties;
  type: "OracleTable";
}

/** On-premises Oracle dataset properties. */
export interface OracleTableDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The schema name of the on-premises Oracle database. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the on-premises Oracle database. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The AmazonRdsForOracle database dataset. */
export interface AmazonRdsForOracleTableDataset extends DatasetParent {
  /** AmazonRdsForOracle dataset properties. */
  typeProperties?: AmazonRdsForOracleTableDatasetTypeProperties;
  type: "AmazonRdsForOracleTable";
}

/** AmazonRdsForOracle dataset properties. */
export interface AmazonRdsForOracleTableDatasetTypeProperties {
  /** The schema name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the AmazonRdsForOracle database. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The Teradata database dataset. */
export interface TeradataTableDataset extends DatasetParent {
  /** Teradata dataset properties. */
  typeProperties?: TeradataTableDatasetTypeProperties;
  type: "TeradataTable";
}

/** Teradata dataset properties. */
export interface TeradataTableDatasetTypeProperties {
  /** The database name of Teradata. Type: string (or Expression with resultType string). */
  database?: any;
  /** The table name of Teradata. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The Azure MySQL database dataset. */
export interface AzureMySqlTableDataset extends DatasetParent {
  /** Azure MySQL database dataset properties. */
  typeProperties: AzureMySqlTableDatasetTypeProperties;
  type: "AzureMySqlTable";
}

/** Azure MySQL database dataset properties. */
export interface AzureMySqlTableDatasetTypeProperties {
  /** The Azure MySQL database table name. Type: string (or Expression with resultType string). */
  tableName?: any;
  /** The name of Azure MySQL database table. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The Amazon Redshift table dataset. */
export interface AmazonRedshiftTableDataset extends DatasetParent {
  /** Amazon Redshift table dataset properties. */
  typeProperties?: AmazonRedshiftTableDatasetTypeProperties;
  type: "AmazonRedshiftTable";
}

/** Amazon Redshift table dataset properties. */
export interface AmazonRedshiftTableDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The Amazon Redshift table name. Type: string (or Expression with resultType string). */
  table?: any;
  /** The Amazon Redshift schema name. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** The Db2 table dataset. */
export interface Db2TableDataset extends DatasetParent {
  /** Db2 table dataset properties. */
  typeProperties?: Db2TableDatasetTypeProperties;
  type: "Db2Table";
}

/** Db2 table dataset properties. */
export interface Db2TableDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The Db2 schema name. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The Db2 table name. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The relational table dataset. */
export interface RelationalTableDataset extends DatasetParent {
  /** Relational table dataset properties. */
  typeProperties?: RelationalTableDatasetTypeProperties;
  type: "RelationalTable";
}

/** Relational table dataset properties. */
export interface RelationalTableDatasetTypeProperties {
  /** The relational table name. Type: string (or Expression with resultType string). */
  tableName?: any;
}

/** The Informix table dataset. */
export interface InformixTableDataset extends DatasetParent {
  /** Informix table dataset properties. */
  typeProperties?: InformixTableDatasetTypeProperties;
  type: "InformixTable";
}

/** Informix table dataset properties. */
export interface InformixTableDatasetTypeProperties {
  /** The Informix table name. Type: string (or Expression with resultType string). */
  tableName?: any;
}

/** The ODBC table dataset. */
export interface OdbcTableDataset extends DatasetParent {
  /** ODBC table dataset properties. */
  typeProperties?: OdbcTableDatasetTypeProperties;
  type: "OdbcTable";
}

/** ODBC table dataset properties. */
export interface OdbcTableDatasetTypeProperties {
  /** The ODBC table name. Type: string (or Expression with resultType string). */
  tableName?: any;
}

/** The MySQL table dataset. */
export interface MySqlTableDataset extends DatasetParent {
  /** MySQL table dataset properties. */
  typeProperties?: MySqlTableDatasetTypeProperties;
  type: "MySqlTable";
}

/** MySql table dataset properties. */
export interface MySqlTableDatasetTypeProperties {
  /** The MySQL table name. Type: string (or Expression with resultType string). */
  tableName?: any;
}

/** The PostgreSQL table dataset. */
export interface PostgreSqlTableDataset extends DatasetParent {
  /** PostgreSQL table dataset properties. */
  typeProperties?: PostgreSqlTableDatasetTypeProperties;
  type: "PostgreSqlTable";
}

/** PostgreSQL table dataset properties. */
export interface PostgreSqlTableDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The PostgreSQL table name. Type: string (or Expression with resultType string). */
  table?: any;
  /** The PostgreSQL schema name. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** The Microsoft Access table dataset. */
export interface MicrosoftAccessTableDataset extends DatasetParent {
  /** Microsoft Access table dataset properties. */
  typeProperties?: MicrosoftAccessTableDatasetTypeProperties;
  type: "MicrosoftAccessTable";
}

/** Microsoft Access table dataset properties. */
export interface MicrosoftAccessTableDatasetTypeProperties {
  /** The Microsoft Access table name. Type: string (or Expression with resultType string). */
  tableName?: any;
}

/** The Salesforce object dataset. */
export interface SalesforceObjectDataset extends DatasetParent {
  /** Salesforce object dataset properties. */
  typeProperties?: SalesforceObjectDatasetTypeProperties;
  type: "SalesforceObject";
}

/** Salesforce object dataset properties. */
export interface SalesforceObjectDatasetTypeProperties {
  /** The Salesforce object API name. Type: string (or Expression with resultType string). */
  objectApiName?: any;
}

/** The Salesforce Service Cloud object dataset. */
export interface SalesforceServiceCloudObjectDataset extends DatasetParent {
  /** Salesforce Service Cloud object dataset properties. */
  typeProperties?: SalesforceServiceCloudObjectDatasetTypeProperties;
  type: "SalesforceServiceCloudObject";
}

/** Salesforce Service Cloud object dataset properties. */
export interface SalesforceServiceCloudObjectDatasetTypeProperties {
  /** The Salesforce Service Cloud object API name. Type: string (or Expression with resultType string). */
  objectApiName?: any;
}

/** The Sybase table dataset. */
export interface SybaseTableDataset extends DatasetParent {
  /** Sybase table dataset properties. */
  typeProperties?: SybaseTableDatasetTypeProperties;
  type: "SybaseTable";
}

/** Sybase table dataset properties. */
export interface SybaseTableDatasetTypeProperties {
  /** The Sybase table name. Type: string (or Expression with resultType string). */
  tableName?: any;
}

/** The SAP BW cube dataset. */
export interface SapBwCubeDataset extends DatasetParent {
  type: "SapBwCube";
}

/** The path of the SAP Cloud for Customer OData entity. */
export interface SapCloudForCustomerResourceDataset extends DatasetParent {
  /** SAP Cloud For Customer OData resource dataset properties. */
  typeProperties: SapCloudForCustomerResourceDatasetTypeProperties;
  type: "SapCloudForCustomerResource";
}

/** Sap Cloud For Customer OData resource dataset properties. */
export interface SapCloudForCustomerResourceDatasetTypeProperties {
  /** The path of the SAP Cloud for Customer OData entity. Type: string (or Expression with resultType string). */
  path: any;
}

/** The path of the SAP ECC OData entity. */
export interface SapEccResourceDataset extends DatasetParent {
  /** SAP ECC OData resource dataset properties. */
  typeProperties: SapEccResourceDatasetTypeProperties;
  type: "SapEccResource";
}

/** Sap ECC OData resource dataset properties. */
export interface SapEccResourceDatasetTypeProperties {
  /** The path of the SAP ECC OData entity. Type: string (or Expression with resultType string). */
  path: any;
}

/** SAP HANA Table properties. */
export interface SapHanaTableDataset extends DatasetParent {
  /** SAP HANA Table properties. */
  typeProperties?: SapHanaTableDatasetTypeProperties;
  type: "SapHanaTable";
}

/** SAP HANA Table properties. */
export interface SapHanaTableDatasetTypeProperties {
  /** The schema name of SAP HANA. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of SAP HANA. Type: string (or Expression with resultType string). */
  table?: any;
}

/** Sap Business Warehouse Open Hub Destination Table properties. */
export interface SapOpenHubTableDataset extends DatasetParent {
  /** Sap Business Warehouse Open Hub Destination Table properties. */
  typeProperties: SapOpenHubTableDatasetTypeProperties;
  type: "SapOpenHubTable";
}

/** Sap Business Warehouse Open Hub Destination Table properties. */
export interface SapOpenHubTableDatasetTypeProperties {
  /** The name of the Open Hub Destination with destination type as Database Table. Type: string (or Expression with resultType string). */
  openHubDestinationName: any;
  /** Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean). */
  excludeLastRequest?: any;
  /** The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ). */
  baseRequestId?: any;
}

/** The on-premises SQL Server dataset. */
export interface SqlServerTableDataset extends DatasetParent {
  /** On-premises SQL Server dataset properties. */
  typeProperties?: SqlServerTableDatasetTypeProperties;
  type: "SqlServerTable";
}

/** On-premises SQL Server dataset properties. */
export interface SqlServerTableDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The schema name of the SQL Server dataset. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the SQL Server dataset. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The Amazon RDS for SQL Server dataset. */
export interface AmazonRdsForSqlServerTableDataset extends DatasetParent {
  /** The Amazon RDS for SQL Server dataset properties. */
  typeProperties?: AmazonRdsForSqlServerTableDatasetTypeProperties;
  type: "AmazonRdsForSqlServerTable";
}

/** The Amazon RDS for SQL Server dataset properties. */
export interface AmazonRdsForSqlServerTableDatasetTypeProperties {
  /** The schema name of the SQL Server dataset. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the SQL Server dataset. Type: string (or Expression with resultType string). */
  table?: any;
}

/** A Rest service dataset. */
export interface RestResourceDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: RestResourceDatasetTypeProperties;
  type: "RestResource";
}

/** Properties specific to this dataset type. */
export interface RestResourceDatasetTypeProperties {
  /** The relative URL to the resource that the RESTful API provides. Type: string (or Expression with resultType string). */
  relativeUrl?: any;
  /** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
  requestMethod?: any;
  /** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
  requestBody?: any;
  /** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
  additionalHeaders?: any;
  /** The pagination rules to compose next page requests. Type: string (or Expression with resultType string). */
  paginationRules?: any;
}

/** SAP Table Resource properties. */
export interface SapTableResourceDataset extends DatasetParent {
  /** SAP Table Resource properties. */
  typeProperties: SapTableResourceDatasetTypeProperties;
  type: "SapTableResource";
}

/** SAP Table Resource properties. */
export interface SapTableResourceDatasetTypeProperties {
  /** The name of the SAP Table. Type: string (or Expression with resultType string). */
  tableName: any;
}

/** The dataset points to a HTML table in the web page. */
export interface WebTableDataset extends DatasetParent {
  /** Web table dataset properties. */
  typeProperties: WebTableDatasetTypeProperties;
  type: "WebTable";
}

/** Web table dataset properties. */
export interface WebTableDatasetTypeProperties {
  /** The zero-based index of the table in the web page. Type: integer (or Expression with resultType integer), minimum: 0. */
  index: any;
  /** The relative URL to the web page from the linked service URL. Type: string (or Expression with resultType string). */
  path?: any;
}

/** The Azure Search Index. */
export interface AzureSearchIndexDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties: AzureSearchIndexDatasetTypeProperties;
  type: "AzureSearchIndex";
}

/** Properties specific to this dataset type. */
export interface AzureSearchIndexDatasetTypeProperties {
  /** The name of the Azure Search Index. Type: string (or Expression with resultType string). */
  indexName: any;
}

/** A file in an HTTP web server. */
export interface HttpDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: HttpDatasetTypeProperties;
  type: "HttpFile";
}

/** Properties specific to this dataset type. */
export interface HttpDatasetTypeProperties {
  /** The relative URL based on the URL in the HttpLinkedService refers to an HTTP file Type: string (or Expression with resultType string). */
  relativeUrl?: any;
  /** The HTTP method for the HTTP request. Type: string (or Expression with resultType string). */
  requestMethod?: any;
  /** The body for the HTTP request. Type: string (or Expression with resultType string). */
  requestBody?: any;
  /**
   * The headers for the HTTP Request. e.g. request-header-name-1:request-header-value-1
   * ...
   * request-header-name-n:request-header-value-n Type: string (or Expression with resultType string).
   */
  additionalHeaders?: any;
  /** The format of files. */
  format?: DatasetStorageFormat;
  /** The data compression method used on files. */
  compression?: DatasetCompression;
}

/** Properties specific to this dataset type. */
export interface GenericDatasetTypeProperties {
  /** The table name. Type: string (or Expression with resultType string). */
  tableName?: any;
}

/** Amazon Marketplace Web Service dataset. */
export interface AmazonMWSObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "AmazonMWSObject";
}

/** Azure PostgreSQL dataset. */
export interface AzurePostgreSqlTableDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: AzurePostgreSqlTableDatasetTypeProperties;
  type: "AzurePostgreSqlTable";
}

/** Azure PostgreSQL dataset properties. */
export interface AzurePostgreSqlTableDatasetTypeProperties {
  /** The table name of the Azure PostgreSQL database which includes both schema and table. Type: string (or Expression with resultType string). */
  tableName?: any;
  /** The table name of the Azure PostgreSQL database. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Azure PostgreSQL database. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Concur Service dataset. */
export interface ConcurObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "ConcurObject";
}

/** Couchbase server dataset. */
export interface CouchbaseTableDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "CouchbaseTable";
}

/** Drill server dataset. */
export interface DrillTableDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: DrillDatasetTypeProperties;
  type: "DrillTable";
}

/** Drill Dataset Properties */
export interface DrillDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Drill. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Drill. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Eloqua server dataset. */
export interface EloquaObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "EloquaObject";
}

/** Google BigQuery service dataset. */
export interface GoogleBigQueryObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GoogleBigQueryDatasetTypeProperties;
  type: "GoogleBigQueryObject";
}

/** Google BigQuery Dataset Properties */
export interface GoogleBigQueryDatasetTypeProperties {
  /** This property will be retired. Please consider using database + table properties instead. */
  tableName?: any;
  /** The table name of the Google BigQuery. Type: string (or Expression with resultType string). */
  table?: any;
  /** The database name of the Google BigQuery. Type: string (or Expression with resultType string). */
  dataset?: any;
}

/** Greenplum Database dataset. */
export interface GreenplumTableDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GreenplumDatasetTypeProperties;
  type: "GreenplumTable";
}

/** Greenplum Dataset Properties */
export interface GreenplumDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of Greenplum. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of Greenplum. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** HBase server dataset. */
export interface HBaseObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "HBaseObject";
}

/** Hive Server dataset. */
export interface HiveObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: HiveDatasetTypeProperties;
  type: "HiveObject";
}

/** Hive Properties */
export interface HiveDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Hive. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Hive. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Hubspot Service dataset. */
export interface HubspotObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "HubspotObject";
}

/** Impala server dataset. */
export interface ImpalaObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: ImpalaDatasetTypeProperties;
  type: "ImpalaObject";
}

/** Impala Dataset Properties */
export interface ImpalaDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Impala. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Impala. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Jira Service dataset. */
export interface JiraObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "JiraObject";
}

/** Magento server dataset. */
export interface MagentoObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "MagentoObject";
}

/** MariaDB server dataset. */
export interface MariaDBTableDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "MariaDBTable";
}

/** Azure Database for MariaDB dataset. */
export interface AzureMariaDBTableDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "AzureMariaDBTable";
}

/** Marketo server dataset. */
export interface MarketoObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "MarketoObject";
}

/** Paypal Service dataset. */
export interface PaypalObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "PaypalObject";
}

/** Phoenix server dataset. */
export interface PhoenixObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: PhoenixDatasetTypeProperties;
  type: "PhoenixObject";
}

/** Phoenix Dataset Properties */
export interface PhoenixDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Phoenix. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Phoenix. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Presto server dataset. */
export interface PrestoObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: PrestoDatasetTypeProperties;
  type: "PrestoObject";
}

/** Presto Dataset Properties */
export interface PrestoDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Presto. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Presto. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** QuickBooks server dataset. */
export interface QuickBooksObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "QuickBooksObject";
}

/** ServiceNow server dataset. */
export interface ServiceNowObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "ServiceNowObject";
}

/** Shopify Service dataset. */
export interface ShopifyObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "ShopifyObject";
}

/** Spark Server dataset. */
export interface SparkObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: SparkDatasetTypeProperties;
  type: "SparkObject";
}

/** Spark Properties */
export interface SparkDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Spark. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Spark. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Square Service dataset. */
export interface SquareObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "SquareObject";
}

/** Xero Service dataset. */
export interface XeroObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "XeroObject";
}

/** Zoho server dataset. */
export interface ZohoObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "ZohoObject";
}

/** Netezza dataset. */
export interface NetezzaTableDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: NetezzaTableDatasetTypeProperties;
  type: "NetezzaTable";
}

/** Netezza dataset properties. */
export interface NetezzaTableDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Netezza. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Netezza. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Vertica dataset. */
export interface VerticaTableDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: VerticaDatasetTypeProperties;
  type: "VerticaTable";
}

/** Vertica Properties */
export interface VerticaDatasetTypeProperties {
  /** This property will be retired. Please consider using schema + table properties instead. */
  tableName?: any;
  /** The table name of the Vertica. Type: string (or Expression with resultType string). */
  table?: any;
  /** The schema name of the Vertica. Type: string (or Expression with resultType string). */
  schema?: any;
}

/** Salesforce Marketing Cloud dataset. */
export interface SalesforceMarketingCloudObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "SalesforceMarketingCloudObject";
}

/** Responsys dataset. */
export interface ResponsysObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "ResponsysObject";
}

/** The path of the Dynamics AX OData entity. */
export interface DynamicsAXResourceDataset extends DatasetParent {
  /** Dynamics AX OData resource dataset properties. */
  typeProperties: DynamicsAXResourceDatasetTypeProperties;
  type: "DynamicsAXResource";
}

/** Dynamics AX OData resource dataset properties. */
export interface DynamicsAXResourceDatasetTypeProperties {
  /** The path of the Dynamics AX OData entity. Type: string (or Expression with resultType string). */
  path: any;
}

/** Oracle Service Cloud dataset. */
export interface OracleServiceCloudObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "OracleServiceCloudObject";
}

/** The Azure Data Explorer (Kusto) dataset. */
export interface AzureDataExplorerTableDataset extends DatasetParent {
  /** Azure Data Explorer (Kusto) dataset properties. */
  typeProperties: AzureDataExplorerDatasetTypeProperties;
  type: "AzureDataExplorerTable";
}

/** Azure Data Explorer (Kusto) dataset properties. */
export interface AzureDataExplorerDatasetTypeProperties {
  /** The table name of the Azure Data Explorer database. Type: string (or Expression with resultType string). */
  table?: any;
}

/** Google AdWords service dataset. */
export interface GoogleAdWordsObjectDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: GenericDatasetTypeProperties;
  type: "GoogleAdWordsObject";
}

/** The snowflake dataset. */
export interface SnowflakeDataset extends DatasetParent {
  /** Snowflake dataset properties. */
  typeProperties: SnowflakeDatasetTypeProperties;
  type: "SnowflakeTable";
}

/** Snowflake dataset properties. */
export interface SnowflakeDatasetTypeProperties {
  /** The schema name of the Snowflake database. Type: string (or Expression with resultType string). */
  schema?: any;
  /** The table name of the Snowflake database. Type: string (or Expression with resultType string). */
  table?: any;
}

/** The sharepoint online list resource dataset. */
export interface SharePointOnlineListResourceDataset extends DatasetParent {
  /** Sharepoint online list dataset properties. */
  typeProperties?: SharePointOnlineListDatasetTypeProperties;
  type: "SharePointOnlineListResource";
}

/** Sharepoint online list dataset properties. */
export interface SharePointOnlineListDatasetTypeProperties {
  /** The name of the SharePoint Online list. Type: string (or Expression with resultType string). */
  listName?: any;
}

/** Azure Databricks Delta Lake dataset. */
export interface AzureDatabricksDeltaLakeDataset extends DatasetParent {
  /** Properties specific to this dataset type. */
  typeProperties?: AzureDatabricksDeltaLakeDatasetTypeProperties;
  type: "AzureDatabricksDeltaLakeDataset";
}

/** Azure Databricks Delta Lake Dataset Properties */
export interface AzureDatabricksDeltaLakeDatasetTypeProperties {
  /** The name of delta table. Type: string (or Expression with resultType string). */
  table?: any;
  /** The database name of delta table. Type: string (or Expression with resultType string). */
  database?: any;
}

/** The storage account linked service. */
export interface AzureStorageLinkedService extends LinkedServiceParent {
  /** Azure Storage linked service properties. */
  typeProperties: AzureStorageLinkedServiceTypeProperties;
  type: "AzureStorage";
}

/** Azure Storage linked service properties. */
export interface AzureStorageLinkedServiceTypeProperties {
  /** The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of accountKey in connection string. */
  accountKey?: AzureKeyVaultSecretReference;
  /** SAS URI of the Azure Storage resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  sasUri?: any;
  /** The Azure key vault secret reference of sasToken in sas uri. */
  sasToken?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: string;
}

/** The azure blob storage linked service. */
export interface AzureBlobStorageLinkedService extends LinkedServiceParent {
  /** Azure Blob Storage linked service properties. */
  typeProperties: AzureBlobStorageLinkedServiceTypeProperties;
  type: "AzureBlobStorage";
}

/** Azure Blob Storage linked service properties. */
export interface AzureBlobStorageLinkedServiceTypeProperties {
  /** The connection string. It is mutually exclusive with sasUri, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of accountKey in connection string. */
  accountKey?: AzureKeyVaultSecretReference;
  /** SAS URI of the Azure Blob Storage resource. It is mutually exclusive with connectionString, serviceEndpoint property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  sasUri?: any;
  /** The Azure key vault secret reference of sasToken in sas uri. */
  sasToken?: AzureKeyVaultSecretReference;
  /** Blob service endpoint of the Azure Blob Storage resource. It is mutually exclusive with connectionString, sasUri property. */
  serviceEndpoint?: string;
  /** The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key of the service principal used to authenticate against Azure SQL Data Warehouse. */
  servicePrincipalKey?: SecretBase;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** Specify the kind of your storage account. Allowed values are: Storage (general purpose v1), StorageV2 (general purpose v2), BlobStorage, or BlockBlobStorage. Type: string (or Expression with resultType string). */
  accountKind?: string;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: string;
}

/** The azure table storage linked service. */
export interface AzureTableStorageLinkedService extends LinkedServiceParent {
  /** Azure Table Storage linked service properties. */
  typeProperties: AzureStorageLinkedServiceTypeProperties;
  type: "AzureTableStorage";
}

/** Azure SQL Data Warehouse linked service. */
export interface AzureSqlDWLinkedService extends LinkedServiceParent {
  /** Azure SQL Data Warehouse linked service properties. */
  typeProperties: AzureSqlDWLinkedServiceTypeProperties;
  type: "AzureSqlDW";
}

/** Azure SQL Data Warehouse linked service properties. */
export interface AzureSqlDWLinkedServiceTypeProperties {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The ID of the service principal used to authenticate against Azure SQL Data Warehouse. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key of the service principal used to authenticate against Azure SQL Data Warehouse. */
  servicePrincipalKey?: SecretBase;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** SQL Server linked service. */
export interface SqlServerLinkedService extends LinkedServiceParent {
  /** SQL Server linked service properties. */
  typeProperties: SqlServerLinkedServiceTypeProperties;
  type: "SqlServer";
}

/** SQL Server linked service properties. */
export interface SqlServerLinkedServiceTypeProperties {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The on-premises Windows authentication user name. Type: string (or Expression with resultType string). */
  userName?: any;
  /** The on-premises Windows authentication password. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Amazon RDS for SQL Server linked service. */
export interface AmazonRdsForSqlServerLinkedService
  extends LinkedServiceParent {
  /** Amazon RDS for SQL Server linked service properties. */
  typeProperties: AmazonRdsForSqlServerLinkedServiceTypeProperties;
  type: "AmazonRdsForSqlServer";
}

/** SQL Server linked service properties. */
export interface AmazonRdsForSqlServerLinkedServiceTypeProperties {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The on-premises Windows authentication user name. Type: string (or Expression with resultType string). */
  userName?: any;
  /** The on-premises Windows authentication password. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Microsoft Azure SQL Database linked service. */
export interface AzureSqlDatabaseLinkedService extends LinkedServiceParent {
  /** Azure SQL Database linked service properties. */
  typeProperties: AzureSqlDatabaseLinkedServiceTypeProperties;
  type: "AzureSqlDatabase";
}

/** Azure SQL Database linked service properties. */
export interface AzureSqlDatabaseLinkedServiceTypeProperties {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The ID of the service principal used to authenticate against Azure SQL Database. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key of the service principal used to authenticate against Azure SQL Database. */
  servicePrincipalKey?: SecretBase;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure SQL Managed Instance linked service. */
export interface AzureSqlMILinkedService extends LinkedServiceParent {
  /** Azure SQL Managed Instance linked service properties. */
  typeProperties: AzureSqlMILinkedServiceTypeProperties;
  type: "AzureSqlMI";
}

/** Azure SQL Managed Instance linked service properties. */
export interface AzureSqlMILinkedServiceTypeProperties {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The ID of the service principal used to authenticate against Azure SQL Managed Instance. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key of the service principal used to authenticate against Azure SQL Managed Instance. */
  servicePrincipalKey?: SecretBase;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure Batch linked service. */
export interface AzureBatchLinkedService extends LinkedServiceParent {
  /** Azure Batch linked service properties. */
  typeProperties: AzureBatchLinkedServiceTypeProperties;
  type: "AzureBatch";
}

/** Azure Batch linked service properties. */
export interface AzureBatchLinkedServiceTypeProperties {
  /** The Azure Batch account name. Type: string (or Expression with resultType string). */
  accountName: any;
  /** The Azure Batch account access key. */
  accessKey?: SecretBase;
  /** The Azure Batch URI. Type: string (or Expression with resultType string). */
  batchUri: any;
  /** The Azure Batch pool name. Type: string (or Expression with resultType string). */
  poolName: any;
  /** The Azure Storage linked service reference. */
  linkedServiceName: LinkedServiceReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure Key Vault linked service. */
export interface AzureKeyVaultLinkedService extends LinkedServiceParent {
  /** Azure Key Vault linked service properties. */
  typeProperties: AzureKeyVaultLinkedServiceTypeProperties;
  type: "AzureKeyVault";
}

/** Azure Key Vault linked service properties. */
export interface AzureKeyVaultLinkedServiceTypeProperties {
  /** The base URL of the Azure Key Vault. e.g. https://myakv.vault.azure.net Type: string (or Expression with resultType string). */
  baseUrl: any;
}

/** Microsoft Azure Cosmos Database (CosmosDB) linked service. */
export interface CosmosDbLinkedService extends LinkedServiceParent {
  /** CosmosDB linked service properties. */
  typeProperties: CosmosDbLinkedServiceTypeProperties;
  type: "CosmosDb";
}

/** CosmosDB linked service properties. */
export interface CosmosDbLinkedServiceTypeProperties {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The endpoint of the Azure CosmosDB account. Type: string (or Expression with resultType string) */
  accountEndpoint?: any;
  /** The name of the database. Type: string (or Expression with resultType string) */
  database?: any;
  /** The account key of the Azure CosmosDB account. Type: SecureString or AzureKeyVaultSecretReference. */
  accountKey?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Dynamics linked service. */
export interface DynamicsLinkedService extends LinkedServiceParent {
  /** Dynamics linked service properties. */
  typeProperties: DynamicsLinkedServiceTypeProperties;
  type: "Dynamics";
}

/** Dynamics linked service properties. */
export interface DynamicsLinkedServiceTypeProperties {
  /** The deployment type of the Dynamics instance. 'Online' for Dynamics Online and 'OnPremisesWithIfd' for Dynamics on-premises with Ifd. Type: string (or Expression with resultType string). */
  deploymentType: any;
  /** The host name of the on-premises Dynamics server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
  hostName?: any;
  /** The port of on-premises Dynamics server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: any;
  /** The URL to the Microsoft Dynamics server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
  serviceUri?: any;
  /** The organization name of the Dynamics instance. The property is required for on-prem and required for online when there are more than one Dynamics instances associated with the user. Type: string (or Expression with resultType string). */
  organizationName?: any;
  /** The authentication type to connect to Dynamics server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). */
  authenticationType: any;
  /** User name to access the Dynamics instance. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password to access the Dynamics instance. */
  password?: SecretBase;
  /** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). */
  servicePrincipalCredentialType?: any;
  /** The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. */
  servicePrincipalCredential?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Dynamics CRM linked service. */
export interface DynamicsCrmLinkedService extends LinkedServiceParent {
  /** Dynamics CRM linked service properties. */
  typeProperties: DynamicsCrmLinkedServiceTypeProperties;
  type: "DynamicsCrm";
}

/** Dynamics CRM linked service properties. */
export interface DynamicsCrmLinkedServiceTypeProperties {
  /** The deployment type of the Dynamics CRM instance. 'Online' for Dynamics CRM Online and 'OnPremisesWithIfd' for Dynamics CRM on-premises with Ifd. Type: string (or Expression with resultType string). */
  deploymentType: any;
  /** The host name of the on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
  hostName?: any;
  /** The port of on-premises Dynamics CRM server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: any;
  /** The URL to the Microsoft Dynamics CRM server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
  serviceUri?: any;
  /** The organization name of the Dynamics CRM instance. The property is required for on-prem and required for online when there are more than one Dynamics CRM instances associated with the user. Type: string (or Expression with resultType string). */
  organizationName?: any;
  /** The authentication type to connect to Dynamics CRM server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario, 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). */
  authenticationType: any;
  /** User name to access the Dynamics CRM instance. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password to access the Dynamics CRM instance. */
  password?: SecretBase;
  /** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** A string from ServicePrincipalCredentialEnum or an expression */
  servicePrincipalCredentialType?: any;
  /** The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. */
  servicePrincipalCredential?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Common Data Service for Apps linked service. */
export interface CommonDataServiceForAppsLinkedService
  extends LinkedServiceParent {
  /** Common Data Service for Apps linked service properties. */
  typeProperties: CommonDataServiceForAppsLinkedServiceTypeProperties;
  type: "CommonDataServiceForApps";
}

/** Common Data Service for Apps linked service properties. */
export interface CommonDataServiceForAppsLinkedServiceTypeProperties {
  /** The deployment type of the Common Data Service for Apps instance. 'Online' for Common Data Service for Apps Online and 'OnPremisesWithIfd' for Common Data Service for Apps on-premises with Ifd. Type: string (or Expression with resultType string). */
  deploymentType: any;
  /** The host name of the on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Type: string (or Expression with resultType string). */
  hostName?: any;
  /** The port of on-premises Common Data Service for Apps server. The property is required for on-prem and not allowed for online. Default is 443. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: any;
  /** The URL to the Microsoft Common Data Service for Apps server. The property is required for on-line and not allowed for on-prem. Type: string (or Expression with resultType string). */
  serviceUri?: any;
  /** The organization name of the Common Data Service for Apps instance. The property is required for on-prem and required for online when there are more than one Common Data Service for Apps instances associated with the user. Type: string (or Expression with resultType string). */
  organizationName?: any;
  /** The authentication type to connect to Common Data Service for Apps server. 'Office365' for online scenario, 'Ifd' for on-premises with Ifd scenario. 'AADServicePrincipal' for Server-To-Server authentication in online scenario. Type: string (or Expression with resultType string). */
  authenticationType: any;
  /** User name to access the Common Data Service for Apps instance. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password to access the Common Data Service for Apps instance. */
  password?: SecretBase;
  /** The client ID of the application in Azure Active Directory used for Server-To-Server authentication. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** A string from ServicePrincipalCredentialEnum or an expression */
  servicePrincipalCredentialType?: any;
  /** The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. */
  servicePrincipalCredential?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** HDInsight linked service. */
export interface HDInsightLinkedService extends LinkedServiceParent {
  /** HDInsight linked service properties. */
  typeProperties: HDInsightLinkedServiceTypeProperties;
  type: "HDInsight";
}

/** HDInsight linked service properties. */
export interface HDInsightLinkedServiceTypeProperties {
  /** HDInsight cluster URI. Type: string (or Expression with resultType string). */
  clusterUri: any;
  /** HDInsight cluster user name. Type: string (or Expression with resultType string). */
  userName?: any;
  /** HDInsight cluster password. */
  password?: SecretBase;
  /** The Azure Storage linked service reference. */
  linkedServiceName?: LinkedServiceReference;
  /** A reference to the Azure SQL linked service that points to the HCatalog database. */
  hcatalogLinkedServiceName?: LinkedServiceReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
  /** Specify if the HDInsight is created with ESP (Enterprise Security Package). Type: Boolean. */
  isEspEnabled?: any;
  /** Specify the FileSystem if the main storage for the HDInsight is ADLS Gen2. Type: string (or Expression with resultType string). */
  fileSystem?: any;
}

/** File system linked service. */
export interface FileServerLinkedService extends LinkedServiceParent {
  /** File system linked service properties. */
  typeProperties: FileServerLinkedServiceTypeProperties;
  type: "FileServer";
}

/** File system linked service properties. */
export interface FileServerLinkedServiceTypeProperties {
  /** Host name of the server. Type: string (or Expression with resultType string). */
  host: any;
  /** User ID to logon the server. Type: string (or Expression with resultType string). */
  userId?: any;
  /** Password to logon the server. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure File Storage linked service. */
export interface AzureFileStorageLinkedService extends LinkedServiceParent {
  /** Azure File Storage linked service properties. */
  typeProperties: AzureFileStorageLinkedServiceTypeProperties;
  type: "AzureFileStorage";
}

/** Azure File Storage linked service properties. */
export interface AzureFileStorageLinkedServiceTypeProperties {
  /** Host name of the server. Type: string (or Expression with resultType string). */
  host: any;
  /** User ID to logon the server. Type: string (or Expression with resultType string). */
  userId?: any;
  /** Password to logon the server. */
  password?: SecretBase;
  /** The connection string. It is mutually exclusive with sasUri property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of accountKey in connection string. */
  accountKey?: AzureKeyVaultSecretReference;
  /** SAS URI of the Azure File resource. It is mutually exclusive with connectionString property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  sasUri?: any;
  /** The Azure key vault secret reference of sasToken in sas uri. */
  sasToken?: AzureKeyVaultSecretReference;
  /** The azure file share name. It is required when auth with accountKey/sasToken. Type: string (or Expression with resultType string). */
  fileShare?: any;
  /** The azure file share snapshot version. Type: string (or Expression with resultType string). */
  snapshot?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for Google Cloud Storage. */
export interface GoogleCloudStorageLinkedService extends LinkedServiceParent {
  /** Google Cloud Storage linked service properties. */
  typeProperties: GoogleCloudStorageLinkedServiceTypeProperties;
  type: "GoogleCloudStorage";
}

/** Google Cloud Storage linked service properties. */
export interface GoogleCloudStorageLinkedServiceTypeProperties {
  /** The access key identifier of the Google Cloud Storage Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). */
  accessKeyId?: any;
  /** The secret access key of the Google Cloud Storage Identity and Access Management (IAM) user. */
  secretAccessKey?: SecretBase;
  /** This value specifies the endpoint to access with the Google Cloud Storage Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). */
  serviceUrl?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Oracle database. */
export interface OracleLinkedService extends LinkedServiceParent {
  /** Oracle database linked service properties. */
  typeProperties: OracleLinkedServiceTypeProperties;
  type: "Oracle";
}

/** Oracle database linked service properties. */
export interface OracleLinkedServiceTypeProperties {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** AmazonRdsForOracle database. */
export interface AmazonRdsForOracleLinkedService extends LinkedServiceParent {
  /** AmazonRdsForOracle database linked service properties. */
  typeProperties: AmazonRdsForLinkedServiceTypeProperties;
  type: "AmazonRdsForOracle";
}

/** AmazonRdsForOracle database linked service properties. */
export interface AmazonRdsForLinkedServiceTypeProperties {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure MySQL database linked service. */
export interface AzureMySqlLinkedService extends LinkedServiceParent {
  /** Azure MySQL database linked service properties. */
  typeProperties: AzureMySqlLinkedServiceTypeProperties;
  type: "AzureMySql";
}

/** Azure MySQL database linked service properties. */
export interface AzureMySqlLinkedServiceTypeProperties {
  /** The connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for MySQL data source. */
export interface MySqlLinkedService extends LinkedServiceParent {
  /** MySQL linked service properties. */
  typeProperties: MySqlLinkedServiceTypeProperties;
  type: "MySql";
}

/** MySQL linked service properties. */
export interface MySqlLinkedServiceTypeProperties {
  /** The connection string. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for PostgreSQL data source. */
export interface PostgreSqlLinkedService extends LinkedServiceParent {
  /** PostgreSQL linked service properties. */
  typeProperties: PostgreSqlLinkedServiceTypeProperties;
  type: "PostgreSql";
}

/** PostgreSQL linked service properties. */
export interface PostgreSqlLinkedServiceTypeProperties {
  /** The connection string. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for Sybase data source. */
export interface SybaseLinkedService extends LinkedServiceParent {
  /** Sybase linked service properties. */
  typeProperties: SybaseLinkedServiceTypeProperties;
  type: "Sybase";
}

/** Sybase linked service properties. */
export interface SybaseLinkedServiceTypeProperties {
  /** Server name for connection. Type: string (or Expression with resultType string). */
  server: any;
  /** Database name for connection. Type: string (or Expression with resultType string). */
  database: any;
  /** Schema name for connection. Type: string (or Expression with resultType string). */
  schema?: any;
  /** AuthenticationType to be used for connection. */
  authenticationType?: "Basic" | "Windows";
  /** Username for authentication. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password for authentication. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for DB2 data source. */
export interface Db2LinkedService extends LinkedServiceParent {
  /** DB2 linked service properties. */
  typeProperties: Db2LinkedServiceTypeProperties;
  type: "Db2";
}

/** DB2 linked service properties. */
export interface Db2LinkedServiceTypeProperties {
  /** The connection string. It is mutually exclusive with server, database, authenticationType, userName, packageCollection and certificateCommonName property. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** Server name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  server: any;
  /** Database name for connection. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  database: any;
  /** AuthenticationType to be used for connection. It is mutually exclusive with connectionString property. */
  authenticationType?: "Basic";
  /** Username for authentication. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password for authentication. */
  password?: SecretBase;
  /** Under where packages are created when querying database. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  packageCollection?: any;
  /** Certificate Common Name when TLS is enabled. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  certificateCommonName?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. It is mutually exclusive with connectionString property. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for Teradata data source. */
export interface TeradataLinkedService extends LinkedServiceParent {
  /** Teradata linked service properties. */
  typeProperties: TeradataLinkedServiceTypeProperties;
  type: "Teradata";
}

/** Teradata linked service properties. */
export interface TeradataLinkedServiceTypeProperties {
  /** Teradata ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** Server name for connection. Type: string (or Expression with resultType string). */
  server?: any;
  /** AuthenticationType to be used for connection. */
  authenticationType?: "Basic" | "Windows";
  /** Username for authentication. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password for authentication. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure ML Studio Web Service linked service. */
export interface AzureMLLinkedService extends LinkedServiceParent {
  /** Azure ML Studio Web Service linked service properties. */
  typeProperties: AzureMLLinkedServiceTypeProperties;
  type: "AzureML";
}

/** Azure ML Studio Web Service linked service properties. */
export interface AzureMLLinkedServiceTypeProperties {
  /** The Batch Execution REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string). */
  mlEndpoint: any;
  /** The API key for accessing the Azure ML model endpoint. */
  apiKey: SecretBase;
  /** The Update Resource REST URL for an Azure ML Studio Web Service endpoint. Type: string (or Expression with resultType string). */
  updateResourceEndpoint?: any;
  /** The ID of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key of the service principal used to authenticate against the ARM-based updateResourceEndpoint of an Azure ML Studio web service. */
  servicePrincipalKey?: SecretBase;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure ML Service linked service. */
export interface AzureMLServiceLinkedService extends LinkedServiceParent {
  /** Azure ML Service linked service properties. */
  typeProperties: AzureMLServiceLinkedServiceTypeProperties;
  type: "AzureMLService";
}

/** Azure ML Service linked service properties. */
export interface AzureMLServiceLinkedServiceTypeProperties {
  /** Azure ML Service workspace subscription ID. Type: string (or Expression with resultType string). */
  subscriptionId: any;
  /** Azure ML Service workspace resource group name. Type: string (or Expression with resultType string). */
  resourceGroupName: any;
  /** Azure ML Service workspace name. Type: string (or Expression with resultType string). */
  mlWorkspaceName: any;
  /** The ID of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key of the service principal used to authenticate against the endpoint of a published Azure ML Service pipeline. */
  servicePrincipalKey?: SecretBase;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Open Database Connectivity (ODBC) linked service. */
export interface OdbcLinkedService extends LinkedServiceParent {
  /** ODBC linked service properties. */
  typeProperties: OdbcLinkedServiceTypeProperties;
  type: "Odbc";
}

/** ODBC linked service properties. */
export interface OdbcLinkedServiceTypeProperties {
  /** The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** Type of authentication used to connect to the ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
  authenticationType?: any;
  /** The access credential portion of the connection string specified in driver-specific property-value format. */
  credential?: SecretBase;
  /** User name for Basic authentication. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password for Basic authentication. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Informix linked service. */
export interface InformixLinkedService extends LinkedServiceParent {
  /** Informix linked service properties. */
  typeProperties: InformixLinkedServiceTypeProperties;
  type: "Informix";
}

/** Informix linked service properties. */
export interface InformixLinkedServiceTypeProperties {
  /** The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** Type of authentication used to connect to the Informix as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
  authenticationType?: any;
  /** The access credential portion of the connection string specified in driver-specific property-value format. */
  credential?: SecretBase;
  /** User name for Basic authentication. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password for Basic authentication. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Microsoft Access linked service. */
export interface MicrosoftAccessLinkedService extends LinkedServiceParent {
  /** Microsoft Access linked service properties. */
  typeProperties: MicrosoftAccessLinkedServiceTypeProperties;
  type: "MicrosoftAccess";
}

/** Microsoft Access linked service properties. */
export interface MicrosoftAccessLinkedServiceTypeProperties {
  /** The non-access credential portion of the connection string as well as an optional encrypted credential. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** Type of authentication used to connect to the Microsoft Access as ODBC data store. Possible values are: Anonymous and Basic. Type: string (or Expression with resultType string). */
  authenticationType?: any;
  /** The access credential portion of the connection string specified in driver-specific property-value format. */
  credential?: SecretBase;
  /** User name for Basic authentication. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password for Basic authentication. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Hadoop Distributed File System (HDFS) linked service. */
export interface HdfsLinkedService extends LinkedServiceParent {
  /** HDFS linked service properties. */
  typeProperties: HdfsLinkedServiceTypeProperties;
  type: "Hdfs";
}

/** HDFS linked service properties. */
export interface HdfsLinkedServiceTypeProperties {
  /** The URL of the HDFS service endpoint, e.g. http://myhostname:50070/webhdfs/v1 . Type: string (or Expression with resultType string). */
  url: any;
  /** Type of authentication used to connect to the HDFS. Possible values are: Anonymous and Windows. Type: string (or Expression with resultType string). */
  authenticationType?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
  /** User name for Windows authentication. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password for Windows authentication. */
  password?: SecretBase;
}

/** Open Data Protocol (OData) linked service. */
export interface ODataLinkedService extends LinkedServiceParent {
  /** OData linked service properties. */
  typeProperties: ODataLinkedServiceTypeProperties;
  type: "OData";
}

/** OData linked service properties. */
export interface ODataLinkedServiceTypeProperties {
  /** The URL of the OData service endpoint. Type: string (or Expression with resultType string). */
  url: any;
  /** Type of authentication used to connect to the OData service. */
  authenticationType?:
    | "Basic"
    | "Anonymous"
    | "Windows"
    | "AadServicePrincipal"
    | "ManagedServiceIdentity";
  /** User name of the OData service. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password of the OData service. */
  password?: SecretBase;
  /** Specify the tenant information (domain name or tenant ID) under which your application resides. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** Specify the application id of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** Specify the resource you are requesting authorization to use Directory. Type: string (or Expression with resultType string). */
  aadResourceId?: any;
  /** Specify the credential type (key or cert) is used for service principal. */
  aadServicePrincipalCredentialType?:
    | "ServicePrincipalKey"
    | "ServicePrincipalCert";
  /** Specify the secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). */
  servicePrincipalKey?: SecretBase;
  /** Specify the base64 encoded certificate of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). */
  servicePrincipalEmbeddedCert?: SecretBase;
  /** Specify the password of your certificate if your certificate has a password and you are using AadServicePrincipal authentication. Type: string (or Expression with resultType string). */
  servicePrincipalEmbeddedCertPassword?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Web linked service. */
export interface WebLinkedService extends LinkedServiceParent {
  /** Web linked service properties. */
  typeProperties: WebLinkedServiceTypeProperties;
  type: "Web";
}

/** Base definition of WebLinkedServiceTypeProperties, this typeProperties is polymorphic based on authenticationType, so not flattened in SDK models. */
export interface WebLinkedServiceTypePropertiesParent {
  /** The URL of the web service endpoint, e.g. http://www.microsoft.com . Type: string (or Expression with resultType string). */
  url: any;
  authenticationType:
    | "WebLinkedServiceTypeProperties"
    | "Anonymous"
    | "Basic"
    | "ClientCertificate";
}

/** A WebLinkedService that uses anonymous authentication to communicate with an HTTP endpoint. */
export interface WebAnonymousAuthentication
  extends WebLinkedServiceTypePropertiesParent {
  authenticationType: "Anonymous";
}

/** A WebLinkedService that uses basic authentication to communicate with an HTTP endpoint. */
export interface WebBasicAuthentication
  extends WebLinkedServiceTypePropertiesParent {
  /** User name for Basic authentication. Type: string (or Expression with resultType string). */
  username: any;
  /** The password for Basic authentication. */
  password: SecretBase;
  authenticationType: "Basic";
}

/** A WebLinkedService that uses client certificate based authentication to communicate with an HTTP endpoint. This scheme follows mutual authentication; the server must also provide valid credentials to the client. */
export interface WebClientCertificateAuthentication
  extends WebLinkedServiceTypePropertiesParent {
  /** Base64-encoded contents of a PFX file. */
  pfx: SecretBase;
  /** Password for the PFX file. */
  password: SecretBase;
  authenticationType: "ClientCertificate";
}

/** Linked service for Cassandra data source. */
export interface CassandraLinkedService extends LinkedServiceParent {
  /** Cassandra linked service properties. */
  typeProperties: CassandraLinkedServiceTypeProperties;
  type: "Cassandra";
}

/** Cassandra linked service properties. */
export interface CassandraLinkedServiceTypeProperties {
  /** Host name for connection. Type: string (or Expression with resultType string). */
  host: any;
  /** AuthenticationType to be used for connection. Type: string (or Expression with resultType string). */
  authenticationType?: any;
  /** The port for the connection. Type: integer (or Expression with resultType integer). */
  port?: any;
  /** Username for authentication. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password for authentication. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for MongoDb data source. */
export interface MongoDbLinkedService extends LinkedServiceParent {
  /** MongoDB linked service properties. */
  typeProperties: MongoDbLinkedServiceTypeProperties;
  type: "MongoDb";
}

/** MongoDB linked service properties. */
export interface MongoDbLinkedServiceTypeProperties {
  /** The IP address or server name of the MongoDB server. Type: string (or Expression with resultType string). */
  server: any;
  /** The authentication type to be used to connect to the MongoDB database. */
  authenticationType?: "Basic" | "Anonymous";
  /** The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string). */
  databaseName: any;
  /** Username for authentication. Type: string (or Expression with resultType string). */
  username?: any;
  /** Password for authentication. */
  password?: SecretBase;
  /** Database to verify the username and password. Type: string (or Expression with resultType string). */
  authSource?: any;
  /** The TCP port number that the MongoDB server uses to listen for client connections. The default value is 27017. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: any;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. Type: boolean (or Expression with resultType boolean). */
  enableSsl?: any;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. Type: boolean (or Expression with resultType boolean). */
  allowSelfSignedServerCert?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for MongoDB Atlas data source. */
export interface MongoDbAtlasLinkedService extends LinkedServiceParent {
  /** MongoDB Atlas linked service properties. */
  typeProperties: MongoDbAtlasLinkedServiceTypeProperties;
  type: "MongoDbAtlas";
}

/** MongoDB Atlas linked service properties. */
export interface MongoDbAtlasLinkedServiceTypeProperties {
  /** The MongoDB Atlas connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The name of the MongoDB Atlas database that you want to access. Type: string (or Expression with resultType string). */
  database: any;
}

/** Linked service for MongoDB data source. */
export interface MongoDbV2LinkedService extends LinkedServiceParent {
  /** MongoDB linked service properties. */
  typeProperties: MongoDbV2LinkedServiceTypeProperties;
  type: "MongoDbV2";
}

/** MongoDB linked service properties. */
export interface MongoDbV2LinkedServiceTypeProperties {
  /** The MongoDB connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The name of the MongoDB database that you want to access. Type: string (or Expression with resultType string). */
  database: any;
}

/** Linked service for CosmosDB (MongoDB API) data source. */
export interface CosmosDbMongoDbApiLinkedService extends LinkedServiceParent {
  /** CosmosDB (MongoDB API) linked service properties. */
  typeProperties: CosmosDbMongoDbApiLinkedServiceTypeProperties;
  type: "CosmosDbMongoDbApi";
}

/** CosmosDB (MongoDB API) linked service properties. */
export interface CosmosDbMongoDbApiLinkedServiceTypeProperties {
  /** The CosmosDB (MongoDB API) connection string. Type: string, SecureString or AzureKeyVaultSecretReference. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString: any;
  /** The name of the CosmosDB (MongoDB API) database that you want to access. Type: string (or Expression with resultType string). */
  database: any;
}

/** Azure Data Lake Store linked service. */
export interface AzureDataLakeStoreLinkedService extends LinkedServiceParent {
  /** Azure Data Lake Store linked service properties. */
  typeProperties: AzureDataLakeStoreLinkedServiceTypeProperties;
  type: "AzureDataLakeStore";
}

/** Azure Data Lake Store linked service properties. */
export interface AzureDataLakeStoreLinkedServiceTypeProperties {
  /** Data Lake Store service URI. Type: string (or Expression with resultType string). */
  dataLakeStoreUri: any;
  /** The ID of the application used to authenticate against the Azure Data Lake Store account. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The Key of the application used to authenticate against the Azure Data Lake Store account. */
  servicePrincipalKey?: SecretBase;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** Data Lake Store account name. Type: string (or Expression with resultType string). */
  accountName?: any;
  /** Data Lake Store account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string). */
  subscriptionId?: any;
  /** Data Lake Store account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string). */
  resourceGroupName?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure Data Lake Storage Gen2 linked service. */
export interface AzureBlobFSLinkedService extends LinkedServiceParent {
  /** Azure Data Lake Storage Gen2 linked service properties. */
  typeProperties: AzureBlobFSLinkedServiceTypeProperties;
  type: "AzureBlobFS";
}

/** Azure Data Lake Storage Gen2 linked service properties. */
export interface AzureBlobFSLinkedServiceTypeProperties {
  /** Endpoint for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string). */
  url: any;
  /** Account key for the Azure Data Lake Storage Gen2 service. Type: string (or Expression with resultType string). */
  accountKey?: any;
  /** The ID of the application used to authenticate against the Azure Data Lake Storage Gen2 account. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The Key of the application used to authenticate against the Azure Data Lake Storage Gen2 account. */
  servicePrincipalKey?: SecretBase;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** The service principal credential type to use in Server-To-Server authentication. 'ServicePrincipalKey' for key/secret, 'ServicePrincipalCert' for certificate. Type: string (or Expression with resultType string). */
  servicePrincipalCredentialType?: any;
  /** The credential of the service principal object in Azure Active Directory. If servicePrincipalCredentialType is 'ServicePrincipalKey', servicePrincipalCredential can be SecureString or AzureKeyVaultSecretReference. If servicePrincipalCredentialType is 'ServicePrincipalCert', servicePrincipalCredential can only be AzureKeyVaultSecretReference. */
  servicePrincipalCredential?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Office365 linked service. */
export interface Office365LinkedService extends LinkedServiceParent {
  /** Office365 linked service properties. */
  typeProperties: Office365LinkedServiceTypeProperties;
  type: "Office365";
}

/** Office365 linked service properties. */
export interface Office365LinkedServiceTypeProperties {
  /** Azure tenant ID to which the Office 365 account belongs. Type: string (or Expression with resultType string). */
  office365TenantId: any;
  /** Specify the tenant information under which your Azure AD web application resides. Type: string (or Expression with resultType string). */
  servicePrincipalTenantId: any;
  /** Specify the application's client ID. Type: string (or Expression with resultType string). */
  servicePrincipalId: any;
  /** Specify the application's key. */
  servicePrincipalKey: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for Salesforce. */
export interface SalesforceLinkedService extends LinkedServiceParent {
  /** Salesforce linked service properties. */
  typeProperties: SalesforceLinkedServiceTypeProperties;
  type: "Salesforce";
}

/** Salesforce linked service properties. */
export interface SalesforceLinkedServiceTypeProperties {
  /** The URL of Salesforce instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string). */
  environmentUrl?: any;
  /** The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string). */
  username?: any;
  /** The password for Basic authentication of the Salesforce instance. */
  password?: SecretBase;
  /** The security token is optional to remotely access Salesforce instance. */
  securityToken?: SecretBase;
  /** The Salesforce API version used in ADF. Type: string (or Expression with resultType string). */
  apiVersion?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for Salesforce Service Cloud. */
export interface SalesforceServiceCloudLinkedService
  extends LinkedServiceParent {
  /** Salesforce Service Cloud linked service properties. */
  typeProperties: SalesforceServiceCloudLinkedServiceTypeProperties;
  type: "SalesforceServiceCloud";
}

/** Salesforce Service Cloud linked service properties. */
export interface SalesforceServiceCloudLinkedServiceTypeProperties {
  /** The URL of Salesforce Service Cloud instance. Default is 'https://login.salesforce.com'. To copy data from sandbox, specify 'https://test.salesforce.com'. To copy data from custom domain, specify, for example, 'https://[domain].my.salesforce.com'. Type: string (or Expression with resultType string). */
  environmentUrl?: any;
  /** The username for Basic authentication of the Salesforce instance. Type: string (or Expression with resultType string). */
  username?: any;
  /** The password for Basic authentication of the Salesforce instance. */
  password?: SecretBase;
  /** The security token is optional to remotely access Salesforce instance. */
  securityToken?: SecretBase;
  /** The Salesforce API version used in ADF. Type: string (or Expression with resultType string). */
  apiVersion?: any;
  /** Extended properties appended to the connection string. Type: string (or Expression with resultType string). */
  extendedProperties?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for SAP Cloud for Customer. */
export interface SapCloudForCustomerLinkedService extends LinkedServiceParent {
  /** SAP Cloud for Customer linked service properties. */
  typeProperties: SapCloudForCustomerLinkedServiceTypeProperties;
  type: "SapCloudForCustomer";
}

/** SAP Cloud for Customer linked service properties. */
export interface SapCloudForCustomerLinkedServiceTypeProperties {
  /** The URL of SAP Cloud for Customer OData API. For example, '[https://[tenantname].crm.ondemand.com/sap/c4c/odata/v1]'. Type: string (or Expression with resultType string). */
  url: any;
  /** The username for Basic authentication. Type: string (or Expression with resultType string). */
  username?: any;
  /** The password for Basic authentication. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for SAP ERP Central Component(SAP ECC). */
export interface SapEccLinkedService extends LinkedServiceParent {
  /** SAP ECC linked service properties. */
  typeProperties: SapEccLinkedServiceTypeProperties;
  type: "SapEcc";
}

/** SAP ECC linked service properties. */
export interface SapEccLinkedServiceTypeProperties {
  /** The URL of SAP ECC OData API. For example, '[https://hostname:port/sap/opu/odata/sap/servicename/]'. Type: string (or Expression with resultType string). */
  url: string;
  /** The username for Basic authentication. Type: string (or Expression with resultType string). */
  username?: string;
  /** The password for Basic authentication. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Either encryptedCredential or username/password must be provided. Type: string (or Expression with resultType string). */
  encryptedCredential?: string;
}

/** SAP Business Warehouse Open Hub Destination Linked Service. */
export interface SapOpenHubLinkedService extends LinkedServiceParent {
  /** Properties specific to SAP Business Warehouse Open Hub Destination linked service type. */
  typeProperties: SapOpenHubLinkedServiceTypeProperties;
  type: "SapOpenHub";
}

/** Properties specific to SAP Business Warehouse Open Hub Destination linked service type. */
export interface SapOpenHubLinkedServiceTypeProperties {
  /** Host name of the SAP BW instance where the open hub destination is located. Type: string (or Expression with resultType string). */
  server: any;
  /** System number of the BW system where the open hub destination is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). */
  systemNumber: any;
  /** Client ID of the client on the BW system where the open hub destination is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). */
  clientId: any;
  /** Language of the BW system where the open hub destination is located. The default value is EN. Type: string (or Expression with resultType string). */
  language?: any;
  /** SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string). */
  systemId?: any;
  /** Username to access the SAP BW server where the open hub destination is located. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password to access the SAP BW server where the open hub destination is located. */
  password?: SecretBase;
  /** The hostname of the SAP Message Server. Type: string (or Expression with resultType string). */
  messageServer?: any;
  /** The service name or port number of the Message Server. Type: string (or Expression with resultType string). */
  messageServerService?: any;
  /** The Logon Group for the SAP System. Type: string (or Expression with resultType string). */
  logonGroup?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Rest Service linked service. */
export interface RestServiceLinkedService extends LinkedServiceParent {
  /** Rest Service linked service properties. */
  typeProperties: RestServiceLinkedServiceTypeProperties;
  type: "RestService";
}

/** Rest Service linked service properties. */
export interface RestServiceLinkedServiceTypeProperties {
  /** The base URL of the REST service. */
  url: any;
  /** Whether to validate server side SSL certificate when connecting to the endpoint.The default value is true. Type: boolean (or Expression with resultType boolean). */
  enableServerCertificateValidation?: any;
  /** Type of authentication used to connect to the REST service. */
  authenticationType:
    | "Anonymous"
    | "Basic"
    | "AadServicePrincipal"
    | "ManagedServiceIdentity";
  /** The user name used in Basic authentication type. */
  userName?: any;
  /** The password used in Basic authentication type. */
  password?: SecretBase;
  /** The application's client ID used in AadServicePrincipal authentication type. */
  servicePrincipalId?: any;
  /** The application's key used in AadServicePrincipal authentication type. */
  servicePrincipalKey?: SecretBase;
  /** The tenant information (domain name or tenant ID) used in AadServicePrincipal authentication type under which your application resides. */
  tenant?: any;
  /** Indicates the azure cloud type of the service principle auth. Allowed values are AzurePublic, AzureChina, AzureUsGovernment, AzureGermany. Default value is the data factory regions’ cloud type. Type: string (or Expression with resultType string). */
  azureCloudType?: any;
  /** The resource you are requesting authorization to use. */
  aadResourceId?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for Amazon S3. */
export interface AmazonS3LinkedService extends LinkedServiceParent {
  /** Amazon S3 linked service properties. */
  typeProperties: AmazonS3LinkedServiceTypeProperties;
  type: "AmazonS3";
}

/** Amazon S3 linked service properties. */
export interface AmazonS3LinkedServiceTypeProperties {
  /** The authentication type of S3. Allowed value: AccessKey (default) or TemporarySecurityCredentials. Type: string (or Expression with resultType string). */
  authenticationType?: any;
  /** The access key identifier of the Amazon S3 Identity and Access Management (IAM) user. Type: string (or Expression with resultType string). */
  accessKeyId?: any;
  /** The secret access key of the Amazon S3 Identity and Access Management (IAM) user. */
  secretAccessKey?: SecretBase;
  /** This value specifies the endpoint to access with the S3 Connector. This is an optional property; change it only if you want to try a different service endpoint or want to switch between https and http. Type: string (or Expression with resultType string). */
  serviceUrl?: any;
  /** The session token for the S3 temporary security credential. */
  sessionToken?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for Amazon Redshift. */
export interface AmazonRedshiftLinkedService extends LinkedServiceParent {
  /** Amazon Redshift linked service properties. */
  typeProperties: AmazonRedshiftLinkedServiceTypeProperties;
  type: "AmazonRedshift";
}

/** Amazon Redshift linked service properties. */
export interface AmazonRedshiftLinkedServiceTypeProperties {
  /** The name of the Amazon Redshift server. Type: string (or Expression with resultType string). */
  server: any;
  /** The username of the Amazon Redshift source. Type: string (or Expression with resultType string). */
  username?: any;
  /** The password of the Amazon Redshift source. */
  password?: SecretBase;
  /** The database name of the Amazon Redshift source. Type: string (or Expression with resultType string). */
  database: any;
  /** The TCP port number that the Amazon Redshift server uses to listen for client connections. The default value is 5439. Type: integer (or Expression with resultType integer). */
  port?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Custom linked service. */
export interface CustomDataSourceLinkedService extends LinkedServiceParent {
  /** Custom linked service properties. */
  typeProperties: any;
  type: "CustomDataSource";
}

/** Linked service for Windows Azure Search Service. */
export interface AzureSearchLinkedService extends LinkedServiceParent {
  /** Windows Azure Search Service linked service properties. */
  typeProperties: AzureSearchLinkedServiceTypeProperties;
  type: "AzureSearch";
}

/** Windows Azure Search Service linked service properties. */
export interface AzureSearchLinkedServiceTypeProperties {
  /** URL for Azure Search service. Type: string (or Expression with resultType string). */
  url: any;
  /** Admin Key for Azure Search service */
  key?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Linked service for an HTTP source. */
export interface HttpLinkedService extends LinkedServiceParent {
  /** Properties specific to this linked service type. */
  typeProperties: HttpLinkedServiceTypeProperties;
  type: "HttpServer";
}

/** Properties specific to this linked service type. */
export interface HttpLinkedServiceTypeProperties {
  /** The base URL of the HTTP endpoint, e.g. http://www.microsoft.com. Type: string (or Expression with resultType string). */
  url: any;
  /** The authentication type to be used to connect to the HTTP server. */
  authenticationType?:
    | "Basic"
    | "Anonymous"
    | "Digest"
    | "Windows"
    | "ClientCertificate";
  /** User name for Basic, Digest, or Windows authentication. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password for Basic, Digest, Windows, or ClientCertificate with EmbeddedCertData authentication. */
  password?: SecretBase;
  /** Base64 encoded certificate data for ClientCertificate authentication. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string). */
  embeddedCertData?: any;
  /** Thumbprint of certificate for ClientCertificate authentication. Only valid for on-premises copy. For on-premises copy with ClientCertificate authentication, either CertThumbprint or EmbeddedCertData/Password should be specified. Type: string (or Expression with resultType string). */
  certThumbprint?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
  /** If true, validate the HTTPS server SSL certificate. Default value is true. Type: boolean (or Expression with resultType boolean). */
  enableServerCertificateValidation?: any;
}

/** A FTP server Linked Service. */
export interface FtpServerLinkedService extends LinkedServiceParent {
  /** Properties specific to this linked service type. */
  typeProperties: FtpServerLinkedServiceTypeProperties;
  type: "FtpServer";
}

/** Properties specific to this linked service type. */
export interface FtpServerLinkedServiceTypeProperties {
  /** Host name of the FTP server. Type: string (or Expression with resultType string). */
  host: any;
  /** The TCP port number that the FTP server uses to listen for client connections. Default value is 21. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: any;
  /** The authentication type to be used to connect to the FTP server. */
  authenticationType?: "Basic" | "Anonymous";
  /** Username to logon the FTP server. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password to logon the FTP server. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
  /** If true, connect to the FTP server over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean). */
  enableSsl?: any;
  /** If true, validate the FTP server SSL certificate when connect over SSL/TLS channel. Default value is true. Type: boolean (or Expression with resultType boolean). */
  enableServerCertificateValidation?: any;
}

/** A linked service for an SSH File Transfer Protocol (SFTP) server. */
export interface SftpServerLinkedService extends LinkedServiceParent {
  /** Properties specific to this linked service type. */
  typeProperties: SftpServerLinkedServiceTypeProperties;
  type: "Sftp";
}

/** Properties specific to this linked service type. */
export interface SftpServerLinkedServiceTypeProperties {
  /** The SFTP server host name. Type: string (or Expression with resultType string). */
  host: any;
  /** The TCP port number that the SFTP server uses to listen for client connections. Default value is 22. Type: integer (or Expression with resultType integer), minimum: 0. */
  port?: any;
  /** The authentication type to be used to connect to the FTP server. */
  authenticationType?: "Basic" | "SshPublicKey";
  /** The username used to log on to the SFTP server. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password to logon the SFTP server for Basic authentication. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
  /** The SSH private key file path for SshPublicKey authentication. Only valid for on-premises copy. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. Type: string (or Expression with resultType string). */
  privateKeyPath?: any;
  /** Base64 encoded SSH private key content for SshPublicKey authentication. For on-premises copy with SshPublicKey authentication, either PrivateKeyPath or PrivateKeyContent should be specified. SSH private key should be OpenSSH format. */
  privateKeyContent?: SecretBase;
  /** The password to decrypt the SSH private key if the SSH private key is encrypted. */
  passPhrase?: SecretBase;
  /** If true, skip the SSH host key validation. Default value is false. Type: boolean (or Expression with resultType boolean). */
  skipHostKeyValidation?: any;
  /** The host key finger-print of the SFTP server. When SkipHostKeyValidation is false, HostKeyFingerprint should be specified. Type: string (or Expression with resultType string). */
  hostKeyFingerprint?: any;
}

/** SAP Business Warehouse Linked Service. */
export interface SapBWLinkedService extends LinkedServiceParent {
  /** Properties specific to this linked service type. */
  typeProperties: SapBWLinkedServiceTypeProperties;
  type: "SapBW";
}

/** Properties specific to this linked service type. */
export interface SapBWLinkedServiceTypeProperties {
  /** Host name of the SAP BW instance. Type: string (or Expression with resultType string). */
  server: any;
  /** System number of the BW system. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). */
  systemNumber: any;
  /** Client ID of the client on the BW system. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). */
  clientId: any;
  /** Username to access the SAP BW server. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password to access the SAP BW server. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** SAP HANA Linked Service. */
export interface SapHanaLinkedService extends LinkedServiceParent {
  /** Properties specific to this linked service type. */
  typeProperties: SapHanaLinkedServiceProperties;
  type: "SapHana";
}

/** Properties specific to this linked service type. */
export interface SapHanaLinkedServiceProperties {
  /** SAP HANA ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** Host name of the SAP HANA server. Type: string (or Expression with resultType string). */
  server: any;
  /** The authentication type to be used to connect to the SAP HANA server. */
  authenticationType?: "Basic" | "Windows";
  /** Username to access the SAP HANA server. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password to access the SAP HANA server. */
  password?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Amazon Marketplace Web Service linked service. */
export interface AmazonMWSLinkedService extends LinkedServiceParent {
  /** Amazon Marketplace Web Service linked service properties. */
  typeProperties: AmazonMWSLinkedServiceTypeProperties;
  type: "AmazonMWS";
}

/** Amazon Marketplace Web Service linked service properties. */
export interface AmazonMWSLinkedServiceTypeProperties {
  /** The endpoint of the Amazon MWS server, (i.e. mws.amazonservices.com) */
  endpoint: any;
  /** The Amazon Marketplace ID you want to retrieve data from. To retrieve data from multiple Marketplace IDs, separate them with a comma (,). (i.e. A2EUQ1WTGCTBG2) */
  marketplaceID: any;
  /** The Amazon seller ID. */
  sellerID: any;
  /** The Amazon MWS authentication token. */
  mwsAuthToken?: SecretBase;
  /** The access key id used to access data. */
  accessKeyId: any;
  /** The secret key used to access data. */
  secretKey?: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure PostgreSQL linked service. */
export interface AzurePostgreSqlLinkedService extends LinkedServiceParent {
  /** Azure PostgreSQL linked service properties. */
  typeProperties: AzurePostgreSqlLinkedServiceTypeProperties;
  type: "AzurePostgreSql";
}

/** Azure PostgreSQL linked service properties. */
export interface AzurePostgreSqlLinkedServiceTypeProperties {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Concur Service linked service. */
export interface ConcurLinkedService extends LinkedServiceParent {
  /** Concur Service linked service properties. */
  typeProperties: ConcurLinkedServiceTypeProperties;
  type: "Concur";
}

/** Concur Service linked service properties. */
export interface ConcurLinkedServiceTypeProperties {
  /** Properties used to connect to Concur. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: any;
  /** Application client_id supplied by Concur App Management. */
  clientId: any;
  /** The user name that you use to access Concur Service. */
  username: any;
  /** The password corresponding to the user name that you provided in the username field. */
  password?: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Couchbase server linked service. */
export interface CouchbaseLinkedService extends LinkedServiceParent {
  /** Couchbase server linked service properties. */
  typeProperties: CouchbaseLinkedServiceTypeProperties;
  type: "Couchbase";
}

/** Couchbase server linked service properties. */
export interface CouchbaseLinkedServiceTypeProperties {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of credString in connection string. */
  credString?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Drill server linked service. */
export interface DrillLinkedService extends LinkedServiceParent {
  /** Drill server linked service properties. */
  typeProperties: DrillLinkedServiceTypeProperties;
  type: "Drill";
}

/** Drill server linked service properties. */
export interface DrillLinkedServiceTypeProperties {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Eloqua server linked service. */
export interface EloquaLinkedService extends LinkedServiceParent {
  /** Eloqua server linked service properties. */
  typeProperties: EloquaLinkedServiceTypeProperties;
  type: "Eloqua";
}

/** Eloqua server linked service properties. */
export interface EloquaLinkedServiceTypeProperties {
  /** The endpoint of the Eloqua server. (i.e. eloqua.example.com) */
  endpoint: any;
  /** The site name and user name of your Eloqua account in the form: sitename/username. (i.e. Eloqua/Alice) */
  username: any;
  /** The password corresponding to the user name. */
  password?: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Google BigQuery service linked service. */
export interface GoogleBigQueryLinkedService extends LinkedServiceParent {
  /** Google BigQuery service linked service properties. */
  typeProperties: GoogleBigQueryLinkedServiceTypeProperties;
  type: "GoogleBigQuery";
}

/** Google BigQuery service linked service properties. */
export interface GoogleBigQueryLinkedServiceTypeProperties {
  /** The default BigQuery project to query against. */
  project: any;
  /** A comma-separated list of public BigQuery projects to access. */
  additionalProjects?: any;
  /** Whether to request access to Google Drive. Allowing Google Drive access enables support for federated tables that combine BigQuery data with data from Google Drive. The default value is false. */
  requestGoogleDriveScope?: any;
  /** The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR. */
  authenticationType: "ServiceAuthentication" | "UserAuthentication";
  /** The refresh token obtained from Google for authorizing access to BigQuery for UserAuthentication. */
  refreshToken?: SecretBase;
  /** The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string). */
  clientId?: any;
  /** The client secret of the google application used to acquire the refresh token. */
  clientSecret?: SecretBase;
  /** The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. */
  email?: any;
  /** The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. */
  keyFilePath?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Greenplum Database linked service. */
export interface GreenplumLinkedService extends LinkedServiceParent {
  /** Greenplum Database linked service properties. */
  typeProperties: GreenplumLinkedServiceTypeProperties;
  type: "Greenplum";
}

/** Greenplum Database linked service properties. */
export interface GreenplumLinkedServiceTypeProperties {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** HBase server linked service. */
export interface HBaseLinkedService extends LinkedServiceParent {
  /** HBase server linked service properties. */
  typeProperties: HBaseLinkedServiceTypeProperties;
  type: "HBase";
}

/** HBase server linked service properties. */
export interface HBaseLinkedServiceTypeProperties {
  /** The IP address or host name of the HBase server. (i.e. 192.168.222.160) */
  host: any;
  /** The TCP port that the HBase instance uses to listen for client connections. The default value is 9090. */
  port?: any;
  /** The partial URL corresponding to the HBase server. (i.e. /gateway/sandbox/hbase/version) */
  httpPath?: any;
  /** The authentication mechanism to use to connect to the HBase server. */
  authenticationType: "Anonymous" | "Basic";
  /** The user name used to connect to the HBase instance. */
  username?: any;
  /** The password corresponding to the user name. */
  password?: SecretBase;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: any;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Hive Server linked service. */
export interface HiveLinkedService extends LinkedServiceParent {
  /** Hive Server linked service properties. */
  typeProperties: HiveLinkedServiceTypeProperties;
  type: "Hive";
}

/** Hive Server linked service properties. */
export interface HiveLinkedServiceTypeProperties {
  /** IP address or host name of the Hive server, separated by ';' for multiple hosts (only when serviceDiscoveryMode is enable). */
  host: any;
  /** The TCP port that the Hive server uses to listen for client connections. */
  port?: any;
  /** The type of Hive server. */
  serverType?: "HiveServer1" | "HiveServer2" | "HiveThriftServer";
  /** The transport protocol to use in the Thrift layer. */
  thriftTransportProtocol?: "Binary" | "SASL" | "HTTP ";
  /** The authentication method used to access the Hive server. */
  authenticationType:
    | "Anonymous"
    | "Username"
    | "UsernameAndPassword"
    | "WindowsAzureHDInsightService";
  /** true to indicate using the ZooKeeper service, false not. */
  serviceDiscoveryMode?: any;
  /** The namespace on ZooKeeper under which Hive Server 2 nodes are added. */
  zooKeeperNameSpace?: any;
  /** Specifies whether the driver uses native HiveQL queries,or converts them into an equivalent form in HiveQL. */
  useNativeQuery?: any;
  /** The user name that you use to access Hive Server. */
  username?: any;
  /** The password corresponding to the user name that you provided in the Username field */
  password?: SecretBase;
  /** The partial URL corresponding to the Hive server. */
  httpPath?: any;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: any;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: any;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Hubspot Service linked service. */
export interface HubspotLinkedService extends LinkedServiceParent {
  /** Hubspot Service linked service properties. */
  typeProperties: HubspotLinkedServiceTypeProperties;
  type: "Hubspot";
}

/** Hubspot Service linked service properties. */
export interface HubspotLinkedServiceTypeProperties {
  /** The client ID associated with your Hubspot application. */
  clientId: any;
  /** The client secret associated with your Hubspot application. */
  clientSecret?: SecretBase;
  /** The access token obtained when initially authenticating your OAuth integration. */
  accessToken?: SecretBase;
  /** The refresh token obtained when initially authenticating your OAuth integration. */
  refreshToken?: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Impala server linked service. */
export interface ImpalaLinkedService extends LinkedServiceParent {
  /** Impala server linked service properties. */
  typeProperties: ImpalaLinkedServiceTypeProperties;
  type: "Impala";
}

/** Impala server linked service properties. */
export interface ImpalaLinkedServiceTypeProperties {
  /** The IP address or host name of the Impala server. (i.e. 192.168.222.160) */
  host: any;
  /** The TCP port that the Impala server uses to listen for client connections. The default value is 21050. */
  port?: any;
  /** The authentication type to use. */
  authenticationType: "Anonymous" | "SASLUsername" | "UsernameAndPassword";
  /** The user name used to access the Impala server. The default value is anonymous when using SASLUsername. */
  username?: any;
  /** The password corresponding to the user name when using UsernameAndPassword. */
  password?: SecretBase;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: any;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: any;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Jira Service linked service. */
export interface JiraLinkedService extends LinkedServiceParent {
  /** Jira Service linked service properties. */
  typeProperties: JiraLinkedServiceTypeProperties;
  type: "Jira";
}

/** Jira Service linked service properties. */
export interface JiraLinkedServiceTypeProperties {
  /** The IP address or host name of the Jira service. (e.g. jira.example.com) */
  host: any;
  /** The TCP port that the Jira server uses to listen for client connections. The default value is 443 if connecting through HTTPS, or 8080 if connecting through HTTP. */
  port?: any;
  /** The user name that you use to access Jira Service. */
  username: any;
  /** The password corresponding to the user name that you provided in the username field. */
  password?: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Magento server linked service. */
export interface MagentoLinkedService extends LinkedServiceParent {
  /** Magento server linked service properties. */
  typeProperties: MagentoLinkedServiceTypeProperties;
  type: "Magento";
}

/** Magento server linked service properties. */
export interface MagentoLinkedServiceTypeProperties {
  /** The URL of the Magento instance. (i.e. 192.168.222.110/magento3) */
  host: any;
  /** The access token from Magento. */
  accessToken?: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** MariaDB server linked service. */
export interface MariaDBLinkedService extends LinkedServiceParent {
  /** MariaDB server linked service properties. */
  typeProperties: MariaDBLinkedServiceTypeProperties;
  type: "MariaDB";
}

/** MariaDB server linked service properties. */
export interface MariaDBLinkedServiceTypeProperties {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure Database for MariaDB linked service. */
export interface AzureMariaDBLinkedService extends LinkedServiceParent {
  /** Azure Database for MariaDB linked service properties. */
  typeProperties: AzureMariaDBLinkedServiceTypeProperties;
  type: "AzureMariaDB";
}

/** Azure Database for MariaDB linked service properties. */
export interface AzureMariaDBLinkedServiceTypeProperties {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Marketo server linked service. */
export interface MarketoLinkedService extends LinkedServiceParent {
  /** Marketo server linked service properties. */
  typeProperties: MarketoLinkedServiceTypeProperties;
  type: "Marketo";
}

/** Marketo server linked service properties. */
export interface MarketoLinkedServiceTypeProperties {
  /** The endpoint of the Marketo server. (i.e. 123-ABC-321.mktorest.com) */
  endpoint: any;
  /** The client Id of your Marketo service. */
  clientId: any;
  /** The client secret of your Marketo service. */
  clientSecret?: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Paypal Service linked service. */
export interface PaypalLinkedService extends LinkedServiceParent {
  /** Paypal Service linked service properties. */
  typeProperties: PaypalLinkedServiceTypeProperties;
  type: "Paypal";
}

/** Paypal Service linked service properties. */
export interface PaypalLinkedServiceTypeProperties {
  /** The URL of the PayPal instance. (i.e. api.sandbox.paypal.com) */
  host: any;
  /** The client ID associated with your PayPal application. */
  clientId: any;
  /** The client secret associated with your PayPal application. */
  clientSecret?: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Phoenix server linked service. */
export interface PhoenixLinkedService extends LinkedServiceParent {
  /** Phoenix server linked service properties. */
  typeProperties: PhoenixLinkedServiceTypeProperties;
  type: "Phoenix";
}

/** Phoenix server linked service properties. */
export interface PhoenixLinkedServiceTypeProperties {
  /** The IP address or host name of the Phoenix server. (i.e. 192.168.222.160) */
  host: any;
  /** The TCP port that the Phoenix server uses to listen for client connections. The default value is 8765. */
  port?: any;
  /** The partial URL corresponding to the Phoenix server. (i.e. /gateway/sandbox/phoenix/version). The default value is hbasephoenix if using WindowsAzureHDInsightService. */
  httpPath?: any;
  /** The authentication mechanism used to connect to the Phoenix server. */
  authenticationType:
    | "Anonymous"
    | "UsernameAndPassword"
    | "WindowsAzureHDInsightService";
  /** The user name used to connect to the Phoenix server. */
  username?: any;
  /** The password corresponding to the user name. */
  password?: SecretBase;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: any;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: any;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Presto server linked service. */
export interface PrestoLinkedService extends LinkedServiceParent {
  /** Presto server linked service properties. */
  typeProperties: PrestoLinkedServiceTypeProperties;
  type: "Presto";
}

/** Presto server linked service properties. */
export interface PrestoLinkedServiceTypeProperties {
  /** The IP address or host name of the Presto server. (i.e. 192.168.222.160) */
  host: any;
  /** The version of the Presto server. (i.e. 0.148-t) */
  serverVersion: any;
  /** The catalog context for all request against the server. */
  catalog: any;
  /** The TCP port that the Presto server uses to listen for client connections. The default value is 8080. */
  port?: any;
  /** The authentication mechanism used to connect to the Presto server. */
  authenticationType: "Anonymous" | "LDAP";
  /** The user name used to connect to the Presto server. */
  username?: any;
  /** The password corresponding to the user name. */
  password?: SecretBase;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: any;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: any;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: any;
  /** The local time zone used by the connection. Valid values for this option are specified in the IANA Time Zone Database. The default value is the system time zone. */
  timeZoneID?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** QuickBooks server linked service. */
export interface QuickBooksLinkedService extends LinkedServiceParent {
  /** QuickBooks server linked service properties. */
  typeProperties: QuickBooksLinkedServiceTypeProperties;
  type: "QuickBooks";
}

/** QuickBooks server linked service properties. */
export interface QuickBooksLinkedServiceTypeProperties {
  /** Properties used to connect to QuickBooks. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: any;
  /** The endpoint of the QuickBooks server. (i.e. quickbooks.api.intuit.com) */
  endpoint: any;
  /** The company ID of the QuickBooks company to authorize. */
  companyId: any;
  /** The consumer key for OAuth 1.0 authentication. */
  consumerKey: any;
  /** The consumer secret for OAuth 1.0 authentication. */
  consumerSecret: SecretBase;
  /** The access token for OAuth 1.0 authentication. */
  accessToken: SecretBase;
  /** The access token secret for OAuth 1.0 authentication. */
  accessTokenSecret: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** ServiceNow server linked service. */
export interface ServiceNowLinkedService extends LinkedServiceParent {
  /** ServiceNow server linked service properties. */
  typeProperties: ServiceNowLinkedServiceTypeProperties;
  type: "ServiceNow";
}

/** ServiceNow server linked service properties. */
export interface ServiceNowLinkedServiceTypeProperties {
  /** The endpoint of the ServiceNow server. (i.e. <instance>.service-now.com) */
  endpoint: any;
  /** The authentication type to use. */
  authenticationType: "Basic" | "OAuth2";
  /** The user name used to connect to the ServiceNow server for Basic and OAuth2 authentication. */
  username?: any;
  /** The password corresponding to the user name for Basic and OAuth2 authentication. */
  password?: SecretBase;
  /** The client id for OAuth2 authentication. */
  clientId?: any;
  /** The client secret for OAuth2 authentication. */
  clientSecret?: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Shopify Service linked service. */
export interface ShopifyLinkedService extends LinkedServiceParent {
  /** Shopify Service linked service properties. */
  typeProperties: ShopifyLinkedServiceTypeProperties;
  type: "Shopify";
}

/** Shopify Service linked service properties. */
export interface ShopifyLinkedServiceTypeProperties {
  /** The endpoint of the Shopify server. (i.e. mystore.myshopify.com) */
  host: any;
  /** The API access token that can be used to access Shopify’s data. The token won't expire if it is offline mode. */
  accessToken?: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Spark Server linked service. */
export interface SparkLinkedService extends LinkedServiceParent {
  /** Spark Server linked service properties. */
  typeProperties: SparkLinkedServiceTypeProperties;
  type: "Spark";
}

/** Spark Server linked service properties. */
export interface SparkLinkedServiceTypeProperties {
  /** IP address or host name of the Spark server */
  host: any;
  /** The TCP port that the Spark server uses to listen for client connections. */
  port: any;
  /** The type of Spark server. */
  serverType?: "SharkServer" | "SharkServer2" | "SparkThriftServer";
  /** The transport protocol to use in the Thrift layer. */
  thriftTransportProtocol?: "Binary" | "SASL" | "HTTP ";
  /** The authentication method used to access the Spark server. */
  authenticationType:
    | "Anonymous"
    | "Username"
    | "UsernameAndPassword"
    | "WindowsAzureHDInsightService";
  /** The user name that you use to access Spark Server. */
  username?: any;
  /** The password corresponding to the user name that you provided in the Username field */
  password?: SecretBase;
  /** The partial URL corresponding to the Spark server. */
  httpPath?: any;
  /** Specifies whether the connections to the server are encrypted using SSL. The default value is false. */
  enableSsl?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: any;
  /** Specifies whether to require a CA-issued SSL certificate name to match the host name of the server when connecting over SSL. The default value is false. */
  allowHostNameCNMismatch?: any;
  /** Specifies whether to allow self-signed certificates from the server. The default value is false. */
  allowSelfSignedServerCert?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Square Service linked service. */
export interface SquareLinkedService extends LinkedServiceParent {
  /** Square Service linked service properties. */
  typeProperties: SquareLinkedServiceTypeProperties;
  type: "Square";
}

/** Square Service linked service properties. */
export interface SquareLinkedServiceTypeProperties {
  /** Properties used to connect to Square. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: any;
  /** The URL of the Square instance. (i.e. mystore.mysquare.com) */
  host: any;
  /** The client ID associated with your Square application. */
  clientId: any;
  /** The client secret associated with your Square application. */
  clientSecret?: SecretBase;
  /** The redirect URL assigned in the Square application dashboard. (i.e. http://localhost:2500) */
  redirectUri: any;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Xero Service linked service. */
export interface XeroLinkedService extends LinkedServiceParent {
  /** Xero Service linked service properties. */
  typeProperties: XeroLinkedServiceTypeProperties;
  type: "Xero";
}

/** Xero Service linked service properties. */
export interface XeroLinkedServiceTypeProperties {
  /** Properties used to connect to Xero. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: any;
  /** The endpoint of the Xero server. (i.e. api.xero.com) */
  host: any;
  /** The consumer key associated with the Xero application. */
  consumerKey?: SecretBase;
  /**
   * The private key from the .pem file that was generated for your Xero private application. You must include all the text from the .pem file, including the Unix line endings(
   * ).
   */
  privateKey?: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Zoho server linked service. */
export interface ZohoLinkedService extends LinkedServiceParent {
  /** Zoho server linked service properties. */
  typeProperties: ZohoLinkedServiceTypeProperties;
  type: "Zoho";
}

/** Zoho server linked service properties. */
export interface ZohoLinkedServiceTypeProperties {
  /** Properties used to connect to Zoho. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: any;
  /** The endpoint of the Zoho server. (i.e. crm.zoho.com/crm/private) */
  endpoint: any;
  /** The access token for Zoho authentication. */
  accessToken?: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Vertica linked service. */
export interface VerticaLinkedService extends LinkedServiceParent {
  /** Vertica linked service properties. */
  typeProperties: VerticaLinkedServiceTypeProperties;
  type: "Vertica";
}

/** Vertica linked service properties. */
export interface VerticaLinkedServiceTypeProperties {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Netezza linked service. */
export interface NetezzaLinkedService extends LinkedServiceParent {
  /** Netezza linked service properties. */
  typeProperties: NetezzaLinkedServiceTypeProperties;
  type: "Netezza";
}

/** Netezza linked service properties. */
export interface NetezzaLinkedServiceTypeProperties {
  /** An ODBC connection string. Type: string, SecureString or AzureKeyVaultSecretReference. */
  connectionString?: any;
  /** The Azure key vault secret reference of password in connection string. */
  pwd?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Salesforce Marketing Cloud linked service. */
export interface SalesforceMarketingCloudLinkedService
  extends LinkedServiceParent {
  /** Salesforce Marketing Cloud linked service properties. */
  typeProperties: SalesforceMarketingCloudLinkedServiceTypeProperties;
  type: "SalesforceMarketingCloud";
}

/** Salesforce Marketing Cloud linked service properties. */
export interface SalesforceMarketingCloudLinkedServiceTypeProperties {
  /** Properties used to connect to Salesforce Marketing Cloud. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: any;
  /** The client ID associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string). */
  clientId: any;
  /** The client secret associated with the Salesforce Marketing Cloud application. Type: string (or Expression with resultType string). */
  clientSecret?: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** HDInsight ondemand linked service. */
export interface HDInsightOnDemandLinkedService extends LinkedServiceParent {
  /** HDInsight ondemand linked service properties. */
  typeProperties: HDInsightOnDemandLinkedServiceTypeProperties;
  type: "HDInsightOnDemand";
}

/** HDInsight ondemand linked service properties. */
export interface HDInsightOnDemandLinkedServiceTypeProperties {
  /** Number of worker/data nodes in the cluster. Suggestion value: 4. Type: string (or Expression with resultType string). */
  clusterSize: any;
  /** The allowed idle time for the on-demand HDInsight cluster. Specifies how long the on-demand HDInsight cluster stays alive after completion of an activity run if there are no other active jobs in the cluster. The minimum value is 5 mins. Type: string (or Expression with resultType string). */
  timeToLive: any;
  /** Version of the HDInsight cluster.  Type: string (or Expression with resultType string). */
  version: any;
  /** Azure Storage linked service to be used by the on-demand cluster for storing and processing data. */
  linkedServiceName: LinkedServiceReference;
  /** The customer’s subscription to host the cluster. Type: string (or Expression with resultType string). */
  hostSubscriptionId: any;
  /** The service principal id for the hostSubscriptionId. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key for the service principal id. */
  servicePrincipalKey?: SecretBase;
  /** The Tenant id/name to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant: any;
  /** The resource group where the cluster belongs. Type: string (or Expression with resultType string). */
  clusterResourceGroup: any;
  /** The prefix of cluster name, postfix will be distinct with timestamp. Type: string (or Expression with resultType string). */
  clusterNamePrefix?: any;
  /** The username to access the cluster. Type: string (or Expression with resultType string). */
  clusterUserName?: any;
  /** The password to access the cluster. */
  clusterPassword?: SecretBase;
  /** The username to SSH remotely connect to cluster’s node (for Linux). Type: string (or Expression with resultType string). */
  clusterSshUserName?: any;
  /** The password to SSH remotely connect cluster’s node (for Linux). */
  clusterSshPassword?: SecretBase;
  /** Specifies additional storage accounts for the HDInsight linked service so that the Data Factory service can register them on your behalf. */
  additionalLinkedServiceNames?: Array<LinkedServiceReference>;
  /** The name of Azure SQL linked service that point to the HCatalog database. The on-demand HDInsight cluster is created by using the Azure SQL database as the metastore. */
  hcatalogLinkedServiceName?: LinkedServiceReference;
  /** The cluster type. Type: string (or Expression with resultType string). */
  clusterType?: any;
  /** The version of spark if the cluster type is 'spark'. Type: string (or Expression with resultType string). */
  sparkVersion?: any;
  /** Specifies the core configuration parameters (as in core-site.xml) for the HDInsight cluster to be created. */
  coreConfiguration?: any;
  /** Specifies the HBase configuration parameters (hbase-site.xml) for the HDInsight cluster. */
  hBaseConfiguration?: any;
  /** Specifies the HDFS configuration parameters (hdfs-site.xml) for the HDInsight cluster. */
  hdfsConfiguration?: any;
  /** Specifies the hive configuration parameters (hive-site.xml) for the HDInsight cluster. */
  hiveConfiguration?: any;
  /** Specifies the MapReduce configuration parameters (mapred-site.xml) for the HDInsight cluster. */
  mapReduceConfiguration?: any;
  /** Specifies the Oozie configuration parameters (oozie-site.xml) for the HDInsight cluster. */
  oozieConfiguration?: any;
  /** Specifies the Storm configuration parameters (storm-site.xml) for the HDInsight cluster. */
  stormConfiguration?: any;
  /** Specifies the Yarn configuration parameters (yarn-site.xml) for the HDInsight cluster. */
  yarnConfiguration?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
  /** Specifies the size of the head node for the HDInsight cluster. */
  headNodeSize?: any;
  /** Specifies the size of the data node for the HDInsight cluster. */
  dataNodeSize?: any;
  /** Specifies the size of the Zoo Keeper node for the HDInsight cluster. */
  zookeeperNodeSize?: any;
  /** Custom script actions to run on HDI ondemand cluster once it's up. Please refer to https://docs.microsoft.com/en-us/azure/hdinsight/hdinsight-hadoop-customize-cluster-linux?toc=%2Fen-us%2Fazure%2Fhdinsight%2Fr-server%2FTOC.json&bc=%2Fen-us%2Fazure%2Fbread%2Ftoc.json#understanding-script-actions. */
  scriptActions?: Array<ScriptAction>;
  /** The ARM resource ID for the vNet to which the cluster should be joined after creation. Type: string (or Expression with resultType string). */
  virtualNetworkId?: any;
  /** The ARM resource ID for the subnet in the vNet. If virtualNetworkId was specified, then this property is required. Type: string (or Expression with resultType string). */
  subnetName?: any;
}

/** Custom script action to run on HDI ondemand cluster once it's up. */
export interface ScriptAction {
  /** The user provided name of the script action. */
  name: string;
  /** The URI for the script action. */
  uri: string;
  /** The node types on which the script action should be executed. */
  roles: any;
  /** The parameters for the script action. */
  parameters?: string;
}

/** Azure Data Lake Analytics linked service. */
export interface AzureDataLakeAnalyticsLinkedService
  extends LinkedServiceParent {
  /** Azure Data Lake Analytics linked service properties. */
  typeProperties: AzureDataLakeAnalyticsLinkedServiceTypeProperties;
  type: "AzureDataLakeAnalytics";
}

/** Azure Data Lake Analytics linked service properties. */
export interface AzureDataLakeAnalyticsLinkedServiceTypeProperties {
  /** The Azure Data Lake Analytics account name. Type: string (or Expression with resultType string). */
  accountName: any;
  /** The ID of the application used to authenticate against the Azure Data Lake Analytics account. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The Key of the application used to authenticate against the Azure Data Lake Analytics account. */
  servicePrincipalKey?: SecretBase;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant: any;
  /** Data Lake Analytics account subscription ID (if different from Data Factory account). Type: string (or Expression with resultType string). */
  subscriptionId?: any;
  /** Data Lake Analytics account resource group name (if different from Data Factory account). Type: string (or Expression with resultType string). */
  resourceGroupName?: any;
  /** Azure Data Lake Analytics URI Type: string (or Expression with resultType string). */
  dataLakeAnalyticsUri?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure Databricks linked service. */
export interface AzureDatabricksLinkedService extends LinkedServiceParent {
  /** Azure Databricks linked service properties. */
  typeProperties: AzureDatabricksLinkedServiceTypeProperties;
  type: "AzureDatabricks";
}

/** Azure Databricks linked service properties. */
export interface AzureDatabricksLinkedServiceTypeProperties {
  /** <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string). */
  domain: any;
  /** Access token for databricks REST API. Refer to https://docs.azuredatabricks.net/api/latest/authentication.html. Type: string (or Expression with resultType string). */
  accessToken?: SecretBase;
  /** Required to specify MSI, if using Workspace resource id for databricks REST API. Type: string (or Expression with resultType string). */
  authentication?: any;
  /** Workspace resource id for databricks REST API. Type: string (or Expression with resultType string). */
  workspaceResourceId?: any;
  /** The id of an existing interactive cluster that will be used for all runs of this activity. Type: string (or Expression with resultType string). */
  existingClusterId?: any;
  /** The id of an existing instance pool that will be used for all runs of this activity. Type: string (or Expression with resultType string). */
  instancePoolId?: any;
  /** If not using an existing interactive cluster, this specifies the Spark version of a new job cluster or instance pool nodes created for each run of this activity. Required if instancePoolId is specified. Type: string (or Expression with resultType string). */
  newClusterVersion?: any;
  /** If not using an existing interactive cluster, this specifies the number of worker nodes to use for the new job cluster or instance pool. For new job clusters, this a string-formatted Int32, like '1' means numOfWorker is 1 or '1:10' means auto-scale from 1 (min) to 10 (max). For instance pools, this is a string-formatted Int32, and can only specify a fixed number of worker nodes, such as '2'. Required if newClusterVersion is specified. Type: string (or Expression with resultType string). */
  newClusterNumOfWorker?: any;
  /** The node type of the new job cluster. This property is required if newClusterVersion is specified and instancePoolId is not specified. If instancePoolId is specified, this property is ignored. Type: string (or Expression with resultType string). */
  newClusterNodeType?: any;
  /** A set of optional, user-specified Spark configuration key-value pairs. */
  newClusterSparkConf?: Record<string, any>;
  /** A set of optional, user-specified Spark environment variables key-value pairs. */
  newClusterSparkEnvVars?: Record<string, any>;
  /** Additional tags for cluster resources. This property is ignored in instance pool configurations. */
  newClusterCustomTags?: Record<string, any>;
  /** Specify a location to deliver Spark driver, worker, and event logs. Type: string (or Expression with resultType string). */
  newClusterLogDestination?: any;
  /** The driver node type for the new job cluster. This property is ignored in instance pool configurations. Type: string (or Expression with resultType string). */
  newClusterDriverNodeType?: any;
  /** User-defined initialization scripts for the new cluster. Type: array of strings (or Expression with resultType array of strings). */
  newClusterInitScripts?: any;
  /** Enable the elastic disk on the new cluster. This property is now ignored, and takes the default elastic disk behavior in Databricks (elastic disks are always enabled). Type: boolean (or Expression with resultType boolean). */
  newClusterEnableElasticDisk?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
  /** The policy id for limiting the ability to configure clusters based on a user defined set of rules. Type: string (or Expression with resultType string). */
  policyId?: any;
}

/** Azure Databricks Delta Lake linked service. */
export interface AzureDatabricksDeltaLakeLinkedService
  extends LinkedServiceParent {
  /** Azure Databricks Delta Lake linked service properties. */
  typeProperties: AzureDatabricksDetltaLakeLinkedServiceTypeProperties;
  type: "AzureDatabricksDeltaLake";
}

/** Azure Databricks Delta Lake linked service properties. */
export interface AzureDatabricksDetltaLakeLinkedServiceTypeProperties {
  /** <REGION>.azuredatabricks.net, domain name of your Databricks deployment. Type: string (or Expression with resultType string). */
  domain: any;
  /** Access token for databricks REST API. Refer to https://docs.azuredatabricks.net/api/latest/authentication.html. Type: string, SecureString or AzureKeyVaultSecretReference. */
  accessToken: SecretBase;
  /** The id of an existing interactive cluster that will be used for all runs of this job. Type: string (or Expression with resultType string). */
  clusterId?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Responsys linked service. */
export interface ResponsysLinkedService extends LinkedServiceParent {
  /** Responsys linked service properties. */
  typeProperties: ResponsysLinkedServiceTypeProperties;
  type: "Responsys";
}

/** Responsys linked service properties. */
export interface ResponsysLinkedServiceTypeProperties {
  /** The endpoint of the Responsys server. */
  endpoint: any;
  /** The client ID associated with the Responsys application. Type: string (or Expression with resultType string). */
  clientId: any;
  /** The client secret associated with the Responsys application. Type: string (or Expression with resultType string). */
  clientSecret?: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Dynamics AX linked service. */
export interface DynamicsAXLinkedService extends LinkedServiceParent {
  /** Dynamics AX linked service properties. */
  typeProperties: DynamicsAXLinkedServiceTypeProperties;
  type: "DynamicsAX";
}

/** Dynamics AX linked service properties. */
export interface DynamicsAXLinkedServiceTypeProperties {
  /** The Dynamics AX (or Dynamics 365 Finance and Operations) instance OData endpoint. */
  url: any;
  /** Specify the application's client ID. Type: string (or Expression with resultType string). */
  servicePrincipalId: any;
  /** Specify the application's key. Mark this field as a SecureString to store it securely in Data Factory, or reference a secret stored in Azure Key Vault. Type: string (or Expression with resultType string). */
  servicePrincipalKey: SecretBase;
  /** Specify the tenant information (domain name or tenant ID) under which your application resides. Retrieve it by hovering the mouse in the top-right corner of the Azure portal. Type: string (or Expression with resultType string). */
  tenant: any;
  /** Specify the resource you are requesting authorization. Type: string (or Expression with resultType string). */
  aadResourceId: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Oracle Service Cloud linked service. */
export interface OracleServiceCloudLinkedService extends LinkedServiceParent {
  /** Oracle Service Cloud linked service properties. */
  typeProperties: OracleServiceCloudLinkedServiceTypeProperties;
  type: "OracleServiceCloud";
}

/** Oracle Service Cloud linked service properties. */
export interface OracleServiceCloudLinkedServiceTypeProperties {
  /** The URL of the Oracle Service Cloud instance. */
  host: any;
  /** The user name that you use to access Oracle Service Cloud server. */
  username: any;
  /** The password corresponding to the user name that you provided in the username key. */
  password: SecretBase;
  /** Specifies whether the data source endpoints are encrypted using HTTPS. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useEncryptedEndpoints?: any;
  /** Specifies whether to require the host name in the server's certificate to match the host name of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  useHostVerification?: any;
  /** Specifies whether to verify the identity of the server when connecting over SSL. The default value is true. Type: boolean (or Expression with resultType boolean). */
  usePeerVerification?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Google AdWords service linked service. */
export interface GoogleAdWordsLinkedService extends LinkedServiceParent {
  /** Google AdWords service linked service properties. */
  typeProperties: GoogleAdWordsLinkedServiceTypeProperties;
  type: "GoogleAdWords";
}

/** Google AdWords service linked service properties. */
export interface GoogleAdWordsLinkedServiceTypeProperties {
  /** Properties used to connect to GoogleAds. It is mutually exclusive with any other properties in the linked service. Type: object. */
  connectionProperties?: any;
  /** The Client customer ID of the AdWords account that you want to fetch report data for. */
  clientCustomerID?: any;
  /** The developer token associated with the manager account that you use to grant access to the AdWords API. */
  developerToken?: SecretBase;
  /** The OAuth 2.0 authentication mechanism used for authentication. ServiceAuthentication can only be used on self-hosted IR. */
  authenticationType?: "ServiceAuthentication" | "UserAuthentication";
  /** The refresh token obtained from Google for authorizing access to AdWords for UserAuthentication. */
  refreshToken?: SecretBase;
  /** The client id of the google application used to acquire the refresh token. Type: string (or Expression with resultType string). */
  clientId?: any;
  /** The client secret of the google application used to acquire the refresh token. */
  clientSecret?: SecretBase;
  /** The service account email ID that is used for ServiceAuthentication and can only be used on self-hosted IR. */
  email?: any;
  /** The full path to the .p12 key file that is used to authenticate the service account email address and can only be used on self-hosted IR. */
  keyFilePath?: any;
  /** The full path of the .pem file containing trusted CA certificates for verifying the server when connecting over SSL. This property can only be set when using SSL on self-hosted IR. The default value is the cacerts.pem file installed with the IR. */
  trustedCertPath?: any;
  /** Specifies whether to use a CA certificate from the system trust store or from a specified PEM file. The default value is false. */
  useSystemTrustStore?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** SAP Table Linked Service. */
export interface SapTableLinkedService extends LinkedServiceParent {
  /** Properties specific to this linked service type. */
  typeProperties: SapTableLinkedServiceTypeProperties;
  type: "SapTable";
}

/** Properties specific to this linked service type. */
export interface SapTableLinkedServiceTypeProperties {
  /** Host name of the SAP instance where the table is located. Type: string (or Expression with resultType string). */
  server?: any;
  /** System number of the SAP system where the table is located. (Usually a two-digit decimal number represented as a string.) Type: string (or Expression with resultType string). */
  systemNumber?: any;
  /** Client ID of the client on the SAP system where the table is located. (Usually a three-digit decimal number represented as a string) Type: string (or Expression with resultType string). */
  clientId?: any;
  /** Language of the SAP system where the table is located. The default value is EN. Type: string (or Expression with resultType string). */
  language?: any;
  /** SystemID of the SAP system where the table is located. Type: string (or Expression with resultType string). */
  systemId?: any;
  /** Username to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
  userName?: any;
  /** Password to access the SAP server where the table is located. */
  password?: SecretBase;
  /** The hostname of the SAP Message Server. Type: string (or Expression with resultType string). */
  messageServer?: any;
  /** The service name or port number of the Message Server. Type: string (or Expression with resultType string). */
  messageServerService?: any;
  /** SNC activation indicator to access the SAP server where the table is located. Must be either 0 (off) or 1 (on). Type: string (or Expression with resultType string). */
  sncMode?: any;
  /** Initiator's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
  sncMyName?: any;
  /** Communication partner's SNC name to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
  sncPartnerName?: any;
  /** External security product's library to access the SAP server where the table is located. Type: string (or Expression with resultType string). */
  sncLibraryPath?: any;
  /** SNC Quality of Protection. Allowed value include: 1, 2, 3, 8, 9. Type: string (or Expression with resultType string). */
  sncQop?: any;
  /** The Logon Group for the SAP System. Type: string (or Expression with resultType string). */
  logonGroup?: any;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Azure Data Explorer (Kusto) linked service. */
export interface AzureDataExplorerLinkedService extends LinkedServiceParent {
  /** Azure Data Explorer (Kusto) linked service properties. */
  typeProperties: AzureDataExplorerLinkedServiceTypeProperties;
  type: "AzureDataExplorer";
}

/** Azure Data Explorer (Kusto) linked service properties. */
export interface AzureDataExplorerLinkedServiceTypeProperties {
  /** The endpoint of Azure Data Explorer (the engine's endpoint). URL will be in the format https://<clusterName>.<regionName>.kusto.windows.net. Type: string (or Expression with resultType string) */
  endpoint: any;
  /** The ID of the service principal used to authenticate against Azure Data Explorer. Type: string (or Expression with resultType string). */
  servicePrincipalId?: any;
  /** The key of the service principal used to authenticate against Kusto. */
  servicePrincipalKey?: SecretBase;
  /** Database name for connection. Type: string (or Expression with resultType string). */
  database: any;
  /** The name or ID of the tenant to which the service principal belongs. Type: string (or Expression with resultType string). */
  tenant?: any;
}

/** Azure Function linked service. */
export interface AzureFunctionLinkedService extends LinkedServiceParent {
  /** Azure Function linked service properties. */
  typeProperties: AzureFunctionLinkedServiceTypeProperties;
  type: "AzureFunction";
}

/** Azure Function linked service properties. */
export interface AzureFunctionLinkedServiceTypeProperties {
  /** The endpoint of the Azure Function App. URL will be in the format https://<accountName>.azurewebsites.net. */
  functionAppUrl: any;
  /** Function or Host key for Azure Function App. */
  functionKey?: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Snowflake linked service. */
export interface SnowflakeLinkedService extends LinkedServiceParent {
  /** Snowflake linked service properties. */
  typeProperties: SnowflakeLinkedServiceTypeProperties;
  type: "Snowflake";
}

/** Snowflake linked service properties. */
export interface SnowflakeLinkedServiceTypeProperties {
  /** The connection string of snowflake. Type: string, SecureString. */
  connectionString: any;
  /** The Azure key vault secret reference of password in connection string. */
  password?: AzureKeyVaultSecretReference;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** SharePoint Online List linked service. */
export interface SharePointOnlineListLinkedService extends LinkedServiceParent {
  /** SharePoint Online List linked service properties. */
  typeProperties: SharePointOnlineListLinkedServiceTypeProperties;
  type: "SharePointOnlineList";
}

/** SharePoint Online List linked service properties. */
export interface SharePointOnlineListLinkedServiceTypeProperties {
  /** The URL of the SharePoint Online site. For example, https://contoso.sharepoint.com/sites/siteName. Type: string (or Expression with resultType string). */
  siteUrl: any;
  /** The tenant ID under which your application resides. You can find it from Azure portal Active Directory overview page. Type: string (or Expression with resultType string). */
  tenantId: any;
  /** The application (client) ID of your application registered in Azure Active Directory. Make sure to grant SharePoint site permission to this application. Type: string (or Expression with resultType string). */
  servicePrincipalId: any;
  /** The client secret of your application registered in Azure Active Directory. Type: string (or Expression with resultType string). */
  servicePrincipalKey: SecretBase;
  /** The encrypted credential used for authentication. Credentials are encrypted using the integration runtime credential manager. Type: string (or Expression with resultType string). */
  encryptedCredential?: any;
}

/** Base class for all control activities like IfCondition, ForEach , Until. */
export interface ControlActivityParent extends ActivityParent {
  type:
    | "Container"
    | "ExecutePipeline"
    | "IfCondition"
    | "Switch"
    | "ForEach"
    | "Wait"
    | "Until"
    | "Validation"
    | "Filter"
    | "SetVariable"
    | "AppendVariable"
    | "WebHook";
}

/** Base class for all execution activities. */
export interface ExecutionActivityParent extends ActivityParent {
  /** Linked service reference. */
  linkedServiceName?: LinkedServiceReference;
  /** Activity policy. */
  policy?: ActivityPolicy;
  type:
    | "Execution"
    | "Copy"
    | "HDInsightHive"
    | "HDInsightPig"
    | "HDInsightMapReduce"
    | "HDInsightStreaming"
    | "HDInsightSpark"
    | "ExecuteSSISPackage"
    | "Custom"
    | "SqlServerStoredProcedure"
    | "Delete"
    | "AzureDataExplorerCommand"
    | "Lookup"
    | "WebActivity"
    | "GetMetadata"
    | "AzureMLBatchExecution"
    | "AzureMLUpdateResource"
    | "AzureMLExecutePipeline"
    | "DataLakeAnalyticsU-SQL"
    | "DatabricksNotebook"
    | "DatabricksSparkJar"
    | "DatabricksSparkPython"
    | "AzureFunctionActivity"
    | "ExecuteDataFlow"
    | "SynapseNotebook"
    | "SparkJob";
}

/** Execution policy for an activity. */
export interface ActivityPolicy extends Record<string, unknown> {
  /** Specifies the timeout for the activity to run. The default timeout is 7 days. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  timeout?: any;
  /** Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0. */
  retry?: any;
  /** Interval between each retry attempt (in seconds). The default is 30 sec. */
  retryIntervalInSeconds?: number;
  /** When set to true, Input from activity is considered as secure and will not be logged to monitoring. */
  secureInput?: boolean;
  /** When set to true, Output from activity is considered as secure and will not be logged to monitoring. */
  secureOutput?: boolean;
}

/** Connector read setting. */
export interface StoreReadSettingsParent extends Record<string, unknown> {
  /** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
  maxConcurrentConnections?: any;
  type:
    | "StoreReadSettings"
    | "AzureBlobStorageReadSettings"
    | "AzureBlobFSReadSettings"
    | "AzureDataLakeStoreReadSettings"
    | "AmazonS3ReadSettings"
    | "FileServerReadSettings"
    | "AzureFileStorageReadSettings"
    | "GoogleCloudStorageReadSettings"
    | "FtpReadSettings"
    | "SftpReadSettings"
    | "HttpReadSettings"
    | "HdfsReadSettings";
}

/** Azure blob read settings. */
export interface AzureBlobStorageReadSettings extends StoreReadSettingsParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Azure blob wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** Azure blob wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** The prefix filter for the Azure Blob name. Type: string (or Expression with resultType string). */
  prefix?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  type: "AzureBlobStorageReadSettings";
}

/** Azure blobFS read settings. */
export interface AzureBlobFSReadSettings extends StoreReadSettingsParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Azure blobFS wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** Azure blobFS wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  type: "AzureBlobFSReadSettings";
}

/** Azure data lake store read settings. */
export interface AzureDataLakeStoreReadSettings
  extends StoreReadSettingsParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** ADLS wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** ADLS wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Lists files after the value (exclusive) based on file/folder names’ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string). */
  listAfter?: any;
  /** Lists files before the value (inclusive) based on file/folder names’ lexicographical order. Applies under the folderPath in data set, and filter files/sub-folders under the folderPath. Type: string (or Expression with resultType string). */
  listBefore?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  type: "AzureDataLakeStoreReadSettings";
}

/** Azure data lake store read settings. */
export interface AmazonS3ReadSettings extends StoreReadSettingsParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** AmazonS3 wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** AmazonS3 wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** The prefix filter for the S3 object name. Type: string (or Expression with resultType string). */
  prefix?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  type: "AmazonS3ReadSettings";
}

/** File server read settings. */
export interface FileServerReadSettings extends StoreReadSettingsParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** FileServer wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** FileServer wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  /** Specify a filter to be used to select a subset of files in the folderPath rather than all files. Type: string (or Expression with resultType string). */
  fileFilter?: any;
  type: "FileServerReadSettings";
}

/** Azure File Storage read settings. */
export interface AzureFileStorageReadSettings extends StoreReadSettingsParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Azure File Storage wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** Azure File Storage wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** The prefix filter for the Azure File name starting from root path. Type: string (or Expression with resultType string). */
  prefix?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  type: "AzureFileStorageReadSettings";
}

/** Sftp write settings. */
export interface SftpWriteSettings extends StoreWriteSettingsParent {
  /** Specifies the timeout for writing each chunk to SFTP server. Default value: 01:00:00 (one hour). Type: string (or Expression with resultType string). */
  operationTimeout?: any;
  /** Upload to temporary file(s) and rename. Disable this option if your SFTP server doesn't support rename operation. Type: boolean (or Expression with resultType boolean). */
  useTempFileRename?: any;
  type: "SftpWriteSettings";
}

/** Connector write settings. */
export interface StoreWriteSettingsParent extends Record<string, unknown> {
  /** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
  maxConcurrentConnections?: any;
  /** The type of copy behavior for copy sink. */
  copyBehavior?: any;
  type:
    | "StoreWriteSettings"
    | "SftpWriteSettings"
    | "AzureBlobStorageWriteSettings"
    | "AzureBlobFSWriteSettings"
    | "AzureDataLakeStoreWriteSettings"
    | "FileServerWriteSettings"
    | "AzureFileStorageWriteSettings";
}

/** Google Cloud Storage read settings. */
export interface GoogleCloudStorageReadSettings
  extends StoreReadSettingsParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Google Cloud Storage wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** Google Cloud Storage wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** The prefix filter for the Google Cloud Storage object name. Type: string (or Expression with resultType string). */
  prefix?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  type: "GoogleCloudStorageReadSettings";
}

/** Ftp read settings. */
export interface FtpReadSettings extends StoreReadSettingsParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Ftp wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** Ftp wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Specify whether to use binary transfer mode for FTP stores. */
  useBinaryTransfer?: boolean;
  /** If true, disable parallel reading within each file. Default is false. Type: boolean (or Expression with resultType boolean). */
  disableChunking?: any;
  type: "FtpReadSettings";
}

/** Sftp read settings. */
export interface SftpReadSettings extends StoreReadSettingsParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Sftp wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** Sftp wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  /** If true, disable parallel reading within each file. Default is false. Type: boolean (or Expression with resultType boolean). */
  disableChunking?: any;
  type: "SftpReadSettings";
}

/** Sftp read settings. */
export interface HttpReadSettings extends StoreReadSettingsParent {
  /** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
  requestMethod?: any;
  /** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
  requestBody?: any;
  /** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
  additionalHeaders?: any;
  /** Specifies the timeout for a HTTP client to get HTTP response from HTTP server. */
  requestTimeout?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  type: "HttpReadSettings";
}

/** HDFS read settings. */
export interface HdfsReadSettings extends StoreReadSettingsParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** HDFS wildcardFolderPath. Type: string (or Expression with resultType string). */
  wildcardFolderPath?: any;
  /** HDFS wildcardFileName. Type: string (or Expression with resultType string). */
  wildcardFileName?: any;
  /** Point to a text file that lists each file (relative path to the path configured in the dataset) that you want to copy. Type: string (or Expression with resultType string). */
  fileListPath?: any;
  /** Indicates whether to enable partition discovery. */
  enablePartitionDiscovery?: boolean;
  /** Specify the root path where partition discovery starts from. Type: string (or Expression with resultType string). */
  partitionRootPath?: any;
  /** The start of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeStart?: any;
  /** The end of file's modified datetime. Type: string (or Expression with resultType string). */
  modifiedDatetimeEnd?: any;
  /** Specifies Distcp-related settings. */
  distcpSettings?: DistcpSettings;
  /** Indicates whether the source files need to be deleted after copy completion. Default is false. Type: boolean (or Expression with resultType boolean). */
  deleteFilesAfterCompletion?: any;
  type: "HdfsReadSettings";
}

/** Distcp settings. */
export interface DistcpSettings {
  /** Specifies the Yarn ResourceManager endpoint. Type: string (or Expression with resultType string). */
  resourceManagerEndpoint: any;
  /** Specifies an existing folder path which will be used to store temp Distcp command script. The script file is generated by ADF and will be removed after Copy job finished. Type: string (or Expression with resultType string). */
  tempScriptPath: any;
  /** Specifies the Distcp options. Type: string (or Expression with resultType string). */
  distcpOptions?: any;
}

/** Azure blob write settings. */
export interface AzureBlobStorageWriteSettings
  extends StoreWriteSettingsParent {
  /** Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer). */
  blockSizeInMB?: any;
  type: "AzureBlobStorageWriteSettings";
}

/** Azure blobFS write settings. */
export interface AzureBlobFSWriteSettings extends StoreWriteSettingsParent {
  /** Indicates the block size(MB) when writing data to blob. Type: integer (or Expression with resultType integer). */
  blockSizeInMB?: any;
  type: "AzureBlobFSWriteSettings";
}

/** Azure data lake store write settings. */
export interface AzureDataLakeStoreWriteSettings
  extends StoreWriteSettingsParent {
  /** Specifies the expiry time of the written files. The time is applied to the UTC time zone in the format of "2018-12-01T05:00:00Z". Default value is NULL. Type: integer (or Expression with resultType integer). */
  expiryDateTime?: any;
  type: "AzureDataLakeStoreWriteSettings";
}

/** File server write settings. */
export interface FileServerWriteSettings extends StoreWriteSettingsParent {
  type: "FileServerWriteSettings";
}

/** Azure File Storage write settings. */
export interface AzureFileStorageWriteSettings
  extends StoreWriteSettingsParent {
  type: "AzureFileStorageWriteSettings";
}

/** Format read settings. */
export interface FormatReadSettingsParent extends Record<string, unknown> {
  type:
    | "FormatReadSettings"
    | "DelimitedTextReadSettings"
    | "JsonReadSettings"
    | "XmlReadSettings"
    | "BinaryReadSettings";
}

/** Compression read settings. */
export interface CompressionReadSettingsParent extends Record<string, unknown> {
  type:
    | "CompressionReadSettings"
    | "ZipDeflateReadSettings"
    | "TarReadSettings"
    | "TarGZipReadSettings";
}

/** The ZipDeflate compression read settings. */
export interface ZipDeflateReadSettings extends CompressionReadSettingsParent {
  /** Preserve the zip file name as folder path. Type: boolean (or Expression with resultType boolean). */
  preserveZipFileNameAsFolder?: any;
  type: "ZipDeflateReadSettings";
}

/** The Tar compression read settings. */
export interface TarReadSettings extends CompressionReadSettingsParent {
  /** Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean). */
  preserveCompressionFileNameAsFolder?: any;
  type: "TarReadSettings";
}

/** The TarGZip compression read settings. */
export interface TarGZipReadSettings extends CompressionReadSettingsParent {
  /** Preserve the compression file name as folder path. Type: boolean (or Expression with resultType boolean). */
  preserveCompressionFileNameAsFolder?: any;
  type: "TarGZipReadSettings";
}

/** Delimited text read settings. */
export interface DelimitedTextReadSettings extends FormatReadSettingsParent {
  /** Indicates the number of non-empty rows to skip when reading data from input files. Type: integer (or Expression with resultType integer). */
  skipLineCount?: any;
  /** Compression settings. */
  compressionProperties?: CompressionReadSettings;
  type: "DelimitedTextReadSettings";
}

/** Json read settings. */
export interface JsonReadSettings extends FormatReadSettingsParent {
  /** Compression settings. */
  compressionProperties?: CompressionReadSettings;
  type: "JsonReadSettings";
}

/** Xml read settings. */
export interface XmlReadSettings extends FormatReadSettingsParent {
  /** Compression settings. */
  compressionProperties?: CompressionReadSettings;
  /** Indicates what validation method is used when reading the xml files. Allowed values: 'none', 'xsd', or 'dtd'. Type: string (or Expression with resultType string). */
  validationMode?: any;
  /** Indicates whether type detection is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean). */
  detectDataType?: any;
  /** Indicates whether namespace is enabled when reading the xml files. Type: boolean (or Expression with resultType boolean). */
  namespaces?: any;
  /** Namespace uri to prefix mappings to override the prefixes in column names when namespace is enabled, if no prefix is defined for a namespace uri, the prefix of xml element/attribute name in the xml data file will be used. Example: "{"http://www.example.com/xml":"prefix"}" Type: object (or Expression with resultType object). */
  namespacePrefixes?: any;
  type: "XmlReadSettings";
}

/** Binary read settings. */
export interface BinaryReadSettings extends FormatReadSettingsParent {
  /** Compression settings. */
  compressionProperties?: CompressionReadSettings;
  type: "BinaryReadSettings";
}

/** Format write settings. */
export interface FormatWriteSettingsParent extends Record<string, unknown> {
  type:
    | "FormatWriteSettings"
    | "AvroWriteSettings"
    | "OrcWriteSettings"
    | "ParquetWriteSettings"
    | "DelimitedTextWriteSettings"
    | "JsonWriteSettings";
}

/** Avro write settings. */
export interface AvroWriteSettings extends FormatWriteSettingsParent {
  /** Top level record name in write result, which is required in AVRO spec. */
  recordName?: string;
  /** Record namespace in the write result. */
  recordNamespace?: string;
  /** Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). */
  maxRowsPerFile?: any;
  /** Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). */
  fileNamePrefix?: any;
  type: "AvroWriteSettings";
}

/** Orc write settings. */
export interface OrcWriteSettings extends FormatWriteSettingsParent {
  /** Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). */
  maxRowsPerFile?: any;
  /** Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). */
  fileNamePrefix?: any;
  type: "OrcWriteSettings";
}

/** Parquet write settings. */
export interface ParquetWriteSettings extends FormatWriteSettingsParent {
  /** Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). */
  maxRowsPerFile?: any;
  /** Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). */
  fileNamePrefix?: any;
  type: "ParquetWriteSettings";
}

/** Delimited text write settings. */
export interface DelimitedTextWriteSettings extends FormatWriteSettingsParent {
  /** Indicates whether string values should always be enclosed with quotes. Type: boolean (or Expression with resultType boolean). */
  quoteAllText?: any;
  /** The file extension used to create the files. Type: string (or Expression with resultType string). */
  fileExtension: any;
  /** Limit the written file's row count to be smaller than or equal to the specified count. Type: integer (or Expression with resultType integer). */
  maxRowsPerFile?: any;
  /** Specifies the file name pattern <fileNamePrefix>_<fileIndex>.<fileExtension> when copy from non-file based store without partitionOptions. Type: string (or Expression with resultType string). */
  fileNamePrefix?: any;
  type: "DelimitedTextWriteSettings";
}

/** Json write settings. */
export interface JsonWriteSettings extends FormatWriteSettingsParent {
  /** File pattern of JSON. This setting controls the way a collection of JSON objects will be treated. The default value is 'setOfObjects'. It is case-sensitive. */
  filePattern?: any;
  type: "JsonWriteSettings";
}

/** A copy activity Avro source. */
export interface AvroSource extends CopySourceParent {
  /** Avro store settings. */
  storeSettings?: StoreReadSettings;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "AvroSource";
}

/** A copy activity source. */
export interface CopySourceParent extends Record<string, unknown> {
  /** Source retry count. Type: integer (or Expression with resultType integer). */
  sourceRetryCount?: any;
  /** Source retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  sourceRetryWait?: any;
  /** The maximum concurrent connection count for the source data store. Type: integer (or Expression with resultType integer). */
  maxConcurrentConnections?: any;
  type:
    | "CopySource"
    | "AvroSource"
    | "ExcelSource"
    | "ParquetSource"
    | "DelimitedTextSource"
    | "JsonSource"
    | "XmlSource"
    | "OrcSource"
    | "BinarySource"
    | "TabularSource"
    | "AzureTableSource"
    | "BlobSource"
    | "DocumentDbCollectionSource"
    | "CosmosDbSqlApiSource"
    | "DynamicsSource"
    | "DynamicsCrmSource"
    | "CommonDataServiceForAppsSource"
    | "RelationalSource"
    | "InformixSource"
    | "MicrosoftAccessSource"
    | "Db2Source"
    | "OdbcSource"
    | "MySqlSource"
    | "PostgreSqlSource"
    | "SybaseSource"
    | "SapBwSource"
    | "ODataSource"
    | "SalesforceSource"
    | "SalesforceServiceCloudSource"
    | "SapCloudForCustomerSource"
    | "SapEccSource"
    | "SapHanaSource"
    | "SapOpenHubSource"
    | "SapTableSource"
    | "RestSource"
    | "SqlSource"
    | "SqlServerSource"
    | "AmazonRdsForSqlServerSource"
    | "AzureSqlSource"
    | "SqlMISource"
    | "SqlDWSource"
    | "FileSystemSource"
    | "HdfsSource"
    | "AzureMySqlSource"
    | "AzureDataExplorerSource"
    | "OracleSource"
    | "AmazonRdsForOracleSource"
    | "TeradataSource"
    | "WebSource"
    | "CassandraSource"
    | "MongoDbSource"
    | "MongoDbAtlasSource"
    | "MongoDbV2Source"
    | "CosmosDbMongoDbApiSource"
    | "Office365Source"
    | "AzureDataLakeStoreSource"
    | "AzureBlobFSSource"
    | "HttpSource"
    | "AmazonMWSSource"
    | "AzurePostgreSqlSource"
    | "ConcurSource"
    | "CouchbaseSource"
    | "DrillSource"
    | "EloquaSource"
    | "GoogleBigQuerySource"
    | "GreenplumSource"
    | "HBaseSource"
    | "HiveSource"
    | "HubspotSource"
    | "ImpalaSource"
    | "JiraSource"
    | "MagentoSource"
    | "MariaDBSource"
    | "AzureMariaDBSource"
    | "MarketoSource"
    | "PaypalSource"
    | "PhoenixSource"
    | "PrestoSource"
    | "QuickBooksSource"
    | "ServiceNowSource"
    | "ShopifySource"
    | "SparkSource"
    | "SquareSource"
    | "XeroSource"
    | "ZohoSource"
    | "NetezzaSource"
    | "VerticaSource"
    | "SalesforceMarketingCloudSource"
    | "ResponsysSource"
    | "DynamicsAXSource"
    | "OracleServiceCloudSource"
    | "GoogleAdWordsSource"
    | "AmazonRedshiftSource"
    | "SnowflakeSource"
    | "AzureDatabricksDeltaLakeSource"
    | "SharePointOnlineListSource";
}

/** A copy activity excel source. */
export interface ExcelSource extends CopySourceParent {
  /** Excel store settings. */
  storeSettings?: StoreReadSettings;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "ExcelSource";
}

/** A copy activity Parquet source. */
export interface ParquetSource extends CopySourceParent {
  /** Parquet store settings. */
  storeSettings?: StoreReadSettings;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "ParquetSource";
}

/** A copy activity DelimitedText source. */
export interface DelimitedTextSource extends CopySourceParent {
  /** DelimitedText store settings. */
  storeSettings?: StoreReadSettings;
  /** DelimitedText format settings. */
  formatSettings?: DelimitedTextReadSettings;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "DelimitedTextSource";
}

/** A copy activity Json source. */
export interface JsonSource extends CopySourceParent {
  /** Json store settings. */
  storeSettings?: StoreReadSettings;
  /** Json format settings. */
  formatSettings?: JsonReadSettings;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "JsonSource";
}

/** A copy activity Xml source. */
export interface XmlSource extends CopySourceParent {
  /** Xml store settings. */
  storeSettings?: StoreReadSettings;
  /** Xml format settings. */
  formatSettings?: XmlReadSettings;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "XmlSource";
}

/** A copy activity ORC source. */
export interface OrcSource extends CopySourceParent {
  /** ORC store settings. */
  storeSettings?: StoreReadSettings;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "OrcSource";
}

/** A copy activity DelimitedText sink. */
export interface DelimitedTextSink extends CopySinkParent {
  /** DelimitedText store settings. */
  storeSettings?: StoreWriteSettings;
  /** DelimitedText format settings. */
  formatSettings?: DelimitedTextWriteSettings;
  type: "DelimitedTextSink";
}

/** A copy activity sink. */
export interface CopySinkParent extends Record<string, unknown> {
  /** Write batch size. Type: integer (or Expression with resultType integer), minimum: 0. */
  writeBatchSize?: any;
  /** Write batch timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  writeBatchTimeout?: any;
  /** Sink retry count. Type: integer (or Expression with resultType integer). */
  sinkRetryCount?: any;
  /** Sink retry wait. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  sinkRetryWait?: any;
  /** The maximum concurrent connection count for the sink data store. Type: integer (or Expression with resultType integer). */
  maxConcurrentConnections?: any;
  type:
    | "CopySink"
    | "DelimitedTextSink"
    | "JsonSink"
    | "OrcSink"
    | "RestSink"
    | "AzurePostgreSqlSink"
    | "AzureMySqlSink"
    | "AzureDatabricksDeltaLakeSink"
    | "SapCloudForCustomerSink"
    | "AzureQueueSink"
    | "AzureTableSink"
    | "AvroSink"
    | "ParquetSink"
    | "BinarySink"
    | "BlobSink"
    | "FileSystemSink"
    | "DocumentDbCollectionSink"
    | "CosmosDbSqlApiSink"
    | "SqlSink"
    | "SqlServerSink"
    | "AzureSqlSink"
    | "SqlMISink"
    | "SqlDWSink"
    | "SnowflakeSink"
    | "OracleSink"
    | "AzureDataLakeStoreSink"
    | "AzureBlobFSSink"
    | "AzureSearchIndexSink"
    | "OdbcSink"
    | "InformixSink"
    | "MicrosoftAccessSink"
    | "DynamicsSink"
    | "DynamicsCrmSink"
    | "CommonDataServiceForAppsSink"
    | "AzureDataExplorerSink"
    | "SalesforceSink"
    | "SalesforceServiceCloudSink"
    | "CosmosDbMongoDbApiSink";
}

/** A copy activity Json sink. */
export interface JsonSink extends CopySinkParent {
  /** Json store settings. */
  storeSettings?: StoreWriteSettings;
  /** Json format settings. */
  formatSettings?: JsonWriteSettings;
  type: "JsonSink";
}

/** A copy activity ORC sink. */
export interface OrcSink extends CopySinkParent {
  /** ORC store settings. */
  storeSettings?: StoreWriteSettings;
  /** ORC format settings. */
  formatSettings?: OrcWriteSettings;
  type: "OrcSink";
}

/** Copy activity. */
export interface CopyActivity extends ExecutionActivityParent {
  /** Copy activity properties. */
  typeProperties: CopyActivityTypeProperties;
  /** List of inputs for the activity. */
  inputs?: Array<DatasetReference>;
  /** List of outputs for the activity. */
  outputs?: Array<DatasetReference>;
  type: "Copy";
}

/** Copy activity properties. */
export interface CopyActivityTypeProperties {
  /** Copy activity source. */
  source: CopySource;
  /** Copy activity sink. */
  sink: CopySink;
  /** Copy activity translator. If not specified, tabular translator is used. */
  translator?: any;
  /** Specifies whether to copy data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean). */
  enableStaging?: any;
  /** Specifies interim staging settings when EnableStaging is true. */
  stagingSettings?: StagingSettings;
  /** Maximum number of concurrent sessions opened on the source or sink to avoid overloading the data store. Type: integer (or Expression with resultType integer), minimum: 0. */
  parallelCopies?: any;
  /** Maximum number of data integration units that can be used to perform this data movement. Type: integer (or Expression with resultType integer), minimum: 0. */
  dataIntegrationUnits?: any;
  /** Whether to skip incompatible row. Default value is false. Type: boolean (or Expression with resultType boolean). */
  enableSkipIncompatibleRow?: any;
  /** Redirect incompatible row settings when EnableSkipIncompatibleRow is true. */
  redirectIncompatibleRowSettings?: RedirectIncompatibleRowSettings;
  /** (Deprecated. Please use LogSettings) Log storage settings customer need to provide when enabling session log. */
  logStorageSettings?: LogStorageSettings;
  /** Log settings customer needs provide when enabling log. */
  logSettings?: LogSettings;
  /** Preserve Rules. */
  preserveRules?: Array<any>;
  /** Preserve rules. */
  preserve?: Array<any>;
  /** Whether to enable Data Consistency validation. Type: boolean (or Expression with resultType boolean). */
  validateDataConsistency?: any;
  /** Specify the fault tolerance for data consistency. */
  skipErrorFile?: SkipErrorFile;
}

/** Staging settings. */
export interface StagingSettings extends Record<string, unknown> {
  /** Staging linked service reference. */
  linkedServiceName: LinkedServiceReference;
  /** The path to storage for storing the interim data. Type: string (or Expression with resultType string). */
  path?: any;
  /** Specifies whether to use compression when copying data via an interim staging. Default value is false. Type: boolean (or Expression with resultType boolean). */
  enableCompression?: any;
}

/** Redirect incompatible row settings */
export interface RedirectIncompatibleRowSettings
  extends Record<string, unknown> {
  /** Name of the Azure Storage, Storage SAS, or Azure Data Lake Store linked service used for redirecting incompatible row. Must be specified if redirectIncompatibleRowSettings is specified. Type: string (or Expression with resultType string). */
  linkedServiceName: any;
  /** The path for storing the redirect incompatible row data. Type: string (or Expression with resultType string). */
  path?: any;
}

/** (Deprecated. Please use LogSettings) Log storage settings. */
export interface LogStorageSettings extends Record<string, unknown> {
  /** Log storage linked service reference. */
  linkedServiceName: LinkedServiceReference;
  /** The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string). */
  path?: any;
  /** Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string). */
  logLevel?: any;
  /** Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean). */
  enableReliableLogging?: any;
}

/** Log settings. */
export interface LogSettings {
  /** Specifies whether to enable copy activity log. Type: boolean (or Expression with resultType boolean). */
  enableCopyActivityLog?: any;
  /** Specifies settings for copy activity log. */
  copyActivityLogSettings?: CopyActivityLogSettings;
  /** Log location settings customer needs to provide when enabling log. */
  logLocationSettings: LogLocationSettings;
}

/** Settings for copy activity log. */
export interface CopyActivityLogSettings {
  /** Gets or sets the log level, support: Info, Warning. Type: string (or Expression with resultType string). */
  logLevel?: any;
  /** Specifies whether to enable reliable logging. Type: boolean (or Expression with resultType boolean). */
  enableReliableLogging?: any;
}

/** Log location settings. */
export interface LogLocationSettings {
  /** Log storage linked service reference. */
  linkedServiceName: LinkedServiceReference;
  /** The path to storage for storing detailed logs of activity execution. Type: string (or Expression with resultType string). */
  path?: any;
}

/** Skip error file. */
export interface SkipErrorFile {
  /** Skip if file is deleted by other client during copy. Default is true. Type: boolean (or Expression with resultType boolean). */
  fileMissing?: any;
  /** Skip if source/sink file changed by other concurrent write. Default is false. Type: boolean (or Expression with resultType boolean). */
  dataInconsistency?: any;
}

/** A copy activity Binary source. */
export interface BinarySource extends CopySourceParent {
  /** Binary store settings. */
  storeSettings?: StoreReadSettings;
  /** Binary format settings. */
  formatSettings?: BinaryReadSettings;
  type: "BinarySource";
}

/** Copy activity sources of tabular type. */
export interface TabularSourceParent extends CopySourceParent {
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type:
    | "TabularSource"
    | "AzureTableSource"
    | "InformixSource"
    | "Db2Source"
    | "OdbcSource"
    | "MySqlSource"
    | "PostgreSqlSource"
    | "SybaseSource"
    | "SapBwSource"
    | "SalesforceSource"
    | "SapCloudForCustomerSource"
    | "SapEccSource"
    | "SapHanaSource"
    | "SapOpenHubSource"
    | "SapTableSource"
    | "SqlSource"
    | "SqlServerSource"
    | "AmazonRdsForSqlServerSource"
    | "AzureSqlSource"
    | "SqlMISource"
    | "SqlDWSource"
    | "AzureMySqlSource"
    | "TeradataSource"
    | "CassandraSource"
    | "AmazonMWSSource"
    | "AzurePostgreSqlSource"
    | "ConcurSource"
    | "CouchbaseSource"
    | "DrillSource"
    | "EloquaSource"
    | "GoogleBigQuerySource"
    | "GreenplumSource"
    | "HBaseSource"
    | "HiveSource"
    | "HubspotSource"
    | "ImpalaSource"
    | "JiraSource"
    | "MagentoSource"
    | "MariaDBSource"
    | "AzureMariaDBSource"
    | "MarketoSource"
    | "PaypalSource"
    | "PhoenixSource"
    | "PrestoSource"
    | "QuickBooksSource"
    | "ServiceNowSource"
    | "ShopifySource"
    | "SparkSource"
    | "SquareSource"
    | "XeroSource"
    | "ZohoSource"
    | "NetezzaSource"
    | "VerticaSource"
    | "SalesforceMarketingCloudSource"
    | "ResponsysSource"
    | "DynamicsAXSource"
    | "OracleServiceCloudSource"
    | "GoogleAdWordsSource"
    | "AmazonRedshiftSource";
}

/** A copy activity Azure Table source. */
export interface AzureTableSource extends TabularSourceParent {
  /** Azure Table source query. Type: string (or Expression with resultType string). */
  azureTableSourceQuery?: any;
  /** Azure Table source ignore table not found. Type: boolean (or Expression with resultType boolean). */
  azureTableSourceIgnoreTableNotFound?: any;
  type: "AzureTableSource";
}

/** A copy activity Azure Blob source. */
export interface BlobSource extends CopySourceParent {
  /** Treat empty as null. Type: boolean (or Expression with resultType boolean). */
  treatEmptyAsNull?: any;
  /** Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer). */
  skipHeaderLineCount?: any;
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  type: "BlobSource";
}

/** A copy activity Document Database Collection source. */
export interface DocumentDbCollectionSource extends CopySourceParent {
  /** Documents query. Type: string (or Expression with resultType string). */
  query?: any;
  /** Nested properties separator. Type: string (or Expression with resultType string). */
  nestingSeparator?: any;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "DocumentDbCollectionSource";
}

/** A copy activity Azure CosmosDB (SQL API) Collection source. */
export interface CosmosDbSqlApiSource extends CopySourceParent {
  /** SQL API query. Type: string (or Expression with resultType string). */
  query?: any;
  /** Page size of the result. Type: integer (or Expression with resultType integer). */
  pageSize?: any;
  /** Preferred regions. Type: array of strings (or Expression with resultType array of strings). */
  preferredRegions?: any;
  /** Whether detect primitive values as datetime values. Type: boolean (or Expression with resultType boolean). */
  detectDatetime?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "CosmosDbSqlApiSource";
}

/** A copy activity Dynamics source. */
export interface DynamicsSource extends CopySourceParent {
  /** FetchXML is a proprietary query language that is used in Microsoft Dynamics (online & on-premises). Type: string (or Expression with resultType string). */
  query?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "DynamicsSource";
}

/** A copy activity Dynamics CRM source. */
export interface DynamicsCrmSource extends CopySourceParent {
  /** FetchXML is a proprietary query language that is used in Microsoft Dynamics CRM (online & on-premises). Type: string (or Expression with resultType string). */
  query?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "DynamicsCrmSource";
}

/** A copy activity Common Data Service for Apps source. */
export interface CommonDataServiceForAppsSource extends CopySourceParent {
  /** FetchXML is a proprietary query language that is used in Microsoft Common Data Service for Apps (online & on-premises). Type: string (or Expression with resultType string). */
  query?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "CommonDataServiceForAppsSource";
}

/** A copy activity source for various relational databases. */
export interface RelationalSource extends CopySourceParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "RelationalSource";
}

/** A copy activity source for Informix. */
export interface InformixSource extends TabularSourceParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "InformixSource";
}

/** A copy activity source for Microsoft Access. */
export interface MicrosoftAccessSource extends CopySourceParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "MicrosoftAccessSource";
}

/** A copy activity source for Db2 databases. */
export interface Db2Source extends TabularSourceParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "Db2Source";
}

/** A copy activity source for ODBC databases. */
export interface OdbcSource extends TabularSourceParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "OdbcSource";
}

/** A copy activity source for MySQL databases. */
export interface MySqlSource extends TabularSourceParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "MySqlSource";
}

/** A copy activity source for PostgreSQL databases. */
export interface PostgreSqlSource extends TabularSourceParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "PostgreSqlSource";
}

/** A copy activity source for Sybase databases. */
export interface SybaseSource extends TabularSourceParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "SybaseSource";
}

/** A copy activity source for SapBW server via MDX. */
export interface SapBwSource extends TabularSourceParent {
  /** MDX query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "SapBwSource";
}

/** A copy activity source for OData source. */
export interface ODataSource extends CopySourceParent {
  /** OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
  query?: any;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "ODataSource";
}

/** A copy activity Salesforce source. */
export interface SalesforceSource extends TabularSourceParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  /** The read behavior for the operation. Default is Query. */
  readBehavior?: "Query" | "QueryAll";
  type: "SalesforceSource";
}

/** A copy activity Salesforce Service Cloud source. */
export interface SalesforceServiceCloudSource extends CopySourceParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  /** The read behavior for the operation. Default is Query. */
  readBehavior?: "Query" | "QueryAll";
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "SalesforceServiceCloudSource";
}

/** A copy activity source for SAP Cloud for Customer source. */
export interface SapCloudForCustomerSource extends TabularSourceParent {
  /** SAP Cloud for Customer OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
  query?: any;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  type: "SapCloudForCustomerSource";
}

/** A copy activity source for SAP ECC source. */
export interface SapEccSource extends TabularSourceParent {
  /** SAP ECC OData query. For example, "$top=1". Type: string (or Expression with resultType string). */
  query?: any;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  type: "SapEccSource";
}

/** A copy activity source for SAP HANA source. */
export interface SapHanaSource extends TabularSourceParent {
  /** SAP HANA Sql query. Type: string (or Expression with resultType string). */
  query?: any;
  /** The packet size of data read from SAP HANA. Type: integer(or Expression with resultType integer). */
  packetSize?: any;
  /** The partition mechanism that will be used for SAP HANA read in parallel. */
  partitionOption?:
    | "None"
    | "PhysicalPartitionsOfTable"
    | "SapHanaDynamicRange";
  /** The settings that will be leveraged for SAP HANA source partitioning. */
  partitionSettings?: SapHanaPartitionSettings;
  type: "SapHanaSource";
}

/** The settings that will be leveraged for SAP HANA source partitioning. */
export interface SapHanaPartitionSettings {
  /** The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: any;
}

/** A copy activity source for SAP Business Warehouse Open Hub Destination source. */
export interface SapOpenHubSource extends TabularSourceParent {
  /** Whether to exclude the records of the last request. The default value is true. Type: boolean (or Expression with resultType boolean). */
  excludeLastRequest?: any;
  /** The ID of request for delta loading. Once it is set, only data with requestId larger than the value of this property will be retrieved. The default value is 0. Type: integer (or Expression with resultType integer ). */
  baseRequestId?: any;
  /** Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string). */
  customRfcReadTableFunctionModule?: any;
  /** The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string). */
  sapDataColumnDelimiter?: any;
  type: "SapOpenHubSource";
}

/** A copy activity source for SAP Table source. */
export interface SapTableSource extends TabularSourceParent {
  /** The number of rows to be retrieved. Type: integer(or Expression with resultType integer). */
  rowCount?: any;
  /** The number of rows that will be skipped. Type: integer (or Expression with resultType integer). */
  rowSkips?: any;
  /** The fields of the SAP table that will be retrieved. For example, column0, column1. Type: string (or Expression with resultType string). */
  rfcTableFields?: any;
  /** The options for the filtering of the SAP Table. For example, COLUMN0 EQ SOME VALUE. Type: string (or Expression with resultType string). */
  rfcTableOptions?: any;
  /** Specifies the maximum number of rows that will be retrieved at a time when retrieving data from SAP Table. Type: integer (or Expression with resultType integer). */
  batchSize?: any;
  /** Specifies the custom RFC function module that will be used to read data from SAP Table. Type: string (or Expression with resultType string). */
  customRfcReadTableFunctionModule?: any;
  /** The single character that will be used as delimiter passed to SAP RFC as well as splitting the output data retrieved. Type: string (or Expression with resultType string). */
  sapDataColumnDelimiter?: any;
  /** The partition mechanism that will be used for SAP table read in parallel. */
  partitionOption?:
    | "None"
    | "PartitionOnInt"
    | "PartitionOnCalendarYear"
    | "PartitionOnCalendarMonth"
    | "PartitionOnCalendarDate"
    | "PartitionOnTime";
  /** The settings that will be leveraged for SAP table source partitioning. */
  partitionSettings?: SapTablePartitionSettings;
  type: "SapTableSource";
}

/** The settings that will be leveraged for SAP table source partitioning. */
export interface SapTablePartitionSettings {
  /** The name of the column that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: any;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: any;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: any;
  /** The maximum value of partitions the table will be split into. Type: integer (or Expression with resultType string). */
  maxPartitionsNumber?: any;
}

/** A copy activity Rest service Sink. */
export interface RestSink extends CopySinkParent {
  /** The HTTP method used to call the RESTful API. The default is POST. Type: string (or Expression with resultType string). */
  requestMethod?: any;
  /** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
  additionalHeaders?: any;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  /** The time to await before sending next request, in milliseconds */
  requestInterval?: any;
  /** Http Compression Type to Send data in compressed format with Optimal Compression Level, Default is None. And The Only Supported option is Gzip. */
  httpCompressionType?: any;
  type: "RestSink";
}

/** A copy activity Rest service source. */
export interface RestSource extends CopySourceParent {
  /** The HTTP method used to call the RESTful API. The default is GET. Type: string (or Expression with resultType string). */
  requestMethod?: any;
  /** The HTTP request body to the RESTful API if requestMethod is POST. Type: string (or Expression with resultType string). */
  requestBody?: any;
  /** The additional HTTP headers in the request to the RESTful API. Type: string (or Expression with resultType string). */
  additionalHeaders?: any;
  /** The pagination rules to compose next page requests. Type: string (or Expression with resultType string). */
  paginationRules?: any;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:01:40. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  /** The time to await before sending next page request. */
  requestInterval?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "RestSource";
}

/** A copy activity SQL source. */
export interface SqlSource extends TabularSourceParent {
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: any;
  /** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: Record<string, StoredProcedureParameter>;
  /** Specifies the transaction locking behavior for the SQL source. Allowed values: ReadCommitted/ReadUncommitted/RepeatableRead/Serializable/Snapshot. The default value is ReadCommitted. Type: string (or Expression with resultType string). */
  isolationLevel?: any;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: any;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettings;
  type: "SqlSource";
}

/** SQL stored procedure parameter. */
export interface StoredProcedureParameter {
  /** Stored procedure parameter value. Type: string (or Expression with resultType string). */
  value?: any;
  /** Stored procedure parameter type. */
  type?: "String" | "Int" | "Int64" | "Decimal" | "Guid" | "Boolean" | "Date";
}

/** The settings that will be leveraged for Sql source partitioning. */
export interface SqlPartitionSettings {
  /** The name of the column in integer or datetime type that will be used for proceeding partitioning. If not specified, the primary key of the table is auto-detected and used as the partition column. Type: string (or Expression with resultType string). */
  partitionColumnName?: any;
  /** The maximum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string). */
  partitionUpperBound?: any;
  /** The minimum value of the partition column for partition range splitting. This value is used to decide the partition stride, not for filtering the rows in table. All rows in the table or query result will be partitioned and copied. Type: string (or Expression with resultType string). */
  partitionLowerBound?: any;
}

/** A copy activity SQL server source. */
export interface SqlServerSource extends TabularSourceParent {
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: any;
  /** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: Record<string, StoredProcedureParameter>;
  /** Which additional types to produce. */
  produceAdditionalTypes?: any;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: any;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettings;
  type: "SqlServerSource";
}

/** A copy activity Amazon RDS for SQL Server source. */
export interface AmazonRdsForSqlServerSource extends TabularSourceParent {
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: any;
  /** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: Record<string, StoredProcedureParameter>;
  /** Which additional types to produce. */
  produceAdditionalTypes?: any;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: any;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettings;
  type: "AmazonRdsForSqlServerSource";
}

/** A copy activity Azure SQL source. */
export interface AzureSqlSource extends TabularSourceParent {
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: any;
  /** Name of the stored procedure for a SQL Database source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: Record<string, StoredProcedureParameter>;
  /** Which additional types to produce. */
  produceAdditionalTypes?: any;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: any;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettings;
  type: "AzureSqlSource";
}

/** A copy activity Azure SQL Managed Instance source. */
export interface SqlMISource extends TabularSourceParent {
  /** SQL reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: any;
  /** Name of the stored procedure for a Azure SQL Managed Instance source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: Record<string, StoredProcedureParameter>;
  /** Which additional types to produce. */
  produceAdditionalTypes?: any;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: any;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettings;
  type: "SqlMISource";
}

/** A copy activity SQL Data Warehouse source. */
export interface SqlDWSource extends TabularSourceParent {
  /** SQL Data Warehouse reader query. Type: string (or Expression with resultType string). */
  sqlReaderQuery?: any;
  /** Name of the stored procedure for a SQL Data Warehouse source. This cannot be used at the same time as SqlReaderQuery. Type: string (or Expression with resultType string). */
  sqlReaderStoredProcedureName?: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". Type: object (or Expression with resultType object), itemType: StoredProcedureParameter. */
  storedProcedureParameters?: any;
  /** The partition mechanism that will be used for Sql read in parallel. Possible values include: "None", "PhysicalPartitionsOfTable", "DynamicRange". */
  partitionOption?: any;
  /** The settings that will be leveraged for Sql source partitioning. */
  partitionSettings?: SqlPartitionSettings;
  type: "SqlDWSource";
}

/** A copy activity file system source. */
export interface FileSystemSource extends CopySourceParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "FileSystemSource";
}

/** A copy activity HDFS source. */
export interface HdfsSource extends CopySourceParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** Specifies Distcp-related settings. */
  distcpSettings?: DistcpSettings;
  type: "HdfsSource";
}

/** A copy activity Azure MySQL source. */
export interface AzureMySqlSource extends TabularSourceParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  type: "AzureMySqlSource";
}

/** A copy activity Azure Data Explorer (Kusto) source. */
export interface AzureDataExplorerSource extends CopySourceParent {
  /** Database query. Should be a Kusto Query Language (KQL) query. Type: string (or Expression with resultType string). */
  query: any;
  /** The name of the Boolean option that controls whether truncation is applied to result-sets that go beyond a certain row-count limit. */
  noTruncation?: any;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])).. */
  queryTimeout?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "AzureDataExplorerSource";
}

/** A copy activity Oracle source. */
export interface OracleSource extends CopySourceParent {
  /** Oracle reader query. Type: string (or Expression with resultType string). */
  oracleReaderQuery?: any;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: any;
  /** The partition mechanism that will be used for Oracle read in parallel. */
  partitionOption?: "None" | "PhysicalPartitionsOfTable" | "DynamicRange";
  /** The settings that will be leveraged for Oracle source partitioning. */
  partitionSettings?: OraclePartitionSettings;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "OracleSource";
}

/** The settings that will be leveraged for Oracle source partitioning. */
export interface OraclePartitionSettings {
  /** Names of the physical partitions of Oracle table. */
  partitionNames?: any;
  /** The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: any;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: any;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: any;
}

/** A copy activity AmazonRdsForOracle source. */
export interface AmazonRdsForOracleSource extends CopySourceParent {
  /** AmazonRdsForOracle reader query. Type: string (or Expression with resultType string). */
  oracleReaderQuery?: any;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: any;
  /** The partition mechanism that will be used for AmazonRdsForOracle read in parallel. Type: string (or Expression with resultType string). */
  partitionOption?: any;
  /** The settings that will be leveraged for AmazonRdsForOracle source partitioning. */
  partitionSettings?: AmazonRdsForOraclePartitionSettings;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "AmazonRdsForOracleSource";
}

/** The settings that will be leveraged for AmazonRdsForOracle source partitioning. */
export interface AmazonRdsForOraclePartitionSettings {
  /** Names of the physical partitions of AmazonRdsForOracle table. */
  partitionNames?: any;
  /** The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: any;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: any;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: any;
}

/** A copy activity Teradata source. */
export interface TeradataSource extends TabularSourceParent {
  /** Teradata query. Type: string (or Expression with resultType string). */
  query?: any;
  /** The partition mechanism that will be used for teradata read in parallel. */
  partitionOption?: "None" | "Hash" | "DynamicRange";
  /** The settings that will be leveraged for teradata source partitioning. */
  partitionSettings?: TeradataPartitionSettings;
  type: "TeradataSource";
}

/** The settings that will be leveraged for teradata source partitioning. */
export interface TeradataPartitionSettings {
  /** The name of the column that will be used for proceeding range or hash partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: any;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: any;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: any;
}

/** A copy activity source for web page table. */
export interface WebSource extends CopySourceParent {
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "WebSource";
}

/** A copy activity source for a Cassandra database. */
export interface CassandraSource extends TabularSourceParent {
  /** Database query. Should be a SQL-92 query expression or Cassandra Query Language (CQL) command. Type: string (or Expression with resultType string). */
  query?: any;
  /** The consistency level specifies how many Cassandra servers must respond to a read request before returning data to the client application. Cassandra checks the specified number of Cassandra servers for data to satisfy the read request. Must be one of cassandraSourceReadConsistencyLevels. The default value is 'ONE'. It is case-insensitive. */
  consistencyLevel?:
    | "ALL"
    | "EACH_QUORUM"
    | "QUORUM"
    | "LOCAL_QUORUM"
    | "ONE"
    | "TWO"
    | "THREE"
    | "LOCAL_ONE"
    | "SERIAL"
    | "LOCAL_SERIAL";
  type: "CassandraSource";
}

/** A copy activity source for a MongoDB database. */
export interface MongoDbSource extends CopySourceParent {
  /** Database query. Should be a SQL-92 query expression. Type: string (or Expression with resultType string). */
  query?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "MongoDbSource";
}

/** A copy activity source for a MongoDB Atlas database. */
export interface MongoDbAtlasSource extends CopySourceParent {
  /** Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). */
  filter?: any;
  /** Cursor methods for Mongodb query */
  cursorMethods?: MongoDbCursorMethodsProperties;
  /** Specifies the number of documents to return in each batch of the response from MongoDB Atlas instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). */
  batchSize?: any;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "MongoDbAtlasSource";
}

/** Cursor methods for Mongodb query */
export interface MongoDbCursorMethodsProperties
  extends Record<string, unknown> {
  /** Specifies the fields to return in the documents that match the query filter. To return all fields in the matching documents, omit this parameter. Type: string (or Expression with resultType string). */
  project?: any;
  /** Specifies the order in which the query returns matching documents. Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). */
  sort?: any;
  /** Specifies the how many documents skipped and where MongoDB begins returning results. This approach may be useful in implementing paginated results. Type: integer (or Expression with resultType integer). */
  skip?: any;
  /** Specifies the maximum number of documents the server returns. limit() is analogous to the LIMIT statement in a SQL database. Type: integer (or Expression with resultType integer). */
  limit?: any;
}

/** A copy activity source for a MongoDB database. */
export interface MongoDbV2Source extends CopySourceParent {
  /** Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). */
  filter?: any;
  /** Cursor methods for Mongodb query */
  cursorMethods?: MongoDbCursorMethodsProperties;
  /** Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). */
  batchSize?: any;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "MongoDbV2Source";
}

/** A copy activity source for a CosmosDB (MongoDB API) database. */
export interface CosmosDbMongoDbApiSource extends CopySourceParent {
  /** Specifies selection filter using query operators. To return all documents in a collection, omit this parameter or pass an empty document ({}). Type: string (or Expression with resultType string). */
  filter?: any;
  /** Cursor methods for Mongodb query. */
  cursorMethods?: MongoDbCursorMethodsProperties;
  /** Specifies the number of documents to return in each batch of the response from MongoDB instance. In most cases, modifying the batch size will not affect the user or the application. This property's main purpose is to avoid hit the limitation of response size. Type: integer (or Expression with resultType integer). */
  batchSize?: any;
  /** Query timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  queryTimeout?: any;
  /** Specifies the additional columns to be added to source data. Type: array of objects(AdditionalColumns) (or Expression with resultType array of objects). */
  additionalColumns?: any;
  type: "CosmosDbMongoDbApiSource";
}

/** A copy activity source for an Office 365 service. */
export interface Office365Source extends CopySourceParent {
  /** The groups containing all the users. Type: array of strings (or Expression with resultType array of strings). */
  allowedGroups?: any;
  /** The user scope uri. Type: string (or Expression with resultType string). */
  userScopeFilterUri?: any;
  /** The Column to apply the <paramref name="StartTime"/> and <paramref name="EndTime"/>. Type: string (or Expression with resultType string). */
  dateFilterColumn?: any;
  /** Start time of the requested range for this dataset. Type: string (or Expression with resultType string). */
  startTime?: any;
  /** End time of the requested range for this dataset. Type: string (or Expression with resultType string). */
  endTime?: any;
  /** The columns to be read out from the Office 365 table. Type: array of objects (or Expression with resultType array of objects). Example: [ { "name": "Id" }, { "name": "CreatedDateTime" } ] */
  outputColumns?: any;
  type: "Office365Source";
}

/** A copy activity Azure Data Lake source. */
export interface AzureDataLakeStoreSource extends CopySourceParent {
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  type: "AzureDataLakeStoreSource";
}

/** A copy activity Azure BlobFS source. */
export interface AzureBlobFSSource extends CopySourceParent {
  /** Treat empty as null. Type: boolean (or Expression with resultType boolean). */
  treatEmptyAsNull?: any;
  /** Number of header lines to skip from each blob. Type: integer (or Expression with resultType integer). */
  skipHeaderLineCount?: any;
  /** If true, files under the folder path will be read recursively. Default is true. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  type: "AzureBlobFSSource";
}

/** A copy activity source for an HTTP file. */
export interface HttpSource extends CopySourceParent {
  /** Specifies the timeout for a HTTP client to get HTTP response from HTTP server. The default value is equivalent to System.Net.HttpWebRequest.Timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  type: "HttpSource";
}

/** A copy activity Amazon Marketplace Web Service source. */
export interface AmazonMWSSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "AmazonMWSSource";
}

/** A copy activity Azure PostgreSQL source. */
export interface AzurePostgreSqlSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "AzurePostgreSqlSource";
}

/** A copy activity Azure PostgreSQL sink. */
export interface AzurePostgreSqlSink extends CopySinkParent {
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  type: "AzurePostgreSqlSink";
}

/** A copy activity Azure MySql sink. */
export interface AzureMySqlSink extends CopySinkParent {
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  type: "AzureMySqlSink";
}

/** A copy activity Concur Service source. */
export interface ConcurSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "ConcurSource";
}

/** A copy activity Couchbase server source. */
export interface CouchbaseSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "CouchbaseSource";
}

/** A copy activity Drill server source. */
export interface DrillSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "DrillSource";
}

/** A copy activity Eloqua server source. */
export interface EloquaSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "EloquaSource";
}

/** A copy activity Google BigQuery service source. */
export interface GoogleBigQuerySource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "GoogleBigQuerySource";
}

/** A copy activity Greenplum Database source. */
export interface GreenplumSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "GreenplumSource";
}

/** A copy activity HBase server source. */
export interface HBaseSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "HBaseSource";
}

/** A copy activity Hive Server source. */
export interface HiveSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "HiveSource";
}

/** A copy activity Hubspot Service source. */
export interface HubspotSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "HubspotSource";
}

/** A copy activity Impala server source. */
export interface ImpalaSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "ImpalaSource";
}

/** A copy activity Jira Service source. */
export interface JiraSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "JiraSource";
}

/** A copy activity Magento server source. */
export interface MagentoSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "MagentoSource";
}

/** A copy activity MariaDB server source. */
export interface MariaDBSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "MariaDBSource";
}

/** A copy activity Azure MariaDB source. */
export interface AzureMariaDBSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "AzureMariaDBSource";
}

/** A copy activity Marketo server source. */
export interface MarketoSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "MarketoSource";
}

/** A copy activity Paypal Service source. */
export interface PaypalSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "PaypalSource";
}

/** A copy activity Phoenix server source. */
export interface PhoenixSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "PhoenixSource";
}

/** A copy activity Presto server source. */
export interface PrestoSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "PrestoSource";
}

/** A copy activity QuickBooks server source. */
export interface QuickBooksSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "QuickBooksSource";
}

/** A copy activity ServiceNow server source. */
export interface ServiceNowSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "ServiceNowSource";
}

/** A copy activity Shopify Service source. */
export interface ShopifySource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "ShopifySource";
}

/** A copy activity Spark Server source. */
export interface SparkSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "SparkSource";
}

/** A copy activity Square Service source. */
export interface SquareSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "SquareSource";
}

/** A copy activity Xero Service source. */
export interface XeroSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "XeroSource";
}

/** A copy activity Zoho server source. */
export interface ZohoSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "ZohoSource";
}

/** A copy activity Netezza source. */
export interface NetezzaSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  /** The partition mechanism that will be used for Netezza read in parallel. */
  partitionOption?: "None" | "DataSlice" | "DynamicRange";
  /** The settings that will be leveraged for Netezza source partitioning. */
  partitionSettings?: NetezzaPartitionSettings;
  type: "NetezzaSource";
}

/** The settings that will be leveraged for Netezza source partitioning. */
export interface NetezzaPartitionSettings {
  /** The name of the column in integer type that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionColumnName?: any;
  /** The maximum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionUpperBound?: any;
  /** The minimum value of column specified in partitionColumnName that will be used for proceeding range partitioning. Type: string (or Expression with resultType string). */
  partitionLowerBound?: any;
}

/** A copy activity Vertica source. */
export interface VerticaSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "VerticaSource";
}

/** A copy activity Salesforce Marketing Cloud source. */
export interface SalesforceMarketingCloudSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "SalesforceMarketingCloudSource";
}

/** A copy activity Responsys source. */
export interface ResponsysSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "ResponsysSource";
}

/** A copy activity Dynamics AX source. */
export interface DynamicsAXSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  type: "DynamicsAXSource";
}

/** A copy activity Oracle Service Cloud source. */
export interface OracleServiceCloudSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "OracleServiceCloudSource";
}

/** A copy activity Google AdWords service source. */
export interface GoogleAdWordsSource extends TabularSourceParent {
  /** A query to retrieve data from source. Type: string (or Expression with resultType string). */
  query?: any;
  type: "GoogleAdWordsSource";
}

/** A copy activity source for Amazon Redshift Source. */
export interface AmazonRedshiftSource extends TabularSourceParent {
  /** Database query. Type: string (or Expression with resultType string). */
  query?: any;
  /** The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3. */
  redshiftUnloadSettings?: RedshiftUnloadSettings;
  type: "AmazonRedshiftSource";
}

/** The Amazon S3 settings needed for the interim Amazon S3 when copying from Amazon Redshift with unload. With this, data from Amazon Redshift source will be unloaded into S3 first and then copied into the targeted sink from the interim S3. */
export interface RedshiftUnloadSettings {
  /** The name of the Amazon S3 linked service which will be used for the unload operation when copying from the Amazon Redshift source. */
  s3LinkedServiceName: LinkedServiceReference;
  /** The bucket of the interim Amazon S3 which will be used to store the unloaded data from Amazon Redshift source. The bucket must be in the same region as the Amazon Redshift source. Type: string (or Expression with resultType string). */
  bucketName: any;
}

/** A copy activity snowflake source. */
export interface SnowflakeSource extends CopySourceParent {
  /** Snowflake Sql query. Type: string (or Expression with resultType string). */
  query?: any;
  /** Snowflake export settings. */
  exportSettings?: SnowflakeExportCopyCommand;
  type: "SnowflakeSource";
}

/** Snowflake export command settings. */
export interface SnowflakeExportCopyCommand extends ExportSettingsParent {
  /** Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" } */
  additionalCopyOptions?: Record<string, any>;
  /** Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "OVERWRITE": "TRUE", "MAX_FILE_SIZE": "'FALSE'" } */
  additionalFormatOptions?: Record<string, any>;
  type: "SnowflakeExportCopyCommand";
}

/** Export command settings. */
export interface ExportSettingsParent extends Record<string, unknown> {
  type:
    | "ExportSettings"
    | "SnowflakeExportCopyCommand"
    | "AzureDatabricksDeltaLakeExportCommand";
}

/** A copy activity Azure Databricks Delta Lake source. */
export interface AzureDatabricksDeltaLakeSource extends CopySourceParent {
  /** Azure Databricks Delta Lake Sql query. Type: string (or Expression with resultType string). */
  query?: any;
  /** Azure Databricks Delta Lake export settings. */
  exportSettings?: AzureDatabricksDeltaLakeExportCommand;
  type: "AzureDatabricksDeltaLakeSource";
}

/** Azure Databricks Delta Lake export command settings. */
export interface AzureDatabricksDeltaLakeExportCommand
  extends ExportSettingsParent {
  /** Specify the date format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). */
  dateFormat?: any;
  /** Specify the timestamp format for the csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). */
  timestampFormat?: any;
  type: "AzureDatabricksDeltaLakeExportCommand";
}

/** A copy activity Azure Databricks Delta Lake sink. */
export interface AzureDatabricksDeltaLakeSink extends CopySinkParent {
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  /** Azure Databricks Delta Lake import settings. */
  importSettings?: AzureDatabricksDeltaLakeImportCommand;
  type: "AzureDatabricksDeltaLakeSink";
}

/** Azure Databricks Delta Lake import command settings. */
export interface AzureDatabricksDeltaLakeImportCommand
  extends ImportSettingsParent {
  /** Specify the date format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). */
  dateFormat?: any;
  /** Specify the timestamp format for csv in Azure Databricks Delta Lake Copy. Type: string (or Expression with resultType string). */
  timestampFormat?: any;
  type: "AzureDatabricksDeltaLakeImportCommand";
}

/** Import command settings. */
export interface ImportSettingsParent extends Record<string, unknown> {
  type:
    | "ImportSettings"
    | "AzureDatabricksDeltaLakeImportCommand"
    | "SnowflakeImportCopyCommand";
}

/** Notebook parameter. */
export interface NotebookParameter {
  /** Notebook parameter value. Type: string (or Expression with resultType string). */
  value?: any;
  /** Notebook parameter type. */
  type?: "string" | "int" | "float" | "bool";
}

/** A copy activity SAP Cloud for Customer sink. */
export interface SapCloudForCustomerSink extends CopySinkParent {
  /** The write behavior for the operation. Default is 'Insert'. */
  writeBehavior?: "Insert" | "Update";
  /** The timeout (TimeSpan) to get an HTTP response. It is the timeout to get a response, not the timeout to read response data. Default value: 00:05:00. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  type: "SapCloudForCustomerSink";
}

/** A copy activity Azure Queue sink. */
export interface AzureQueueSink extends CopySinkParent {
  type: "AzureQueueSink";
}

/** A copy activity Azure Table sink. */
export interface AzureTableSink extends CopySinkParent {
  /** Azure Table default partition key value. Type: string (or Expression with resultType string). */
  azureTableDefaultPartitionKeyValue?: any;
  /** Azure Table partition key name. Type: string (or Expression with resultType string). */
  azureTablePartitionKeyName?: any;
  /** Azure Table row key name. Type: string (or Expression with resultType string). */
  azureTableRowKeyName?: any;
  /** Azure Table insert type. Type: string (or Expression with resultType string). */
  azureTableInsertType?: any;
  type: "AzureTableSink";
}

/** A copy activity Avro sink. */
export interface AvroSink extends CopySinkParent {
  /** Avro store settings. */
  storeSettings?: StoreWriteSettings;
  /** Avro format settings. */
  formatSettings?: AvroWriteSettings;
  type: "AvroSink";
}

/** A copy activity Parquet sink. */
export interface ParquetSink extends CopySinkParent {
  /** Parquet store settings. */
  storeSettings?: StoreWriteSettings;
  /** Parquet format settings. */
  formatSettings?: ParquetWriteSettings;
  type: "ParquetSink";
}

/** A copy activity Binary sink. */
export interface BinarySink extends CopySinkParent {
  /** Binary store settings. */
  storeSettings?: StoreWriteSettings;
  type: "BinarySink";
}

/** A copy activity Azure Blob sink. */
export interface BlobSink extends CopySinkParent {
  /** Blob writer overwrite files. Type: boolean (or Expression with resultType boolean). */
  blobWriterOverwriteFiles?: any;
  /** Blob writer date time format. Type: string (or Expression with resultType string). */
  blobWriterDateTimeFormat?: any;
  /** Blob writer add header. Type: boolean (or Expression with resultType boolean). */
  blobWriterAddHeader?: any;
  /** The type of copy behavior for copy sink. */
  copyBehavior?: any;
  type: "BlobSink";
}

/** A copy activity file system sink. */
export interface FileSystemSink extends CopySinkParent {
  /** The type of copy behavior for copy sink. */
  copyBehavior?: any;
  type: "FileSystemSink";
}

/** A copy activity Document Database Collection sink. */
export interface DocumentDbCollectionSink extends CopySinkParent {
  /** Nested properties separator. Default is . (dot). Type: string (or Expression with resultType string). */
  nestingSeparator?: any;
  /** Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert. */
  writeBehavior?: any;
  type: "DocumentDbCollectionSink";
}

/** A copy activity Azure CosmosDB (SQL API) Collection sink. */
export interface CosmosDbSqlApiSink extends CopySinkParent {
  /** Describes how to write data to Azure Cosmos DB. Type: string (or Expression with resultType string). Allowed values: insert and upsert. */
  writeBehavior?: any;
  type: "CosmosDbSqlApiSink";
}

/** A copy activity SQL sink. */
export interface SqlSink extends CopySinkParent {
  /** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
  sqlWriterStoredProcedureName?: any;
  /** SQL writer table type. Type: string (or Expression with resultType string). */
  sqlWriterTableType?: any;
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  /** SQL stored procedure parameters. */
  storedProcedureParameters?: Record<string, StoredProcedureParameter>;
  /** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
  storedProcedureTableTypeParameterName?: any;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: any;
  type: "SqlSink";
}

/** A copy activity SQL server sink. */
export interface SqlServerSink extends CopySinkParent {
  /** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
  sqlWriterStoredProcedureName?: any;
  /** SQL writer table type. Type: string (or Expression with resultType string). */
  sqlWriterTableType?: any;
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  /** SQL stored procedure parameters. */
  storedProcedureParameters?: Record<string, StoredProcedureParameter>;
  /** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
  storedProcedureTableTypeParameterName?: any;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: any;
  type: "SqlServerSink";
}

/** A copy activity Azure SQL sink. */
export interface AzureSqlSink extends CopySinkParent {
  /** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
  sqlWriterStoredProcedureName?: any;
  /** SQL writer table type. Type: string (or Expression with resultType string). */
  sqlWriterTableType?: any;
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  /** SQL stored procedure parameters. */
  storedProcedureParameters?: Record<string, StoredProcedureParameter>;
  /** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
  storedProcedureTableTypeParameterName?: any;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: any;
  type: "AzureSqlSink";
}

/** A copy activity Azure SQL Managed Instance sink. */
export interface SqlMISink extends CopySinkParent {
  /** SQL writer stored procedure name. Type: string (or Expression with resultType string). */
  sqlWriterStoredProcedureName?: any;
  /** SQL writer table type. Type: string (or Expression with resultType string). */
  sqlWriterTableType?: any;
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  /** SQL stored procedure parameters. */
  storedProcedureParameters?: Record<string, StoredProcedureParameter>;
  /** The stored procedure parameter name of the table type. Type: string (or Expression with resultType string). */
  storedProcedureTableTypeParameterName?: any;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: any;
  type: "SqlMISink";
}

/** A copy activity SQL Data Warehouse sink. */
export interface SqlDWSink extends CopySinkParent {
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  /** Indicates to use PolyBase to copy data into SQL Data Warehouse when applicable. Type: boolean (or Expression with resultType boolean). */
  allowPolyBase?: any;
  /** Specifies PolyBase-related settings when allowPolyBase is true. */
  polyBaseSettings?: PolybaseSettings;
  /** Indicates to use Copy Command to copy data into SQL Data Warehouse. Type: boolean (or Expression with resultType boolean). */
  allowCopyCommand?: any;
  /** Specifies Copy Command related settings when allowCopyCommand is true. */
  copyCommandSettings?: DWCopyCommandSettings;
  /** The option to handle sink table, such as autoCreate. For now only 'autoCreate' value is supported. Type: string (or Expression with resultType string). */
  tableOption?: any;
  type: "SqlDWSink";
}

/** PolyBase settings. */
export interface PolybaseSettings extends Record<string, unknown> {
  /** Reject type. */
  rejectType?: "value" | "percentage";
  /** Specifies the value or the percentage of rows that can be rejected before the query fails. Type: number (or Expression with resultType number), minimum: 0. */
  rejectValue?: any;
  /** Determines the number of rows to attempt to retrieve before the PolyBase recalculates the percentage of rejected rows. Type: integer (or Expression with resultType integer), minimum: 0. */
  rejectSampleValue?: any;
  /** Specifies how to handle missing values in delimited text files when PolyBase retrieves data from the text file. Type: boolean (or Expression with resultType boolean). */
  useTypeDefault?: any;
}

/** DW Copy Command settings. */
export interface DWCopyCommandSettings {
  /** Specifies the default values for each target column in SQL DW. The default values in the property overwrite the DEFAULT constraint set in the DB, and identity column cannot have a default value. Type: array of objects (or Expression with resultType array of objects). */
  defaultValues?: Array<DWCopyCommandDefaultValue>;
  /** Additional options directly passed to SQL DW in Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalOptions": { "MAXERRORS": "1000", "DATEFORMAT": "'ymd'" } */
  additionalOptions?: Record<string, string>;
}

/** Default value. */
export interface DWCopyCommandDefaultValue {
  /** Column name. Type: object (or Expression with resultType string). */
  columnName?: any;
  /** The default value of the column. Type: object (or Expression with resultType string). */
  defaultValue?: any;
}

/** A copy activity snowflake sink. */
export interface SnowflakeSink extends CopySinkParent {
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  /** Snowflake import settings. */
  importSettings?: SnowflakeImportCopyCommand;
  type: "SnowflakeSink";
}

/** Snowflake import command settings. */
export interface SnowflakeImportCopyCommand extends ImportSettingsParent {
  /** Additional copy options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalCopyOptions": { "DATE_FORMAT": "MM/DD/YYYY", "TIME_FORMAT": "'HH24:MI:SS.FF'" } */
  additionalCopyOptions?: Record<string, any>;
  /** Additional format options directly passed to snowflake Copy Command. Type: key value pairs (value should be string type) (or Expression with resultType object). Example: "additionalFormatOptions": { "FORCE": "TRUE", "LOAD_UNCERTAIN_FILES": "'FALSE'" } */
  additionalFormatOptions?: Record<string, any>;
  type: "SnowflakeImportCopyCommand";
}

/** A copy activity Oracle sink. */
export interface OracleSink extends CopySinkParent {
  /** SQL pre-copy script. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  type: "OracleSink";
}

/** A copy activity Azure Data Lake Store sink. */
export interface AzureDataLakeStoreSink extends CopySinkParent {
  /** The type of copy behavior for copy sink. */
  copyBehavior?: any;
  /** Single File Parallel. */
  enableAdlsSingleFileParallel?: any;
  type: "AzureDataLakeStoreSink";
}

/** A copy activity Azure Data Lake Storage Gen2 sink. */
export interface AzureBlobFSSink extends CopySinkParent {
  /** The type of copy behavior for copy sink. */
  copyBehavior?: any;
  type: "AzureBlobFSSink";
}

/** A copy activity Azure Search Index sink. */
export interface AzureSearchIndexSink extends CopySinkParent {
  /** Specify the write behavior when upserting documents into Azure Search Index. */
  writeBehavior?: "Merge" | "Upload";
  type: "AzureSearchIndexSink";
}

/** A copy activity ODBC sink. */
export interface OdbcSink extends CopySinkParent {
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  type: "OdbcSink";
}

/** A copy activity Informix sink. */
export interface InformixSink extends CopySinkParent {
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  type: "InformixSink";
}

/** A copy activity Microsoft Access sink. */
export interface MicrosoftAccessSink extends CopySinkParent {
  /** A query to execute before starting the copy. Type: string (or Expression with resultType string). */
  preCopyScript?: any;
  type: "MicrosoftAccessSink";
}

/** A copy activity Dynamics sink. */
export interface DynamicsSink extends CopySinkParent {
  /** The write behavior for the operation. */
  writeBehavior: "Upsert";
  /** The flag indicating whether ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: any;
  /** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
  alternateKeyName?: any;
  type: "DynamicsSink";
}

/** A copy activity Dynamics CRM sink. */
export interface DynamicsCrmSink extends CopySinkParent {
  /** The write behavior for the operation. */
  writeBehavior: "Upsert";
  /** The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: any;
  /** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
  alternateKeyName?: any;
  type: "DynamicsCrmSink";
}

/** A copy activity Common Data Service for Apps sink. */
export interface CommonDataServiceForAppsSink extends CopySinkParent {
  /** The write behavior for the operation. */
  writeBehavior: "Upsert";
  /** The flag indicating whether to ignore null values from input dataset (except key fields) during write operation. Default is false. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: any;
  /** The logical name of the alternate key which will be used when upserting records. Type: string (or Expression with resultType string). */
  alternateKeyName?: any;
  type: "CommonDataServiceForAppsSink";
}

/** A copy activity Azure Data Explorer sink. */
export interface AzureDataExplorerSink extends CopySinkParent {
  /** A name of a pre-created csv mapping that was defined on the target Kusto table. Type: string. */
  ingestionMappingName?: any;
  /** An explicit column mapping description provided in a json format. Type: string. */
  ingestionMappingAsJson?: any;
  /** If set to true, any aggregation will be skipped. Default is false. Type: boolean. */
  flushImmediately?: any;
  type: "AzureDataExplorerSink";
}

/** A copy activity Salesforce sink. */
export interface SalesforceSink extends CopySinkParent {
  /** The write behavior for the operation. Default is Insert. */
  writeBehavior?: "Insert" | "Upsert";
  /** The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string). */
  externalIdFieldName?: any;
  /** The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: any;
  type: "SalesforceSink";
}

/** A copy activity Salesforce Service Cloud sink. */
export interface SalesforceServiceCloudSink extends CopySinkParent {
  /** The write behavior for the operation. Default is Insert. */
  writeBehavior?: "Insert" | "Upsert";
  /** The name of the external ID field for upsert operation. Default value is 'Id' column. Type: string (or Expression with resultType string). */
  externalIdFieldName?: any;
  /** The flag indicating whether or not to ignore null values from input dataset (except key fields) during write operation. Default value is false. If set it to true, it means ADF will leave the data in the destination object unchanged when doing upsert/update operation and insert defined default value when doing insert operation, versus ADF will update the data in the destination object to NULL when doing upsert/update operation and insert NULL value when doing insert operation. Type: boolean (or Expression with resultType boolean). */
  ignoreNullValues?: any;
  type: "SalesforceServiceCloudSink";
}

/** A copy activity sink for a CosmosDB (MongoDB API) database. */
export interface CosmosDbMongoDbApiSink extends CopySinkParent {
  /** Specifies whether the document with same key to be overwritten (upsert) rather than throw exception (insert). The default value is "insert". Type: string (or Expression with resultType string). Type: string (or Expression with resultType string). */
  writeBehavior?: any;
  type: "CosmosDbMongoDbApiSink";
}

/** HDInsight Hive activity type. */
export interface HDInsightHiveActivity extends ExecutionActivityParent {
  /** HDInsight Hive activity properties. */
  typeProperties: HDInsightHiveActivityTypeProperties;
  type: "HDInsightHive";
}

/** HDInsight Hive activity properties. */
export interface HDInsightHiveActivityTypeProperties {
  /** Storage linked service references. */
  storageLinkedServices?: Array<LinkedServiceReference>;
  /** User specified arguments to HDInsightActivity. */
  arguments?: Array<any>;
  /** Debug info option. */
  getDebugInfo?: "None" | "Always" | "Failure";
  /** Script path. Type: string (or Expression with resultType string). */
  scriptPath?: any;
  /** Script linked service reference. */
  scriptLinkedService?: LinkedServiceReference;
  /** Allows user to specify defines for Hive job request. */
  defines?: Record<string, any>;
  /** User specified arguments under hivevar namespace. */
  variables?: Array<any>;
  /** Query timeout value (in minutes).  Effective when the HDInsight cluster is with ESP (Enterprise Security Package) */
  queryTimeout?: number;
}

/** HDInsight Pig activity type. */
export interface HDInsightPigActivity extends ExecutionActivityParent {
  /** HDInsight Pig activity properties. */
  typeProperties: HDInsightPigActivityTypeProperties;
  type: "HDInsightPig";
}

/** HDInsight Pig activity properties. */
export interface HDInsightPigActivityTypeProperties {
  /** Storage linked service references. */
  storageLinkedServices?: Array<LinkedServiceReference>;
  /** User specified arguments to HDInsightActivity. Type: array (or Expression with resultType array). */
  arguments?: any;
  /** Debug info option. */
  getDebugInfo?: "None" | "Always" | "Failure";
  /** Script path. Type: string (or Expression with resultType string). */
  scriptPath?: any;
  /** Script linked service reference. */
  scriptLinkedService?: LinkedServiceReference;
  /** Allows user to specify defines for Pig job request. */
  defines?: Record<string, any>;
}

/** HDInsight MapReduce activity type. */
export interface HDInsightMapReduceActivity extends ExecutionActivityParent {
  /** HDInsight MapReduce activity properties. */
  typeProperties: HDInsightMapReduceActivityTypeProperties;
  type: "HDInsightMapReduce";
}

/** HDInsight MapReduce activity properties. */
export interface HDInsightMapReduceActivityTypeProperties {
  /** Storage linked service references. */
  storageLinkedServices?: Array<LinkedServiceReference>;
  /** User specified arguments to HDInsightActivity. */
  arguments?: Array<any>;
  /** Debug info option. */
  getDebugInfo?: "None" | "Always" | "Failure";
  /** Class name. Type: string (or Expression with resultType string). */
  className: any;
  /** Jar path. Type: string (or Expression with resultType string). */
  jarFilePath: any;
  /** Jar linked service reference. */
  jarLinkedService?: LinkedServiceReference;
  /** Jar libs. */
  jarLibs?: Array<any>;
  /** Allows user to specify defines for the MapReduce job request. */
  defines?: Record<string, any>;
}

/** HDInsight streaming activity type. */
export interface HDInsightStreamingActivity extends ExecutionActivityParent {
  /** HDInsight streaming activity properties. */
  typeProperties: HDInsightStreamingActivityTypeProperties;
  type: "HDInsightStreaming";
}

/** HDInsight streaming activity properties. */
export interface HDInsightStreamingActivityTypeProperties {
  /** Storage linked service references. */
  storageLinkedServices?: Array<LinkedServiceReference>;
  /** User specified arguments to HDInsightActivity. */
  arguments?: Array<any>;
  /** Debug info option. */
  getDebugInfo?: "None" | "Always" | "Failure";
  /** Mapper executable name. Type: string (or Expression with resultType string). */
  mapper: any;
  /** Reducer executable name. Type: string (or Expression with resultType string). */
  reducer: any;
  /** Input blob path. Type: string (or Expression with resultType string). */
  input: any;
  /** Output blob path. Type: string (or Expression with resultType string). */
  output: any;
  /** Paths to streaming job files. Can be directories. */
  filePaths: Array<any>;
  /** Linked service reference where the files are located. */
  fileLinkedService?: LinkedServiceReference;
  /** Combiner executable name. Type: string (or Expression with resultType string). */
  combiner?: any;
  /** Command line environment values. */
  commandEnvironment?: Array<any>;
  /** Allows user to specify defines for streaming job request. */
  defines?: Record<string, any>;
}

/** HDInsight Spark activity. */
export interface HDInsightSparkActivity extends ExecutionActivityParent {
  /** HDInsight spark activity properties. */
  typeProperties: HDInsightSparkActivityTypeProperties;
  type: "HDInsightSpark";
}

/** HDInsight spark activity properties. */
export interface HDInsightSparkActivityTypeProperties {
  /** The root path in 'sparkJobLinkedService' for all the job’s files. Type: string (or Expression with resultType string). */
  rootPath: any;
  /** The relative path to the root folder of the code/package to be executed. Type: string (or Expression with resultType string). */
  entryFilePath: any;
  /** The user-specified arguments to HDInsightSparkActivity. */
  arguments?: Array<any>;
  /** Debug info option. */
  getDebugInfo?: "None" | "Always" | "Failure";
  /** The storage linked service for uploading the entry file and dependencies, and for receiving logs. */
  sparkJobLinkedService?: LinkedServiceReference;
  /** The application's Java/Spark main class. */
  className?: string;
  /** The user to impersonate that will execute the job. Type: string (or Expression with resultType string). */
  proxyUser?: any;
  /** Spark configuration property. */
  sparkConfig?: Record<string, any>;
}

/** Execute SSIS package activity. */
export interface ExecuteSsisPackageActivity extends ExecutionActivityParent {
  /** Execute SSIS package activity properties. */
  typeProperties: ExecuteSsisPackageActivityTypeProperties;
  type: "ExecuteSSISPackage";
}

/** Execute SSIS package activity properties. */
export interface ExecuteSsisPackageActivityTypeProperties {
  /** SSIS package location. */
  packageLocation: SsisPackageLocation;
  /** Specifies the runtime to execute SSIS package. The value should be "x86" or "x64". Type: string (or Expression with resultType string). */
  runtime?: any;
  /** The logging level of SSIS package execution. Type: string (or Expression with resultType string). */
  loggingLevel?: any;
  /** The environment path to execute the SSIS package. Type: string (or Expression with resultType string). */
  environmentPath?: any;
  /** The package execution credential. */
  executionCredential?: SsisExecutionCredential;
  /** The integration runtime reference. */
  connectVia: IntegrationRuntimeReference;
  /** The project level parameters to execute the SSIS package. */
  projectParameters?: Record<string, SsisExecutionParameter>;
  /** The package level parameters to execute the SSIS package. */
  packageParameters?: Record<string, SsisExecutionParameter>;
  /** The project level connection managers to execute the SSIS package. */
  projectConnectionManagers?: Record<
    string,
    Record<string, SsisExecutionParameter>
  >;
  /** The package level connection managers to execute the SSIS package. */
  packageConnectionManagers?: Record<
    string,
    Record<string, SsisExecutionParameter>
  >;
  /** The property overrides to execute the SSIS package. */
  propertyOverrides?: Record<string, SsisPropertyOverride>;
  /** SSIS package execution log location. */
  logLocation?: SsisLogLocation;
}

/** SSIS package location. */
export interface SsisPackageLocation {
  /** The SSIS package path. Type: string (or Expression with resultType string). */
  packagePath?: any;
  /** The type of SSIS package location. */
  type?: "SSISDB" | "File" | "InlinePackage" | "PackageStore";
  /** SSIS package location properties. */
  typeProperties?: SsisPackageLocationTypeProperties;
}

/** SSIS package location properties. */
export interface SsisPackageLocationTypeProperties {
  /** Password of the package. */
  packagePassword?: SecretBase;
  /** The package access credential. */
  accessCredential?: SsisAccessCredential;
  /** The configuration file of the package execution. Type: string (or Expression with resultType string). */
  configurationPath?: any;
  /** The configuration file access credential. */
  configurationAccessCredential?: SsisAccessCredential;
  /** The package name. */
  packageName?: string;
  /** The embedded package content. Type: string (or Expression with resultType string). */
  packageContent?: any;
  /** The embedded package last modified date. */
  packageLastModifiedDate?: string;
  /** The embedded child package list. */
  childPackages?: Array<SsisChildPackage>;
}

/** SSIS access credential. */
export interface SsisAccessCredential {
  /** Domain for windows authentication. */
  domain: any;
  /** UseName for windows authentication. */
  userName: any;
  /** Password for windows authentication. */
  password: SecretBase;
}

/** SSIS embedded child package. */
export interface SsisChildPackage {
  /** Path for embedded child package. Type: string (or Expression with resultType string). */
  packagePath: any;
  /** Name for embedded child package. */
  packageName?: string;
  /** Content for embedded child package. Type: string (or Expression with resultType string). */
  packageContent: any;
  /** Last modified date for embedded child package. */
  packageLastModifiedDate?: string;
}

/** SSIS package execution credential. */
export interface SsisExecutionCredential {
  /** Domain for windows authentication. */
  domain: any;
  /** UseName for windows authentication. */
  userName: any;
  /** Password for windows authentication. */
  password: SecureString;
}

/** SSIS execution parameter. */
export interface SsisExecutionParameter {
  /** SSIS package execution parameter value. Type: string (or Expression with resultType string). */
  value: any;
}

/** SSIS property override. */
export interface SsisPropertyOverride {
  /** SSIS package property override value. Type: string (or Expression with resultType string). */
  value: any;
  /** Whether SSIS package property override value is sensitive data. Value will be encrypted in SSISDB if it is true */
  isSensitive?: boolean;
}

/** SSIS package execution log location */
export interface SsisLogLocation {
  /** The SSIS package execution log path. Type: string (or Expression with resultType string). */
  logPath: any;
  /** The type of SSIS log location. */
  type: "File";
  /** SSIS package execution log location properties. */
  typeProperties: SsisLogLocationTypeProperties;
}

/** SSIS package execution log location properties. */
export interface SsisLogLocationTypeProperties {
  /** The package execution log access credential. */
  accessCredential?: SsisAccessCredential;
  /** Specifies the interval to refresh log. The default interval is 5 minutes. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  logRefreshInterval?: any;
}

/** Custom activity type. */
export interface CustomActivity extends ExecutionActivityParent {
  /** Custom activity properties. */
  typeProperties: CustomActivityTypeProperties;
  type: "Custom";
}

/** Custom activity properties. */
export interface CustomActivityTypeProperties {
  /** Command for custom activity Type: string (or Expression with resultType string). */
  command: any;
  /** Resource linked service reference. */
  resourceLinkedService?: LinkedServiceReference;
  /** Folder path for resource files Type: string (or Expression with resultType string). */
  folderPath?: any;
  /** Reference objects */
  referenceObjects?: CustomActivityReferenceObject;
  /** User defined property bag. There is no restriction on the keys or values that can be used. The user specified custom activity has the full responsibility to consume and interpret the content defined. */
  extendedProperties?: Record<string, any>;
  /** The retention time for the files submitted for custom activity. Type: double (or Expression with resultType double). */
  retentionTimeInDays?: any;
  /** Elevation level and scope for the user, default is nonadmin task. Type: string (or Expression with resultType double). */
  autoUserSpecification?: any;
}

/** Reference objects for custom activity */
export interface CustomActivityReferenceObject {
  /** Linked service references. */
  linkedServices?: Array<LinkedServiceReference>;
  /** Dataset references. */
  datasets?: Array<DatasetReference>;
}

/** SQL stored procedure activity type. */
export interface SqlServerStoredProcedureActivity
  extends ExecutionActivityParent {
  /** SQL stored procedure activity properties. */
  typeProperties: SqlServerStoredProcedureActivityTypeProperties;
  type: "SqlServerStoredProcedure";
}

/** SQL stored procedure activity properties. */
export interface SqlServerStoredProcedureActivityTypeProperties {
  /** Stored procedure name. Type: string (or Expression with resultType string). */
  storedProcedureName: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: Record<string, StoredProcedureParameter>;
}

/** Execute pipeline activity. */
export interface ExecutePipelineActivity extends ControlActivityParent {
  /** Execute pipeline activity properties. */
  typeProperties: ExecutePipelineActivityTypeProperties;
  type: "ExecutePipeline";
}

/** Execute pipeline activity properties. */
export interface ExecutePipelineActivityTypeProperties {
  /** Pipeline reference. */
  pipeline: PipelineReference;
  /** Pipeline parameters. */
  parameters?: Record<string, any>;
  /** Defines whether activity execution will wait for the dependent pipeline execution to finish. Default is false. */
  waitOnCompletion?: boolean;
}

/** Delete activity. */
export interface DeleteActivity extends ExecutionActivityParent {
  /** Delete activity properties. */
  typeProperties: DeleteActivityTypeProperties;
  type: "Delete";
}

/** Delete activity properties. */
export interface DeleteActivityTypeProperties {
  /** If true, files or sub-folders under current folder path will be deleted recursively. Default is false. Type: boolean (or Expression with resultType boolean). */
  recursive?: any;
  /** The max concurrent connections to connect data source at the same time. */
  maxConcurrentConnections?: number;
  /** Whether to record detailed logs of delete-activity execution. Default value is false. Type: boolean (or Expression with resultType boolean). */
  enableLogging?: any;
  /** Log storage settings customer need to provide when enableLogging is true. */
  logStorageSettings?: LogStorageSettings;
  /** Delete activity dataset reference. */
  dataset: DatasetReference;
  /** Delete activity store settings. */
  storeSettings?: StoreReadSettings;
}

/** Azure Data Explorer command activity. */
export interface AzureDataExplorerCommandActivity
  extends ExecutionActivityParent {
  /** Azure Data Explorer command activity properties. */
  typeProperties: AzureDataExplorerCommandActivityTypeProperties;
  type: "AzureDataExplorerCommand";
}

/** Azure Data Explorer command activity properties. */
export interface AzureDataExplorerCommandActivityTypeProperties {
  /** A control command, according to the Azure Data Explorer command syntax. Type: string (or Expression with resultType string). */
  command: any;
  /** Control command timeout. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9]))..) */
  commandTimeout?: any;
}

/** Lookup activity. */
export interface LookupActivity extends ExecutionActivityParent {
  /** Lookup activity properties. */
  typeProperties: LookupActivityTypeProperties;
  type: "Lookup";
}

/** Lookup activity properties. */
export interface LookupActivityTypeProperties {
  /** Dataset-specific source properties, same as copy activity source. */
  source: CopySource;
  /** Lookup activity dataset reference. */
  dataset: DatasetReference;
  /** Whether to return first row or all rows. Default value is true. Type: boolean (or Expression with resultType boolean). */
  firstRowOnly?: any;
}

/** Web activity. */
export interface WebActivity extends ExecutionActivityParent {
  /** Web activity properties. */
  typeProperties: WebActivityTypeProperties;
  type: "WebActivity";
}

/** Web activity type properties. */
export interface WebActivityTypeProperties {
  /** Rest API method for target endpoint. */
  method: "GET" | "POST" | "PUT" | "DELETE";
  /** Web activity target endpoint and path. Type: string (or Expression with resultType string). */
  url: any;
  /** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
  headers?: any;
  /** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
  body?: any;
  /** Authentication method used for calling the endpoint. */
  authentication?: WebActivityAuthentication;
  /** List of datasets passed to web endpoint. */
  datasets?: Array<DatasetReference>;
  /** List of linked services passed to web endpoint. */
  linkedServices?: Array<LinkedServiceReference>;
  /** The integration runtime reference. */
  connectVia?: IntegrationRuntimeReference;
}

/** Web activity authentication properties. */
export interface WebActivityAuthentication {
  /** Web activity authentication (Basic/ClientCertificate/MSI) */
  type: string;
  /** Base64-encoded contents of a PFX file. */
  pfx?: SecretBase;
  /** Web activity authentication user name for basic authentication. */
  username?: string;
  /** Password for the PFX file or basic authentication. */
  password?: SecretBase;
  /** Resource for which Azure Auth token will be requested when using MSI Authentication. */
  resource?: string;
}

/** Activity to get metadata of dataset */
export interface GetMetadataActivity extends ExecutionActivityParent {
  /** GetMetadata activity properties. */
  typeProperties: GetMetadataActivityTypeProperties;
  type: "GetMetadata";
}

/** GetMetadata activity properties. */
export interface GetMetadataActivityTypeProperties {
  /** GetMetadata activity dataset reference. */
  dataset: DatasetReference;
  /** Fields of metadata to get from dataset. */
  fieldList?: Array<any>;
  /** GetMetadata activity store settings. */
  storeSettings?: StoreReadSettings;
  /** GetMetadata activity format settings. */
  formatSettings?: FormatReadSettings;
}

/** This activity evaluates a boolean expression and executes either the activities under the ifTrueActivities property or the ifFalseActivities property depending on the result of the expression. */
export interface IfConditionActivity extends ControlActivityParent {
  /** IfCondition activity properties. */
  typeProperties: IfConditionActivityTypeProperties;
  type: "IfCondition";
}

/** IfCondition activity properties. */
export interface IfConditionActivityTypeProperties {
  /** An expression that would evaluate to Boolean. This is used to determine the block of activities (ifTrueActivities or ifFalseActivities) that will be executed. */
  expression: Expression;
  /** List of activities to execute if expression is evaluated to true. This is an optional property and if not provided, the activity will exit without any action. */
  ifTrueActivities?: Array<Activity>;
  /** List of activities to execute if expression is evaluated to false. This is an optional property and if not provided, the activity will exit without any action. */
  ifFalseActivities?: Array<Activity>;
}

/** This activity evaluates an expression and executes activities under the cases property that correspond to the expression evaluation expected in the equals property. */
export interface SwitchActivity extends ControlActivityParent {
  /** Switch activity properties. */
  typeProperties: SwitchActivityTypeProperties;
  type: "Switch";
}

/** Switch activity properties. */
export interface SwitchActivityTypeProperties {
  /** An expression that would evaluate to a string or integer. This is used to determine the block of activities in cases that will be executed. */
  on: Expression;
  /** List of cases that correspond to expected values of the 'on' property. This is an optional property and if not provided, the activity will execute activities provided in defaultActivities. */
  cases?: Array<SwitchCase>;
  /** List of activities to execute if no case condition is satisfied. This is an optional property and if not provided, the activity will exit without any action. */
  defaultActivities?: Array<Activity>;
}

/** Switch cases with have a value and corresponding activities. */
export interface SwitchCase {
  /** Expected value that satisfies the expression result of the 'on' property. */
  value?: string;
  /** List of activities to execute for satisfied case condition. */
  activities?: Array<Activity>;
}

/** This activity is used for iterating over a collection and execute given activities. */
export interface ForEachActivity extends ControlActivityParent {
  /** ForEach activity properties. */
  typeProperties: ForEachActivityTypeProperties;
  type: "ForEach";
}

/** ForEach activity properties. */
export interface ForEachActivityTypeProperties {
  /** Should the loop be executed in sequence or in parallel (max 50) */
  isSequential?: boolean;
  /** Batch count to be used for controlling the number of parallel execution (when isSequential is set to false). */
  batchCount?: number;
  /** Collection to iterate. */
  items: Expression;
  /** List of activities to execute . */
  activities: Array<Activity>;
}

/** Azure ML Batch Execution activity. */
export interface AzureMLBatchExecutionActivity extends ExecutionActivityParent {
  /** Azure ML Batch Execution activity properties. */
  typeProperties: AzureMLBatchExecutionActivityTypeProperties;
  type: "AzureMLBatchExecution";
}

/** Azure ML Batch Execution activity properties. */
export interface AzureMLBatchExecutionActivityTypeProperties {
  /** Key,Value pairs to be passed to the Azure ML Batch Execution Service endpoint. Keys must match the names of web service parameters defined in the published Azure ML web service. Values will be passed in the GlobalParameters property of the Azure ML batch execution request. */
  globalParameters?: Record<string, any>;
  /** Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Outputs to AzureMLWebServiceFile objects specifying the output Blob locations. This information will be passed in the WebServiceOutputs property of the Azure ML batch execution request. */
  webServiceOutputs?: Record<string, AzureMLWebServiceFile>;
  /** Key,Value pairs, mapping the names of Azure ML endpoint's Web Service Inputs to AzureMLWebServiceFile objects specifying the input Blob locations.. This information will be passed in the WebServiceInputs property of the Azure ML batch execution request. */
  webServiceInputs?: Record<string, AzureMLWebServiceFile>;
}

/** Azure ML WebService Input/Output file */
export interface AzureMLWebServiceFile {
  /** The relative file path, including container name, in the Azure Blob Storage specified by the LinkedService. Type: string (or Expression with resultType string). */
  filePath: any;
  /** Reference to an Azure Storage LinkedService, where Azure ML WebService Input/Output file located. */
  linkedServiceName: LinkedServiceReference;
}

/** Azure ML Update Resource management activity. */
export interface AzureMLUpdateResourceActivity extends ExecutionActivityParent {
  /** Azure ML Update Resource management activity properties. */
  typeProperties: AzureMLUpdateResourceActivityTypeProperties;
  type: "AzureMLUpdateResource";
}

/** Azure ML Update Resource activity properties. */
export interface AzureMLUpdateResourceActivityTypeProperties {
  /** Name of the Trained Model module in the Web Service experiment to be updated. Type: string (or Expression with resultType string). */
  trainedModelName: any;
  /** Name of Azure Storage linked service holding the .ilearner file that will be uploaded by the update operation. */
  trainedModelLinkedServiceName: LinkedServiceReference;
  /** The relative file path in trainedModelLinkedService to represent the .ilearner file that will be uploaded by the update operation.  Type: string (or Expression with resultType string). */
  trainedModelFilePath: any;
}

/** Azure ML Execute Pipeline activity. */
export interface AzureMLExecutePipelineActivity
  extends ExecutionActivityParent {
  /** Azure ML Execute Pipeline activity properties. */
  typeProperties: AzureMLExecutePipelineActivityTypeProperties;
  type: "AzureMLExecutePipeline";
}

/** Azure ML Execute Pipeline activity properties. */
export interface AzureMLExecutePipelineActivityTypeProperties {
  /** ID of the published Azure ML pipeline. Type: string (or Expression with resultType string). */
  mlPipelineId: any;
  /** Run history experiment name of the pipeline run. This information will be passed in the ExperimentName property of the published pipeline execution request. Type: string (or Expression with resultType string). */
  experimentName?: any;
  /** Key,Value pairs to be passed to the published Azure ML pipeline endpoint. Keys must match the names of pipeline parameters defined in the published pipeline. Values will be passed in the ParameterAssignments property of the published pipeline execution request. Type: object with key value pairs (or Expression with resultType object). */
  mlPipelineParameters?: any;
  /** The parent Azure ML Service pipeline run id. This information will be passed in the ParentRunId property of the published pipeline execution request. Type: string (or Expression with resultType string). */
  mlParentRunId?: any;
  /** Whether to continue execution of other steps in the PipelineRun if a step fails. This information will be passed in the continueOnStepFailure property of the published pipeline execution request. Type: boolean (or Expression with resultType boolean). */
  continueOnStepFailure?: any;
}

/** Data Lake Analytics U-SQL activity. */
export interface DataLakeAnalyticsUsqlActivity extends ExecutionActivityParent {
  /** Data Lake Analytics U-SQL activity properties. */
  typeProperties: DataLakeAnalyticsUsqlActivityTypeProperties;
  type: "DataLakeAnalyticsU-SQL";
}

/** DataLakeAnalyticsU-SQL activity properties. */
export interface DataLakeAnalyticsUsqlActivityTypeProperties {
  /** Case-sensitive path to folder that contains the U-SQL script. Type: string (or Expression with resultType string). */
  scriptPath: any;
  /** Script linked service reference. */
  scriptLinkedService: LinkedServiceReference;
  /** The maximum number of nodes simultaneously used to run the job. Default value is 1. Type: integer (or Expression with resultType integer), minimum: 1. */
  degreeOfParallelism?: any;
  /** Determines which jobs out of all that are queued should be selected to run first. The lower the number, the higher the priority. Default value is 1000. Type: integer (or Expression with resultType integer), minimum: 1. */
  priority?: any;
  /** Parameters for U-SQL job request. */
  parameters?: Record<string, any>;
  /** Runtime version of the U-SQL engine to use. Type: string (or Expression with resultType string). */
  runtimeVersion?: any;
  /** Compilation mode of U-SQL. Must be one of these values : Semantic, Full and SingleBox. Type: string (or Expression with resultType string). */
  compilationMode?: any;
}

/** This activity suspends pipeline execution for the specified interval. */
export interface WaitActivity extends ControlActivityParent {
  /** Wait activity properties. */
  typeProperties: WaitActivityTypeProperties;
  type: "Wait";
}

/** Wait activity properties. */
export interface WaitActivityTypeProperties {
  /** Duration in seconds. */
  waitTimeInSeconds: any;
}

/** This activity executes inner activities until the specified boolean expression results to true or timeout is reached, whichever is earlier. */
export interface UntilActivity extends ControlActivityParent {
  /** Until activity properties. */
  typeProperties: UntilActivityTypeProperties;
  type: "Until";
}

/** Until activity properties. */
export interface UntilActivityTypeProperties {
  /** An expression that would evaluate to Boolean. The loop will continue until this expression evaluates to true */
  expression: Expression;
  /** Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  timeout?: any;
  /** List of activities to execute. */
  activities: Array<Activity>;
}

/** This activity verifies that an external resource exists. */
export interface ValidationActivity extends ControlActivityParent {
  /** Validation activity properties. */
  typeProperties: ValidationActivityTypeProperties;
  type: "Validation";
}

/** Validation activity properties. */
export interface ValidationActivityTypeProperties {
  /** Specifies the timeout for the activity to run. If there is no value specified, it takes the value of TimeSpan.FromDays(7) which is 1 week as default. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  timeout?: any;
  /** A delay in seconds between validation attempts. If no value is specified, 10 seconds will be used as the default. Type: integer (or Expression with resultType integer). */
  sleep?: any;
  /** Can be used if dataset points to a file. The file must be greater than or equal in size to the value specified. Type: integer (or Expression with resultType integer). */
  minimumSize?: any;
  /** Can be used if dataset points to a folder. If set to true, the folder must have at least one file. If set to false, the folder must be empty. Type: boolean (or Expression with resultType boolean). */
  childItems?: any;
  /** Validation activity dataset reference. */
  dataset: DatasetReference;
}

/** Filter and return results from input array based on the conditions. */
export interface FilterActivity extends ControlActivityParent {
  /** Filter activity properties. */
  typeProperties: FilterActivityTypeProperties;
  type: "Filter";
}

/** Filter activity properties. */
export interface FilterActivityTypeProperties {
  /** Input array on which filter should be applied. */
  items: Expression;
  /** Condition to be used for filtering the input. */
  condition: Expression;
}

/** DatabricksNotebook activity. */
export interface DatabricksNotebookActivity extends ExecutionActivityParent {
  /** Databricks Notebook activity properties. */
  typeProperties: DatabricksNotebookActivityTypeProperties;
  type: "DatabricksNotebook";
}

/** Databricks Notebook activity properties. */
export interface DatabricksNotebookActivityTypeProperties {
  /** The absolute path of the notebook to be run in the Databricks Workspace. This path must begin with a slash. Type: string (or Expression with resultType string). */
  notebookPath: any;
  /** Base parameters to be used for each run of this job.If the notebook takes a parameter that is not specified, the default value from the notebook will be used. */
  baseParameters?: Record<string, any>;
  /** A list of libraries to be installed on the cluster that will execute the job. */
  libraries?: Array<Record<string, any>>;
}

/** DatabricksSparkJar activity. */
export interface DatabricksSparkJarActivity extends ExecutionActivityParent {
  /** Databricks SparkJar activity properties. */
  typeProperties: DatabricksSparkJarActivityTypeProperties;
  type: "DatabricksSparkJar";
}

/** Databricks SparkJar activity properties. */
export interface DatabricksSparkJarActivityTypeProperties {
  /** The full name of the class containing the main method to be executed. This class must be contained in a JAR provided as a library. Type: string (or Expression with resultType string). */
  mainClassName: any;
  /** Parameters that will be passed to the main method. */
  parameters?: Array<any>;
  /** A list of libraries to be installed on the cluster that will execute the job. */
  libraries?: Array<Record<string, any>>;
}

/** DatabricksSparkPython activity. */
export interface DatabricksSparkPythonActivity extends ExecutionActivityParent {
  /** Databricks SparkPython activity properties. */
  typeProperties: DatabricksSparkPythonActivityTypeProperties;
  type: "DatabricksSparkPython";
}

/** Databricks SparkPython activity properties. */
export interface DatabricksSparkPythonActivityTypeProperties {
  /** The URI of the Python file to be executed. DBFS paths are supported. Type: string (or Expression with resultType string). */
  pythonFile: any;
  /** Command line parameters that will be passed to the Python file. */
  parameters?: Array<any>;
  /** A list of libraries to be installed on the cluster that will execute the job. */
  libraries?: Array<Record<string, any>>;
}

/** Set value for a Variable. */
export interface SetVariableActivity extends ControlActivityParent {
  /** Set Variable activity properties. */
  typeProperties: SetVariableActivityTypeProperties;
  type: "SetVariable";
}

/** SetVariable activity properties. */
export interface SetVariableActivityTypeProperties {
  /** Name of the variable whose value needs to be set. */
  variableName?: string;
  /** Value to be set. Could be a static value or Expression */
  value?: any;
}

/** Append value for a Variable of type Array. */
export interface AppendVariableActivity extends ControlActivityParent {
  /** Append Variable activity properties. */
  typeProperties: AppendVariableActivityTypeProperties;
  type: "AppendVariable";
}

/** AppendVariable activity properties. */
export interface AppendVariableActivityTypeProperties {
  /** Name of the variable whose value needs to be appended to. */
  variableName?: string;
  /** Value to be appended. Could be a static value or Expression */
  value?: any;
}

/** Azure Function activity. */
export interface AzureFunctionActivity extends ExecutionActivityParent {
  /** Azure Function activity properties. */
  typeProperties: AzureFunctionActivityTypeProperties;
  type: "AzureFunctionActivity";
}

/** Azure Function activity type properties. */
export interface AzureFunctionActivityTypeProperties {
  /** Rest API method for target endpoint. */
  method: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "HEAD" | "TRACE";
  /** Name of the Function that the Azure Function Activity will call. Type: string (or Expression with resultType string) */
  functionName: any;
  /** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
  headers?: any;
  /** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
  body?: any;
}

/** WebHook activity. */
export interface WebHookActivity extends ControlActivityParent {
  /** WebHook activity properties. */
  typeProperties: WebHookActivityTypeProperties;
  type: "WebHook";
}

/** WebHook activity type properties. */
export interface WebHookActivityTypeProperties {
  /** Rest API method for target endpoint. */
  method: "POST";
  /** WebHook activity target endpoint and path. Type: string (or Expression with resultType string). */
  url: any;
  /** The timeout within which the webhook should be called back. If there is no value specified, it defaults to 10 minutes. Type: string. Pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  timeout?: string;
  /** Represents the headers that will be sent to the request. For example, to set the language and type on a request: "headers" : { "Accept-Language": "en-us", "Content-Type": "application/json" }. Type: string (or Expression with resultType string). */
  headers?: any;
  /** Represents the payload that will be sent to the endpoint. Required for POST/PUT method, not allowed for GET method Type: string (or Expression with resultType string). */
  body?: any;
  /** Authentication method used for calling the endpoint. */
  authentication?: WebActivityAuthentication;
  /** When set to true, statusCode, output and error in callback request body will be consumed by activity. The activity can be marked as failed by setting statusCode >= 400 in callback request. Default is false. Type: boolean (or Expression with resultType boolean). */
  reportStatusOnCallBack?: any;
}

/** Execute data flow activity. */
export interface ExecuteDataFlowActivity extends ExecutionActivityParent {
  /** Execute data flow activity properties. */
  typeProperties: ExecuteDataFlowActivityTypeProperties;
  type: "ExecuteDataFlow";
}

/** Execute data flow activity properties. */
export interface ExecuteDataFlowActivityTypeProperties {
  /** Data flow reference. */
  dataflow: DataFlowReference;
  /** Staging info for execute data flow activity. */
  staging?: DataFlowStagingInfo;
  /** The integration runtime reference. */
  integrationRuntime?: IntegrationRuntimeReference;
  /** Compute properties for data flow activity. */
  compute?: ExecuteDataFlowActivityTypePropertiesCompute;
  /** Trace level setting used for data flow monitoring output. Supported values are: 'coarse', 'fine', and 'none'. Type: string (or Expression with resultType string) */
  traceLevel?: any;
  /** Continue on error setting used for data flow execution. Enables processing to continue if a sink fails. Type: boolean (or Expression with resultType boolean) */
  continueOnError?: any;
  /** Concurrent run setting used for data flow execution. Allows sinks with the same save order to be processed concurrently. Type: boolean (or Expression with resultType boolean) */
  runConcurrently?: any;
}

/** Compute properties for data flow activity. */
export interface ExecuteDataFlowActivityTypePropertiesCompute {
  /** Compute type of the cluster which will execute data flow job. */
  computeType?: "General" | "MemoryOptimized" | "ComputeOptimized";
  /** Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. */
  coreCount?: number;
}

/** A copy activity source for sharePoint online list source. */
export interface SharePointOnlineListSource extends CopySourceParent {
  /** The OData query to filter the data in SharePoint Online list. For example, "$top=1". Type: string (or Expression with resultType string). */
  query?: any;
  /** The wait time to get a response from SharePoint Online. Default value is 5 minutes (00:05:00). Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  httpRequestTimeout?: any;
  type: "SharePointOnlineListSource";
}

/** Execute Synapse notebook activity. */
export interface SynapseNotebookActivity extends ExecutionActivityParent {
  /** Execute Synapse notebook activity properties. */
  typeProperties: SynapseNotebookActivityTypeProperties;
  type: "SynapseNotebook";
}

/** Execute Synapse notebook activity properties. */
export interface SynapseNotebookActivityTypeProperties {
  /** Synapse notebook reference. */
  notebook: SynapseNotebookReference;
  /** Notebook parameters. */
  parameters?: Record<string, NotebookParameter>;
}

/** Execute spark job activity. */
export interface SynapseSparkJobDefinitionActivity
  extends ExecutionActivityParent {
  /** Execute spark job activity properties. */
  typeProperties: SynapseSparkJobActivityTypeProperties;
  type: "SparkJob";
}

/** Execute spark job activity properties. */
export interface SynapseSparkJobActivityTypeProperties {
  /** Synapse spark job reference. */
  sparkJob: SynapseSparkJobReference;
  /** User specified arguments to SynapseSparkJobDefinitionActivity. */
  args?: Array<any>;
}

/** Execute SQL pool stored procedure activity. */
export interface SqlPoolStoredProcedureActivity extends ActivityParent {
  /** SQL pool stored procedure reference. */
  sqlPool: SqlPoolReference;
  /** Execute SQL pool stored procedure activity properties. */
  typeProperties: SqlPoolStoredProcedureActivityTypeProperties;
  type: "SqlPoolStoredProcedure";
}

/** SQL stored procedure activity properties. */
export interface SqlPoolStoredProcedureActivityTypeProperties {
  /** Stored procedure name. Type: string (or Expression with resultType string). */
  storedProcedureName: any;
  /** Value and type setting for stored procedure parameters. Example: "{Parameter1: {value: "1", type: "int"}}". */
  storedProcedureParameters?: Record<string, StoredProcedureParameter>;
}

/** Base class for all triggers that support one to many model for trigger to pipeline. */
export interface MultiplePipelineTriggerParent extends TriggerParent {
  /** Pipelines that need to be started. */
  pipelines?: Array<TriggerPipelineReference>;
  type:
    | "MultiplePipelineTrigger"
    | "ScheduleTrigger"
    | "BlobTrigger"
    | "BlobEventsTrigger"
    | "CustomEventsTrigger";
}

/** Trigger that creates pipeline runs periodically, on schedule. */
export interface ScheduleTrigger extends MultiplePipelineTriggerParent {
  /** Schedule Trigger properties. */
  typeProperties: ScheduleTriggerTypeProperties;
  type: "ScheduleTrigger";
}

/** Schedule Trigger properties. */
export interface ScheduleTriggerTypeProperties {
  /** Recurrence schedule configuration. */
  recurrence: ScheduleTriggerRecurrence;
}

/** The workflow trigger recurrence. */
export interface ScheduleTriggerRecurrence extends Record<string, unknown> {
  /** The frequency. */
  frequency?:
    | "NotSpecified"
    | "Minute"
    | "Hour"
    | "Day"
    | "Week"
    | "Month"
    | "Year";
  /** The interval. */
  interval?: number;
  /** The start time. */
  startTime?: Date | string;
  /** The end time. */
  endTime?: Date | string;
  /** The time zone. */
  timeZone?: string;
  /** The recurrence schedule. */
  schedule?: RecurrenceSchedule;
}

/** The recurrence schedule. */
export interface RecurrenceSchedule extends Record<string, unknown> {
  /** The minutes. */
  minutes?: Array<number>;
  /** The hours. */
  hours?: Array<number>;
  /** The days of the week. */
  weekDays?: Array<
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday"
  >;
  /** The month days. */
  monthDays?: Array<number>;
  /** The monthly occurrences. */
  monthlyOccurrences?: Array<RecurrenceScheduleOccurrence>;
}

/** The recurrence schedule occurrence. */
export interface RecurrenceScheduleOccurrence extends Record<string, unknown> {
  /** The day of the week. */
  day?:
    | "Sunday"
    | "Monday"
    | "Tuesday"
    | "Wednesday"
    | "Thursday"
    | "Friday"
    | "Saturday";
  /** The occurrence. */
  occurrence?: number;
}

/** Trigger that runs every time the selected Blob container changes. */
export interface BlobTrigger extends MultiplePipelineTriggerParent {
  /** Blob Trigger properties. */
  typeProperties: BlobTriggerTypeProperties;
  type: "BlobTrigger";
}

/** Blob Trigger properties. */
export interface BlobTriggerTypeProperties {
  /** The path of the container/folder that will trigger the pipeline. */
  folderPath: string;
  /** The max number of parallel files to handle when it is triggered. */
  maxConcurrency: number;
  /** The Azure Storage linked service reference. */
  linkedService: LinkedServiceReference;
}

/** Trigger that runs every time a Blob event occurs. */
export interface BlobEventsTrigger extends MultiplePipelineTriggerParent {
  /** Blob Events Trigger properties. */
  typeProperties: BlobEventsTriggerTypeProperties;
  type: "BlobEventsTrigger";
}

/** Blob Events Trigger properties. */
export interface BlobEventsTriggerTypeProperties {
  /** The blob path must begin with the pattern provided for trigger to fire. For example, '/records/blobs/december/' will only fire the trigger for blobs in the december folder under the records container. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith. */
  blobPathBeginsWith?: string;
  /** The blob path must end with the pattern provided for trigger to fire. For example, 'december/boxes.csv' will only fire the trigger for blobs named boxes in a december folder. At least one of these must be provided: blobPathBeginsWith, blobPathEndsWith. */
  blobPathEndsWith?: string;
  /** If set to true, blobs with zero bytes will be ignored. */
  ignoreEmptyBlobs?: boolean;
  /** The type of events that cause this trigger to fire. */
  events: Array<
    "Microsoft.Storage.BlobCreated" | "Microsoft.Storage.BlobDeleted"
  >;
  /** The ARM resource ID of the Storage Account. */
  scope: string;
}

/** Trigger that runs every time a custom event is received. */
export interface CustomEventsTrigger extends MultiplePipelineTriggerParent {
  /** Custom Events Trigger properties. */
  typeProperties: CustomEventsTriggerTypeProperties;
  type: "CustomEventsTrigger";
}

/** Custom Events Trigger properties. */
export interface CustomEventsTriggerTypeProperties {
  /** The event subject must begin with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith. */
  subjectBeginsWith?: string;
  /** The event subject must end with the pattern provided for trigger to fire. At least one of these must be provided: subjectBeginsWith, subjectEndsWith. */
  subjectEndsWith?: string;
  /** The list of event types that cause this trigger to fire. */
  events: Array<any>;
  /** The ARM resource ID of the Azure Event Grid Topic. */
  scope: string;
}

/** Trigger that schedules pipeline runs for all fixed time interval windows from a start time without gaps and also supports backfill scenarios (when start time is in the past). */
export interface TumblingWindowTrigger extends TriggerParent {
  /** Pipeline for which runs are created when an event is fired for trigger window that is ready. */
  pipeline: TriggerPipelineReference;
  /** Tumbling Window Trigger properties. */
  typeProperties: TumblingWindowTriggerTypeProperties;
  type: "TumblingWindowTrigger";
}

/** Tumbling Window Trigger properties. */
export interface TumblingWindowTriggerTypeProperties {
  /** The frequency of the time windows. */
  frequency: "Minute" | "Hour" | "Month";
  /** The interval of the time windows. The minimum interval allowed is 15 Minutes. */
  interval: number;
  /** The start time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported. */
  startTime: Date | string;
  /** The end time for the time period for the trigger during which events are fired for windows that are ready. Only UTC time is currently supported. */
  endTime?: Date | string;
  /** Specifies how long the trigger waits past due time before triggering new run. It doesn't alter window start and end time. The default is 0. Type: string (or Expression with resultType string), pattern: ((\d+)\.)?(\d\d):(60|([0-5][0-9])):(60|([0-5][0-9])). */
  delay?: any;
  /** The max number of parallel time windows (ready for execution) for which a new run is triggered. */
  maxConcurrency: number;
  /** Retry policy that will be applied for failed pipeline runs. */
  retryPolicy?: RetryPolicy;
  /** Triggers that this trigger depends on. Only tumbling window triggers are supported. */
  dependsOn?: Array<DependencyReference>;
}

/** Execution policy for an activity. */
export interface RetryPolicy {
  /** Maximum ordinary retry attempts. Default is 0. Type: integer (or Expression with resultType integer), minimum: 0. */
  count?: any;
  /** Interval between retries in seconds. Default is 30. */
  intervalInSeconds?: number;
}

/** Referenced dependency. */
export interface DependencyReferenceParent {
  type:
    | "DependencyReference"
    | "TriggerDependencyReference"
    | "TumblingWindowTriggerDependencyReference"
    | "SelfDependencyTumblingWindowTriggerReference";
}

/** Trigger reference type. */
export interface TriggerReference {
  /** Trigger reference type. */
  type: "TriggerReference";
  /** Reference trigger name. */
  referenceName: string;
}

/** Trigger referenced dependency. */
export interface TriggerDependencyReferenceParent
  extends DependencyReferenceParent {
  /** Referenced trigger. */
  referenceTrigger: TriggerReference;
  type:
    | "TriggerDependencyReference"
    | "TumblingWindowTriggerDependencyReference";
}

/** Referenced tumbling window trigger dependency. */
export interface TumblingWindowTriggerDependencyReference
  extends TriggerDependencyReferenceParent {
  /** Timespan applied to the start time of a tumbling window when evaluating dependency. */
  offset?: string;
  /** The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used. */
  size?: string;
  type: "TumblingWindowTriggerDependencyReference";
}

/** Self referenced tumbling window trigger dependency. */
export interface SelfDependencyTumblingWindowTriggerReference
  extends DependencyReferenceParent {
  /** Timespan applied to the start time of a tumbling window when evaluating dependency. */
  offset: string;
  /** The size of the window when evaluating the dependency. If undefined the frequency of the tumbling window will be used. */
  size?: string;
  type: "SelfDependencyTumblingWindowTriggerReference";
}

/** Trigger that allows the referenced pipeline to depend on other pipeline runs based on runDimension Name/Value pairs. Upstream pipelines should declare the same runDimension Name and their runs should have the values for those runDimensions. The referenced pipeline run would be triggered if the values for the runDimension match for all upstream pipeline runs. */
export interface ChainingTrigger extends TriggerParent {
  /** Pipeline for which runs are created when all upstream pipelines complete successfully. */
  pipeline: TriggerPipelineReference;
  /** Chaining Trigger properties. */
  typeProperties: ChainingTriggerTypeProperties;
  type: "ChainingTrigger";
}

/** Chaining Trigger properties. */
export interface ChainingTriggerTypeProperties {
  /** Upstream Pipelines. */
  dependsOn: Array<PipelineReference>;
  /** Run Dimension property that needs to be emitted by upstream pipelines. */
  runDimension: string;
}

/** Managed integration runtime, including managed elastic and managed dedicated integration runtimes. */
export interface ManagedIntegrationRuntime extends IntegrationRuntimeParent {
  /** Managed integration runtime properties. */
  typeProperties: ManagedIntegrationRuntimeTypeProperties;
  /** Managed Virtual Network reference. */
  managedVirtualNetwork?: ManagedVirtualNetworkReference;
  type: "Managed";
}

/** Managed integration runtime type properties. */
export interface ManagedIntegrationRuntimeTypeProperties {
  /** The compute resource for managed integration runtime. */
  computeProperties?: IntegrationRuntimeComputeProperties;
  /** SSIS properties for managed integration runtime. */
  ssisProperties?: IntegrationRuntimeSsisProperties;
}

/** The compute resource properties for managed integration runtime. */
export interface IntegrationRuntimeComputeProperties
  extends Record<string, unknown> {
  /** The location for managed integration runtime. The supported regions could be found on https://docs.microsoft.com/en-us/azure/data-factory/data-factory-data-movement-activities */
  location?: string;
  /** The node size requirement to managed integration runtime. */
  nodeSize?: string;
  /** The required number of nodes for managed integration runtime. */
  numberOfNodes?: number;
  /** Maximum parallel executions count per node for managed integration runtime. */
  maxParallelExecutionsPerNode?: number;
  /** Data flow properties for managed integration runtime. */
  dataFlowProperties?: IntegrationRuntimeDataFlowProperties;
  /** VNet properties for managed integration runtime. */
  vNetProperties?: IntegrationRuntimeVNetProperties;
}

/** Data flow properties for managed integration runtime. */
export interface IntegrationRuntimeDataFlowProperties
  extends Record<string, unknown> {
  /** Compute type of the cluster which will execute data flow job. */
  computeType?: "General" | "MemoryOptimized" | "ComputeOptimized";
  /** Core count of the cluster which will execute data flow job. Supported values are: 8, 16, 32, 48, 80, 144 and 272. */
  coreCount?: number;
  /** Time to live (in minutes) setting of the cluster which will execute data flow job. */
  timeToLive?: number;
  /** Cluster will not be recycled and it will be used in next data flow activity run until TTL (time to live) is reached if this is set as false. Default is true. */
  cleanup?: boolean;
}

/** VNet properties for managed integration runtime. */
export interface IntegrationRuntimeVNetProperties
  extends Record<string, unknown> {
  /** The ID of the VNet that this integration runtime will join. */
  vNetId?: string;
  /** The name of the subnet this integration runtime will join. */
  subnet?: string;
  /** Resource IDs of the public IP addresses that this integration runtime will use. */
  publicIPs?: Array<string>;
}

/** SSIS properties for managed integration runtime. */
export interface IntegrationRuntimeSsisProperties
  extends Record<string, unknown> {
  /** Catalog information for managed dedicated integration runtime. */
  catalogInfo?: IntegrationRuntimeSsisCatalogInfo;
  /** License type for bringing your own license scenario. */
  licenseType?: "BasePrice" | "LicenseIncluded";
  /** Custom setup script properties for a managed dedicated integration runtime. */
  customSetupScriptProperties?: IntegrationRuntimeCustomSetupScriptProperties;
  /** Data proxy properties for a managed dedicated integration runtime. */
  dataProxyProperties?: IntegrationRuntimeDataProxyProperties;
  /** The edition for the SSIS Integration Runtime */
  edition?: "Standard" | "Enterprise";
  /** Custom setup without script properties for a SSIS integration runtime. */
  expressCustomSetupProperties?: Array<CustomSetupBase>;
}

/** Catalog information for managed dedicated integration runtime. */
export interface IntegrationRuntimeSsisCatalogInfo
  extends Record<string, unknown> {
  /** The catalog database server URL. */
  catalogServerEndpoint?: string;
  /** The administrator user name of catalog database. */
  catalogAdminUserName?: string;
  /** The password of the administrator user account of the catalog database. */
  catalogAdminPassword?: SecureString;
  /** The pricing tier for the catalog database. The valid values could be found in https://azure.microsoft.com/en-us/pricing/details/sql-database/ */
  catalogPricingTier?: "Basic" | "Standard" | "Premium" | "PremiumRS";
}

/** Custom setup script properties for a managed dedicated integration runtime. */
export interface IntegrationRuntimeCustomSetupScriptProperties {
  /** The URI of the Azure blob container that contains the custom setup script. */
  blobContainerUri?: string;
  /** The SAS token of the Azure blob container. */
  sasToken?: SecureString;
}

/** Data proxy properties for a managed dedicated integration runtime. */
export interface IntegrationRuntimeDataProxyProperties {
  /** The self-hosted integration runtime reference. */
  connectVia?: EntityReference;
  /** The staging linked service reference. */
  stagingLinkedService?: EntityReference;
  /** The path to contain the staged data in the Blob storage. */
  path?: string;
}

/** The entity reference. */
export interface EntityReference {
  /** The type of this referenced entity. */
  type?: "IntegrationRuntimeReference" | "LinkedServiceReference";
  /** The name of this referenced entity. */
  referenceName?: string;
}

/** The base definition of the custom setup. */
export interface CustomSetupBase {
  type: "CustomSetupBase";
}

/** Managed Virtual Network reference type. */
export interface ManagedVirtualNetworkReference {
  /** Managed Virtual Network reference type. */
  type: "ManagedVirtualNetworkReference";
  /** Reference ManagedVirtualNetwork name. */
  referenceName: string;
}

/** Self-hosted integration runtime. */
export interface SelfHostedIntegrationRuntime extends IntegrationRuntimeParent {
  /** When this property is not null, means this is a linked integration runtime. The property is used to access original integration runtime. */
  typeProperties?: SelfHostedIntegrationRuntimeTypeProperties;
  type: "SelfHosted";
}

/** The self-hosted integration runtime properties. */
export interface SelfHostedIntegrationRuntimeTypeProperties {
  /** Linked integration runtime type from data factory */
  linkedInfo?: LinkedIntegrationRuntimeType;
}

/** The base definition of a linked integration runtime. */
export interface LinkedIntegrationRuntimeTypeParent {
  authorizationType: "LinkedIntegrationRuntimeType" | "Key" | "RBAC";
}

/** The key authorization type integration runtime. */
export interface LinkedIntegrationRuntimeKeyAuthorization
  extends LinkedIntegrationRuntimeTypeParent {
  /** The key used for authorization. */
  key: SecureString;
  authorizationType: "Key";
}

/** The role based access control (RBAC) authorization type integration runtime. */
export interface LinkedIntegrationRuntimeRbacAuthorization
  extends LinkedIntegrationRuntimeTypeParent {
  /** The resource identifier of the integration runtime to be shared. */
  resourceId: string;
  authorizationType: "RBAC";
}

/** Azure Synapse nested object which contains a flow with data movements and transformations. */
export type DataFlow = MappingDataFlow | Flowlet;
/** Azure Synapse nested object which serves as a compute resource for activities. */
export type IntegrationRuntime =
  | ManagedIntegrationRuntime
  | SelfHostedIntegrationRuntime;
/** The Azure Data Factory nested object which identifies data within different data stores, such as tables, files, folders, and documents. */
export type Dataset =
  | AmazonS3Dataset
  | AvroDataset
  | ExcelDataset
  | ParquetDataset
  | DelimitedTextDataset
  | JsonDataset
  | XmlDataset
  | OrcDataset
  | BinaryDataset
  | AzureBlobDataset
  | AzureTableDataset
  | AzureSqlTableDataset
  | AzureSqlMITableDataset
  | AzureSqlDWTableDataset
  | CassandraTableDataset
  | CustomDataset
  | CosmosDbSqlApiCollectionDataset
  | DocumentDbCollectionDataset
  | DynamicsEntityDataset
  | DynamicsCrmEntityDataset
  | CommonDataServiceForAppsEntityDataset
  | AzureDataLakeStoreDataset
  | AzureBlobFSDataset
  | Office365Dataset
  | FileShareDataset
  | MongoDbCollectionDataset
  | MongoDbAtlasCollectionDataset
  | MongoDbV2CollectionDataset
  | CosmosDbMongoDbApiCollectionDataset
  | ODataResourceDataset
  | OracleTableDataset
  | AmazonRdsForOracleTableDataset
  | TeradataTableDataset
  | AzureMySqlTableDataset
  | AmazonRedshiftTableDataset
  | Db2TableDataset
  | RelationalTableDataset
  | InformixTableDataset
  | OdbcTableDataset
  | MySqlTableDataset
  | PostgreSqlTableDataset
  | MicrosoftAccessTableDataset
  | SalesforceObjectDataset
  | SalesforceServiceCloudObjectDataset
  | SybaseTableDataset
  | SapBwCubeDataset
  | SapCloudForCustomerResourceDataset
  | SapEccResourceDataset
  | SapHanaTableDataset
  | SapOpenHubTableDataset
  | SqlServerTableDataset
  | AmazonRdsForSqlServerTableDataset
  | RestResourceDataset
  | SapTableResourceDataset
  | WebTableDataset
  | AzureSearchIndexDataset
  | HttpDataset
  | AmazonMWSObjectDataset
  | AzurePostgreSqlTableDataset
  | ConcurObjectDataset
  | CouchbaseTableDataset
  | DrillTableDataset
  | EloquaObjectDataset
  | GoogleBigQueryObjectDataset
  | GreenplumTableDataset
  | HBaseObjectDataset
  | HiveObjectDataset
  | HubspotObjectDataset
  | ImpalaObjectDataset
  | JiraObjectDataset
  | MagentoObjectDataset
  | MariaDBTableDataset
  | AzureMariaDBTableDataset
  | MarketoObjectDataset
  | PaypalObjectDataset
  | PhoenixObjectDataset
  | PrestoObjectDataset
  | QuickBooksObjectDataset
  | ServiceNowObjectDataset
  | ShopifyObjectDataset
  | SparkObjectDataset
  | SquareObjectDataset
  | XeroObjectDataset
  | ZohoObjectDataset
  | NetezzaTableDataset
  | VerticaTableDataset
  | SalesforceMarketingCloudObjectDataset
  | ResponsysObjectDataset
  | DynamicsAXResourceDataset
  | OracleServiceCloudObjectDataset
  | AzureDataExplorerTableDataset
  | GoogleAdWordsObjectDataset
  | SnowflakeDataset
  | SharePointOnlineListResourceDataset
  | AzureDatabricksDeltaLakeDataset;
/** The Azure Synapse nested object which contains the information and credential which can be used to connect with related store or compute resource. */
export type LinkedService =
  | AzureStorageLinkedService
  | AzureBlobStorageLinkedService
  | AzureTableStorageLinkedService
  | AzureSqlDWLinkedService
  | SqlServerLinkedService
  | AmazonRdsForSqlServerLinkedService
  | AzureSqlDatabaseLinkedService
  | AzureSqlMILinkedService
  | AzureBatchLinkedService
  | AzureKeyVaultLinkedService
  | CosmosDbLinkedService
  | DynamicsLinkedService
  | DynamicsCrmLinkedService
  | CommonDataServiceForAppsLinkedService
  | HDInsightLinkedService
  | FileServerLinkedService
  | AzureFileStorageLinkedService
  | GoogleCloudStorageLinkedService
  | OracleLinkedService
  | AmazonRdsForOracleLinkedService
  | AzureMySqlLinkedService
  | MySqlLinkedService
  | PostgreSqlLinkedService
  | SybaseLinkedService
  | Db2LinkedService
  | TeradataLinkedService
  | AzureMLLinkedService
  | AzureMLServiceLinkedService
  | OdbcLinkedService
  | InformixLinkedService
  | MicrosoftAccessLinkedService
  | HdfsLinkedService
  | ODataLinkedService
  | WebLinkedService
  | CassandraLinkedService
  | MongoDbLinkedService
  | MongoDbAtlasLinkedService
  | MongoDbV2LinkedService
  | CosmosDbMongoDbApiLinkedService
  | AzureDataLakeStoreLinkedService
  | AzureBlobFSLinkedService
  | Office365LinkedService
  | SalesforceLinkedService
  | SalesforceServiceCloudLinkedService
  | SapCloudForCustomerLinkedService
  | SapEccLinkedService
  | SapOpenHubLinkedService
  | RestServiceLinkedService
  | AmazonS3LinkedService
  | AmazonRedshiftLinkedService
  | CustomDataSourceLinkedService
  | AzureSearchLinkedService
  | HttpLinkedService
  | FtpServerLinkedService
  | SftpServerLinkedService
  | SapBWLinkedService
  | SapHanaLinkedService
  | AmazonMWSLinkedService
  | AzurePostgreSqlLinkedService
  | ConcurLinkedService
  | CouchbaseLinkedService
  | DrillLinkedService
  | EloquaLinkedService
  | GoogleBigQueryLinkedService
  | GreenplumLinkedService
  | HBaseLinkedService
  | HiveLinkedService
  | HubspotLinkedService
  | ImpalaLinkedService
  | JiraLinkedService
  | MagentoLinkedService
  | MariaDBLinkedService
  | AzureMariaDBLinkedService
  | MarketoLinkedService
  | PaypalLinkedService
  | PhoenixLinkedService
  | PrestoLinkedService
  | QuickBooksLinkedService
  | ServiceNowLinkedService
  | ShopifyLinkedService
  | SparkLinkedService
  | SquareLinkedService
  | XeroLinkedService
  | ZohoLinkedService
  | VerticaLinkedService
  | NetezzaLinkedService
  | SalesforceMarketingCloudLinkedService
  | HDInsightOnDemandLinkedService
  | AzureDataLakeAnalyticsLinkedService
  | AzureDatabricksLinkedService
  | AzureDatabricksDeltaLakeLinkedService
  | ResponsysLinkedService
  | DynamicsAXLinkedService
  | OracleServiceCloudLinkedService
  | GoogleAdWordsLinkedService
  | SapTableLinkedService
  | AzureDataExplorerLinkedService
  | AzureFunctionLinkedService
  | SnowflakeLinkedService
  | SharePointOnlineListLinkedService;
/** A pipeline activity. */
export type Activity =
  | ControlActivity
  | ExecutionActivity
  | CopyActivity
  | HDInsightHiveActivity
  | HDInsightPigActivity
  | HDInsightMapReduceActivity
  | HDInsightStreamingActivity
  | HDInsightSparkActivity
  | ExecuteSsisPackageActivity
  | CustomActivity
  | SqlServerStoredProcedureActivity
  | ExecutePipelineActivity
  | DeleteActivity
  | AzureDataExplorerCommandActivity
  | LookupActivity
  | WebActivity
  | GetMetadataActivity
  | IfConditionActivity
  | SwitchActivity
  | ForEachActivity
  | AzureMLBatchExecutionActivity
  | AzureMLUpdateResourceActivity
  | AzureMLExecutePipelineActivity
  | DataLakeAnalyticsUsqlActivity
  | WaitActivity
  | UntilActivity
  | ValidationActivity
  | FilterActivity
  | DatabricksNotebookActivity
  | DatabricksSparkJarActivity
  | DatabricksSparkPythonActivity
  | SetVariableActivity
  | AppendVariableActivity
  | AzureFunctionActivity
  | WebHookActivity
  | ExecuteDataFlowActivity
  | SynapseNotebookActivity
  | SynapseSparkJobDefinitionActivity
  | SqlPoolStoredProcedureActivity;
/** Azure Synapse nested object which contains information about creating pipeline run */
export type Trigger =
  | RerunTumblingWindowTrigger
  | MultiplePipelineTrigger
  | ScheduleTrigger
  | BlobTrigger
  | BlobEventsTrigger
  | CustomEventsTrigger
  | TumblingWindowTrigger
  | ChainingTrigger;
/** The base definition of a secret type. */
export type SecretBase = SecureString | AzureKeyVaultSecretReference;
/** Dataset location. */
export type DatasetLocation =
  | AzureBlobStorageLocation
  | AzureBlobFSLocation
  | AzureDataLakeStoreLocation
  | AmazonS3Location
  | FileServerLocation
  | AzureFileStorageLocation
  | GoogleCloudStorageLocation
  | FtpServerLocation
  | SftpLocation
  | HttpServerLocation
  | HdfsLocation;
/** The format definition of a storage. */
export type DatasetStorageFormat =
  | TextFormat
  | JsonFormat
  | AvroFormat
  | OrcFormat
  | ParquetFormat;
/** Base definition of WebLinkedServiceTypeProperties, this typeProperties is polymorphic based on authenticationType, so not flattened in SDK models. */
export type WebLinkedServiceTypeProperties =
  | WebAnonymousAuthentication
  | WebBasicAuthentication
  | WebClientCertificateAuthentication;
/** Base class for all control activities like IfCondition, ForEach , Until. */
export type ControlActivity =
  | ControlActivityParent
  | ExecutePipelineActivity
  | IfConditionActivity
  | SwitchActivity
  | ForEachActivity
  | WaitActivity
  | UntilActivity
  | ValidationActivity
  | FilterActivity
  | SetVariableActivity
  | AppendVariableActivity
  | WebHookActivity;
/** Base class for all execution activities. */
export type ExecutionActivity =
  | ExecutionActivityParent
  | CopyActivity
  | HDInsightHiveActivity
  | HDInsightPigActivity
  | HDInsightMapReduceActivity
  | HDInsightStreamingActivity
  | HDInsightSparkActivity
  | ExecuteSsisPackageActivity
  | CustomActivity
  | SqlServerStoredProcedureActivity
  | DeleteActivity
  | AzureDataExplorerCommandActivity
  | LookupActivity
  | WebActivity
  | GetMetadataActivity
  | AzureMLBatchExecutionActivity
  | AzureMLUpdateResourceActivity
  | AzureMLExecutePipelineActivity
  | DataLakeAnalyticsUsqlActivity
  | DatabricksNotebookActivity
  | DatabricksSparkJarActivity
  | DatabricksSparkPythonActivity
  | AzureFunctionActivity
  | ExecuteDataFlowActivity
  | SynapseNotebookActivity
  | SynapseSparkJobDefinitionActivity;
/** Connector read setting. */
export type StoreReadSettings =
  | AzureBlobStorageReadSettings
  | AzureBlobFSReadSettings
  | AzureDataLakeStoreReadSettings
  | AmazonS3ReadSettings
  | FileServerReadSettings
  | AzureFileStorageReadSettings
  | GoogleCloudStorageReadSettings
  | FtpReadSettings
  | SftpReadSettings
  | HttpReadSettings
  | HdfsReadSettings;
/** Connector write settings. */
export type StoreWriteSettings =
  | SftpWriteSettings
  | AzureBlobStorageWriteSettings
  | AzureBlobFSWriteSettings
  | AzureDataLakeStoreWriteSettings
  | FileServerWriteSettings
  | AzureFileStorageWriteSettings;
/** Format read settings. */
export type FormatReadSettings =
  | DelimitedTextReadSettings
  | JsonReadSettings
  | XmlReadSettings
  | BinaryReadSettings;
/** Compression read settings. */
export type CompressionReadSettings =
  | ZipDeflateReadSettings
  | TarReadSettings
  | TarGZipReadSettings;
/** Format write settings. */
export type FormatWriteSettings =
  | AvroWriteSettings
  | OrcWriteSettings
  | ParquetWriteSettings
  | DelimitedTextWriteSettings
  | JsonWriteSettings;
/** A copy activity source. */
export type CopySource =
  | AvroSource
  | ExcelSource
  | ParquetSource
  | DelimitedTextSource
  | JsonSource
  | XmlSource
  | OrcSource
  | BinarySource
  | TabularSource
  | AzureTableSource
  | BlobSource
  | DocumentDbCollectionSource
  | CosmosDbSqlApiSource
  | DynamicsSource
  | DynamicsCrmSource
  | CommonDataServiceForAppsSource
  | RelationalSource
  | InformixSource
  | MicrosoftAccessSource
  | Db2Source
  | OdbcSource
  | MySqlSource
  | PostgreSqlSource
  | SybaseSource
  | SapBwSource
  | ODataSource
  | SalesforceSource
  | SalesforceServiceCloudSource
  | SapCloudForCustomerSource
  | SapEccSource
  | SapHanaSource
  | SapOpenHubSource
  | SapTableSource
  | RestSource
  | SqlSource
  | SqlServerSource
  | AmazonRdsForSqlServerSource
  | AzureSqlSource
  | SqlMISource
  | SqlDWSource
  | FileSystemSource
  | HdfsSource
  | AzureMySqlSource
  | AzureDataExplorerSource
  | OracleSource
  | AmazonRdsForOracleSource
  | TeradataSource
  | WebSource
  | CassandraSource
  | MongoDbSource
  | MongoDbAtlasSource
  | MongoDbV2Source
  | CosmosDbMongoDbApiSource
  | Office365Source
  | AzureDataLakeStoreSource
  | AzureBlobFSSource
  | HttpSource
  | AmazonMWSSource
  | AzurePostgreSqlSource
  | ConcurSource
  | CouchbaseSource
  | DrillSource
  | EloquaSource
  | GoogleBigQuerySource
  | GreenplumSource
  | HBaseSource
  | HiveSource
  | HubspotSource
  | ImpalaSource
  | JiraSource
  | MagentoSource
  | MariaDBSource
  | AzureMariaDBSource
  | MarketoSource
  | PaypalSource
  | PhoenixSource
  | PrestoSource
  | QuickBooksSource
  | ServiceNowSource
  | ShopifySource
  | SparkSource
  | SquareSource
  | XeroSource
  | ZohoSource
  | NetezzaSource
  | VerticaSource
  | SalesforceMarketingCloudSource
  | ResponsysSource
  | DynamicsAXSource
  | OracleServiceCloudSource
  | GoogleAdWordsSource
  | AmazonRedshiftSource
  | SnowflakeSource
  | AzureDatabricksDeltaLakeSource
  | SharePointOnlineListSource;
/** A copy activity sink. */
export type CopySink =
  | DelimitedTextSink
  | JsonSink
  | OrcSink
  | RestSink
  | AzurePostgreSqlSink
  | AzureMySqlSink
  | AzureDatabricksDeltaLakeSink
  | SapCloudForCustomerSink
  | AzureQueueSink
  | AzureTableSink
  | AvroSink
  | ParquetSink
  | BinarySink
  | BlobSink
  | FileSystemSink
  | DocumentDbCollectionSink
  | CosmosDbSqlApiSink
  | SqlSink
  | SqlServerSink
  | AzureSqlSink
  | SqlMISink
  | SqlDWSink
  | SnowflakeSink
  | OracleSink
  | AzureDataLakeStoreSink
  | AzureBlobFSSink
  | AzureSearchIndexSink
  | OdbcSink
  | InformixSink
  | MicrosoftAccessSink
  | DynamicsSink
  | DynamicsCrmSink
  | CommonDataServiceForAppsSink
  | AzureDataExplorerSink
  | SalesforceSink
  | SalesforceServiceCloudSink
  | CosmosDbMongoDbApiSink;
/** Copy activity sources of tabular type. */
export type TabularSource =
  | TabularSourceParent
  | AzureTableSource
  | InformixSource
  | Db2Source
  | OdbcSource
  | MySqlSource
  | PostgreSqlSource
  | SybaseSource
  | SapBwSource
  | SalesforceSource
  | SapCloudForCustomerSource
  | SapEccSource
  | SapHanaSource
  | SapOpenHubSource
  | SapTableSource
  | SqlSource
  | SqlServerSource
  | AmazonRdsForSqlServerSource
  | AzureSqlSource
  | SqlMISource
  | SqlDWSource
  | AzureMySqlSource
  | TeradataSource
  | CassandraSource
  | AmazonMWSSource
  | AzurePostgreSqlSource
  | ConcurSource
  | CouchbaseSource
  | DrillSource
  | EloquaSource
  | GoogleBigQuerySource
  | GreenplumSource
  | HBaseSource
  | HiveSource
  | HubspotSource
  | ImpalaSource
  | JiraSource
  | MagentoSource
  | MariaDBSource
  | AzureMariaDBSource
  | MarketoSource
  | PaypalSource
  | PhoenixSource
  | PrestoSource
  | QuickBooksSource
  | ServiceNowSource
  | ShopifySource
  | SparkSource
  | SquareSource
  | XeroSource
  | ZohoSource
  | NetezzaSource
  | VerticaSource
  | SalesforceMarketingCloudSource
  | ResponsysSource
  | DynamicsAXSource
  | OracleServiceCloudSource
  | GoogleAdWordsSource
  | AmazonRedshiftSource;
/** Export command settings. */
export type ExportSettings =
  | SnowflakeExportCopyCommand
  | AzureDatabricksDeltaLakeExportCommand;
/** Import command settings. */
export type ImportSettings =
  | AzureDatabricksDeltaLakeImportCommand
  | SnowflakeImportCopyCommand;
/** Base class for all triggers that support one to many model for trigger to pipeline. */
export type MultiplePipelineTrigger =
  | MultiplePipelineTriggerParent
  | ScheduleTrigger
  | BlobTrigger
  | BlobEventsTrigger
  | CustomEventsTrigger;
/** Referenced dependency. */
export type DependencyReference =
  | TriggerDependencyReference
  | TumblingWindowTriggerDependencyReference
  | SelfDependencyTumblingWindowTriggerReference;
/** Trigger referenced dependency. */
export type TriggerDependencyReference =
  | TriggerDependencyReferenceParent
  | TumblingWindowTriggerDependencyReference;
/** The base definition of a linked integration runtime. */
export type LinkedIntegrationRuntimeType =
  | LinkedIntegrationRuntimeKeyAuthorization
  | LinkedIntegrationRuntimeRbacAuthorization;
