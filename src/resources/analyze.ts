// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Analyze extends APIResource {
  /**
   * Sends source code for static analysis and optimization insights.
   */
  analyzeCode(
    body: AnalyzeAnalyzeCodeParams,
    options?: RequestOptions,
  ): APIPromise<AnalyzeAnalyzeCodeResponse> {
    return this._client.post('/analyze', { body, ...options });
  }
}

export interface AnalyzeAnalyzeCodeResponse {
  issues?: Array<AnalyzeAnalyzeCodeResponse.Issue>;
}

export namespace AnalyzeAnalyzeCodeResponse {
  export interface Issue {
    line?: number;

    message?: string;

    severity?: 'info' | 'warning' | 'error' | 'critical';

    /**
     * AI-generated suggestion to resolve the issue
     */
    suggestion?: string;
  }
}

export interface AnalyzeAnalyzeCodeParams {
  /**
   * Source code to analyze
   */
  code: string;

  /**
   * Programming language (e.g., python, javascript, rust)
   */
  language: string;

  /**
   * Optional analysis parameters
   */
  options?: AnalyzeAnalyzeCodeParams.Options;
}

export namespace AnalyzeAnalyzeCodeParams {
  /**
   * Optional analysis parameters
   */
  export interface Options {
    /**
     * Enable deep learning-based semantic analysis
     */
    deep?: boolean;

    /**
     * Provide performance improvement hints
     */
    performanceHints?: boolean;
  }
}

export declare namespace Analyze {
  export {
    type AnalyzeAnalyzeCodeResponse as AnalyzeAnalyzeCodeResponse,
    type AnalyzeAnalyzeCodeParams as AnalyzeAnalyzeCodeParams,
  };
}
