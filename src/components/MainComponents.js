import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { Navbar, NavbarBrand } from 'reactstrap';
import Dishdetail from './DishDetailscomponents'
import Menu from './menucomponents'

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null

        };
    }

    onDishSelect(dishID) {
        this.setState({ selectedDish: dishID });
    }



    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/"> Resnika rasna </NavbarBrand>
                    </div>

                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishID)=>{this.onDishSelect(dishID)}} />
                <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]} />
            </div>
        );
    }



}


export default Main ;

