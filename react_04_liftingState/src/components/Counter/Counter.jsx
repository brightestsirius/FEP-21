import React, { Component } from 'react'

export default class Counter extends Component {
  state = {
    counter: 0
  }

  decrement(){
    this.setState({
      counter: this.state.counter-1
    }, () => {
      console.log(this.state.counter);

      this.props.liftingCounter(this.state.counter);
    })
  }

  increment(){
    this.setState({
      counter: this.state.counter+1
    }, () => {
      this.props.liftingCounter(this.state.counter)
    })
  }

  render() {
    let {counter} = this.state;

    return (
      <div>
        <button onClick={() => this.decrement()}>-</button>
        <span>{counter}</span>
        <button onClick={() => this.increment()}>+</button>
      </div>
    )
  }
}