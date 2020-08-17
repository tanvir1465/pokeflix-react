import React from 'react';
import logo from '../../src/logo.png';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div className="nav">
            <nav className="nav_main">
                <img className="nav_logo" src={logo} alt="Logo"/>
                <ul className="nav_links">
                    <Link className="plain_link" to="/">
                        <li>Home</li>
                    </Link>
                    <Link className="plain_link" to="/pokemons">
                        <li>Pokemon</li>
                    </Link>
                    <Link className="plain_link" to="/about">
                        <li>About</li>
                    </Link>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;