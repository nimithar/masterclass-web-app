import React from 'react';
import ReactDOM from 'react-dom';
import '../App.css';

class Review extends React.Component {
  constructor(prop) {
    super();

    this.state = {
      review: prop,
    };
  }

  render() {
    var review = this.state.review;

    return (
      <div className="Review-container">
        <div className="Review-desc-container">
          <p className="Review-desc">"{review.data.description}"</p>
          <p className="Review-desc-img">
            <img className="Review-student-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9mOUh2smC1eg8okq7_JRNtkbVFBlFPvR99MnF5_QNY5fcooAE"></img>
            <br /><br /><hr /><br />
            <label className="Review-student-name">Jane Doe</label><br />
            <label className="Review-student-desc">A professional from xyz company</label>
          </p>

        </div>
      </div>
    );
  }
}

export default Review;