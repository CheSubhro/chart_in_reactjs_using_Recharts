
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Data } from '../utils/Data';

const LineChartComponent = () => {
  return (
    <LineChart width={600} height={400} data={Data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="year" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="userGain" stroke="#030ffc" />
      <Line type="monotone" dataKey="userLost" stroke="#fc038c" />
    </LineChart>
  );
};

export default LineChartComponent;
