import React, { Component } from "react";
import "./style.sass";

export default class ListClass extends Component {
  constructor(props) {
    super(props);

    setTimeout(() => {
      this.setState({
        list: this.state.list.slice(0, -1),
        color: `red`,
        backgroundColor: `yellow`,
        borderWidth: `10px`
      });

      console.log(this.state);
    }, 3000);
  }

  state = {
    list: this.props.list ? this.props.list : [],
    color: `black`,
    backgroundColor: `white`,
    borderWidth: `2px`
  };

  render() {
    let { list, color, backgroundColor, borderWidth } = this.state;

    return list.length ? (
      <ul className="list" style={ {color, backgroundColor, borderWidth} }>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : null;
  }
}
