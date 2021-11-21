import React from 'react'
import {Card,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/Car.css'

function Car(props) {
  const buyCar=()=>alert(`You have to pay ${props.price} to buy a ${props.name}`);
    return (
        <div>
            <Card style={{ width: '20rem' }}>
              <Card.Img variant="top" src={props.imgSrc} height='180px'/>
              <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.price}</Card.Text>
                <Button variant="primary" className="buyingBtn" onClick={()=>buyCar()} >Buy</Button>
              </Card.Body>
            </Card>
            <br/>
        </div>
    )
}

export default Car
