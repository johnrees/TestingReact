import React, { Component } from 'react';

class Canvas extends Component {
  render() {
    return (
      <canvas id={this.props.id} width={this.props.width} height={this.props.height}></canvas>
    );
  }
}

export default Canvas;
