import React from 'react';

export default class ChartItem extends React.Component {
  render() {
    return (
      <li className="list-group-item">
        <span className="badge badge-success">{ this.props.votes }</span>
        
        <h4>{ this.props.title }</h4>
        <span>{ this.props.desc }</span>
        
        <span className="pull-right">
          <button id="up" className="btn btn-sm btn-primary">UP</button>
          <button id="down" className="btn btn-sm btn-primary">DOWN</button>
        </span>
      </li>
    );
  }
}