import React, { Component, PureComponent } from "react";

export default class Button extends PureComponent {
  componentDidMount() {
    console.log(`🟢 in componentDidMount Button`);
  }

  componentDidUpdate(){
    console.log(`🟣 in componentDidUpdate Button`)
  }

  componentWillUnmount(){
    console.log(`🔴 in componentWillUnmount Button`)
  }

  render() {
    let { title } = this.props;
    return <button>{title}</button>;
  }
}
