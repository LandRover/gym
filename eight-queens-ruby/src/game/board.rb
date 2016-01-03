class Board
    
    
    DEFUALT_SIZE = 8
    
    
    attr_accessor :queens
    
    
    def initialize()
        @size = DEFUALT_SIZE
        @queens = []
    end
    
    
    def rows_total
        @size
    end
    
    
    def columns_total
        @size
    end
    
    
    def rows_start
        0
    end
    
    
    def rows_end
        rows_total - 1
    end
    
    
    def queen_add(x=0, y=0)
        queen = Queen.new
        queen.x = x
        queen.y = y
        
        @queens << queen
        
        return queen
    end
    
    
    def queen_remove(x, y)
        queen = queen_find(x, y)
        
        if queen
            @queens.delete(queen)
        end
    end
    
    
    private
        
        def queen_find(x, y)
            @queens.detect {|q| q.location?(x, y)}
        end
end