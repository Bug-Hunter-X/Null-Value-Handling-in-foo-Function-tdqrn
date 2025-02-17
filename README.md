# JavaScript Bug: Unexpected Null Value Handling

This repository demonstrates a common bug in JavaScript where a function doesn't explicitly handle null values passed as arguments. The `foo` function silently returns when null is encountered, leading to unexpected behavior and potentially causing errors in other parts of the application.

## Bug Description
The `foo` function does not correctly handle cases where either `a` or `b` is null. Instead of returning a specific value or throwing an error, it simply returns undefined, making it difficult to debug and handle unexpected scenarios.

## Solution
The solution involves explicitly checking for null values and providing appropriate handling.  For example, the function could throw an error, return a default value, or log a warning.