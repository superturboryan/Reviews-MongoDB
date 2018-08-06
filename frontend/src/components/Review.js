import React, {Component} from 'react';
import './css/Review.css';

class Review extends Component{
    render(){
        return (
            <div>
                <section className="reviewHeader">
                <span>{this.props.username}</span>
                <span>{this.props.rating}</span>
                </section>
                <span>
                    {this.props.review}
                </span>
            </div>
        )
    }
}

export default Review