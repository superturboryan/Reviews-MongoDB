import React, { Component} from 'react';
import './css/SearchBar.css';
import Review from "./Review.js";

class SearchByName extends Component{
    constructor() {
        super();
        this.state = {
            searchInput: '',
            reviews: null
        }
    }
    handleChange = (e) => {
        let newInput = e.target.value;
        this.setState({ searchInput: newInput })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let search = this.state.searchInput
        //write a fetch here to
        //an endpoint that will query 
        //your database
     


        //fetch goes above
        this.setState({searchInput: ''})
    }
    renderReviews = (review) => {
        return (<Review
            username={review.username}
            rating={review.rating}
            review={review.review}
        />)
    }
    render() {
        return <div>
            <p>Search Reviews By Reviewer</p>
            <form onSubmit={this.handleSubmit}>
            <input class="searchBar byName" type="text" value={this.state.searchInput} onChange={this.handleChange} />
            <br />
            <input class="searchSubmit" type="submit" />
        </form>
            {this.state.reviews ? this.state.reviews.map(this.renderReviews) : <p>Enter a search query</p>}
        </div>
    }
}

export default SearchByName;