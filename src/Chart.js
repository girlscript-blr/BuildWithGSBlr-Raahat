import React, { Component } from 'react'
import Barchart from './components/common/barchart/Barchart'

export default class Chart extends Component {
    render() {
        return (
            <div>
                <Barchart 
                    labels={['Boston', 'Worcester', 'Springfield', 'Lowell', 'Cambridge', 'New Bedford']}
                    record={[ 617594, 181045, 153060, 106519, 105162, 95072 ]}
                    dataLabel="Population"
                    backgroundColour='#E5E5E5'
                    colour='#EF7326'
                    title="List of Cities by Population"
                />
            </div>
        )
    }
}
