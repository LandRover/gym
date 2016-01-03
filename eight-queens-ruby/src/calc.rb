#!/usr/bin/env ruby

require_relative('game/board')
require_relative('game/queen')

@board = Board.new

@board.queen_add(0,0)
@board.queen_add(5,5)

@board.render

x = 2
@board.rows_total.times do |y|
    if @board.valid_position(x, y)
        print "VALID"
    else
        print "INVALID"
    end
    
    puts " SPOT (#{x}, #{y})"
    
end