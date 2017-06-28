import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';
import Instructor from './components/Instructor';
import CourseDescription from './components/CourseDescription';
import Course from './components/Course';
import CourseSchedule from './components/CourseSchedule';
import LessonPlan from './components/LessonPlan';
import Review from './components/Review';
import Recommendations from './components/Recommendations';


class App extends React.Component {
  

  constructor() {
    super();

    this.state = {
      title: 'MASTERCLASS',
      instructors: [],
      courses: [],
      misc: [],
      lessons: [],
      reviews: [],
    }
  }

  // AJAX calls
  componentDidMount() {
    console.log('COMPONENT HAS MOUNTED');
    

    fetch('http://localhost:3001/api/instructors')
      .then(response => {
        response.json()
          .then(data => {
            this.setState({
              instructors: data,
            })
          });
      })
      .then(() => fetch('http://localhost:3001/api/courses'))
      .then(response => {
        response.json()
          .then(data => {
            this.setState({
              courses: data,
            })
          });
      })
      .then(() => fetch('http://localhost:3001/api/lessons'))
      .then(response => {
        response.json()
          .then(data => {
            this.setState({
              lessons: data,
            })
          });
      })
      .then(() => fetch('http://localhost:3001/api/reviews'))
      .then(response => {
        response.json()
          .then(data => {
            this.setState({
              reviews: data,
            })
          });
      })
      .then(() => fetch('http://localhost:3001/api/misc'))
      .then(response => {
        response.json()
          .then(data => {
            this.setState({
              misc: data,
            })
          });
      });

  }

  render() {
    let title = this.state.title;
    let instructors = this.state.instructors;
    let courses = this.state.courses;
    let reviews = this.state.reviews;
    let misc = this.state.misc;
    let lessons = this.state.lessons;

    if (instructors.length > 0 && courses.length > 0 && reviews.length > 0
          && misc.length > 0 && lessons.length > 0) {
      
      return (

      <div className="App">
        <div className="App-header">
          <h2>{title}</h2>
        </div>
        {}
        <Instructor data={instructors[0]}/>
        <CourseDescription data={courses[0]}/>
        <Course data={courses[0]} />
        <CourseSchedule data={courses[0]} />
        <LessonPlan data={lessons.filter(lesson => lesson.course_id === courses[0].course_id)} />
        <Review data={reviews[0]}/>
        <Recommendations data={courses.filter(course => course.course_id !== courses[0].course_id)}/>
      </div>
    );
    } else {
      return (<div></div>);
    }
  }
}

export default App;
