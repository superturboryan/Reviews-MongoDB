import React, { Component } from "react";
import Review from './Review.js';

class ReviewContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: null
    };
  }
  renderReviews = (review, index) => {
    return (<Review
    username={review.username}
    rating={review.rating}
    review={review.review}
    />)
  };
  render() {
    return <div>{this.state.reviews?this.reviews.map(this.renderReviews):'no reviews yet'}</div>;
  }
}

export default ReviewContainer;
