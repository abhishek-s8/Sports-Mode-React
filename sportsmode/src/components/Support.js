import React,{Component} from 'react';
import {Container,Jumbotron} from 'react-bootstrap'
import Water from "../img/support.png";
import Sponsors from "../img/sponsors.png";

class Support extends Component {
    render() {
        return (
            <Container key={Math.random}>
            <br/><br/>
                <Jumbotron>
                    <h1><img src={Water} alt="Logo"/> Support</h1> 
                </Jumbotron> 

                <Jumbotron>
                    <h2>Our Sponsors</h2>
                    <img src={Sponsors} alt="Sponsors"/>
                    <br/>
                    <br/>
                    <h2>Volunteer</h2>
                    <p>If you're willing to give us a helping hand in supporting the community please email us at volunteer@trainmode.com</p>
                    <p></p>
                </Jumbotron>  

            </Container>
        )
    }
}

export default Support