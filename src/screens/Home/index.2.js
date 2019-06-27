import React, { Component } from 'react';
import './index.css'
 import { Navbar, Nav, Container, NavDropdown, Form, InputGroup, FormControl, Image, Button, Divider, Sidebar, Transition } from 'react-bootstrap';

class Header extends Component {

    state = {
        open: false
    }
    componentDidMount() {
      window.addEventListener('scroll', this.handleScroll.bind(this)) //监听滚动
      window.addEventListener('resize', this.handleResize.bind(this)) //监听窗口大小改变
    }
  
    componentWillUnmount() { //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
      window.removeEventListener('scroll', this.handleScroll.bind(this)) 
      window.removeEventListener('resize', this.handleResize.bind(this))
    }
  
    handleScroll = e => {
      console.log(
        '浏览器滚动事件',
        e.srcElement.scrollingElement.scrollTop,
        e.srcElement.scrollingElement.scrollHeight
      )
      //e.srcElement.scrollingElement.scrollTop为距离滚动条顶部高度
      // e.srcElement.scrollingElement.scrollHeight为整个文档高度
    }
  
    handleResize = e => {
      console.log('浏览器窗口大小改变事件', e.target.innerWidth)
    }

    render() {


        return (
            <div>
              <Navbar collapseOnSelect expand="lg" /*bg="dark" variant="dark"*/>
                <Navbar.Brand href="#home">Hydro</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="top-nav-collapse">
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
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>
<p>333</p>


            </div>
        );
    }
}

export default Header;
