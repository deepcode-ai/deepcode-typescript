// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Status extends APIResource {
  /**
   * Returns current status and health of the API.
   */
  checkStatus(options?: RequestOptions): APIPromise<StatusCheckStatusResponse> {
    return this._client.get('/status', options);
  }
}

export interface StatusCheckStatusResponse {
  status?: string;

  uptime?: string;

  version?: string;
}

export declare namespace Status {
  export { type StatusCheckStatusResponse as StatusCheckStatusResponse };
}
