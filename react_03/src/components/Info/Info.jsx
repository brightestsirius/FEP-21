import React, { Component } from 'react'

export default class Info extends Component {
  render() {
    let {counter} = this.props;

    return (
      <div>Info: {Math.pow(counter, 2)}</div>
    )
  }
}