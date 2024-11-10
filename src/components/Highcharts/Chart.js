import React from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Chart({options}) {
    return (
        <HighchartsReact
            highcharts={Highcharts}
            {...{options}}
        />
    );
}

export default Chart;

// options expample

// const options = {
//     chart: {
//         type: 'pie',
//     },
//     title: {
//         text: 'You result',
//         align: 'left'
//     },
//     xAxis: {
//         categories: ['good', 'wrong'],
//     },
//     yAxis: {
//         min: 0,
//     },
//     plotOptions: {
//         series: {
//             animation: {
//                 duration: 3000
//             }
//         }
//     },
//     series: [{
//         name: 'Registrations',
//         colorByPoint: true,
//         innerSize: '75%',
//         data: [{
//             name: 'good',
//             y: 100
//         }, {
//             name: 'wrong',
//             y: 10
//         }]
//     }]
// }