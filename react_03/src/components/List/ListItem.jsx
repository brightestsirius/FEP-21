import React, { Component } from "react";
import Button from "./../Button/Button";

export default class ListItem extends Component {
  render() {
    let { item, deleteItem, changeItem } = this.props;

    return (
      <li>
        {item} <Button title="Delete" clickFn={deleteItem} />{" "}
        <Button title="Change" clickFn={changeItem} />
      </li>
    );
  }
}
