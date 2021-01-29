import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ListCard from '../Components/ListCard';
import axios from 'axios';
import catchErrors from '../utils/catchErrors';
import { isAuthenticated } from '../utils/auth';
import { Button, Container } from 'react-bootstrap';

function ShoppingCart() {
    const [error, setError] = useState('')
    const [cart, setCart] = useState([])
    const [finalCart, setFinalCart] = useState([])
    const [finalPrice, setFinalPrice] = useState(0)
    const user = isAuthenticated()

    useEffect(() => {
        getCart()
    }, [user])

    function plusNum(e) {
        const addCount = cart.map((el) => {
            if (el._id === e.target.name) {
                return { ...el, count: el.count + 1 }
            } else {
                return { ...el }
            }
        })
        setCart(addCount)
    }
    function minusNum(e) {
        const addCount = cart.map((el) => {
            if (el._id === e.target.name) {
                return { ...el, count: el.count - 1 }
            } else {
                return { ...el }
            }
        })
        setCart(addCount)
    }

    function checkedCart(e) {
        let price = 0
        const cartCheck = cart.map((el) => {
            if (el._id === e.target.name) {
                return { ...el, checked: !el.checked }
            } else {
                return { ...el }
            }
        })
        const list = cartCheck.filter((el) => el.checked === true)
        list.map((el) => {
            price = el.count * el.productId.price + price
        })
        setFinalPrice(price)
        setCart(cartCheck)
        setFinalCart(list)
    }

    async function deleteCart(e) {
        try {
            setError('')
            const response = await axios.post('/api/cart/deletecart', {
                userId: user,
                cartId: e.target.name
            })
            setCart(response.data.products)
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    async function getCart() {
        try {
            setError('')
            const response = await axios.get(`/api/cart/showcart/${user}`)
            const addChecked = response.data.map((el) => {
                return { ...el, checked: false }
            })
            setCart(addChecked)
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    function putCheckedCart() {
        try {
            setError('')
            const response = axios.post(`/api/cart/changecart`, {
                userId: user,
                products: cart
            })
        } catch (error) {
            catchErrors(error, setError)
        }
    }

    return (
        <Container className="justify-content-center">
            <h1 className="my-5 font-weight-bold text-center">장바구니</h1>
            <div>
                <h4 className="font-weight-bold py-3 border-top border-bottom text-center" style={{ background: '#F7F3F3' }}>주문상품정보</h4>
                {cart.length > 0
                    ? <ListCard cart={cart} deleteCart={deleteCart} minusNum={minusNum} plusNum={plusNum} checkedCart={checkedCart} status={'cart'} />
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
                    state: finalCart
                }} className="px-5" style={{ background: "#91877F", borderColor: '#91877F' }} onClick={putCheckedCart} block>결제하기</Button>
            </div>
        </Container>
    )
}

export default ShoppingCart