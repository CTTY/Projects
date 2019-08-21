import React, {Component} from 'react';
import '../style.css';

import { Nav, Navbar, NavItem } from "react-bootstrap";
import {BrowserRouter as Router, Link, withRouter, Route} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { Layout, Menu, Dropdown, Icon } from 'antd';

// style={{background-image : url(./img/core-img/curve.png)}}
class Header extends Component {
    constructor(props) {
        super(props);
    }

    render(){

        return (
            <div className="header-area">
                <div className="main-header-area">
                    <div className="classy-nav-container breakpoint-off">
                        <Navbar className="classy-navbar justify-content-between navbar-fixed-top" expand="lg" variant="light" bg="dark" fixed="top">
                            {/* background curve */}
                            <div className="bg-curve" style={{'background-image' : 'url(1' + '../img/core-img/curve.png' + ')'}}></div>
                            
                            {/* logo */}
                            <Navbar.Brand href="/index.html">
                                <img
                                    alt=""
                                    src="../img/core-img/logo.jpeg"
                                    height="60"
                                    width="60"
                                    className="nav-brand"
                                />
                            </Navbar.Brand>
    
                            {/* <div className="classy-navbar-toggler">
                                <span className="navbarToggler"><span></span><span></span><span></span></span>
                            </div> */}

                            <div className="classy-menu">
                                {/* <div className="classycloseIcon">
                                    <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                    </div> */}
    
                                {/* navbar */}
                                <div className="classynav">
                                    <ul id="nav">
                                        <li><a href="https://abbylululu.github.io/ArtCollectionWebsite/">Home</a></li>
                                        <li><a href="#">Pages</a>
                                            <ul className="dropdown">
                                            <li><a href="https://abbylululu.github.io/ArtCollectionWebsite/">- Home</a></li>
                                            <li><a href="https://abbylululu.github.io/Projects/#/">- Projects</a></li>
                                            <li><a href="https://abbylululu.github.io/ArtCollectionWebsite/designer.html">- Designer</a></li>
                                            <li><a href="https://abbylululu.github.io/ArtCollectionWebsite/developers.html">- Developers</a></li>
                                            <li><a href="https://abbylululu.github.io/Projects/#/login">- Log In</a></li>
                                            <li><a href="https://abbylululu.github.io/Projects/#/DesignManager">Design Manager</a></li>
                                            <li><a href="https://abbylululu.github.io/Projects/#/Email">Email</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="https://abbylululu.github.io/Projects/#/"> Projects</a></li>
                                        <li><a href="#">About Us</a>
                                            <ul className="dropdown">
                                            <li><a href="https://abbylululu.github.io/ArtCollectionWebsite/designer.html">- Designer</a></li>
                                            <li><a href="https://abbylululu.github.io/ArtCollectionWebsite/developers.html">- Developers</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="https://abbylululu.github.io/Projects/#/login">Log In</a></li>
                                        <li><a href="https://abbylululu.github.io/Projects/#/DesignManager">Design Manager</a></li>
                                        <li><a href="https://abbylululu.github.io/Projects/#/Email">Email</a></li>
                                    </ul>
                                </div>
                            </div>
                        </Navbar>
                    </div>
                </div>
            </div>
        )
    }
    
    
}

export default withRouter(Header);