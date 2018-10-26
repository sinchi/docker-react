import React, {Component} from 'react';

class Test extends Component {


	render(){

		const {t1, t2} = this.props;

		return (<h2>Test Component {t1} {t2} </h2>);
	}
}

export default Test
