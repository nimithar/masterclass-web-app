import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class Course extends React.Component {
  constructor(prop) {
    super();

    this.state = {
      course: prop,
    };
  }
  render(){
    var course = this.state.course;

    return (
      <div className="Course-container">
        <div className="Course-intro">
          <h2>{course.data.description_title}</h2>
          <p>{course.data.description_body}</p>
        </div>
        <img className="Course-image" src={course.data.image_2}></img>
      </div>
    );
  }
}

export default Course;