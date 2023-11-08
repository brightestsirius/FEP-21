import React, { PureComponent } from "react";

export default class List extends PureComponent {
  state = {
    list: [`cat`, `dog`, `lion`],
  };

  componentDidMount(){
    this.props.liftingListLength(this.state.list.length);
  }

  deleteItem(index){
    this.setState({
        list: this.state.list.filter((item, i) => i!==index)
    }, () => {
        this.props.liftingListLength(this.state.list.length);
    })
  }

  render() {
    let { list } = this.state;

    return list.length ? (
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item} <button onClick={() => this.deleteItem(index)}>Delete</button></li>
        ))}
      </ul>
    ) : null;
  }
}
