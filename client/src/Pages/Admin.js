import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import MainNav from '../Components/MainNav';
import SubNav from '../Components/SubNav';

function Admin() {

    return (
        <div>
            <MainNav />
            <SubNav />
        </div>
    )
}

export default Admin