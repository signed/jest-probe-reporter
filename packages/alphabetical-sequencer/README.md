# alphabetical [sequencer][sequencer] for jest

Deterministic execution order can help during debugging test problems. Not intended for permanent use.

# How to use

command line:
```shell
jest --testSequencer=@signed/jest-alphabetical-sequencer
```

package.json:
```json
{
  "jest": {
    "testSequencer": "@signed/jest-alphabetical-sequencer"
  }
}
```

[sequencer]: https://jestjs.io/docs/configuration#testsequencer-string
