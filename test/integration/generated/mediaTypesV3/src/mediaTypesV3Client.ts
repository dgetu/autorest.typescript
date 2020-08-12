/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { BarApi, FooApi } from "./operations";
import { MediaTypesV3ClientContext } from "./mediaTypesV3ClientContext";
import { MediaTypesV3ClientOptionalParams } from "./models";

export class MediaTypesV3Client extends MediaTypesV3ClientContext {
  /**
   * Initializes a new instance of the MediaTypesV3Client class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: MediaTypesV3ClientOptionalParams) {
    super($host, options);
    this.barApi = new BarApi(this);
    this.fooApi = new FooApi(this);
  }

  barApi: BarApi;
  fooApi: FooApi;
}
