import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { isAuthenticated } from '../utils/auth'

function PrivateRoute({ path, children }) {
    if (isAuthenticated()) {
        return (
            <Route path={path}>
                {children}
            </Route>
        )
    } else {
        return (
            <Redirect to="/login" />
        )
    }
}

export default PrivateRoute
