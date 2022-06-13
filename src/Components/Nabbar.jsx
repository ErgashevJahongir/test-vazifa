import React from 'react';
import { Link } from 'react-router-dom';

const Nabbar = () => {
    return (
        <nav className="navber">
            <ul>
                <li>
                    <Link to="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link to="/students">
                        <a>Students Table</a>
                    </Link>
                </li>
                <li>
                    <Link to="/student">
                        <a>Create student</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nabbar;
