import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/aoe-logo.png';

function NavBar() {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <img src={logo} className="bi me-2" width="40" height="32" alt="LOGO" />
                    <span className="fs-4">Age Of Empires</span>
                </a>

                <ul className="nav nav-pills">
                    <div className="navbar allign-item-center ">
                        <Link className="nav-item nav-link" to="/">
                            Home
                        </Link>
                        <Link className="nav-item nav-link" to="units">
                            Units
                        </Link>
                    </div>
                </ul>
            </header>
        </div>
    );
}

export default NavBar;
