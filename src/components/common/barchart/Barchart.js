// react
import React from 'react'
import PropTypes from 'prop-types'

//component
import { HorizontalBar } from 'react-chartjs-2';

function Barchart(props) {

    const chartData = {
        labels : props.labels, // list of strings for labels
        datasets : [
            {   
                label: props.dataLabel, // name of the legend
                backgroundColor : props.colour, // colour of the bar 
                data: props.record // list of integer values as data
            }
        ],
    }

    return (
        <>
            {/* As the background of the graphs provided by chart js is transparent we can't directly apply any colour to it,   
            So I wrapped it around a div where we can apply the colour*/}
            <div className="bar" style={{backgroundColor: props.backgroundColour}}>
                <HorizontalBar
                    data={chartData}
                    options={{
                        title: {
                            display: true, 
                            text: props.title, // title of the graph
                            fontSize: 18,
                            fontColor: 'black',
                            fontStyle: 'bold',
                            fontFamily: 'Arial'
                        },
                        legend: {
                            display: true, // if false the legend will be hidden
                            position: 'bottom',
                            align: 'center',
                            labels : {
                                fontColor: 'black'
                            }
                        },
                        scales: {
                            yAxes: [{
                                gridLines: {
                                    display: false // it true the y axes scales will be shown
                                },
                                ticks: {
                                    fontColor: "black",
                                    fontSize: 14,
                                }
                            }],
                            xAxes: [{
                                gridLines: {
                                    display: true // it false the x axes scales will not be shown
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
        </>
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
