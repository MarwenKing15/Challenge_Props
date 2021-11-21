import React from 'react'
import { Container, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import  Car  from "./Car";

function Cars({cars}) {
    return (
        <div>
            <DropdownButton id="dropdown-basic-button" title="Sort By">
                <Dropdown.Item href="#/action-1">Name, A to Z</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Name, Z to A</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Price descending</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Price ascending</Dropdown.Item>
            </DropdownButton>
            <br/>
            <Container>
                <Row>
            {cars.map((car) => { return(
                    <Col>
                        <Car name={car.name} price={car.price} imgSrc={car.imgSrc}>
                        </Car>
                    </Col>
            )})}
                </Row>
            </Container>
        </div>
    )
}

export default Cars
