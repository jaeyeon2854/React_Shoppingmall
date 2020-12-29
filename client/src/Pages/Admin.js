import React, { useState, useEffect, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import Nav1 from '../Components/MainNav';
import Nav2 from '../Components/SubNav';

function Admin() {

    return (
        <div>
            <Nav1 />
            <Nav2 />
            
        </div>
    )
}

export default Admin