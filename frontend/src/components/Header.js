import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { LinkContainer } from 'react-router-bootstrap'

export default function Header() {
    return (
        <div>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='/cart/'>
                                <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/login'>
                                <Nav.Link><i className='fas fa-user'></i>Login</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
