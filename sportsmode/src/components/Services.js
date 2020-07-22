import React,{Component} from 'react';
import {Container,Jumbotron,CardColumns} from 'react-bootstrap'
import Service from "../img/service.png";
import ServiceCards from "./Cards";

class Services extends Component {
    state = {
        skills : [
            {
                id:1, 
                name: 'Skill 1 Training',
                description: 'Speed Training',  
            },
            {
                id:2,
                name: 'Skill 2 Training',
                description: 'Agility Training',
            },
            {
                id:3,
                name: 'Skill 3 Training',
                description: 'Shot Training',
            },
            {
                id: 4,
                name: "Skill 1 Training",
                description: 'Shooting Drills',
            },
            {
                id: 5,
                name: "Skill 2 Training",
                description: 'Dribbling Drills',
            },
            {
                id: 6,
                name: "Skill 3 Training",
                description: 'Defense Drills',
            },
            {
                id: 7,
                name: "Skill 1 Training",
                description: 'Footwork Drills',
            },
            {
                id: 8,
                name: "Skill 2 Training",
                description: 'Shooting Drills',
            },
            {
                id: 9,
                name: "Skill 3 Training",
                description: 'Defense Drills',
            },
        ]
    }
    render() {
        return (
            <Container key={Math.random}>
            <br/><br/>
                <Jumbotron>
                    <h1><img src={Service} alt="Logo"/> Training Services</h1>
                </Jumbotron> 

                <Jumbotron>
                <h2>&emsp;&emsp;&ensp;&ensp;&ensp; Hockey &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;&ensp; Basketball &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; Soccer</h2>
                    <CardColumns>
                         <ServiceCards products={this.state.skills} /> 
                    </CardColumns>
                </Jumbotron>  

            </Container>
        )
    }
}

export default Services