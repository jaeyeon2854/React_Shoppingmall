import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import Nav1 from '../Components/MainNav';
import Nav2 from '../Components/SubNav';

function Signup() {


    return (
        <div class="form-container">
            <Nav1 />
            <Nav2 />
            <form id="form" class="form">
                <h1>회원가입</h1>
                <div class="form-control">
                    <label for="id">아이디</label>
                    <input type="text" id="id" placeholder="아이디를 입력하세요"></input>

                    <label for="name">본명</label>
                    <input type="text" id="name" placeholder="본명을 입력하세요"></input>

                    <label for="password">비밀번호</label>
                    <input type="password" id="password" placeholder="비밀번호를 입력하세요"></input>

                    <label for="password2">비밀번호 확인</label>
                    <input type="password" id="password2" placeholder="비밀번호를 한번 더 입력하세요"></input>

                    <label for="tel">휴대폰 번호</label>
                    <input type="text" id="tel" placeholder="휴대폰 번호를 입력하세요"></input>

                    <label for="add">주소</label>
                </div>
            </form>
        </div>

    )
}

export default Signup