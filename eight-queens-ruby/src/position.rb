#!/usr/bin/env ruby

require_relative('game/board')
require_relative('game/queen')

@debug = true
@solved = false
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
                @solved = true
                return
            else
                position_queen(x + 1)
                return if @solved
            end
            
            puts "[-] Queen being removed ##{x+1}"
            @board.queen_remove(x, y)
        else
            puts "[x] Conflict detected Queen ##{x} at (#{x}, #{y})"
            next
        end
    end
end

position_queen(0)