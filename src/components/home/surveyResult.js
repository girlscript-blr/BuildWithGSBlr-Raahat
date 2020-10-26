import React from "react";
import "./surveyResult.css";
function surveyResult() {
    return(
        <div>
          <div className="container">
            <p className="orangeCoronaRight"></p>
            <div className="columns ml-2">
              <div className="column col3"></div>
              <div className="column">
              <h5 className="title is-4">Benefits of the survey</h5>
              <div className="box1 mt-6"></div>
              <div className="content">The app is automated to keep track of the people who are in need of food and ration kits by conducting a survey based on the number of people in a particular slum and the food items needed by them.</div>   
              <div>
              <button className="button mt-6 button1">Button</button>
              </div>
              </div>
            </div>
            <div className="orangeCorona mt-6"></div>
          </div>
    </div>
    );
}
export default surveyResult;
