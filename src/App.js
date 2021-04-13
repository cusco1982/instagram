import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';

class App extends Component {
  state = {
    count: 0
  }

  componentDidMount = () => {
    console.log("you arrived")
    this.add()
  }


  add = () => {
    console.log('adding')
    let num = this.state.count + 1
    this.setState({ count: num })
  }
  minus = () => {
    console.log('minus')
    let num = this.state.count - 1
    this.setState({ count: num })
  }

  render() {
    return (

      <div>
        <Header count={this.state.count}/>
        <p>How many apps can we build? {this.state.count}</p>
        <button onClick={() => this.add()}>add</button>
        <button onClick={() => this.minus()}>minus</button>
      </div>

    );
  }
}

export default App;