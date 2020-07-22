import React,{Component} from 'react';
import {Container,Jumbotron,Button,Form} from 'react-bootstrap'
import Appoint from "../img/appointment.png";

class Routine extends Component {
    render() {
            console.log(this.state);
            return (
            <Container key={Math.random}>
            <br/><br/>
                <Jumbotron>
                    <h1><img src={Appoint}/> Book Appointment</h1>
                </Jumbotron> 

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="/Book">Session Details</a></li>
                        <li class="breadcrumb-item">Your Info</li>
                        <li class="breadcrumb-item">Payment Info</li>
	                </ol>
	            </nav>

                <Jumbotron>
                        <h2>Step 1: <b>Session Details</b></h2>
                        <br/>
                            <label for="Sport">Preferred sport: </label>
                            <select class="form-control" id="exampleSelect1">
                                <option></option>
                                <option>Hockey</option>
                                <option>Basketball</option>
                                <option>Soccer</option>
                            </select>
                            <br/><br/>
                            <label for="Skill">Skill Drills: </label>
                            <select multiple class="form-control" id="exampleSelect2">
                                <option>Skill 1 Training</option>
                                <option>Skill 2 Training</option>
                                <option>Skill 3 Training</option>
                            </select>
                            <br/><br/>
                            <label for="Date">Date: </label>
                            <input class="form-control" type="date" value="2020-07-21" id="example-date-input"></input>
                            <br/><br/>
                            <label for="Time">Time Length: </label>
                            <select class="form-control" id="exampleSelect1">
                                <option>1 hour</option>
                                <option>1.5 hours</option>
                                <option>2 hours</option>
                                <option>2.5 hours</option>
                                <option>3 hours</option>
                            </select>
                            <br/><br/>
                            <label for="Instructor">Instructor: </label>
                            <br/>
                            <small>Based on the skills you chosen we reccomend Instructor Steve</small>
                            <br/><br/>
                            <select class="form-control" id="exampleSelect1">
                                <option>Instructor Steve</option>
                                <option>Instructor Bob</option>
                                <option>Instructor Sam</option>
                            </select>
                        <br/><br/>
                        <Button href="/UserInfo" block>Next</Button> 

                </Jumbotron> 
            </Container>
        )
    }
}

export default Routine