import Core from '../src/js/core';

describe('Message Test', () => {
    var core;
    
    beforeEach(() => {
        core = new Core();
    });
    
    it('should be have version place holder @VERSION', () => {
        // Verify text is set to hi!
        expect(core.version).to.equal('@VERSION');
    });
});