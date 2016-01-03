class Board
    
    attr_accessor :queens
    
    
    DEFUALT_SIZE = 8
    
    
    @@EDGE_HORIZONAL = '-'
    @@EDGE_VERTICAL = '|';
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
            
            columns_total.times do |x|
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
    
    
    def valid_position?(x, y)
        return false unless safe_x?(x)
        return false unless safe_y?(y)
        return false unless safe_diagonal?(x, y)
        return true
    end
    
    
    private
        
        def queen_find(x, y)
            @queens.detect {|q| q.location?(x, y)}
        end
        
        
        def queen_at(x, y)
            queen_find(x, y) || @@EDGE_CELL_SEPERATOR
        end
        
        
        def safe_x?(x)
            @queens.none? {|q| x == q.x}
        end
        
        
        def safe_y?(y)
            @queens.none? {|q| y == q.y}
        end
        
        
        def safe_diagonal?(x, y)
            @queens.none? do |q|
                (q.x - x).abs == (q.y - y).abs
            end
        end
end