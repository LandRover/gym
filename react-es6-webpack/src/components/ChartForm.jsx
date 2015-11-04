import React from 'react';

class ChartForm extends React.Component {
  render() {
    return (
      <form className="container">
        <div className="form-group">
        
          <input type="text" className="form-control" placeholder="Title" />
          <input type="text" className="form-control" placeholder="Description" />
          
          <button className="btn btn-primary btn-block" type="submit">+ Add</button>
        </div>
      </form>
    );
  }
}

export default ChartForm;