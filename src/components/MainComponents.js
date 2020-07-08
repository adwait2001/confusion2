import React, { Component } from 'react';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Dishdetail from './DishDetailscomponents'
import Menu from './menucomponents'
import Header from './HeaderComponents'
import Footer from './FooterComponents'
import Home from './HomeComponents'
import {Switch,Route,Redirect} from 'react-router-dom'
import Contact from './ContactComponents'


class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comment:COMMENTS,
            leaders:LEADERS,
            promotions:PROMOTIONS
        };
    }

    render() {
        return (
            <div>
                
                
                <Header/>
                <Switch>
                    <Route path='/home' component={()=><Home dish={this.state.dishes.filter((dish)=>dish.featured)[0]} promotion={this.state.promotions.filter((promotion)=>promotion.featured)[0]} leader={this.state.leaders.filter((leader)=>leader.featured)[0]}/> }/>
                    <Route path='/menu' component={()=><Menu dishes={this.state.dishes} /> }/>
                    <Route path='/contactus' component={Contact} />}/>
                    <Redirect to ="/home" />
                </Switch>
                <Footer/>
            </div>
        );
    }



}


export default Main ;

