import React from 'react';
import {Navbar,Button,Nav} from 'react-bootstrap'

class Home extends React.Component{
    render(){
        return (
            <Navbar bg="primary" expand="lg" variant="dark">
                <Navbar.Brand href="#">Labowd.com</Navbar.Brand>

                <Nav className="ml-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">Services</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                    <Nav.Link href="#">Policy</Nav.Link>
                    <Button variant="danger" href="#">List Records</Button>
                </Nav>

            </Navbar>
        );
    }
}

export default Home;

