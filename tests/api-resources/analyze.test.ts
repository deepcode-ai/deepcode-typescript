// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Deepcode from 'deepcoder';

const client = new Deepcode({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analyze', () => {
  // skipped: tests are disabled for the time being
  test.skip('analyzeSourceCode: only required params', async () => {
    const responsePromise = client.analyze.analyzeSourceCode({ code: 'code', language: 'language' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('analyzeSourceCode: required and optional params', async () => {
    const response = await client.analyze.analyzeSourceCode({
      code: 'code',
      language: 'language',
      options: { deep: true, performanceHints: true },
    });
  });
});
