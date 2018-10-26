import React, { Component } from 'react';

class People extends Component {

	render(){
		const { name } = this.props; 

		return (<div>{ name }</div>)
	}
}
export default People;
