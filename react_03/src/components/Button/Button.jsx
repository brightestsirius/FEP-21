import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    let {title, clickFn} = this.props;

    return (
      <button onClick={clickFn}>{title}</button>
    )
  }
}