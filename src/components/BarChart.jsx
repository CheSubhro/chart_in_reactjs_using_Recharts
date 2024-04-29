
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Data } from '../utils/Data';

const BarChartComponent = () => {
  return (
    <BarChart width={600} height={400} data={Data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="userGain" stackId="a" fill="#16750f" />
      <Bar dataKey="userLost" stackId="a" fill="#750f1b" />
    </BarChart>
  );
};

export default BarChartComponent;
