import React, { Component } from 'react';
import Counter from './Counter';
import UserList from './UserList';

export default class App extends Component {

	render() {

		return(
			<div>
				<h1>Hello There!</h1>
				<Counter />
				<UserList />
			</div>
		);

	}

}