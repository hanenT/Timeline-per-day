import React, { Component } from "react";
import "./App.css";
import "./Timeline.scss";
import TimelineNav from "./timelineHeader";
import TimelineHoleEvent from "./Timeline"
import { Link, Route, Switch} from 'react-router-dom';
// NAVIGATION
// PAGES
import TimelineDayOne from "./Timeline-per-day/TimelineDayOne";
import TimelineDayTwo from "./Timeline-per-day/TimelineDayTwo";
import TimelineDayThree from "./Timeline-per-day/TimelineDayThree";


class App extends Component {
  
  render() {
    const {location} = this.props;
    return (
      <div>
        <div className="timeline-header">
      <TimelineNav />
        </div>
      <hr />
        {/* <div className="container">
      <TimelineHoleEvent/>
    </div> */}

    <Switch location={location}>
          <Route exact={true} path="/Programme-complet" component = {TimelineHoleEvent} /> 
          
          <Route path="/Day-One" component = {TimelineDayOne} />
          <Route path="/Day-Two" component = {TimelineDayTwo} />
          <Route path="/Day-Three" component = {TimelineDayThree} />

              <Link className="back" to="/" onClick={this.handleBack}>Back</Link>
              <Route path="/" />
    
          )} />
        </Switch>
    
      </div>
  
    )
  }
}
export default App;