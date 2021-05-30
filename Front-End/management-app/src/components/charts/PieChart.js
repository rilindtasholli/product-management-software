import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';

export class PieChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            chartData:{
                labels: ['Category1', 'Category2', 'Category3','Category4'],
                datasets:[{
                    label:'Population',
                    data:[
                        290,
                        380,
                        89,
                        253
                    ],
                    backgroundColor: [
                        'rgb(32, 114, 161)',
                        'rgb(235, 64, 52)',
                        'rgb(252, 186, 3)',
                        'rgb(50, 168, 82)'
                    ],
                    borderColor: 'rgb(233, 233, 233)'
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
                    position: 'left',
                    align: 'center',
                    padding: 50
                }
            }
      };

        return (
            <div>
                <Pie
                    data={this.state.chartData}
                    width={350}
	                height={350}
                    options={options}
                />
            </div>
        )
    }
}

export default PieChart
