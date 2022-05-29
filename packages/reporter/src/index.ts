import type { TestContext, Reporter, ReporterOnStartOptions, Test } from '@jest/reporters';
import type { AggregatedResult, TestResult } from '@jest/test-result';
import type { Config } from '@jest/types';

class ProbeReporter implements Reporter {
  private _globalConfig: Config.GlobalConfig;
  private _options: unknown;

  constructor(globalConfig: Config.GlobalConfig, options: unknown) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunStart(_results: AggregatedResult, _options: ReporterOnStartOptions): Promise<void> | void {
    // do nothing for now
    return undefined;
  }

  onTestFileStart(test: Test): Promise<void> | void {
    console.log(`start test file: ${test.path}`)
    return undefined;
  }

  onTestFileResult(test: Test, _testResult: TestResult, _aggregatedResult: AggregatedResult): Promise<void> | void {
    console.log('result for test file: ' + test.path)
    return undefined;
  }

  onRunComplete(_contexts: Set<TestContext>, _results: AggregatedResult): Promise<void> | void {
    // do nothing for now
    return undefined;
  }

  /**
   * Custom reporters can force Jest to exit with non-0 code by returning an Error from getLastError()
   */
  getLastError(): Error | void {
    return undefined;
  }
}

export = ProbeReporter;
