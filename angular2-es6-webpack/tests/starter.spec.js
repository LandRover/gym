import StarterComponent from '../src/message/starter';

export function main() {
    describe('Starter Test', () => {
        var starter;
        
        beforeEach(() => {
            starter = new StarterComponent();
        });
        
        it('should be HI', () => {
            // Verify text is set to hi!
            expect(starter.loc).to.equal('Hi');
        });
    });
}