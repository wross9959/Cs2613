# Octave Cheat Sheet


## Basic Operations

- `+` - Addition
- `-` - Subtraction
- `*` - Multiplication
- `/` - Division
- `^` - Exponentiation
- `sqrt()` - Square root
- `sin()`, `cos()`, `tan()` - Trigonometric functions

Example:

```octave
x = 5;
y = 3;
z = x + y;  % z = 8
```
## Data Structures
### Arrays
`zeros()` - Create an array of zeros
`ones()` - Create an array of ones
`rand()` - Generate random numbers
`eye()` - Identity matrix
`size()` - Get the size of an array

Example:

```
A = zeros(3, 3);  % Create a 3x3 array of zeros
```

### Cell Arrays
`cell()` - Create a cell array
`{}` - Access elements of a cell array

Example:

```
C = cell(2, 2);  % Create a 2x2 cell array
C{1, 1} = 'Hello';
```

## File I/O
`load()` - Load data from a file
`save()` - Save data to a file
`fopen()`, fclose() - Open and close files
`fread()`, fwrite() - Read from and write to files
`fprintf()` - Write formatted data to a file

Example:

```
fid = fopen('data.txt', 'r');  % Open file for reading
data = fscanf(fid, '%f');  % Read data from file
fclose(fid);  % Close file
```




