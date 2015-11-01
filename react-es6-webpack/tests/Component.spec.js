import Component from '../src/Component.jsx';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var spy = sinon.spy();

describe('Instance of the Component', () => {
  describe('Render the Component', () => {
    let component;
    
    before(() => {
      component = TestUtils.renderIntoDocument(<Component onRender={ spy } />);
    });
    
    
    it('Should render a paragraph', () => {
      var paragraph = TestUtils.scryRenderedDOMComponentsWithTag(component, 'p');

      expect(paragraph).to.have.length.above(0, 'Expected to have element with tag <p>');
      expect(spy).to.be.calledOnce;
    });
    
    
    it('Should render text: "Hello World!" inside a paragraph', () => {
        let paragraph = TestUtils.findRenderedDOMComponentWithTag(component, 'p');
        let node = ReactDOM.findDOMNode(paragraph);
        
        // Verify text is set to what it needs to be
        expect(node.textContent).to.equal('Hello World!');
    });
  });
});