class Queen
    
    
    attr_accessor :x, :y
    
    
    @@symbol = 'Q'
    
    
    def location
        [x, y]
    end
    
    
    def location?(x, y)
        [x, y] == location
    end
    
    
    def to_s
        @@symbol
    end
    
    
end