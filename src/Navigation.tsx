import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.css';

const Navigation = () => {
    return (
        <nav>
            <h3>Nav</h3>
            <ul>
                <Link to={"/"}>Home</Link>
                <Link to={"/pokemon"}>Pokemon</Link>
                <Link to={"/about"}>About</Link>
            </ul>
        </nav>
    );
}

export default Navigation;
