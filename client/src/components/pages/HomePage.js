import React from "react";
import Navbar from "../misc/Navbar";
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Navbar activePage="Home" />

        <div className="alert alert-success col-8 offset-2 summ" role="alert">
          <h4 className="alert-heading">Intended Parents</h4>
          <p>
            Click the button below in order to fill out a survey. We will use
            the results of the survey to find potential matches for a
            gestational carrier, or surogate (if either are an option please
            denote "Both" in the survey). As such please be as honest as
            possible with during the survey so that we may find the best
            possible match for you. Rest assured your information will not be
            given out by us without your implicint consent. If you are unsure
            about the terms an intended parent needs to meet please check out
            our help documents.
          </p>
          <a href="/ipSurvey">
            <button className="btn btn-info btn-lg m-2">Take Survey</button>
          </a>
        </div>

        <div className="alert alert-primary col-8 offset-2 summ" role="alert">
          <h4 className="alert-heading">Gestational Carriers</h4>
          <p>
            Click the button below in order to fill out a survey. We will use
            the results of the survey to help intended parents connect with you.
            Please be as honest, and candid as possible when filling out this
            survey. Your data will also be keep private and will not be given
            out without your consent. Keep in mind the criteria for gestational
            carriers, and surrogates differ slightly. If you are unsure if
            whether or not being a gestational carrier may or may not be right
            for you, please reference our help documents.
          </p>
          <a href="/gcSurvey">
            <button className="btn btn-info btn-lg m-2">Take Survey</button>
          </a>
        </div>
      </div>
    );
  }
}

export default HomePage;
