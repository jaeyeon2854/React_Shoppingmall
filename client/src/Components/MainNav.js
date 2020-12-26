import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../public/img/footprint.ico';
import cart from '../cart.svg';
import option from '../option.svg';

function MainNav() {

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">
                <img src={logo} width="30" height="30" />
                {' '}KU#
            </Navbar.Brand>
            <Nav className="justify-content-end">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Signup</Nav.Link>
                <Nav.Link href="/shoppingcart">
                    <img src={cart} width="30" height="30" />
                </Nav.Link>
                <Nav.Link onClick={() => { alert('로그아웃이 완료되었습니다.') }}>Logout</Nav.Link>
                <Nav.Link href="/admin/:id">
                    <img src={option} width="30" height="30" />
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MainNav