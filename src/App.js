import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state={
    count:0
  }


  add = () => {
    console.log('adding')
    let num = this.state.count +1
    this.setState({count:num})
  }
  minus = () => {
    console.log('minus')
    let num = this.state.count -1
    this.setState({count:num})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            How many apps can we build? {this.state.count}
          <button onClick={() => this.add()}>add</button>
            <button onClick={() => this.minus()}>minus</button>
          </p>

        </header>
      </div>
    );
  }
}

export default App;