import './App.css';
import React, { useEffect } from 'react';
import { gsap } from 'gsap';

function Header(props) {
    const header = React.createRef();

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        gsap.fromTo(header.current, { opacity: 0 }, { opacity: 1, duration: 4, yoyo: true, repeat: -1 });
    }, [header]);

    return (
        <header>
            <h2 ref={header} className="brand-logo">nk.digital</h2>
            <div className="nav-burger">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </header>
    );
}

export default Header;