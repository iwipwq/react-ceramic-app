import React from 'react'
import { Navbar, Nav, NavLink } from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
import logo from '../images/icons/logo-sm.png'
import cart from '../images/icons/cart-sm.png'

function Header() {
  return (
    <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
        <div className="container">
            <Navbar className='w-100' collapseOnSelect expand='lg' variant='dark'>
                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Brand href='/'>
                    <img src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='nav-justified w-100 nav-fill'>
                        <Nav.Link href='/'>service</Nav.Link>
                        <Nav.Link href='/login'>Login</Nav.Link>
                        <Nav.Link href='/user'>
                            <imng src={cart} alt="cart" />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    </div>
  )
}

export default Header