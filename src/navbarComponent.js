import React from "react";
import { Container, Row, Col, Form, Nav, Navbar,Button} from 'react-bootstrap';

function NavbarComponent(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                src="/logo192.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React logo"
                />
            </Navbar.Brand>
                <Nav>
                <Navbar.Brand href="https://github.com/alirezaVafadar">
                    <img
                    src="/Github.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="https://www.linkedin.com/in/alirezavafadar/">
                    <img
                    src="/linkedin.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="https://alirezavafadar.dev">
                    <img
                    src="/website.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="website logo"
                    />
                </Navbar.Brand>
                </Nav>
            </Container>
            </Navbar>
    );
}
export default NavbarComponent;