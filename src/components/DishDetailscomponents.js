import React,{Component} from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem, Button,Modal,ModalBody,ModalHeader,Row,Label } from 'reactstrap';
import {Link} from 'react-router-dom'
import {Control ,LocalForm ,Errors} from 'react-redux-form';
import {Loading} from './LoadingComponent'
import {baseUrl} from '../shared/baseURL'
import { FadeTransform, Fade, Stagger } from 'react-animation-components';



const required=(val)=>val && val.length;
const min=(len)=>(val)=>!(val)||(val.length >= len)
const max=(len)=>(val)=>!(val)||(val.length <= len)

const Dishdetail = (props) => {
    
    
    if (props.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) 

        return (
            <div className='container'>
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} dishId={props.dish.id} postComment={props.postComment}/>
                </div>
            </div>
        )
}


class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state={
            isModal2Open:false
        }
        this.toggleModal2 = this.toggleModal2.bind(this);
       
    }

    toggleModal2(){
        this.setState({
            isModal2Open:!this.state.isModal2Open
        });
    }

    handleSubmit(values){
        this.toggleModal2();
        this.props.postComment(this.props.dishId,values.rating,values.name,values.comment);
    }

    render(){
        return(
            <div>
                 <Button outline onClick={this.toggleModal2}><span className="fa fa-sign-in fa-lg"></span> Submit Comment </Button>
                 <Modal isOpen={this.state.isModal2Open} toggle={this.toggleModal2}>
                    <ModalHeader toggle={this.toggleModal2}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values)=>{this.handleSubmit(values)}}>
                        <Row className='form-group mx-1'>
                         <Label htmlfor="rating">Rating</Label>
                            <Control.select model=".rating" id="rating" name="rating" className="custom-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            </Control.select>
                        </Row>
                        <Row className='form-group mx-1'>
                         <Label htmlfor="name">Your Name</Label>
                            <Control.text model=".name" id="name" name="name" className="form-control" validators={{
                                required,min:min(3),max:max(15)
                            }}/>
                            <Errors  className="text-danger" model=".name" show="touched" messages={{required:'required',min:'Must be greater than 2 characters',max:'Must be 15 characters or less'}}/>
                        </Row>
                        <Row className='form-group mx-1'>
                         <Label htmlfor="comment">Comment</Label>
                            <Control.textarea model=".comment" id="comment" name="comment" className="form-control" rows="6"/>
                        </Row>
                        <Button type="submit" value="submit" color="primary">submit</Button>
                    </LocalForm>      
                    </ModalBody>
                </Modal>
            </div>
        )
    }





}




function RenderComments({comments,postComment,dishId}) {
    if (comments == null) {
        return (<div></div>)
    }

    const cmnts = 
    comments.map(comment => {
        return (
            <Fade in>
            <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit'
                }).format(new Date(comment.date))}
                </p>
            </li>
            </Fade>
        )
    })
    return (
        <div className='col-12 col-md-5 m-1'>
            <h4> Comments </h4>
            <ul className='list-unstyled'>
            <Stagger in>
                {cmnts}
                </Stagger>
            </ul>
        <CommentForm dishId={dishId} postComment={postComment} />
        </div>
    )
}

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div className='col-12 col-md-5 m-1'>
                <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Card>
                        <CardImg width="100%" src={baseUrl+dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </FadeTransform>
            </div>
        )
    }
    else {
        return (<div></div>)
    }
}



export default Dishdetail 