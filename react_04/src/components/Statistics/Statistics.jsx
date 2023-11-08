import React, { Component } from 'react'

export default class Statistics extends Component {
  render() {
    let {counter} = this.props;
    return (
      <h4>Statistics: {counter}</h4>
    )
  }
}
