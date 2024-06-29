import './main.css';
import React from "react";
import { Bar } from 'react-chartjs-2'
import {Chart as ChartJS, 
    CategoryScale, 
    LinearScale, 
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale, 
    LinearScale, 
    BarElement,
    Title,
    Tooltip,
    Legend,
)
var dataValue = [];
function BarChart(props) {
    
    const barChartData = {
        labels: [
            '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', 
            '13', '14', '15', '16', '17', '18', '19', '20', '21', '22','23',
            '24', '25', '26', '27', '28', '29', '30'
        ],
        datasets: [{
            label: 'Profit $ Loss',
            data: props.profit,
            backgroundColor: props.profit.map(value  => value <0 ? 'rgb(200, 0, 0)': 'rgb(0, 200, 0)'),
            borderColor: 'rgb(0, 0, 0)',
            borderWidth: 1

        }]
    };
    
    const options = {}
    const data = {}

    return (
        <div className="bar-chart">
            <Bar options={options} data={barChartData}/>
        </div>
        
    )
}

export default BarChart;