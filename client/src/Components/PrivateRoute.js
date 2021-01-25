import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth';

function PrivateRoute({path, children}) {
  if (isAuthenticated()) {
    return (
      <Route path={path}>
        {children}
      </Route>
    )
  } else {
    alert('회원이 아닙니다. 로그인 및 회원가입을 진행해 주세요.');
    return (
      <Redirect to='/' />
    )
  }
}

export default PrivateRoute