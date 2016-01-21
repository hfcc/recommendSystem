import React from 'react';

export default class LoginDropdown extends React.Component {
    render() {
        return (
            <div className="right">
                <ul>
                    <li>
                        <a className="dropdown-button" href="#!" data-activates="loginDropdown" data-hover="true">
                            <i className="fa fa-unlock"></i> Log in ...
                        </a>
                    </li>
                </ul>
                <ul id="loginDropdown" className="dropdown-content">
                    <li>
                        <a href="#!">
                            <i className="fa fa-google"></i> Google
                        </a>
                    </li>
                    <li><a href="#!"><i className="fa fa-twitter"></i> Twitter</a></li>
                    <li><a href="#!"><i className="fa fa-github"></i> Github</a></li>
                    <li className="divider"></li>
                    <li><a href="#!"><i className="fa fa-weibo"></i> Weibo</a></li>
                </ul>
            </div>
        );
    }
}