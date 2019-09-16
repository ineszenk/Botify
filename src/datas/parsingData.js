const data = require('./data.json');

const ChartData = [ [ 'NEO Name', 'Min Estimated Diameter (km)', 'Max Estimated Diameter (km)' ] ];

//Parsing data to get only names and min/max estimated Diameter
for (let i = 0; i < data.near_earth_objects.length; i += 1) {
	ChartData.push([
		data.near_earth_objects[i].name,
		data.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_min,
		data.near_earth_objects[i].estimated_diameter.kilometers.estimated_diameter_max
	]);
}

export default ChartData;
