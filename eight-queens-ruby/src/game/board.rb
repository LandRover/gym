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
        rows_total -1
    end
    
    
end