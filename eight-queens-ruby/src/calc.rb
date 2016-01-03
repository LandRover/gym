#!/usr/bin/env ruby

require_relative('game/board')
require_relative('game/queen')

@board = Board.new

@board.queen_add(0,0)
@board.queen_add(5,5)

@board.render