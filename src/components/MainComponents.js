import React, { Component } from 'react';

import Dishdetail from './DishDetailscomponents'
import Menu from './menucomponents'
import Header from './HeaderComponents'
import Footer from './FooterComponents'
import Home from './HomeComponents'
import { Switch, Route, Redirect,withRouter} from 'react-router-dom'
import Contact from './ContactComponents'
import About from './AboutComponent'
import {connect} from 'react-redux'


const mapStatetoProps=state=>{
    return{
    dishes:state.dishes,
    comments:state.comments,
    leaders:state.leaders,
    promotion:state.promotions
    }
}

class Main extends Component {
    constructor(props) {
        super(props);

    }


    render() {
    const homepage=() => { return (<Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} promotion={this.props.promotion.filter((promotion) => promotion.featured)[0]} leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
    );
}
    
    const DishWithId = ({match}) => {
        return(
        <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
            };
       



    
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={homepage}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route path='/contactus' component={Contact} />}/>
                    <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />}/>
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }



}


export default withRouter(connect(mapStatetoProps)(Main));

