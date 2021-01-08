import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../footprint.svg';
import cart from '../cart.svg';
import option from '../option.svg';

function MainNav() {
    function handleClick() {
        alert('로그아웃이 완료되었습니다.')
        window.location.href="/home"
    }

    return (
        <Navbar sticky="top" style={{ background: "#CDC5C2" }}>
            <Navbar.Brand href="/home" className="text-light">
                <img alt="로고" src={logo} width="24" height="24" />
                {' '}KU#
            </Navbar.Brand>
            <Nav className="float-right">
                <Nav.Link className="text-light" href="/login">Login</Nav.Link>
                <Nav.Link className="text-light" href="/signup">Signup</Nav.Link>
                <Nav.Link href="/shoppingcart">
                    <img alt="카트" src={cart} width="30" height="30" />
                </Nav.Link>
                <Nav.Link className="text-light" onClick={() => handleClick()}>Logout</Nav.Link>
                <Nav.Link href="/admin">
                    <img alt="관리자" src={option} width="30" height="30" />
                </Nav.Link>
            </Nav>
        </Navbar>
    )
}

export default MainNav