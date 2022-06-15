import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar(){

    const location = useLocation();

    const navStyle = {
        'margin-bottom' : '64px',
        background: 'white'    
    };
    
    
    return (
    <div style={ location.pathname !== "/" ? navStyle : null }>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div className="container">
                <Link to="/">
                    <a className="navbar-brand" style={ location.pathname !== "/" ? {color: 'black'} : null }>Start Bootstrap</a>
                </Link>
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/">
                            <a className="nav-link">Home</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about">
                            <a className="nav-link">About</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/posts">
                            <a className="nav-link">Sample Post</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">
                            <a className="nav-link">Contact</a>
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
    );
    
}

export default Navbar;