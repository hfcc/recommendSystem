import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import 'materialize-css';
import 'materialize-css/bin/materialize.css';
import { Router, Route, Link } from 'react-router';

import Test from '../test';
import LoginDropDown from '../components/login-dropdown'

class Home extends React.Component {
    render() {
        return (
            <div className="blue-grey darken-1">
                <header>
                    <div className="navbar-fixed">
                        <nav className="blue-grey darken-1">
                            <div className="container">
                                <div className="nav-wrapper">
                                    <a href="#" className="brand-logo">
                                        <i className="fa fa-heart white-text"></i> Recommend Your Love
                                    </a>
                                    <LoginDropDown />
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                <main>
                    <div className="row">
                        <div className="col s12">
                            <div>

                            </div>
                        </div>
                    </div>
                </main>
                <footer className="page-footer blue-grey darken-1">
                    <div className="footer-copyright">
                        <div className="container">
                            Made in Beijing by hfcc
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

render(<Home />, document.body);




