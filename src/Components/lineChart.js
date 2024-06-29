import React from "react";
import {Line} from 'react-chartjs-2'
import {Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    PointElement, 
    LineElement,
    Title,
    Tooltip,
    Legend,
)

function LineChart(props) {
    const lineChartData = {
        labels: [
            '1', '2', '3', '4', '5', '6', '7','1', '2', '3', '4', '5', '6', '7','1', '2', '3', '4', '5', '6', '7'
        ],
        datasets: [{
            label: 'Steps',
            data: props.profit,
            borderColor: 'rgb(0, 255, 0)'
        }]
    };

    const options = {}
    const data = {}

    return (
        <Line options={options} data={lineChartData} />
    )
}
export default LineChart;