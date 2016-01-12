import React from 'react';
import Paper from 'material-ui/lib/paper';
import Divider from 'material-ui/lib/divider';
import TextField from 'material-ui/lib/text-field';

const underlineStyle = {
  display: 'none',
};

const style = {
  marginLeft: 20,
};

export default class Test extends React.Component{
	render() {
		return (
			<Paper zDepth={2}>
				<TextField hintText="First name" underlineStyle={underlineStyle} style={style} />
				<Divider />
				<TextField hintText="Middle name" underlineStyle={underlineStyle} style={style} />
				<Divider />
				<TextField hintText="Last name" underlineStyle={underlineStyle} style={style} />
				<Divider />
				<TextField hintText="Email address" underlineStyle={underlineStyle} style={style} />
				<Divider />
			</Paper>
		);
	}
}