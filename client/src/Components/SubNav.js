import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function SubNav() {
    const [toggle, setToggle] = useState({ "dress": false, "outer": false, "top": false, "pants": false, "skirt": false, "training": false, "shoes": false });

    function handleMouseEnter(id) {
        setToggle({ [id]: true })
    }

    function handleMouseLeave(id) {
        setToggle({ [id]: false })
    }

    function handleToggle(id) {
        setToggle({ [id]: !toggle[`${id}`] })
    }

    function handleClick(url) {
        return <Redirect to={url} />
    }

    return (
        <Navbar sticky="top" className="flex-nowrap" style={{ top: "62px", paddingTop: "0", paddingBottom: "0", backgroundColor: "#fff", overflowX: "auto" }}>
            <style type="text/css">
                {`
                .nav-link, .nav-link:hover, .nav-link:active {
                    color: #91877F;
                }
                
                .dropdown-toggle:after {
                    display: none;
                }

                .dropdown-menu {
                    background-color: #91877F;
                }

                .dropdown-item {
                    color: #f8f9fa;
                }

                .dropdown-item:focus, .dropdown-item:hover {
                    color: #91877F;
                }

                .dropdown-item:active {
                    background-color: #f8f9fa;
                }
                `}
            </style>

            <Nav>
                <NavDropdown title="DRESS" onMouseEnter={() => handleMouseEnter("dress")} onMouseLeave={() => handleMouseLeave("dress")} show={toggle.dress} toggle={() => handleToggle("dress")} onClick={() => handleClick("/dress")}>
                    <NavDropdown.Item href="/dress/long">LONG DRESS</NavDropdown.Item>
                    <NavDropdown.Item href="/dress/short">SHORT DRESS</NavDropdown.Item>
                    <NavDropdown.Item href="/dress/knit">KNIT DRESS</NavDropdown.Item>
                    <NavDropdown.Item href="/dress/shirt">SHIRT DRESS</NavDropdown.Item>
                    <NavDropdown.Item href="/dress/pattern">PATTERN DRESS</NavDropdown.Item>
                    <NavDropdown.Item href="/dress/bustier">BUSTIER DRESS</NavDropdown.Item>
                    <NavDropdown.Item href="/dress/two-piece">TWO-PIECE DRESS</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="OUTER" onMouseEnter={() => handleMouseEnter("outer")} onMouseLeave={() => handleMouseLeave("outer")} show={toggle.outer} toggle={() => handleToggle("outer")} onClick={() => handleClick("/outer")}>
                    <NavDropdown.Item href="/outer/padded-jacket">PADDED JACKET</NavDropdown.Item>
                    <NavDropdown.Item href="/outer/jacket">JACKET</NavDropdown.Item>
                    <NavDropdown.Item href="/outer/jumper">JUMPER</NavDropdown.Item>
                    <NavDropdown.Item href="/outer/coat">COAT</NavDropdown.Item>
                    <NavDropdown.Item href="/outer/fleece">FLEECE</NavDropdown.Item>
                    <NavDropdown.Item href="/outer/cardigan_vest">CARDIGAN / VEST</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="TOP" onMouseEnter={() => handleMouseEnter("top")} onMouseLeave={() => handleMouseLeave("top")} show={toggle.top} toggle={() => handleToggle("top")} onClick={() => handleClick("/top")}>
                    <NavDropdown.Item href="/top/knit">KNIT</NavDropdown.Item>
                    <NavDropdown.Item href="/top/hoody">HOODY</NavDropdown.Item>
                    <NavDropdown.Item href="/top/blouse">BLOUSE</NavDropdown.Item>
                    <NavDropdown.Item href="/top/shirt">SHIRT</NavDropdown.Item>
                    <NavDropdown.Item href="/top/sweatshirt">SWEATSHIRT</NavDropdown.Item>
                    <NavDropdown.Item href="/top/long-sleeve-shirt">LONG SLEEVE SHIRT</NavDropdown.Item>
                    <NavDropdown.Item href="/top/short-sleeved-shirt_sleeveless-shirt">SHORT SLEEVE / SLEEVELESS SHIRT</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="PANTS" onMouseEnter={() => handleMouseEnter("pants")} onMouseLeave={() => handleMouseLeave("pants")} show={toggle.pants} toggle={() => handleToggle("pants")} onClick={() => handleClick("/pants")}>
                    <NavDropdown.Item href="/pants/jeans">JEANS</NavDropdown.Item>
                    <NavDropdown.Item href="/pants/skinny-jeans">SKINNY JEANS</NavDropdown.Item>
                    <NavDropdown.Item href="/pants/banding">BANDING PANTS</NavDropdown.Item>
                    <NavDropdown.Item href="/pants/wide-fit">WIDE-FIT PANTS</NavDropdown.Item>
                    <NavDropdown.Item href="/pants/boot-cut">BOOT-CUT PANTS</NavDropdown.Item>
                    <NavDropdown.Item href="/pants/straight-fit">STRAIGHT-FIT PANTS</NavDropdown.Item>
                    <NavDropdown.Item href="/pants/wide-fit">WIDE-FIT PANTS</NavDropdown.Item>
                    <NavDropdown.Item href="/pants/shorts">SHORTS</NavDropdown.Item>
                    <NavDropdown.Item href="/pants/trousers">TROUSERS</NavDropdown.Item>
                    <NavDropdown.Item href="/pants/leggings">LEGGINGS</NavDropdown.Item>
                    <NavDropdown.Item href="/pants/jumpsuit_overalls">JUMPSUIT / OVERALLS</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="SKIRT" onMouseEnter={() => handleMouseEnter("skirt")} onMouseLeave={() => handleMouseLeave("skirt")} show={toggle.skirt} toggle={() => handleToggle("skirt")} onClick={() => handleClick("/skirt")}>
                    <NavDropdown.Item href="/skirt/long">LONG SKIRT</NavDropdown.Item>
                    <NavDropdown.Item href="/skirt/midi">MIDI SKIRT</NavDropdown.Item>
                    <NavDropdown.Item href="/skirt/mini">MINI SKIRT</NavDropdown.Item>
                </NavDropdown>
                <Nav.Item>
                    <Nav.Link href="/training">TRAINING</Nav.Link>
                </Nav.Item>
                <NavDropdown title="SHOES" onMouseEnter={() => handleMouseEnter("shoes")} onMouseLeave={() => handleMouseLeave("shoes")} show={toggle.shoes} toggle={() => handleToggle("shoes")} onClick={() => handleClick("/shoes")}>
                    <NavDropdown.Item href="/skirt/sneakers_slip-on">SNEAKERS / SLIP-ON</NavDropdown.Item>
                    <NavDropdown.Item href="/skirt/flat_loafer">FLAT / LOAFER</NavDropdown.Item>
                    <NavDropdown.Item href="/skirt/heel_pump">HEEL / PUMP</NavDropdown.Item>
                    <NavDropdown.Item href="/skirt/boots">BOOTS</NavDropdown.Item>
                    <NavDropdown.Item href="/skirt/sandal_slipper">SANDAL / SLIPPER</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

export default SubNav