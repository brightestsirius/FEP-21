import React, { Component } from 'react'

export default class Statistics extends Component {
  render() {
    let {counter, listLength} = this.props;
    return (
      <>
      <h4>Statistics:</h4>
      <ul>
        <li>Counter: {counter}</li>
        <li>List length: {listLength}</li>
      </ul>
      </>
      
    )
  }
}
