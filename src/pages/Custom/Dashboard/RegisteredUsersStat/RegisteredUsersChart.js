import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts';
import PropTypes from 'prop-types';

const RegisteredUsersChart = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height={280}>
      <BarChart
        data={data}
        margin={{
          top: 15,
          right: 0,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid
          strokeDasharray='3 1'
          horizontal={true}
          vertical={false}
        />
        <XAxis dataKey='month' />
        <Tooltip labelStyle={{color: 'black'}} />
        <Bar dataKey='artist' fill='#F44D50' name='Уран бүтээлч' barSize={20} />
        <Bar
          dataKey='songs'
          name='Хөгжим хэрэглэгч'
          fill='#0A8FDC'
          barSize={20}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default RegisteredUsersChart;
RegisteredUsersChart.propTypes = {
  data: PropTypes.any,
};
