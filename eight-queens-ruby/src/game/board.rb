class Board
    
    attr_accessor :queens
    
    
    DEFUALT_SIZE = 8
    
    
    @@EDGE_HORIZONAL = '|'
    @@EDGE_VERTICAL = '=';
    @@EDGE_CELL_SEPERATOR = '.';

    
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
    
    def render
        header = @@EDGE_HORIZONAL * (columns_total + 2)
        
        puts
        puts header
        rows_total.times do |y|
            print @@EDGE_VERTICAL
            
            columns_total.rows do |x|
                print queen_at(x, y)
            end
            
            puts @@EDGE_VERTICAL
        end
        
        puts header
        puts
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
        
        
        def queen_at(x, y)
            queen_find(x, y) || @@EDGE_CELL_SEPERATOR
        end
end