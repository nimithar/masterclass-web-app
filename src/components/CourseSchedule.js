import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class CourseSchedule extends React.Component {
  constructor(prop) {
    super();

    this.state = {
      desctiption: prop,
    };
  }
   render() {
    return(
      <div className="Course-schedule-container">
          <p className="Course-schedule-item">
            <h2>6+ HOURS</h2>
            <span>Watch, listen and learn as the instructor teaches you how to write, pitch and create a hit TV show.</span>
          </p>
          <p className="Course-schedule-item">
            <h2>CLASS WORKBOOK</h2>
            <span>A downloadable workbook accompanies the class with lesson recaps and supplemental materials.</span>
          </p>
          <p className="Course-schedule-item">
            <h2>OFFICE HOURS</h2>
            <span>Upload videos to get feedback from the class. The instructor will also respond to select student questions</span>
          </p>
      </div>
    );
   }
}

export default CourseSchedule;