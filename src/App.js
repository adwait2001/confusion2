import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/MainComponents';
import { render } from 'react-dom';


class App extends Component {
  
  render(){
  return (
    <div className="App">
      <Main/>
    </div>
  );
  }
}

export default App;
