import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);

    // const toggleMenu = () => {
    //     setIsMenuOpen(!isMenuOpen);
    // };

    return (
        <nav className="nav-bar">
            <div className="container">
                <ul className={`nav-links`}>
                    {/* <li><Link to="/home"><img src="../assets/img/site-logo.png" alt="" /></Link></li> */}
                    <li><Link to="/home"><img src={require('../assets/svg/new-logo.png')} /></Link></li>
                    {/* <li><Link to="/contest">Play to win</Link></li> */}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
