import Event from '../../src/js/utils/event';

describe('Message Test', () => {
    var event;
    
    beforeEach(() => {
        event = new Event();
    });
    
    it('should should fire', () => {
        event.on('test_one_event', function(event) {
            expect(event.eventID).to.equal(1);
        });
        
        event.fire('test_one_event', {eventID: 1}); // fires ok
    });
});