import React from 'react';

// React Router
import { Outlet } from 'react-router-dom';

import Navbar from '../Components/Navbar/Navbar';

const Container = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
        </React.Fragment>
    )
}

export default Container;
