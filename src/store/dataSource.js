import axios from 'axios';

// ACTION TYPES

const GET_DATA = 'GET_DATA';

// INITIAL STATE

const initialState = {
	dataSource: {}
};

// ACTION CREATORS

const getData = (data) => ({
	type: GET_DATA,
	payload: data
});

// THUNK CREATORS

export const fetchData = () => async (dispatch) => {
	try {
		let { data } = await axios.get(' https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY');

		const ChartData = [
			[ 'NEO Name', 'Min Estimated Diameter (km)', 'Max Estimated Diameter (km)', 'Average', 'Orbiting Body' ]
		];

		//Parsing data to get only names and min/max estimated Diameter
		for (let i = 0; i < data.near_earth_objects.length; i += 1) {
			//Get orbiting body info
			let orbiting_body =
				data.near_earth_objects[i].close_approach_data[0] !== undefined
					? data.near_earth_objects[i].close_approach_data[0].orbiting_body
					: 'none';
			console.log(orbiting_body, 'ORBITING BODY');
			//Get the estimated diameter average
			let average =
				(data.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_min +
					data.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_max) /
				2;

			ChartData.push([
				data.near_earth_objects[i].name,
				data.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_min,
				data.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_max,
				average,
				orbiting_body
			]);
		}

		// Data sorted by average estimated diameter descending
		data = ChartData.sort(function(a, b) {
			return b[3] - a[3];
		});

		dispatch(getData(data));
	} catch (error) {
		console.error(error);
	}
};

// REDUCER

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_DATA:
			return { ...state, dataSource: action.payload };
		default:
			return state;
	}
}
