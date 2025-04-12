// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Status extends APIResource {
  /**
   * Returns current status and health of the API.
   */
  check(options?: RequestOptions): APIPromise<StatusCheckResponse> {
    return this._client.get('/status', options);
  }
}

export interface StatusCheckResponse {
  status?: string;

  uptime?: string;

  version?: string;
}

export declare namespace Status {
  export { type StatusCheckResponse as StatusCheckResponse };
}
