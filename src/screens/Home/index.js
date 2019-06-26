import React, { Component } from 'react';

 import { Navbar, Nav, Container, NavDropdown, Form, InputGroup, FormControl, Image, Button, Divider, Sidebar, Transition } from 'react-bootstrap';

class Header extends Component {

    state = {
        open: false
    }


    render() {


        return (
            <div>
              <Navbar collapseOnSelect expand="lg" /*bg="dark" variant="dark"*/>
                <Navbar.Brand href="#home">Hydro</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="hello">
                  <Nav className="mr-auto">
                    <Nav.Link href="#features">Home</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#features">Blog</Nav.Link>
                    <Nav.Link href="#pricing">OurWork</Nav.Link>
                    <Nav.Link href="#pricing">Contacts</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      Dank memes
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>



            </div>
        );
    }
}

export default Header;
