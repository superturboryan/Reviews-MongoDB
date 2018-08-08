import React, { Component } from "react";
import "./css/SearchBar.css";
import Review from "./Review.js"

class SearchDescription extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      reviews: null
    };
  }
  handleChange = e => {
    let newInput = e.target.value;
    this.setState({ searchInput: newInput });
  };
  handleSubmit = e => {
    e.preventDefault();
    let search = this.state.searchInput;
    //write a fetch here to
    //an endpoint that will query
    //your database
  

    //fetch goes above
    this.setState({searchInput: ''})
  };
  renderReviews=(review)=>{
      return (<Review
          username={review.username}
          rating={review.rating}
          review={review.review}
      />)
  }
  render() {
    return (
      <div>
          <p>Search for reviews based on what is in the review body</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchInput}
            onChange={this.handleChange}
            class="searchBar reviews"
          />
          <br />
          <input class="searchSubmit" type="submit" />
        </form>
        {this.state.reviews ? this.state.reviews.map(this.renderReviews) : <p>Search for Reviews by description</p>}
      </div>
    );
  }
}

export default SearchDescription;