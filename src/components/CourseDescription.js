import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class CourseDescription extends React.Component {
  constructor(prop) {
    super();

    this.state = {
      course: prop,
    };
  }
  render(){
    var course = this.state.course;

    return (
      <div className="Course-description-container">
        <p className="Course-description-item">
          <h2>6+ HOURS</h2>
          <span>Watch, listen and learn as the instructor teaches you how to write, pitch and create a hit TV show.</span>
        </p>
        <p className="Course-description-item">
          <h2>EXCLUSIVE CONTENT</h2>
          <span>Get the instructor's story bibles, pilot scripts and Grey’s Anatomy pitch notes.</span>
        </p>
        <p className="Course-description-item">
          <span className="Course-desc-cost">$90</span><span className="Course-desc-payment">LIFETIME ACCESS</span>
          <button className="Course-description-button-red">TAKE THE CLASS</button>
          <br />
          <button className="Course-description-button-grey">GIVE AS A GIFT</button>
          <button className="Course-description-button-black">FAQ</button>
        </p>
      </div>
    );
  }
}

export default CourseDescription;