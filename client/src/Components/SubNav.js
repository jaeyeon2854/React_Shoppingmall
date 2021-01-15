import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import axios from 'axios';
import catchErrors from '../utils/catchErrors';

function SubNav() {
    const [categoriesDiv, setCategoriesDiv] = useState([])
    const [error, setError] = useState('')


    useEffect(async () => {
        try {
            const response = await axios.get('/api/categories')
            let list = []
            Object.keys(response.data[0]).forEach((ele) => {
                const url = ele.toLowerCase()
                list.push(
                    <Nav.Link as={Link} to={`/categories/${url}`}>{ele}</Nav.Link>
                )
            })
            setCategoriesDiv(list)
        } catch (error) {
            catchErrors(error, setError)
        }
    }, [])

    return (
        <Navbar sticky="top" className="flex-nowrap" style={{ top: "62px", paddingTop: "0", paddingBottom: "0", backgroundColor: "#fff" }}>
            <style type="text/css">
                {`
                .nav-link, .nav-link:hover, .nav-link:active {
                    color: #91877F;
                }
                `}
            </style>
            <Nav style={{overflowX: "auto"}}>
                {categoriesDiv.map(item => item)}
            </Nav>
        </Navbar>
    )
}

export default SubNav