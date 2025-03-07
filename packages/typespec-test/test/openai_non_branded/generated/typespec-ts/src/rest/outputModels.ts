// Licensed under the MIT license.

export interface CreateTranscriptionResponseOutput {
  text: string;
}

export interface ErrorResponseOutput {
  error: ErrorModelOutput;
}

export interface ErrorModelOutput {
  type: string;
  message: string;
  param: string | null;
  code: string | null;
}

export interface CreateTranslationResponseOutput {
  text: string;
}

/** Represents a chat completion response returned by model, based on the provided input. */
export interface CreateChatCompletionResponseOutput {
  /** A unique identifier for the chat completion. */
  id: string;
  /** The object type, which is always `chat.completion`. */
  object: string;
  /** The Unix timestamp (in seconds) of when the chat completion was created. */
  created: number;
  /** The model used for the chat completion. */
  model: string;
  /** A list of chat completion choices. Can be more than one if `n` is greater than 1. */
  choices: {
    index: number;
    message: ChatCompletionResponseMessageOutput;
    finish_reason: "stop" | "length" | "function_call" | "content_filter";
  }[];
  usage?: CompletionUsageOutput;
}

export interface ChatCompletionResponseMessageOutput {
  /** The role of the author of this message. */
  role: "system" | "user" | "assistant" | "function";
  /** The contents of the message. */
  content: string | null;
  /** The name and arguments of a function that should be called, as generated by the model. */
  function_call?: { name: string; arguments: string };
}

/** Usage statistics for the completion request. */
export interface CompletionUsageOutput {
  /** Number of tokens in the prompt. */
  prompt_tokens: number;
  /** Number of tokens in the generated completion */
  completion_tokens: number;
  /** Total number of tokens used in the request (prompt + completion). */
  total_tokens: number;
}

export interface FineTuningJobOutput {
  /** The object identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The object type, which is always "fine_tuning.job". */
  object: "fine_tuning.job";
  /** The Unix timestamp (in seconds) for when the fine-tuning job was created. */
  created_at: number;
  /**
   * The Unix timestamp (in seconds) for when the fine-tuning job was finished. The value will be
   * null if the fine-tuning job is still running.
   */
  finished_at: string | null;
  /** The base model that is being fine-tuned. */
  model: string;
  /**
   * The name of the fine-tuned model that is being created. The value will be null if the
   * fine-tuning job is still running.
   */
  fine_tuned_model: string | null;
  /** The organization that owns the fine-tuning job. */
  organization_id: string;
  /**
   * The current status of the fine-tuning job, which can be either `created`, `pending`, `running`,
   * `succeeded`, `failed`, or `cancelled`.
   */
  status:
    | "created"
    | "pending"
    | "running"
    | "succeeded"
    | "failed"
    | "cancelled";
  /**
   * The hyperparameters used for the fine-tuning job. See the
   * [fine-tuning guide](/docs/guides/fine-tuning) for more details.
   */
  hyperparameters: { n_epochs?: "auto" | number };
  /**
   * The file ID used for training. You can retrieve the training data with the
   * [Files API](/docs/api-reference/files/retrieve-contents).
   */
  training_file: string;
  /**
   * The file ID used for validation. You can retrieve the validation results with the
   * [Files API](/docs/api-reference/files/retrieve-contents).
   */
  validation_file: string | null;
  /**
   * The compiled results file ID(s) for the fine-tuning job. You can retrieve the results with the
   * [Files API](/docs/api-reference/files/retrieve-contents).
   */
  result_files: string[];
  /**
   * The total number of billable tokens processed by this fine tuning job. The value will be null
   * if the fine-tuning job is still running.
   */
  trained_tokens: number | null;
  /**
   * For fine-tuning jobs that have `failed`, this will contain more information on the cause of the
   * failure.
   */
  error: { message?: string; code?: string; param?: string | null } | null;
}

export interface ListPaginatedFineTuningJobsResponseOutput {
  object: string;
  data: Array<FineTuningJobOutput>;
  has_more: boolean;
}

export interface ListFineTuningJobEventsResponseOutput {
  object: string;
  data: Array<FineTuningJobEventOutput>;
}

export interface FineTuningJobEventOutput {
  id: string;
  object: string;
  created_at: number;
  level: "info" | "warn" | "error";
  message: string;
}

/**
 * Represents a completion response from the API. Note: both the streamed and non-streamed response
 * objects share the same shape (unlike the chat endpoint).
 */
export interface CreateCompletionResponseOutput {
  /** A unique identifier for the completion. */
  id: string;
  /** The object type, which is always `text_completion`. */
  object: string;
  /** The Unix timestamp (in seconds) of when the completion was created. */
  created: number;
  /** The model used for the completion. */
  model: string;
  /** The list of completion choices the model generated for the input. */
  choices: {
    index: number;
    text: string;
    logprobs: null | {
      tokens: string[];
      token_logprobs: number[];
      top_logprobs: Record<string, number>[];
      text_offset: number[];
    };
    finish_reason: "stop" | "length" | "content_filter";
  }[];
  usage?: CompletionUsageOutput;
}

export interface CreateEditResponseOutput {
  /** The object type, which is always `edit`. */
  object: "edit";
  /** The Unix timestamp (in seconds) of when the edit was created. */
  created: number;
  /** description: A list of edit choices. Can be more than one if `n` is greater than 1. */
  choices: { text: string; index: number; finish_reason: "stop" | "length" }[];
  usage: CompletionUsageOutput;
}

