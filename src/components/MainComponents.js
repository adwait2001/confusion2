import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';

import Dishdetail from './DishDetailscomponents'
import Menu from './menucomponents'
import Header from './HeaderComponents'
import Footer from './FooterComponents';


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
                <Header/>
                <Menu dishes={this.state.dishes} onClick={(dishID)=>{this.onDishSelect(dishID)}} />
                <Dishdetail dish={this.state.dishes.filter((dish)=>dish.id === this.state.selectedDish)[0]} />
                <Footer/>
            </div>
        );
    }



}


export default Main ;

