import React, { useState, useEffect, useRef } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import catchErrors from '../utils/catchErrors';
import { isAuthenticated } from '../utils/auth'
import CartCard from '../Components/CartCard';

function ShoppingCart() {
    const [num, setNum] = useState()
    const [error, setError] = useState('')
    const [cart, setCart] = useState([])
    const [finalPrice, setFinalPrice] = useState(0)
    const user = isAuthenticated()

    useEffect(() => {
        getCart()
    }, [user])

    function plusNum() {
        num = num + 1
        setNum(num + 1)
    }
    function minusNum() {
        if (num === 0) {
            setNum(0)
        }
        else {
            setNum(num - 1)
        }
    }
    async function deleteCart(e) {
        //장바구니 DB에서 해당 항목 삭제 
        console.log(e.target.name)
        try {
            const response = await axios.post('/api/cart/deletecart', { 
                userId : user,
                cartId: e.target.name })
            console.log(response.data)
            setCart(response.data.products)
        } catch (error) {
            catchErrors(error, setError)
        }

        console.log('카트에 담긴 항목을 삭제했습니다.')
    }

    async function getCart() {
        try {
            const response = await axios.get(`/api/cart/showcart/${user}`)
            console.log(response.data)
            setCart(response.data)
            const finalPrices = response.data.map((e) => {
                return e.count * e.productId.price
            })
            setFinalPrice(finalPrices.reduce((a, b) => (a + b)))
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    return (
        <div>
            <Container className="justify-content-center">
                <h1 className="my-5 font-weight-bold text-center">장바구니</h1>
                <div>
                    <h4 className="font-weight-bold py-3 border-top border-bottom text-center" style={{ background: '#F7F3F3' }}>주문상품정보</h4>
                    {cart.length >0
                        ? <CartCard cart={cart} deleteCart={deleteCart} minusNum={minusNum} plusNum={plusNum} num={num} />
                        : <div className="text-center my-5">장바구니에 담긴 상품이 없습니다.</div>}

                </div>
                <div className="p-5 m-3" style={{ background: '#F7F3F3' }}>
                    <ul className="pl-0" style={{ listStyle: 'none' }}>
                        <li>
                            <span className="text-secondary">총 상품금액</span>
                            <span className="text-secondary float-right">{finalPrice}원</span>
                        </li>
                        <li>
                            <span className="text-secondary">배송비</span>
                            <span className="text-secondary float-right">2500원</span>
                        </li>
                    </ul>
                    <div className="my-1 pt-2 border-top font-weight-bold">
                        결제금액<span className="float-right">{finalPrice + 2500}원</span>
                    </div>
                </div>
                <div className="text-center">
                    <Button as={Link} to={{
                            pathname: `/payment`,
                            state: { cart }
                        }} className="px-5" style={{ background: "#91877F", borderColor: '#91877F' }} block>결제하기</Button>
                </div>
            </Container>

        </div>
    )
}

export default ShoppingCart