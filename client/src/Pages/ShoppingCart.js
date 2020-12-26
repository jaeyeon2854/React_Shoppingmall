import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import MainNav from '../Components/MainNav';
import SubNav from '../Components/SubNav';

function ShoppingCart() {

    return (
        <div>
            <MainNav />
            <SubNav />
        </div>
    )
}

export default ShoppingCart