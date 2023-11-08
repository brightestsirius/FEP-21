import React, { Component } from 'react'
import List from './components/List/List'
import Counter from './components/Counter/Counter'
import Statistics from './components/Statistics/Statistics'

export default class App extends Component {
  state = {
    showList: false,
    counter: 0,
  }

  decrement() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  // componentDidMount(){
  //   console.log(`🟢 in componentDidMount App`);

  //   setTimeout(() => {
  //     this.setState({
  //       showList: false
  //     })
  //   }, 5000)
  // }

  render() {
    let {counter} = this.state;

    return (
      <>
        {this.state.showList && <List />}
        <h3>Counter in App: {counter}</h3>
        <Counter counter={counter} decrement={() => this.decrement()} increment={() => this.increment()}  />
        <Statistics counter={counter} />
      </>
    )
  }
}

// 20:20