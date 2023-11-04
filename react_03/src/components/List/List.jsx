import React, { Component } from "react";
import ListItem from "./ListItem";

// smart && damb components

export default class List extends Component {
  state = {
    list: this.props.list ? this.props.list : [],
  };

  deleteItem(index) {
    console.log(`in deleteItem`, index);

    // let copiedList = JSON.parse(JSON.stringify(this.state.list));
    // copiedList.splice(index, 1);

    this.setState({
      list: this.state.list.filter((item, i) => i !== index),
    });
  }

  changeItem(index){
    console.log(`in changeItem`, index);

    this.setState({
        list: this.state.list.map((item, i) => {
            if(i === index) item += `!`;
            return item;
        })
    })
  }

  render() {
    let { list } = this.state;

    return list.length ? (
      <ul>
        {list.map((item, index) => (
          <ListItem
            key={index}
            item={item}
            deleteItem={() => this.deleteItem(index)}
            changeItem={() => this.changeItem(index)}
          />
        ))}
      </ul>
    ) : null;
  }
}
