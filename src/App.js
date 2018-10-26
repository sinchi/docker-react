import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';
import axios from 'axios';
class App extends Component {

	componentDidMount(){
		axios.get('https://swapi.co/api/people')
		.then(res => { console.log(res.data) });
	}

  render() {
    return (
      <div className="App">
       <h1> First App </h1>
	<Test t1="test10000" t2="hello ayoub sinchi"/>
      </div>
    );
  }
}

export default App;
