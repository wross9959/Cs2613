# Lab 15

## lab topics 

- Various Additional Mathematical Functions
- Anonymous Functions
- Comparison Functions

## Task 1

### 4.4.1

Supported Operators: `+`, `-`, `.*`, `./`
These operations work on integers of the same type (e.g., two 32-bit integers).
Mixing integer types (e.g., a 32-bit integer with a 16-bit integer) for these operations is not supported.

Underflow and Overflow: The result of operations may exceed the representable range of the chosen integer type.
    Example: `10 - 20` using unsigned integers results in 0 because it's the closest representable result.

Integer Division: By default, Octave rounds the result of division to the nearest integer, unlike the floor behavior seen in many programming languages.
    Example: `int32(5) ./ int32(8)` results in `1`.

`idivide(x, y, op)` offers more control over how the fractional part of a division is handled, with `op` determining the rounding behavior.

Syntax: `idivide(a, b, "option")`
Options for `op`:
`fix`: Rounds towards zero.
`round`: Rounds towards the nearest integer.
`floor`: Rounds towards negative infinity.
`ceil`: Rounds towards positive infinity.
Default Behavior: If `op` i

```m
idivide(int8([-3, 3]), int8(4), "fix")   % ⇒ 0   0
idivide(int8([-3, 3]), int8(4), "round") % ⇒ -1   1
idivide(int8([-3, 3]), int8(4), "floor") % ⇒ -1   0
idivide(int8([-3, 3]), int8(4), "ceil")  % ⇒ 0   1
```
ldivide: Element-wise left division, equivalent to `.\`.
rdivide: Element-wise right division, equivalent to `./`.


### 11.12.2

#### Octave Publishing Markup Cheat Sheet

##### Using Publishing Markup in Script Files
- Include special comments and markup to format the published output of script files.

##### Text Formatting
- **Bold**, *Italic*, `Monospace`

##### Sections
- Use `##` to define a new section.

##### Preformatted Code
- Enclose code blocks within triple backticks (```) to preserve formatting.

##### Preformatted Text
- Use indentation or `<pre>` tags for preformatted text.

##### Bulleted Lists
- Use `-` or `*` for bullet points.

##### Numbered Lists
- Use `1.`, `2.`, etc., for numbered lists.

##### Including File Content
- Embed the content of a file using the `<include>` tag.

##### Including Graphics
- Use the `![Alt text](path/to/image.png)` syntax to include images.

##### Including URLs
- Format links as `[Link text](http://example.com)`.

##### Mathematical Equations
- Enclose LaTeX equations within dollar signs `$...$` for inline and `$$...$$` for display equations.

##### HTML Markup
- You can use HTML tags for additional formatting options.

##### LaTeX Markup
- Use LaTeX syntax for detailed mathematical formatting and equations.


## Task 2 

### 10.5


The `for` statement enhances loop iteration control by allowing to count iterations conveniently. Its general syntax is as follows:

```m
for var = expression
  body
endfor
```

`body` denotes the loop's body, comprising one or more statements.
`expression` represents any valid Octave expression that determines the iteration range.
`var` may vary in form, typically being a simple variable name or an indexed variable. It can also be a two-element vector when iterating over structure elements.

#### Assignment Expression in for Loops

The assignment expression within a `for` statement operates differently compared to standard Octave assignment statements. Rather than assigning the entire result of `expression` at once, it sequentially assigns each column of the expression to `var`. The nature of `var` during each iteration depends on the structure of `expression`:

If `expression` is a range, a row vector, or a scalar, `var` takes scalar values for each loop iteration.
If `expression` is a column vector or a matrix, `var` is treated as a column vector in each loop iteration.

#### Example: Fibonacci Sequence

The following example illustrates generating the first ten elements of the Fibonacci sequence using the `for` statement:

```m
fib = ones(1, 10);
for i = 3:10
  fib(i) = fib(i-1) + fib(i-2);
endfor
```

#### Iterating Over Matrices and Cell Arrays
```m
disp("Loop over a matrix")
for i = [1,3;2,4]
  i
endfor

disp("Loop over a cell array")
for i = {1,"two";"three",4}
  i
endfor
```
#### Multi-Dimensional Array Iteration
```m
a = [1,3;2,4];
c = cat(3, a, 2*a);
for i = c
  i
endfor
```

#### Note on for Loops Versus while Loops

While it is technically possible to convert all `for` loops into `while` loops, Octave includes both constructs to facilitate a more intuitive and concise expression of common looping patterns, particularly when involving iteration counts.
 
#### 17.1

#### `exp (x)`
- Computes `e^x` for each element of `x`.
- For matrix exponential, see Linear Algebra.
- See also: `log`.

#### `expm1 (x)`
- Computes `exp(x) - 1` accurately near zero.
- See also: `exp`.

#### `log (x)`
- Computes the natural logarithm, `ln(x)`, for each element of `x`.
- For matrix logarithm, see Linear Algebra.
- See also: `exp`, `log1p`, `log2`, `log10`, `logspace`.

#### `reallog (x)`
- Returns the real-valued natural logarithm of each element of `x`.
- Errors out if any element leads to a complex result.
- See also: `log`, `realpow`, `realsqrt`.

#### `log1p (x)`
- Computes `log(1 + x)` accurately near zero.
- See also: `log`, `exp`, `expm1`.

#### `log10 (x)`
- Computes the base-10 logarithm of each element of `x`.
- See also: `log`, `log2`, `logspace`, `exp`.

#### `log2 (x)`
- Computes the base-2 logarithm of each element of `x`.
- With one output, returns `y` such that `2^y = x`.
- With two outputs, splits `x` into binary mantissa (f) and exponent (e) such that `x = f * 2^e`, with `1/2 <= abs(f) < 1`.
- See also: `pow2`, `log`, `log10`, `exp`.

#### `pow2 (x)`
- With one input, computes `2.^x` for each element of `x`.
- With two inputs, returns `f .* (2.^e)`.
- See also: `log2`, `nextpow2`, `power`.

#### `nextpow2 (x)`
- Computes the exponent for the smallest power of two larger than `x`.
- For each element in `x`, returns `n` such that `2^n >= abs(x)`.
- See also: `pow2`, `log2`.

#### `realpow (x, y)`
- Computes the real-valued, element-by-element power operation.
- Reports an error if any return value is complex.
- Equivalent to `x .^ y`, but checks for complex results.
- See also: `power`, `reallog`, `realsqrt`.

#### `sqrt (x)`
- Computes the square root of each element of `x`.
- Returns a complex result if `x` is negative.
- For matrix square root, see Linear Algebra.
- See also: `realsqrt`, `nthroot`.

#### `realsqrt (x)`
- Returns the real-valued square root of each element of `x`.
- Errors out if any element leads to a complex result.
- See also: `sqrt`, `realpow`, `reallog`.

#### `cbrt (x)`
- Computes the real cube root of each element of `x`.
- Returns a negative result if `x` is negative, unlike `x^(1/3)`.
- See also: `nthroot`.

#### `nthroot (x, n)`
- Computes the real (non-complex) nth root of `x`.
- `x` must be real and `n` must be a scalar.
- Errors out for negative `x` if `n` is an even integer.
- Example: `nthroot(-1, 3)` ⇒ `-1`, `(-1) ^ (1 / 3)` ⇒ `0.50000 - 0.86603i`
- See also: `realsqrt`, `sqrt`, `cbrt`.