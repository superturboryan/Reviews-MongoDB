import React, {Component} from 'react';
import './css/Review.css';

class Review extends Component{
    render(){
        return (
            <div className="reviewCard">
                <section className="reviewHeader">
                <span className="username">{this.props.username}</span>
                <span className="rating">{this.props.rating}</span>
                </section>
                <section className="reviewBody">
                <span className="review">
                    {this.props.review}
                </span>
                </section>
            </div>
        )
    }
}

export default Review