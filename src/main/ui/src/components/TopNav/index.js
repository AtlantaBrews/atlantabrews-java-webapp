import React, { useEffect } from 'react';
import logo from '../../resources/AtlantaBrewsLogo.png';
import './index.css';
import M from 'materialize-css';

const TopNav = (props) => {

    useEffect(() => {
        let sidenav = document.querySelectorAll('.sidenav');
        M.Sidenav.init(sidenav, {});
    }, []);

    const handleClick = (e) => {
        props.setMainPage(e.target.id)
    }

    return (
        <header>
            <nav>
                <div className="nav-wrapper grey darken-4">
                    <a href="/" className="brand-logo left">
                        <img className="responsive-img-logo" src={logo} alt="Atlanta Brews Logo" />
                    </a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        <li><a className='' id='Home' onClick={handleClick}>Home</a></li>
                        <li><a className='' id='All' onClick={handleClick}>All Breweries</a></li>
                        <li><a className='' id='Random' onClick={handleClick}>Help Me Pick!</a></li>
                        <li><a className='' id='Map' onClick={handleClick}>Map</a></li>
                    </ul>
                </div>
            </nav >
            <ul className='sidenav sidenav-close' id='mobile-demo'>
                <li><a className='' id='HomeMobile' onClick={handleClick}>Home</a></li>
                <li><a className='' id='AllMobile' onClick={handleClick}>All Breweries</a></li>
                <li><a className='' id='RandomMobile' onClick={handleClick}>Help Me Pick!</a></li>
                <li><a className='' id='MapMobile' onClick={handleClick}>Map</a></li>
            </ul>
        </header>
    );
};




export default TopNav;