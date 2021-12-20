# custom [jest reporter][jest-reporter]

Intended for debugging test execution.
The default reporter only logs test files after they are executed.
This makes finding tests stuck in an infinite loop really hard.
This reporter logs the file name before the first text execution starts.


# How to use
To get clean sequential output in your logs consider using [`--runInBand`][in-band-cli-flag] on the command line

command line:
```shell
jest --ci --reporters=default --reporters=@signed/jest-probe-reporter
```

package.json:
```json
{
  "jest": {
    "reporters": [
      "default",
      "@signed/jest-probe-reporter"
    ]
  }
}
```

[jest-reporter]: https://jestjs.io/docs/configuration#reporters-arraymodulename--modulename-options
[in-band-cli-flag]: https://jestjs.io/docs/cli#--runinband
