import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import { Router, Route, Link } from 'react-router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'src/home/plugins/font-awesome/css/font-awesome.min.css'
import 'src/home/style.css';

import TimeLine from 'src/components/timeline';

class Home extends React.Component {
    render() {
        return (
            <TimeLine />
        );
    }
}

render(<Home />, document.getElementById('container'));




