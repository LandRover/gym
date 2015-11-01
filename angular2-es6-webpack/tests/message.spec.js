import 'zone.js';
import 'reflect-metadata';

import MessageComponent from '../src/message/message';

describe('Message Test', () => {
    var message;
    
    beforeEach(() => {
        message = new MessageComponent();
    });
    
    it('should be HI', () => {
        // Verify text is set to hi!
        expect(message.text).to.equal('Hi');
    });
});