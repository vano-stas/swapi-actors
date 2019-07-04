import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

function Header() {
    return (
        <nav className='navigation-app'>
            <Link className='page-link-item' to='/'>
                <h3 className='page-link-item'>Swapi actors</h3>
            </Link>
            <ul className='nav-links-group'>
                <Link className='page-link-item' to='/'>
                    <li className='page-link-item' >Home</li>
                </Link>
                <Link className='page-link-item' to='/actors'>
                    <li className='page-link-item' >Actors</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Header;