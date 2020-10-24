import React,{Component} from "react";
import {Pie} from "react-chartjs-2";
class PieChart extends Component{

    constructor(props)
    {
super();
        this.state={
            chartData:{
                labels: ['China' ,'USA','India','Russia'],
              datasets:[
                {
                label:'Population',
                data :[45,45,45,225],
                backgroundColor:['#EF7326','#822b17','#e66951','#D84727'],
                borderWidth:0
                }
              ]
                

            }
        }

    }

    static defaultProps={
        displayTitle:true,

    }
render()
{
    return(
<>

<div class="chart-container" >
<Pie data={this.state.chartData}
    options={{
title:{
    display:this.props.displayTitle,
    text:'Corona Cases over the World-Pie chart',
    fontSize:15
},
    responsive: true,
    maintainAspectRatio: true


    }}

/>
</div>
</>

    );
}

}

export default PieChart;
