import React, { Component } from 'react';
import {Route, BrowserRouter, Redirect} from 'react-router-dom'
import './App.css';
import InputForm from './components/InputForm.js'
import ReviewContainer from './components/ReviewContainer.js';

class App extends Component {
  constructor(){
    super();
    this.state={
      redirectToReviews: false
    }
  }
  handleClick=e=>{
    this.setState({redirectToReviews: !this.state.redirectToReviews})
  }
  
  render() {
    return (
      <div>
      <BrowserRouter>
      <div>
        <button onClick={this.handleClick}>{this.state.redirectToReviews?'Hide':'Show'} Reviews</button>
      <div className="container">
        <Route path='/' exact={true} render={()=><InputForm/>}/>
        <Route path='/reviews' exact={true} render={()=><ReviewContainer/>}/>

              {this.state.redirectToReviews ? <Redirect to='/reviews' /> : <Redirect to='/' />}
        </div>
      </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

