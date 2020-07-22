import React,{Component} from 'react';
import {Container,Jumbotron} from 'react-bootstrap'
import ContactLogo from "../img/contact.png";

class Contact extends Component {
    render() {
        return (
            <Container key={Math.random}>
            <br/><br/>
                <Jumbotron>
                    <h1><img src={ContactLogo} alt="Logo"/> Contact Us</h1>
                </Jumbotron>

                <Jumbotron>
                    <h3>Email:</h3>
                    <h5>contact@trainmode.com</h5>
                    <br/>
                    <h3>Phone Number:</h3>
                    <h5>647-807-7988</h5>
                    <br/>
                    <h4>Meet us at any of our locations for any questions!</h4>
                    <br/>
                    <h3>Locations:</h3>
                    <h5>Hockey Facility: 66 Puck Street, ON M2N 1Y1</h5>
                    <h5>Basketball Facility: 88 Basket Street, ON M1N 0Y1</h5>
                    <h5>Soccer Facility: 55 Ball Street, ON M0N 2Y1</h5>
                </Jumbotron>  

            </Container>
        )
    }
}

export default Contact