import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import catchErrors from '../utils/catchErrors';
import { isAuthenticated } from '../utils/auth'
import CartCard from '../Components/CartCard';

function ShoppingCart() {

    const [num, setNum] = useState(0)
    const [error, setError] = useState('')
    const [cart, setCart] = useState()
    const user = isAuthenticated()

    useEffect(() => {
        getCart()
    }, [user])

    function plusNum() {
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
            const response = await axios.post('/api/cart/deletecart', { cartId: e.target.name })
            console.log(response.data)
        } catch (error) {
            catchErrors(error, setError)
        }

        console.log('카트에 담긴 항목을 삭제했습니다.')
    }

    async function getCart() {
        // const userId= localStorage.getItem('loginStatus')
        try {
            const response = await axios.get(`/api/cart/showcart/${user}`)
            console.log(response.data)
            setCart(response.data)
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    return (
        <div>
            {/* {getCart()} */}
            {/* {console.log(user)} */}
            {/* {console.log(cart)} */}
            <Container className="justify-content-center">
                <h3 className="my-5 font-weight-bold text-center">장바구니</h3>
                <div>
                    <h4 className="font-weight-bold py-3 border-top border-bottom text-center" style={{ background: '#F7F3F3' }}>주문상품정보</h4>
                    {cart?<CartCard cart={cart} deleteCart={deleteCart} minusNum={minusNum} plusNum={plusNum} num={num} />:<div></div>}

                </div>
                <div className="p-5 m-5" style={{ background: '#F7F3F3' }}>
                    <ul className="pl-0" style={{ listStyle: 'none' }}>
                        <li>
                            <span className="text-secondary">총 상품금액</span>
                            <span className="text-secondary float-right">12,000원</span>
                        </li>
                        <li>
                            <span className="text-secondary">배송비</span>
                            <span className="text-secondary float-right">2,500원</span>
                        </li>
                    </ul>
                    <div className="my-1 pt-2 border-top font-weight-bold">
                        결제금액<span className="float-right">14,500원</span>
                    </div>
                </div>
                <div className="text-center">
                    <Button className="px-5" style={{ background: "#91877F", borderColor: '#91877F' }} href="/payment" block>결제하기</Button>
                </div>
            </Container>

        </div>
    )
}

export default ShoppingCart