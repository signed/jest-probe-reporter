import type {Test} from '@jest/test-result'
import Sequencer from '@jest/test-sequencer'

export const comparePathString = (a: string, b: string): number => {
  return a.localeCompare(b)
}

export default class CustomSequencer extends Sequencer {
  sort(tests: Array<Test>) {
    const copyTests = Array.from(tests)
    return copyTests.sort((testA, testB) => comparePathString(testA.path, testB.path));
  }
}