import {comparePathString} from './test-sequencer'

test('top level files', () => {
  expect(['c', 'b', 'a'].sort(comparePathString)).toStrictEqual(['a','b','c'])
})