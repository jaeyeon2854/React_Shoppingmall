import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import catchErrors from '../utils/catchErrors';
import { Navbar, Nav } from 'react-bootstrap';

function SubNav() {
    const [categoriesDiv, setCategoriesDiv] = useState([])
    const [error, setError] = useState('')

    useEffect(async () => {
        try {
            const response = await axios.get('/api/categories/main')
            let list = []
            Object.keys(response.data[0]).forEach((ele) => {
                const url = ele.toLowerCase()
                list.push(
                    <Nav.Link href={`/categories/${url}`}>{ele}</Nav.Link>
                )
            })
            setCategoriesDiv(list)
        } catch (error) {
            catchErrors(error, setError)
        }
    }, [])

    return (
        <Navbar sticky="top" className="flex-nowrap" style={{ top: "56px", paddingTop: "0", paddingBottom: "0", backgroundColor: "#fff" }}>
            <style type="text/css">
                {`
                @font-face {
                    font-family: 'Jal_Onuel';
                    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Jal_Onuel.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
                }
                body{font-family:'Jal_Onuel'}
                
                .nav-link, .nav-link:hover, .nav-link:active {
                    color: #91877F;
                }
                `}
            </style>
            <Nav style={{ overflowX: "auto" }}>
                {categoriesDiv.map(item => item)}
            </Nav>
        </Navbar>
    )
}

export default SubNav