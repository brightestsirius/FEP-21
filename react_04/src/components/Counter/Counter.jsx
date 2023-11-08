import React, { Component } from "react";

export default class Counter extends Component {
  render() {
    let { counter, decrement, increment } = this.props;

    return (
      <div>
        <button onClick={decrement}>-</button>
        <span>{counter}</span>
        <button onClick={increment}>+</button>
      </div>
    );
  }
}
