# Eight Queens Ruby

The eight queens puzzle is the problem of placing eight chess queens on an 8×8 chessboard so that no two queens threaten each other. Thus, a solution requires that no two queens share the same row, column, or diagonal. The eight queens puzzle is an example of the more general n-queens problem of placing n queens on an n×n chessboard, where solutions exist for all natural numbers n with the exception of n=2 and n=3.[1]

This is a ruby implementation of  solutions to the [eight queens problem][1].


## Installation

Clone:

    $ git clone .

And then execute:

    $ `time ruby position.rb`

## Todo

1. Add specs
2. Add comments
3. Add n-queens param, dynamic size - partially supported
4. Add another heuristics
5. Filter only unique soltuion, ignore rotations etc. (for example, 8x8 results in 92 solutions but only 12 are unique)

[1]: https://en.wikipedia.org/wiki/Eight_queens_puzzle