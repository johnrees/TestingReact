import React, { Component } from 'react';

class Rect extends Component {
  render() {
    return (
      <div className="component">
      	<strong>Rect</strong>
      	{JSON.stringify(this.props)}
      	{/*JSON.stringify(this.props).map((key, value) => <input placeholder={value} name={key} />)}*/}
      </div>
    );
  }
}

export default Rect;
