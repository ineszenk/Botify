import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Chartdata from './chart';

export default class Main extends Component {
	render() {
		return (
			<BrowserRouter>
				<div id="main">
					<Route exact path="/" component={Chartdata} />
				</div>
			</BrowserRouter>
		);
	}
}
