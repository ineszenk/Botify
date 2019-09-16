const data = require('./data.json');

const ChartData = [ [ 'NEO Name', 'Min Estimated Diameter (km)', 'Max Estimated Diameter (km)', 'average' ] ];

//Parsing data to get only names and min/max estimated Diameter
for (let i = 0; i < data.near_earth_objects.length; i += 1) {
	let average =
		(data.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_min +
			data.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_max) /
		2;

	ChartData.push([
		data.near_earth_objects[i].name,
		data.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_min,
		data.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_max,
		average
	]);
}

// Data sorted by average estimated diameter descending
const CharDataSorted = ChartData.sort(function(a, b) {
	return b[3] - a[3];
});

export default CharDataSorted;
