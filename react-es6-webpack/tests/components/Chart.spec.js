import Chart from '../../src/components/Chart.jsx';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

var spy = sinon.spy();

describe('Instance of the Chart', () => {
  describe('Render the Chart', () => {
    let chart;
    
    before(() => {
      chart = TestUtils.renderIntoDocument(<Chart onRender={ spy } />);
    });
    
    
    it('Should render a div', () => {
      let div = TestUtils.scryRenderedDOMComponentsWithTag(chart, 'div');
      console.log(spy);

      expect(div).to.have.length.above(0, 'Expected to have element with tag <div>');
      expect(spy).to.be.calledOnce;
    });
    
    
    it('Should render "Chart" inside a H1', () => {
        let h1 = TestUtils.findRenderedDOMComponentWithTag(chart, 'h1');
        //let node = ReactDOM.findDOMNode(div);

        // Verify text is set to what it needs to be
        expect(h1.textContent).to.equal('Chart');
    });
  });
});