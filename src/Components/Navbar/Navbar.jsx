import React from 'react';

// React Router
import { Link } from 'react-router-dom';

const Navbar = () => {
    const LogOut = () => {
        localStorage.removeItem('access_token');
    }
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to='/' type='button'>Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/Member/CreateMember' type='button'>Create</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/login' type='button' onClick={LogOut}>Log Out</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar;
