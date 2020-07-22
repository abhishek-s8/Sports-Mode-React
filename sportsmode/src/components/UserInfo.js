import React,{Component} from 'react';
import {Container,Jumbotron,CardColumns,Button} from 'react-bootstrap'
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
                        <li class="breadcrumb-item"><a href="/UserInfo">Your Info</a></li>
                        <li class="breadcrumb-item">Payment Info</li>
	                </ol>
	            </nav>

                <Jumbotron>
                        <h2>Step 2: <b>Your Info</b></h2>
                        <br/>
                            <label for="fullname">Full Name: </label>
                            <input type="name" class="form-control" id="exampleInputEmail1" placeholder="Enter Full Name"></input>
                            <br/><br/>
                            <label for="email">Email Address: </label>
                            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Email Address"></input>
                            <br/><br/>
                            <label for="phone">Phone Number: </label>
                            <input type="phone" class="form-control" id="exampleInputEmail1" placeholder="Enter Phone Number"></input>
                        <br/><br/>
                        <Button href="/Payment" block>Next</Button> 

                </Jumbotron> 
            </Container>
        )
    }
}

export default Routine