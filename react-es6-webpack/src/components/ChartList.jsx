import React from 'react';
import ChartItem from './ChartItem.jsx';

class ChartList extends React.Component {
  render() {
    return (
      <ul className="list-group container">
        { this.props.items.map(item => {
          return (
            <ChartItem
              key={ item.key }
              title={ item.title }
              desc={ item.description }
              votes={ item.votes }
            />
          );
        }) }
      </ul>
    );
  }
}

export default ChartList;