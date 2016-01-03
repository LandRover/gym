class Queen
    
    
    attr_accessor :x, :y
    
    
    def location
        [x, y]
    end
    
    
    def location?(x, y)
        [x, y] == location
    end
    
    
end