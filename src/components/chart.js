import React, { Component } from 'react';
import '../css/App.css';
import Chart from 'react-google-charts';
import ChartDataSorted from '../datas/parsingData';

export default class App extends Component {
	render() {
		return (
			<Chart
				width={'800px'}
				height={'800px'}
				chartType="BarChart"
				loader={<div>Loading Chart</div>}
				data={ChartDataSorted}
				options={{
					title: 'Near Earth Object',
					hAxis: {
						title: 'Min Estimated Diameter (km)',
						minValue: 0
					},
					vAxis: {
						title: 'NEO Name'
					}
				}} // For tests
				chartWrapperParams={{ view: { columns: [ 0, 1, 2 ] } }}
				rootProps={{ 'data-testid': '1' }}
			/>
		);
	}
}
