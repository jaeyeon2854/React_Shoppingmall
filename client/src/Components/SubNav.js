import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function SubNav() {
    function handleMouseEnter(e) {
        console.log(e.target)
    }

    return (
        <Nav>
            <Nav.Item eventKey="1">
                <Nav.Link href="/dress">DRESS</Nav.Link>
            </Nav.Item>
            <Nav.Item eventKey="2">
                <Nav.Link href="/outer">OUTER</Nav.Link>
            </Nav.Item>
            <Nav.Item eventKey="3">
                <Nav.Link href="/top">TOP</Nav.Link>
            </Nav.Item>
            <Nav.Item eventKey="4">
                <Nav.Link href="/bottom">BOTTOM</Nav.Link>
            </Nav.Item>
            <Nav.Item eventKey="5">
                <Nav.Link href="/training">TRAINING</Nav.Link>
            </Nav.Item>
            <Nav.Item eventKey="6">
                <Nav.Link href="/inner">INNER</Nav.Link>
            </Nav.Item>
            <Nav.Item eventKey="7">
                <Nav.Link href="/shoes">SHOES</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default SubNav