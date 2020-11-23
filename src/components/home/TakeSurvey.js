import React from "react";
import { Button } from "reactstrap";
import "./TakeSurvey.css";
const TakeSurvey = () => {
  return (
    <div>
      <section className="takesurvey">
        <div className="takesurvey-body">
          <div className="container">
            <div className="columns is-desktop">
              <div className="column">
                <h1 className="title"> Take Survey?</h1>

                <div className="subtitle">
                  Please fill in the survey form to avail help from us. This
                  will help us to keep track of the food items and other
                  necessities required by you.
                </div>
                <div className="takesurveybutton">
                  <Button className="takesurveybutton">Take Survey</Button>
                </div>
              </div>
              <div className="column col2" />
              <div className="column col3" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TakeSurvey;
