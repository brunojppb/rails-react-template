import React, { Component } from 'react';

export default class Counter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}

	render() {
		const {value} = this.state;
		const increment = () => {
			this.setState({...this.state, value: value + 1});
		};

		return(
			<div>
				<h3>I am a React.js Counter</h3>
				<p>My current value is {value}</p>
				<button onClick={increment}>Click me to increment</button>
			</div>
		);
		
	}

}