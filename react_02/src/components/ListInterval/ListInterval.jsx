import React, { Component } from "react";

export default class ListInterval extends Component {
    constructor(props){
        super(props);

        if(this.state.list){
            const removeItems = setInterval(() => {
                this.setState(
                    {
                        list: this.state.list.slice(0, -1)
                    },
                    () => {
                        console.log(this.state.list);

                        if(this.state.list.length === 0){
                            clearInterval(removeItems);
                        }
                    }
                )
    
            }, 1000)
        }
    }

  state = Object.assign(
    {
        backgroundColor: `pink`
    }, this.props);

  render() {
    let { list=[], color, backgroundColor } = this.state;

    return list.length ? (
      <ul style={{ color, backgroundColor }}>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : null;
  }
}
