import React, { Component } from 'react'
import Counter from './components/Counter/Counter'
import Statistics from './components/Statistics/Statistics'
import List from './components/List/List'

export default class App extends Component {

  state = {
    counter: 0,
    listLength: 0
  }

  getCounter(value){
    this.setState({
      counter: value
    })
  }

  getListLength(value){
    this.setState({
      listLength: value
    })
  }

  render() {
    let {counter, listLength} = this.state;

    return (
      <div>
        <h3>Counter in App: {counter}</h3>
        <h3>ListLength in App: {listLength}</h3>
        <Counter liftingCounter={this.getCounter.bind(this)} />
        <List liftingListLength={this.getListLength.bind(this)} />
        <Statistics counter={counter} listLength={listLength} />
      </div>
    )
  }
}