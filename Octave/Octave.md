# Octave Cheat Sheet

This repository contains a comprehensive cheat sheet for Octave, covering various topics such as basic operations, data structures, file I/O, plotting, linear algebra, statistics, signal processing, control flow, functions, and more.

## Overview

Octave is a high-level programming language primarily used for numerical computations and data analysis. It is compatible with MATLAB syntax and is often used as an open-source alternative to MATLAB. This cheat sheet aims to provide a quick reference for Octave functions and programming constructs, along with practical examples to illustrate their usage.

## Contents

- [Installation](#installation)
- [Basic Operations](#basic-operations)
- [Data Structures](#data-structures)
  - [Arrays](#arrays)
  - [Cell Arrays](#cell-arrays)
- [File I/O](#file-io)
- [Plotting](#plotting)
- [Linear Algebra](#linear-algebra)
- [Statistics](#statistics)
- [Signal Processing](#signal-processing)
- [Control Flow](#control-flow)
- [Functions and Script Files](#functions-and-script-files)
- [Other Useful Functions](#other-useful-functions)

## Installation

To use Octave, you can download and install it from the [official Octave website]([https://docs.octave.org/latest/]). Alternatively, you can use package managers like `apt` on Linux or `brew` on macOS.

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




