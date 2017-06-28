import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class Recommendation extends React.Component {
  constructor(prop) {
    super();

    this.state = {
      course: prop,
    };
  }

  handleClick() {
    console.log('Clicked on course!');
  }

  render() {
    var course = this.state.course;

    return(
      <li className="Recommendation-item">
        <img src={course.data.image_1} onClick={this.handleClick}></img>
      </li>
    );
  }
}

export default Recommendation;