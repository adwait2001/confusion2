import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/menucomponents';
import { render } from 'react-dom';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      dishes:DISHES
    };
  }
  render(){
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/"> Resnika rasna </NavbarBrand>
        </div>

      </Navbar>
      <Menu dishes={this.state.dishes} />
    
    </div>
  );
  }
}

export default App;
