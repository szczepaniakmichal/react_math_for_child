import React from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function Chart({ options }) {
    return (
        <HighchartsReact
            highcharts={Highcharts}
            {...{ options }}
        />
    );
}

export default Chart;