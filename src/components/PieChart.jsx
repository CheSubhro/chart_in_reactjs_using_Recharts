

import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { Data } from '../utils/Data';

const PieChartComponent = () => {
	// Define custom colors for each section of the pie chart
	const COLORS = ['#ff6361', '#ffa600', '#bc5090', '#58508d', '#003f5c'];
  
	return (
	  <PieChart width={400} height={400}>
		<Pie
		  data={Data}
		  cx={200}
		  cy={200}
		  labelLine={false}
		  label={({ year }) => `${year}`}
		  outerRadius={80}
		  fill="#8884d8"
		  dataKey="userGain"
		  nameKey="year"
		>
		  {/* Generate cells with custom colors for userGain */}
		  {Data.map((entry, index) => (
			<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
		  ))}
		</Pie>
		<Pie
		  data={Data}
		  cx={200}
		  cy={200}
		  labelLine={false}
		  label={({ year }) => `${year}`}
		  outerRadius={100}
		  innerRadius={80}
		  fill="#82ca9d"
		  dataKey="userLost"
		  nameKey="year"
		>
		  {/* Generate cells with custom colors for userLost */}
		  {Data.map((entry, index) => (
			<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
		  ))}
		</Pie>
		<Tooltip />
		<Legend />
	  </PieChart>
	);
  };

export default PieChartComponent;
