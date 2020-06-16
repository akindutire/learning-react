import React, { Component } from 'react';
import Link from 'react-router';

class Navbar extends Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div className="container">
                    <a className="navbar-brand" href="index.html">Start Bootstrap</a>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/">
                                <a className="nav-link" href="#">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about">
                                <a className="nav-link" href="#">About</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/post">
                                <a className="nav-link" href="#">Sample Post</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact">
                                <a className="nav-link" href="#">Contact</a>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;