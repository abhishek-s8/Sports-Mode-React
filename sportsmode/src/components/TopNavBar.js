import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import Logo from "../img/logo.png";

class TopNavBar extends Component {

    render() {
        return (
            <Navbar className="navbar" variant="dark" key={Math.random}>
            <div className="navbrand"><NavLink to='/Home' className="link"><img src={Logo} alt="Logo" style={{height : '111px', width : '200px'}}/></NavLink></div>
            <Nav className="mr-auto">
              <div className="navlink">◆</div>
              <div className="navlink"><NavLink to='/Services' className="link">Training Services</NavLink></div>
              <div className="navlink">◆</div>
              <div className="navlink"><NavLink to='/Instructor' className="link">Instructors</NavLink></div>
              <div className="navlink">◆</div>
              <div className="navlink"><NavLink to='/Support' className="link">Support</NavLink></div>
              <div className="navlink">◆</div>
              <div className="navlink"><NavLink to='/Contact' className="link">Contact Us</NavLink></div>
              <div className="navlink">◆</div>
            </Nav>

            <Nav className="ml-auto">
              <div className="navlink2">◆</div>
              <div className="navlink2"><NavLink to='/Book' className="link">Book Appointment</NavLink></div>
              <div className="navlink2">◆</div>
            </Nav>
          </Navbar>
        )
    }
}

export default TopNavBar