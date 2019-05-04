import React, { Component } from "react";
import "./css/SearchBar.css";
import Review from "./Review.js";

class SearchByName extends Component {
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

      fetch("/getReviewsByUser?search=" + search)
         .then(head => head.text())
         .then(body => {
            let parsedResponse = JSON.parse(body)
            if (parsedResponse.status) {
               this.setState({ reviews: parsedResponse.reviews })
            }
         })
         .catch(err => console.log(err))

      /////////////////////////////////////////////////////////////

      // let body = { searchString: search }
      // fetch("/getReviewsByName", {
      //    method: "POST",
      //    body: JSON.stringify(body)
      // })
      //    .then(responseHeader => responseHeader.text())
      //    .then(responseBody => {
      //       let parsedBody = JSON.parse(responseBody)

      //       if (parsedBody.status) {
      //          this.setState({ reviews: parsedBody.reviews })
      //       }
      //    })
      //    .catch(err => console.log(err));


      //fetch goes above
      this.setState({ searchInput: "" });
   };
   renderReviews = review => {
      return (
         <Review
            username={review.username}
            rating={review.rating}
            review={review.review}
         />
      );
   };
   render() {
      return (
         <div>
            <p>Search Reviews By Reviewer</p>
            <form onSubmit={this.handleSubmit}>
               <input
                  className="searchBar byName"
                  type="text"
                  value={this.state.searchInput}
                  onChange={this.handleChange}
               />
               <br />
               <input className="searchSubmit" type="submit" />
            </form>
            {this.state.reviews ? (
               this.state.reviews.map(this.renderReviews)
            ) : (
                  <p>Enter a search query</p>
               )}
         </div>
      );
   }
}

export default SearchByName;
