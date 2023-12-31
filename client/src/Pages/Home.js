import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListCard from '../Components/ListCard';
import axios from 'axios';
import catchError from '../utils/catchErrors';
import { Container, Row } from 'react-bootstrap';


function Home() {
    const INIT_PRODUCT = {
        bestProduct: [],
        newProduct: [],
    }
    const [productlist, setProductlist] = useState(INIT_PRODUCT)
    const [error, setError] = useState('')

    useEffect(() => {
        getProductlist()
    }, [])

    async function getProductlist() {
        try {
            setError('')
            const response = await axios.get(`/api/product/getproduct`)
            setProductlist({ bestProduct: response.data.bestProduct, newProduct: response.data.newProduct })
        } catch (error) {
            catchError(error, setError)
        }
    }

    return (
        <Container>
            <style type="text/css">
                {`
                @font-face {
                    font-family: 'Jal_Onuel';
                    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Jal_Onuel.woff') format('woff');
                    font-weight: normal;
                    font-style: normal;
                }
                body{font-family:'Jal_Onuel'}
                
                a, a:hover, a:active {
                    color: #000;
                    text-decoration: none;
                }
                
                
                `}
            </style>
            <div className="my-4">
                <h2 style={{ marginRight: "5rem", marginLeft: "3rem", marginBottom: "2rem" }}>Best</h2>
                <Row className="justify-content-center mx-0">
                    {productlist.bestProduct.map(pro => (
                        <Link to={{
                            pathname: `/product/${pro._id}`,
                            state: {
                                id: pro._id,
                                name: pro.pro_name,
                                price: pro.price,
                                colors: pro.colors,
                                sizes: pro.sizes,
                                description: pro.description,
                                main_img: pro.main_imgUrl,
                                detail_imgs: pro.detail_imgUrls
                            }
                        }}>
                            <ListCard id={pro._id} name={pro.pro_name} price={pro.price} main_img={pro.main_imgUrl} status={'list'} />
                        </Link>
                    ))}
                </Row>
            </div>
            <div className="my-4">
                <h2 style={{ marginRight: "5rem", marginLeft: "3rem", marginBottom: "2rem", marginTop: "2rem" }}>New Arrival</h2>
                <Row className="justify-content-center mx-0">
                    {productlist.newProduct.map(pro => (
                        <Link to={{
                            pathname: `/product/${pro._id}`,
                            state: {
                                id: pro._id,
                                name: pro.pro_name,
                                price: pro.price,
                                colors: pro.colors,
                                sizes: pro.sizes,
                                description: pro.description,
                                main_img: pro.main_imgUrl,
                                detail_imgs: pro.detail_imgUrls
                            }
                        }}>
                            <ListCard id={pro._id} name={pro.pro_name} price={pro.price} main_img={pro.main_imgUrl} status={'list'} />
                        </Link>
                    ))}
                </Row>
            </div>
        </Container>
    )
}

export default Home