export interface CreateEmbeddingResponseOutput {
  /** The object type, which is always "embedding". */
  object: "embedding";
  /** The name of the model used to generate the embedding. */
  model: string;
  /** The list of embeddings generated by the model. */
  data: Array<EmbeddingOutput>;
  /** The usage information for the request. */
  usage: { prompt_tokens: number; total_tokens: number };
}

/** Represents an embedding vector returned by embedding endpoint. */
export interface EmbeddingOutput {
  /** The index of the embedding in the list of embeddings. */
  index: number;
  /** The object type, which is always "embedding". */
  object: "embedding";
  /**
   * The embedding vector, which is a list of floats. The length of vector depends on the model as\
   * listed in the [embedding guide](/docs/guides/embeddings).
   */
  embedding: number[];
}

export interface ListFilesResponseOutput {
  object: string;
  data: Array<OpenAIFileOutput>;
}

/** The `File` object represents a document that has been uploaded to OpenAI. */
export interface OpenAIFileOutput {
  /** The file identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The object type, which is always "file". */
  object: "file";
  /** The size of the file in bytes. */
  bytes: number;
  /** The Unix timestamp (in seconds) for when the file was created. */
  createdAt: number;
  /** The name of the file. */
  filename: string;
  /** The intended purpose of the file. Currently, only "fine-tune" is supported. */
  purpose: string;
  /**
   * The current status of the file, which can be either `uploaded`, `processed`, `pending`,
   * `error`, `deleting` or `deleted`.
   */
  status:
    | "uploaded"
    | "processed"
    | "pending"
    | "error"
    | "deleting"
    | "deleted";
  /**
   * Additional details about the status of the file. If the file is in the `error` state, this will
   * include a message describing the error.
   */
  status_details?: string | null;
}

export interface DeleteFileResponseOutput {
  id: string;
  object: string;
  deleted: boolean;
}

/** The `FineTune` object represents a legacy fine-tune job that has been created through the API. */
export interface FineTuneOutput {
  /** The object identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The object type, which is always "fine-tune". */
  object: "fine-tune";
  /** The Unix timestamp (in seconds) for when the fine-tuning job was created. */
  created_at: number;
  /** The Unix timestamp (in seconds) for when the fine-tuning job was last updated. */
  updated_at: number;
  /** The base model that is being fine-tuned. */
  model: string;
  /** The name of the fine-tuned model that is being created. */
  fine_tuned_model: string | null;
  /** The organization that owns the fine-tuning job. */
  organization_id: string;
  /**
   * The current status of the fine-tuning job, which can be either `created`, `running`,
   * `succeeded`, `failed`, or `cancelled`.
   */
  status: "created" | "running" | "succeeded" | "failed" | "cancelled";
  /**
   * The hyperparameters used for the fine-tuning job. See the
   * [fine-tuning guide](/docs/guides/legacy-fine-tuning/hyperparameters) for more details.
   */
  hyperparams: {
    n_epochs: number;
    batch_size: number;
    prompt_loss_weight: number;
    learning_rate_multiplier: number;
    compute_classification_metrics?: boolean;
    classification_positive_class?: string;
    classification_n_classes?: number;
  };
  /** The list of files used for training. */
  training_files: Array<OpenAIFileOutput>;
  /** The list of files used for validation. */
  validation_files: Array<OpenAIFileOutput>;
  /** The compiled results files for the fine-tuning job. */
  result_files: Array<OpenAIFileOutput>;
  /** The list of events that have been observed in the lifecycle of the FineTune job. */
  events?: Array<FineTuneEventOutput>;
}

export interface FineTuneEventOutput {
  object: string;
  created_at: number;
  level: string;
  message: string;
}

export interface ListFineTunesResponseOutput {
  object: string;
  data: Array<FineTuneOutput>;
}

export interface ListFineTuneEventsResponseOutput {
  object: string;
  data: Array<FineTuneEventOutput>;
}

export interface ListModelsResponseOutput {
  object: string;
  data: Array<ModelOutput>;
}

/** Describes an OpenAI model offering that can be used with the API. */
export interface ModelOutput {
  /** The model identifier, which can be referenced in the API endpoints. */
  id: string;
  /** The object type, which is always "model". */
  object: "model";
  /** The Unix timestamp (in seconds) when the model was created. */
  created: number;
  /** The organization that owns the model. */
  owned_by: string;
}

export interface DeleteModelResponseOutput {
  id: string;
  object: string;
  deleted: boolean;
}

export interface ImagesResponseOutput {
  created: number;
  data: Array<ImageOutput>;
}

/** Represents the url or the content of an image generated by the OpenAI API. */
export interface ImageOutput {
  /** The URL of the generated image, if `response_format` is `url` (default). */
  url?: string;
  /** The base64-encoded JSON of the generated image, if `response_format` is `b64_json`. */
  b64_json?: string;
}

export interface CreateModerationResponseOutput {
  /** The unique identifier for the moderation request. */
  id: string;
  /** The model used to generate the moderation results. */
  model: string;
  /** A list of moderation objects. */
  results: {
    flagged: boolean;
    categories: {
      hate: boolean;
      "hate/threatening": boolean;
      harassment: boolean;
      "harassment/threatening": boolean;
      "self-harm": boolean;
      "self-harm/intent": boolean;
      "self-harm/instructive": boolean;
      sexual: boolean;
      "sexual/minors": boolean;
      violence: boolean;
      "violence/graphic": boolean;
    };
    category_scores: {
      hate: number;
      "hate/threatening": number;
      harassment: number;
      "harassment/threatening": number;
      "self-harm": number;
      "self-harm/intent": number;
      "self-harm/instructive": number;
      sexual: number;
      "sexual/minors": number;
      violence: number;
      "violence/graphic": number;
    };
  }[];
}
