import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.scss';

class App extends Component {
	render() {
		return (
			<div>
				<h1>React app</h1>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
