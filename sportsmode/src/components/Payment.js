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
                        <li class="breadcrumb-item"><a href="/Payment">Payment Info</a></li>
	                </ol>
	            </nav>

                <Jumbotron>
                        <h2>Step 3: <b>Payment Info</b></h2>
                        <br/>
                            <label for="fname">Credit Card Number: </label>
                            <input type="credit" class="form-control" id="exampleInputEmail1" placeholder="xxxx-xxxx-xxxx-xxxx"></input>
                            <br/><br/>
                            <label for="lname">Expiry Date: </label>
                            <input type="expiry" class="form-control" id="exampleInputEmail1" placeholder="xx/xx (month/year)"></input>
                            <br/><br/>
                            <label for="lname">Security Code: </label>
                            <input type="securitycode" class="form-control" id="exampleInputEmail1" placeholder="xxx"></input>
                            <br/><br/>
                            <label for="lname">Card Holder Name: </label>
                            <input type="cardholder" class="form-control" id="exampleInputEmail1" placeholder="Enter Full Name"></input>
                        <br/><br/>
                        <Button block>Book Now</Button> 
                        <p>Note: Email us a bookings@trainmode.com or call us at (888)-888-8888 for cancellations or any other inquiries.</p>
                </Jumbotron> 
            </Container>
        )
    }
}

export default Routine