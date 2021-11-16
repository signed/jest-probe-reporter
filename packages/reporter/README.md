# custom jest reporter

Intended for debugging test execution.
The default reporter only logs test files after they are executed.
This makes finding tests stuck in an infinite loop really hard.
This reporter logs the file name before the first text execution starts.
