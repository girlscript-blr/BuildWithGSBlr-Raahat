import React from 'react';
import {Button} from 'reactstrap'
import "./TakeSurvey.css";
const TakeSurvey=()=>{
    return(
    <div>
    <section className="takesurvey">
    <div class="takesurvey-body">
        <div class="container">
        <div class="columns is-desktop">
    <div class="column">

        <h1 class="title"> Take Survey?</h1>
           
            <div class="subtitle">
            Please fill in the survey form to avail help from us. This will help us to keep track of the food items and other necessities required by you.
            </div>
            <div className="takesurveybutton">
                <Button className="takesurveybutton">Take Survey</Button>
            </div>
    </div>
    <div class="column col2"></div>
    <div class="column col3"></div>
    </div>

        
        </div>
    </div>
    </section>
    </div>
    )
}

export default TakeSurvey;