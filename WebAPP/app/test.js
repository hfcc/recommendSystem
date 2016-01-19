import React from 'react';
import jquery from '../node_modules/materialize-css/node_modules/jquery/dist/jquery.min.js';
import materializeJs from '../node_modules/materialize-css/dist/js/materialize.min.js';
import materializeCss from '../node_modules/materialize-css/dist/css/materialize.min.css';
//require('./test.css');
export default class Test extends React.Component{
	render() {
		return (
			<div className="row">
        		<div className="col s12 m6">
          			<div className="card blue-grey darken-1">
            			<div className="card-content white-text">
			          		<span className="card-title">Card Title</span>
			          		<p>I am a very simple card. I am good at containing small bits of information.
			          		I am convenient because I require little markup to use effectively.</p>
			        	</div>
				        <div className="card-action">
				          <a href="#">This is a link</a>
				          <a href="#">This is a link</a>
				        </div>
			      	</div>
			    </div>
			</div>		
		);
	}
}