import React,{Component} from 'react';
import {Container,Jumbotron, CardColumns} from 'react-bootstrap'
import InstructorLogo from "../img/instructor.png";
import InstructorCards from "./Cards";

class Instructor extends Component {
    state = {
        instructors : [
            {
                id:10, 
                name: 'Steve',
                description: 'Specalizes in Speed Training',
            },
            {
                id:11,
                name: 'Bob',
                description: 'Specalizes in Agility Training',
            },
            {
                id:12,
                name: 'Sam',
                description: 'Specalizes in Shot Training',
            },
            {
                id:13,
                name: "Chris",
                description: 'Specalizes in Shooting Drills',
            },
            {
                id:14,
                name: "Emily",
                description: 'Specalizes in Dribbling Drills',
            },
            {
                id:15,
                name: "Gingka",
                description: 'Specalizes in Defense Drills',
            },
            {
                id:16,
                name: "Olivia",
                description: 'Specalizes in Footwork Drills',
            },
            {
                id:17,
                name: "Selena",
                description: 'Specalizes in Shooting Drills',
            },
            {
                id:18,
                name: "William",
                description: 'Specalizes in Defense Drills',
            }
        ]
    }
    render() {
        return (
            <Container key={Math.random}>
            <br/><br/>
                <Jumbotron>
                    <h1><img src={InstructorLogo} alt="Logo"/> Instructors</h1>
                </Jumbotron> 
                
                <Jumbotron>
                    <h2>&emsp;&emsp;&ensp;&ensp;&ensp; Hockey &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;&ensp; Basketball &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp; Soccer</h2>
                    <CardColumns>
                        <InstructorCards products={this.state.instructors} /> 
                    </CardColumns>
                    
                </Jumbotron>  

            </Container>
        )
    }
}

export default Instructor