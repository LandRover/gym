#!/usr/bin/env ruby

require_relative('game/board')
require_relative('game/queen')

@debug = false
@solutions = []
@board = Board.new

def position_queen(x)
    puts "\n Position Queen ##{x+1}" if @debug
    
    @board.rows_total.times do |y|
        if @board.valid_position?(x, y)
            puts "[+] Setting Queen ##{x+1} at (#{x}, #{y})" if @debug
            @board.queen_add(x, y)
            @board.render if @debug
            
            if (x == @board.rows_end)
                puts "[*] Solution Finalized\n" if @debug
                solution_save(@board)
            else
                # go to the the next column
                position_queen(x + 1)
            end
            
            puts "[-] Queen ##{x+1} being removed" if @debug
            @board.queen_remove(x, y)
        else
            puts "[x] Conflict detected Queen ##{x+1} at (#{x}, #{y})" if @debug
            next
        end
    end
    
    puts "[x] No solution found for Queen ##{x+1}" if @debug
end

def solution_save(board)
    ## Create a copy of the current board and save it.
    solution = Board.new
    solution.queens = board.queens.map(&:dup)
    @solutions << solution
end


position_queen(0)


if !@solutions.empty?
    @solutions.each_with_index do |board, idx|
      puts "\n Solution ##{idx+1}:"
      board.render
    end
    
else
    puts "\nNothing found!"
end