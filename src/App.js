import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Main from './components/MainComponents';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfigureStore} from './redux/reducer'


const store=ConfigureStore();

class App extends Component {
  
  render(){
  return (
    <Provider store={store}>
    <BrowserRouter>
    <div className="App">
      <Main/>
    </div>
    </BrowserRouter>
    </Provider>
  );
  }
}

export default App;
