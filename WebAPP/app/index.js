import React from 'react';
import ReactDOM from 'react-dom';
import Test from './test.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

function main(){
	ReactDOM.render(<Test />, document.getElementById('container'));
}

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

main();





