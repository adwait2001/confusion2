import React, { Component } from 'react';
import {Button,Modal,ModalBody,ModalHeader,Row,Label} from 'reactstrap'
import {Control ,LocalForm ,Errors} from 'react-redux-form';

const required=(val)=>val && val.length;
const min=(len)=>(val)=>!(val)||(val.length >= len)
const max=(len)=>(val)=>!(val)||(val.length <= len)

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


export default CommentForm;