import React from 'react'
import {Container,Jumbotron,Button} from 'react-bootstrap'
import Logo from "../img/logo2.png";
import Banner from "../img/banner.png";

const Home = () => {

    return (
        <Container key={Math.random}>
        <br/><br/>
            <Jumbotron>
                <h1>Welcome to <img src={Logo} alt="Logo" style={{height : '38px', width : '230px'}}/></h1>
                <medium>Change language:</medium>
                <select class="form-control" id="language">
                    <option>English</option>
                    <option>French</option>
                </select>
                <br/>
                <img src={Banner} alt="Banner" style={{height : '331px', width : '1045px'}}/>
                <br/><br/>
                <Button href="/Book" block>Book Appointment</Button> 
            </Jumbotron> 
            <br></br>
            <Jumbotron>
                <h1>About <img src={Logo} alt="Logo" style={{height : '38px', width : '230px'}}/></h1>
                <p>For 25 years we have provided training for 1000s of athletes across the country. We have some of the best equipment and resources to help perfect your craft. Many successful athletes have joined our fitness program and point to our services as the biggest contribution to their success. Come join us today and see what you're missing out on!</p>
                <h2>Sports Offered</h2>
                <br/>
                <h5>◆ Hockey</h5>
                <h5>◆ Basketball</h5>
                <h5>◆ Soccer</h5>
                <br/>
                <h2>Hours of Availability</h2>
                <br/>
                <h5>Monday: 9AM - 6PM</h5>
                <h5>Tuesday: 9AM - 6PM</h5>
                <h5>Wednesday: 9AM - 6PM</h5>
                <h5>Thursday: 9AM - 6PM</h5>
                <h5>Friday: 9AM - 6PM</h5>
                <h5>Saturday: 9AM - 3PM</h5>
                <h5>Sunday: 9AM - 3PM</h5>
                <br/>
                <h2>Locations</h2> 
                <br/>
                <h5>Hockey Facility: 66 Puck Street, ON M2N 1Y1</h5>
                <h5>Basketball Facility: 88 Basket Street, ON M1N 0Y1</h5>
                <h5>Soccer Facility: 55 Ball Street, ON M0N 2Y1</h5>
            </Jumbotron> 
        </Container>
    )
}

export default Home