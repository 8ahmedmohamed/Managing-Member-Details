import React from 'react';

// React Router
import { Outlet } from 'react-router-dom';

const Container = () => {
    return (
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    )
}

export default Container;
