import React, { Component } from 'react';
import '../css/App.css';
import Chart from 'react-google-charts';
import { fetchData } from '../store';
import { connect } from 'react-redux';

class ChartData extends Component {
	async componentDidMount() {
		await this.props.fetchData();
	}
	render() {
		const data = this.props.dataSource;
		console.log('data', data);
		return (
			<Chart
				width={'800px'}
				height={'800px'}
				chartType="BarChart"
				loader={<div>Loading Chart</div>}
				data={data}
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
				controls={[
					{
						controlType: 'CategoryFilter',
						options: {
							filterColumnIndex: 4,
							ui: {
								labelStacking: 'vertical',
								label: 'Orbiting body',
								allowTyping: true
							}
						}
					}
				]}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	dataSource: state.dataSource
});

const mapDispatchToProps = (dispatch) => ({
	fetchData: () => dispatch(fetchData())
});

export default connect(mapStateToProps, mapDispatchToProps)(ChartData);
