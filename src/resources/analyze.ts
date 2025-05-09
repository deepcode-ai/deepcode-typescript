// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as AnalyzeAPI from './analyze';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Analyze extends APIResource {
  /**
   * Sends source code for static analysis and optimization insights.
   */
  analyzeSourceCode(body: AnalyzeAnalyzeSourceCodeParams, options?: RequestOptions): APIPromise<AnalyzeAnalyzeSourceCodeResponse> {
    return this._client.post('/analyze', { body, ...options });
  }
}

export interface AnalyzeAnalyzeSourceCodeResponse {
  issues?: Array<AnalyzeAnalyzeSourceCodeResponse.Issue>;
}

export namespace AnalyzeAnalyzeSourceCodeResponse {
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

export interface AnalyzeAnalyzeSourceCodeParams {
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
  options?: AnalyzeAnalyzeSourceCodeParams.Options;
}

export namespace AnalyzeAnalyzeSourceCodeParams {
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
    type AnalyzeAnalyzeSourceCodeResponse as AnalyzeAnalyzeSourceCodeResponse,
    type AnalyzeAnalyzeSourceCodeParams as AnalyzeAnalyzeSourceCodeParams
  };
}
