import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../footprint.svg';
import cart from '../cart.svg';
import option from '../option.svg';
import { handleLogout, isAuthenticated } from '../utils/auth'

function MainNav() {
    const user = isAuthenticated()

    return (
        <Navbar sticky="top" style={{ background: "#CDC5C2" }}>
            <Navbar.Brand href="/home" className="text-light">
                <img alt="로고" src={logo} width="24" height="24" />
                {' '}KU#
            </Navbar.Brand>
            <Nav>
                {user ? <Nav.Link className="text-light" onClick={() => handleLogout()}>Logout</Nav.Link>
                    : (
                        <>
                            <Nav.Link className="text-light" href='/login'>Login</Nav.Link>
                            <Nav.Link className="text-light" href='/signup'>Sign Up</Nav.Link>
                        </>
                    )}
                <Nav.Link href="/shoppingcart">
                    <img alt="카트" src={cart} width="30" height="30" />
                </Nav.Link>
                <Nav.Link href="/admin">
                    <img alt="관리자" src={option} width="30" height="30" />
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MainNav