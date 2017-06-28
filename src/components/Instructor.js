import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class Instructor extends React.Component {
  constructor(prop) {
      super();

      this.state = {
        instructor: prop,
      };
    }

  render() {
    var instructor = this.state.instructor;
    return (
      <div className="Instructor-container">
        <img className="Instructor-image" src={instructor.data.image_1}></img>
        <br />
        <label className="Instructor-name">{instructor.data.first_name.toUpperCase()} {instructor.data.last_name.toUpperCase()}</label>
        <br />
        <label className="Instructor-desc">{instructor.data.description.toUpperCase()}</label>
      </div>
    );
  }
}

export default Instructor;