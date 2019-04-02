import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './timelineHeader.css'
// import TimelineExample from './App'
// import TimelineDayOne from "./TimelineDayOne";
// import TimelineDayTwo from "./TimelineDayTwo";
// import TimelineDayThree from "./TimelineDayThree";

class TimelineHeader extends Component {
//   constructor() {
//     super();

//     this.handleNavbarDayOne = this.handleNavbarDayOne.bind(this);
//     this.handleNavbarDayTwo = this.handleNavbarDayTwo.bind(this);
//     this.handleNavbarDayThree = this.handleNavbarDayThree.bind(this);
//     this.handleBack = this.handleBack.bind(this);
//   }


  handleNavbarDate(e) {
    this.link.classNavbarDate.add("fade");
    if (this.panel)
      this.panel.classNavbarDate.remove("fade");
    // e.preventDefault();
  }

  handleBack(e) {
    this.link.classList.remove("fade");
    if (this.panel)
      this.panel.classList.add("fade");
  }

  render() {
    // const items = [<TimelineExample />];
    // const {location} = this.props;
    
    return (
      <div className="TimelineNav">
        <div className="navMenu" ref={el => this.link = el}>
        <Link className="list-link" to="/Programme-complet" onClick={this.handleNavbar}>Programme complet</Link>
        <Link className="list-link" to="/Day-One" onClick={this.handleNavbarDayOne}>Day1</Link>
        <Link className="list-link" to="/Day-Two" onClick={this.handleNavbarDayTwo}>Day2</Link>
        <Link className="list-link" to="/Day-Three" onClick={this.handleNavbarDayThree}>Day3</Link>
        </div>
      </div>
    );
  }
}

export default withRouter(TimelineHeader);
