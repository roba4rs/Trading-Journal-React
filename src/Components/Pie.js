import './main.css';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import React from "react";
import { Pie } from 'react-chartjs-2';
import {Chart as ChartJS, 

    ArcElement,
    Tooltip,
    Legend,
    plugins,
} from 'chart.js';

ChartJS.register( ArcElement, Tooltip, Legend)

function PieChart(props) {

    const pieData = {
        labels: Object.keys(props.uniquElement),
        datasets: [{
            label: '',
            data: Object.values(props.uniquElement),
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 206, 255)',
                'rgb(0, 206, 0)'
            ],
        hoverOffset: 4,
        }]
    };

    const options = {}
    const data = {}

    return (
        <div className='pie-chart'>
            <Pie options={options} data={pieData} />
        </div>
       
    )
}
export default PieChart;