import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';

import Dishdetail from './DishDetailscomponents'
import Menu from './menucomponents'
import Header from './HeaderComponents'
import Footer from './FooterComponents'
import Home from './HomeComponents'
import {Switch,Route,Redirect} from 'react-router-dom'


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES

        };
    }




    render() {
        return (
            <div>
                
                <Header/>
                <Switch>
                    <Route path='/home' component={()=><Home/> }/>
                    <Route path='/menu' component={()=><Menu dishes={this.state.dishes} /> }/>
                    <Redirect to ="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }



}


export default Main ;

