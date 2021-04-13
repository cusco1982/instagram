import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {

  componentDidMount = () => {
    console.log("this is the header")
  }


  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <p>
            {this.props.count}
          </p>

        </header>

      </div>
    );
  }
}

export default Header;