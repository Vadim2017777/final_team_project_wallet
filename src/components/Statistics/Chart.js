import React, {useEffect} from 'react';
import Chart from 'chart.js';

import 'chartjs-plugin-labels';

import s from './Chart.module.css';

const ChartPie = ({chartData}) => {
  const chartRef = React.createRef();
  console.log(chartData);
  useEffect(() => {
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

    const myChartRef = chartRef.current.getContext('2d');

    const myChart = new Chart(myChartRef, {
      type: 'pie',
      data: {
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
          'Fouse',
          'Education',
          'Enterteinment',
          'Others',
          'Costs',
          'Income',
        ],
      },

      options: {
        animation: {
          easing: 'easeInCirc',
        },
        legend: {
          display: false,
        },
        plugins: {
          labels: {
            render: 'label',
            fontColor: '#ffff',
          },
        },
      },
    });
    return () => {
      myChart.destroy();
    };
  }, [chartData, chartRef]);

  return (
    <div className={s.graphContainer}>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};

export default ChartPie;
