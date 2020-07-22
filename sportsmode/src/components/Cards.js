import React from 'react'
import {Card,Button} from 'react-bootstrap'

import Img1 from "../img/speed.jpg"
import Img2 from "../img/agility.jpg"
import Img3 from "../img/shot.jpg"
import Img4 from "../img/ballshot.jpg"
import Img5 from "../img/dribble.jpg"
import Img6 from "../img/defense.jpg"
import Img7 from "../img/footwork.jpg"
import Img8 from "../img/soccershot.jpg"
import Img9 from "../img/soccerdefense.jpg"
import Img10 from "../img/steve.jpg"
import Img11 from "../img/bob.jpg"
import Img12 from "../img/sam.jpg"
import Img13 from "../img/chris.jpg"
import Img14 from "../img/emily.jpg"
import Img15 from "../img/gingka.jpg"
import Img16 from "../img/olivia.jpg"
import Img17 from "../img/selena.jpg"
import Img18 from "../img/william.jpg"

function getImage (id) {
    switch (id) {
        case 1: return Img1;
        case 2: return Img2;
        case 3: return Img3;
        case 4: return Img4;
        case 5: return Img5;
        case 6: return Img6;
        case 7: return Img7;
        case 8: return Img8;
        case 9: return Img9;
        case 10: return Img10;
        case 11: return Img11;
        case 12: return Img12;
        case 13: return Img13;
        case 14: return Img14;
        case 15: return Img15;
        case 16: return Img16;
        case 17: return Img17;
        case 18: return Img18;
        default: break;
      }
}

const Cards = ({products}) => {

    const productsCards = products.length ? (
        products.map (product => {
            return (
                <Card border="info" style={{ width: '100%' }} key={product.id}>

                    <Card.Img variant="top" src={getImage(product.id)} />
                    <Card.Header>
                        <Card.Title>{product.name}</Card.Title>
                    </Card.Header>
                    <Card.Body variant="pull-right px-2">
                        <Card.Text>
                            <b>Description: </b> {product.description}<br/>
                        </Card.Text>
                    </Card.Body>
                </Card> 
            )
        })
    ) : (
        <p></p>
    );

    return (
        <div className="products" key={Math.random}>
            {productsCards}
        </div>
    )
}

export default Cards