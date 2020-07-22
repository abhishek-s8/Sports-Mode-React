import React from 'react'
import {Navbar} from 'react-bootstrap';


const Footer = () => {

    return (
        <div className="footer" key={Math.random}> 
        <br/><br/>
            <Navbar sticky="bottom">
                <p>Website Designed by Abhishek Saravanabavan (Student Number: 300062167)</p>
            </Navbar>
        </div>
    )
}

export default Footer