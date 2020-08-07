import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav()  {

    const navStyle = {
        color:'white'
    };

    return (
        <nav className='nav'>
            <h3>NIT UK</h3>
            <ul className='nav-links'>
                {/* <Link style={navStyle} to='http://nituk.ac.in/'>
                    <li>Nituk web</li>
                </Link> */}

                <Link style={navStyle} to='/'>
                    <li>Home</li>
                </Link>

                <Link style={navStyle} to='/students'>
                    <li>Students</li>
                </Link>

                <Link style={navStyle} to='/about'>
                    <li>About</li>
                </Link>
                
            </ul>
        </nav>
    );
}

export default Nav;