import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { handleLogout, isAuthenticated, isAdmin } from '../utils/auth';

function MainNav() {
    const user = isAuthenticated()
    const admin = isAdmin()

    return (
        <Navbar sticky="top" style={{ background: "#CDC5C2" }}>
            <Navbar.Brand href="/home" className="text-light">
                <img alt="로고" src="/icon/footprint.svg" width="18" height="18" />
                {' '}KU#
            </Navbar.Brand>
            <Nav className="ml-auto d-flex align-items-center">
                {user ?
                    <>
                        <Nav.Link className="text-light" onClick={() => handleLogout()}>Logout</Nav.Link>
                        {/* <Nav.Link className="text-light" href="/account"> Mypage </Nav.Link> */}
                        {admin ?
                            ''
                            : (
                                <Nav.Link className="text-light" href="/account"> Mypage </Nav.Link>,
                                <Nav.Link href="/shoppingcart">
                                    <img alt="카트" src="/icon/cart.svg" width="30" height="30" />
                                </Nav.Link>
                            )}
                    </>
                    : (
                        <>
                            <Nav.Link className="text-light" href='/login'>Login</Nav.Link>
                            <Nav.Link className="text-light" href='/signup'>Sign Up</Nav.Link>
                        </>
                    )}
                {admin ? <Nav.Link href="/admin">
                    <img alt="관리자" src="/icon/option.svg" width="30" height="30" />
                </Nav.Link> : ''}
            </Nav>
        </Navbar>
    )
}

export default MainNav