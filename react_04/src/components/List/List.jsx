import React, { Component, PureComponent } from "react";
import ListItem from "./ListItem";

export default class List extends PureComponent {
  state = {
    list: [`cat`, `dog`, `lion`],
    color: `black`
  };

  componentDidMount() {
    console.log(`🟢 in componentDidMount List`);

    // setTimeout(() => {
    //     this.setState({
    //         list: [...this.state.list, `tiger`]
    //     })
    // }, 2000)

    // setTimeout(() => {
    //     this.setState({
    //         color: `green`
    //     })
    // }, 4000)

    this.setState({
        interval: setInterval(() => {
            console.log(`in setInterval List`);
        }, 1000)
    })

    setTimeout(() => {
        this.setState({
            list: []
        }, () => {
            clearInterval(this.state.interval);
        })
    }, 3000)
  }

  componentDidUpdate(){
    console.log(`🟣 in componentDidUpdate List`)
  }

  componentWillUnmount(){
    console.log(`🔴 in componentWillUnmount List`);
    clearInterval(this.state.interval);
  }

  render() {
    let { list, color} = this.state;

    return list.length ? (
      <ul style={{color}}>
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </ul>
    ) : null;
  }
}
