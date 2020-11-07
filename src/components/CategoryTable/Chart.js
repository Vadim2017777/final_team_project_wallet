import React, {Component} from 'react';
import Chart from 'chart.js';
import s from './Chart.module.css';

import {useEffect} from 'react';

const ChartPie = ({chartData}) => {
  console.log(chartData);
  const chartRef = React.createRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext('2d');
    new Chart(myChartRef, {
      type: 'pie',
      data: {
        //Bring in data

        datasets: [
          {
            label: 'Sales',
            data: [chartData.food, chartData.car, chartData.selfcare],
          },
        ],
        labels: ['Jan', 'Feb', 'March'],
      },
      options: {
        //Customize chart options
      },
    });
  }, [chartData, chartRef]);

  return (
    <div className={s.graphContainer}>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};

export default ChartPie;

// export default class LineGraph extends Component {
//   chartRef = React.createRef();

//   componentDidMount() {
//     const myChartRef = this.chartRef.current.getContext('2d');

//     new Chart(myChartRef, {
//       type: 'pie',
//       data: {
//         //Bring in data
//         labels: ['Jan', 'Feb', 'March'],
//         datasets: [
//           {
//             label: 'Sales',
//             data: [86, 67, 91],
//           },
//         ],
//       },
//       options: {
//         //Customize chart options
//       },
//     });
//   }
//   render() {
//     return (
//       <div className={s.graphContainer}>
//         <canvas id="myChart" ref={this.chartRef} />
//       </div>
//     );
//   }
// }
