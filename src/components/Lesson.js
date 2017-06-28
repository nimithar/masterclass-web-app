import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class Lesson extends React.Component {
  constructor(prop) {
    super();
    this.state = {
      lesson: prop,
    };
  }

  render() {
    var lesson = this.state.lesson;

    return (
      <li>
        <h1>{lesson.data.title}</h1>
        <p>{lesson.data.description}</p>
        <hr />
      </li>
    );
  }
}

export default Lesson;