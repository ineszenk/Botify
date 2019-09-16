import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Chart from './chart';

export default class Main extends Component {
	render() {
		return (
			<BrowserRouter>
				<div id="main">
					<Route exact path="/" component={Chart} />
				</div>
			</BrowserRouter>
		);
	}
}
