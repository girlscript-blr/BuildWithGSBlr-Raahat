// react
import React from 'react'
import PropTypes from 'prop-types'

//component
import { HorizontalBar } from 'react-chartjs-2';

function Barchart(props) {

    const chartData = {
        // 
        labels : props.labels,
        datasets : [
            {   
                label: props.dataLabel,
                backgroundColor : props.colour,
                data: props.record
            }
        ],
    }

    return (
        <div className="container">
            <div className="bar" style={{backgroundColor: props.backgroundColour}}>
                <HorizontalBar
                    data={chartData}
                    options={{
                        title: {
                            display: true,
                            text: props.title,
                            fontSize: 18,
                            fontColor: 'black',
                            fontStyle: 'bold',
                            fontFamily: 'Arial'
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            align: 'center',
                            labels : {
                                fontColor: 'black'
                            }
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: false
                                },
                                ticks: {
                                    fontColor: "black",
                                    fontSize: 14,
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: true
                                },
                                ticks: {
                                    fontColor: "black",
                                    fontSize: 14,
                                }
                            }]
                        }
                    }}
                />
            </div>
        </div>
    )
}

Barchart.propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string),
    record : PropTypes.arrayOf(PropTypes.number),
    backgroundColour : PropTypes.string,
    title : PropTypes.string,
    dataLabel : PropTypes.string,
    colour : PropTypes.string,    
}

export default Barchart;
