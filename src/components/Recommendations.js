import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';
import Recommendation from './Recommendation';

class Recommendations extends React.Component {
  constructor(prop) {
    super();

    this.state = {
      courses: prop,
    };
  }

  render() {
    var courses = this.state.courses;
    console.log('From Recommendations');
    console.log(courses);

    return(
      <div>
        <h1>RECOMMENDED FOR YOU</h1>
        <ul>     
          {courses.data.map((c, i) => <Recommendation key={i} data={c} />)}
        </ul>
      </div>
    );
  }
}

export default Recommendations;