import React, { Component} from 'react';
import PeopleList from './PeopleList';

class PeopleList extends Component {

	renderPeople(){
		if(this.props.people){
			return _.map(peope, person => <People {...person } />);
		}

		return '';
	}
	render(){
		{this.renderPeople()};
		
	}
}

export default PeopleList;
