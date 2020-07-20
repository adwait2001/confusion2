import React, { Component } from 'react';
import {postComment,fetchDishes,fetchComments,fetchPromos,fetchleaders,postfeedback} from '../redux/ActionCreators'
import Dishdetail from './DishDetailscomponents'
import Menu from './menucomponents'
import Header from './HeaderComponents'
import Footer from './FooterComponents'
import Home from './HomeComponents'
import { Switch, Route, Redirect,withRouter} from 'react-router-dom'
import Contact from './ContactComponents'
import About from './AboutComponent'
import {connect} from 'react-redux'
import {actions} from 'react-redux-form'
import {TransitionGroup,CSSTransition} from 'react-transition-group'


const mapStatetoProps=state=>{
    return{
    dishes:state.dishes,
    comments:state.comments,
    leaders:state.leaders,
    promotions:state.promotions
    }
}


const mapDispatchtoProps=dispatch=>({
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchdishes:()=>{dispatch(fetchDishes())},
    resetdfeedbackform:()=>{dispatch(actions.reset('feedback'))},
    fetchComments:()=>{dispatch(fetchComments())},
    fetchPromos:()=>{dispatch(fetchPromos())},
    fetchleaders:()=>{dispatch(fetchleaders())},
    postfeedback:(values)=>{dispatch(postfeedback(values))}

})


class Main extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount(){
        this.props.fetchdishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchleaders();

    }


    render() {
    const homepage=() => { return (<Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
    dishesLoading={this.props.dishes.isLoading}
    dishesErrMess={this.props.dishes.errMess}
    promotion={this.props.promotions.promotions.filter((promotions) => promotions.featured)[0]} 
    promoLoading={this.props.promotions.isLoading}
    promoErrMess={this.props.promotions.errMess}
    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0] } 
    leadersLoading={this.props.leaders.isLoading}
    leadersErrMess={this.props.leaders.errMess}
     />
    );
}
    
    const DishWithId = ({match}) => {
        return(
        <Dishdetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
        isLoading={this.props.dishes.isLoading}
        ErrMess={this.props.dishes.errMess}
    
        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} 
        commentErrMess={this.props.dishes.errMess}
        postComment={this.props.postComment} />
            );
            };
       



    
        return (
            <div>
                <Header />
                <TransitionGroup>
                <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                <Switch>
                    <Route path='/home' component={homepage}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route path='/contactus' component={()=><Contact resetdfeedbackform={this.props.resetdfeedbackform} postfeedback={this.props.postfeedback} />}/>
                    <Route path='/aboutus' component={() => <About leaders={this.props.leaders} />}/>
                    <Redirect to="/home" />
                </Switch>
                </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div>
        );
    }



}


export default withRouter(connect(mapStatetoProps,mapDispatchtoProps)(Main));

