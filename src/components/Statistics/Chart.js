import React from 'react';
import {Pie} from 'react-chartjs-2';

import 'chartjs-plugin-labels';

const ChartPie = ({chartData}) => {
  const {
    expenses,
    food,
    car,
    selfcare,
    childcare,
    house,
    education,
    enterteinment,
    others,
  } = chartData;

  const data = {
    datasets: [
      {
        label: 'Sales',
        data: [
          expenses,
          food,
          car,
          selfcare,
          childcare,
          house,
          education,
          enterteinment,
          others,
        ],
        backgroundColor: [
          '#ecb22a',
          '#e28b20',
          '#d25925',
          '#67b7d0',
          '#5593d7',
          '#ecb22a',
          '#9cc254',
          '#73ad57',
          '#507c3a',
        ],
      },
    ],
    labels: [
      'Main expenses',
      'Food',
      'Car',
      'Self care',
      'Child care',
      'House',
      'Education',
      'Enterteinment',
      'Others',
      'Costs',
      'Income',
    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    plugins: {
      labels: {
        render: 'label',
        fontColor: '#ffff',
        fontSize: 13,
      },
    },
  };
  return <Pie data={data} options={options} />;
};

export default ChartPie;
