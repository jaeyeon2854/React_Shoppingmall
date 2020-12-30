import React, { useState, useEffect, useRef } from 'react';
import MainNav from '../Components/MainNav';
import SubNav from '../Components/SubNav';
import Products from './Products';

function ProductsList() {
    
    return (
        <div>
            <MainNav />
            <SubNav />
        </div>
    )
}

export default ProductsList