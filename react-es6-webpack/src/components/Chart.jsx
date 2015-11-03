import React from 'react';

import ChartList from './ChartList.jsx';
import ChartForm from './ChartForm.jsx';
import AddRowButton from './AddRowButton.jsx';

export default class Chart extends React.Component {
    static propTypes = {
        onRender: React.PropTypes.func
    }
        
    constructor() {
        super();
        
        const itemsList = [
            {key: 1, title: 'Webpack', description: 'Bundler', votes: 150},
            {key: 2, title: 'Unit Testing', description: 'Jasmine', votes: 255},
            {key: 3, title: 'Web Technelogy', description: 'HTML5', votes: 366},
        ];
        
        this.state = {
            itemsList: itemsList
        };
    }
    
  
    render() {
        // execute prop when done rendering. Used in unit tested to count invokes
        if (this.props.onRender) {
            this.props.onRender();
        }
        
        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>Chart</h1>
                </div>
                
                <div className="container">
                    <AddRowButton />
                </div>
                
                <ChartForm />
                
                <br />
                
                <ChartList items={ this.state.itemsList } />
            </div>
        );
    }
}