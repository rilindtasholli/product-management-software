import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';



export class LineChart extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            chartData:{
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                datasets: [{
                    label: 'All Sales',
                    data: [45, 32, 65, 68, 80, 75, 89],
                    fill: true,
                    borderColor: 'rgb(4, 122, 148)',
                    tension: 0.1
                }]
            }
        }
    }

    render() {
        const options = {
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    align: 'center',
                    padding: 50
                }
            }
      };

        return (
            <div>
                <Line
                    data={this.state.chartData}
                    width={350}
	                height={350}
                    options={options}
                />
            </div>
        )
    }
}

export default LineChart
