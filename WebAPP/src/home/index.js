import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import { Router, Route, Link } from 'react-router';

import Test from '../test';

class Home extends React.Component {
    render() {
        return (
            <div>header</div>
        );
    }
}

render(<Home />, document.body);




