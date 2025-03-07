## API Report File for "@msinternal/eventgrid"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ClientOptions } from '@azure-rest/core-client';
import { KeyCredential } from '@azure/core-auth';
import { OperationOptions } from '@azure-rest/core-client';
import { Pipeline } from '@azure/core-rest-pipeline';

// @public (undocumented)
export interface AcknowledgeCloudEventsOptions extends OperationOptions {
    contentType?: string;
}

// @public
export interface AcknowledgeOptions {
    lockTokens: string[];
}

// @public
export interface AcknowledgeResult {
    failedLockTokens: FailedLockToken[];
    succeededLockTokens: string[];
}

// @public
export interface BrokerProperties {
    deliveryCount: number;
    lockToken: string;
}

// @public
export interface CloudEvent {
    data?: unknown;
    dataBase64?: Uint8Array;
    datacontenttype?: string;
    dataschema?: string;
    id: string;
    source: string;
    specversion: string;
    subject?: string;
    time?: Date;
    type: string;
}

// @public (undocumented)
export class EventGridClient {
    constructor(endpoint: string, credential: KeyCredential, options?: EventGridClientOptions);
    acknowledgeCloudEvents(topicName: string, eventSubscriptionName: string, lockTokens: AcknowledgeOptions, options?: AcknowledgeCloudEventsOptions): Promise<AcknowledgeResult>;
    readonly pipeline: Pipeline;
    publishCloudEvent(topicName: string, event: CloudEvent, options?: PublishCloudEventOptions): Promise<Record<string, any>>;
    publishCloudEvents(topicName: string, events: CloudEvent[], options?: PublishCloudEventsOptions): Promise<Record<string, any>>;
    receiveCloudEvents(topicName: string, eventSubscriptionName: string, options?: ReceiveCloudEventsOptions): Promise<ReceiveResult>;
    rejectCloudEvents(topicName: string, eventSubscriptionName: string, lockTokens: RejectOptions, options?: RejectCloudEventsOptions): Promise<RejectResult>;
    releaseCloudEvents(topicName: string, eventSubscriptionName: string, lockTokens: ReleaseOptions, options?: ReleaseCloudEventsOptions): Promise<ReleaseResult>;
}

// @public (undocumented)
export interface EventGridClientOptions extends ClientOptions {
}

// @public
export interface FailedLockToken {
    errorCode: string;
    errorDescription: string;
    lockToken: string;
}

// @public (undocumented)
export interface PublishCloudEventOptions extends OperationOptions {
    contentType?: string;
}

// @public (undocumented)
export interface PublishCloudEventsOptions extends OperationOptions {
    contentType?: string;
}

// @public (undocumented)
export interface ReceiveCloudEventsOptions extends OperationOptions {
    maxEvents?: number;
    maxWaitTime?: number;
}

// @public
export interface ReceiveDetails {
    brokerProperties: BrokerProperties;
    event: CloudEvent;
}

// @public
export interface ReceiveResult {
    value: ReceiveDetails[];
}

// @public (undocumented)
export interface RejectCloudEventsOptions extends OperationOptions {
    contentType?: string;
}

// @public
export interface RejectOptions {
    lockTokens: string[];
}

// @public
export interface RejectResult {
    failedLockTokens: FailedLockToken[];
    succeededLockTokens: string[];
}

// @public (undocumented)
export interface ReleaseCloudEventsOptions extends OperationOptions {
    contentType?: string;
}

// @public
export interface ReleaseOptions {
    lockTokens: string[];
}

// @public
export interface ReleaseResult {
    failedLockTokens: FailedLockToken[];
    succeededLockTokens: string[];
}

// (No @packageDocumentation comment for this package)

```
