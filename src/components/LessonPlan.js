import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Lesson from './Lesson';

class LessonPlan extends React.Component {
  constructor(prop) {
    super();

    this.state = {
      lessons: prop,
    };
  }

  render() {
    var lessons = this.state.lessons;
    console.log(this.state.lessons);

      return (
        <div>
          <h1>LESSON PLAN</h1>
          <div className="Lesson-plan-container">
            <ol className="Lesson-list">
              {lessons.data.map((lesson, i) => <Lesson key = {i} data={lesson} />)}
            </ol>
          </div>
        </div>
      );
    }
}

export default LessonPlan;