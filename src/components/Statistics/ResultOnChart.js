import React from 'react';
import { Chart } from "components";
import { useSelector } from "react-redux";
import isEqual from "lodash.isequal";
import { fontSize } from "variables";
import { theme } from "colors";
import { roundNum } from "utils/roundNum";
import { categories } from "components/Statistics/constants";

const { green, orange, red } = theme;

function ResultOnChart() {
    const data = useSelector(({ statistics }) => ([
         statistics.correctDone.correctAnswer,
         statistics.correctToDo - statistics.leftToDo,
         statistics.leftToDo,
    ]), isEqual);

    const seriesData = data.map((el, i) => {
        return {
            name: categories[i],
            y: el,
        }
    });

    const options = {
        chart: {
            type: 'pie',
            backgroundColor: 'transparent',
        },
        credits: {
            enabled: false
        },
        title: {
            text: null,
        },
        xAxis: {
            categories,
        },
        yAxis: {
            min: 0,
        },
        plotOptions: {
            series: {
                animation: {
                    duration: 2000
                }
            }
        },
        legend: {
            enabled: true,
            itemStyle: {
                color: '#fff',
                fontSize,
                fontWeight: 500,
            }
        },
        tooltip: {
            useHTML: true,
            backgroundColor: 'transparent',
            formatter: resultTooltip,
        },
        colors: [green, red, orange],
        series: [{
            colorByPoint: true,
            innerSize: '70%',
            showInLegend: true,
            dataLabels: {
                enabled: false,
            },
            data: seriesData,
        }]
    }

    return <Chart {...{ options }}/>
}

export default ResultOnChart;

function resultTooltip() {
    const {point, y, percentage, color} = this;
    const percentageValue = roundNum(percentage);

    return `<div class="tooltip-wrapper">
                <span class="title" style="color: ${color}">${point.name}</span>
                <span class="value-title">Number of tasks:</span><span class="value">${y} - ${percentageValue}% </span>
            </div> `;

}
