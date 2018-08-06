import React, { Component } from "react";
import { Route, BrowserRouter, Link, Redirect } from "react-router-dom";
import "./App.css";
import InputForm from "./components/InputForm.js";
import ReviewContainer from "./components/ReviewContainer.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false
    };
  }
  handleClick = e => {
    this.setState({ redirect: !this.state.redirect });
  };
  componentWillMount=()=>{
    if(window.location.pathname==="/reviews"){
      this.setState({redirect: true})
    }
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Link to={this.state.redirect?"/":"/reviews"}>
            <button onClick={this.handleClick}>
                {this.state.redirect ? "Hide" : "Show"} Reviews
            </button>
            </Link>
            <div className="container">
              <Route path="/" exact={true} render={() => <InputForm />} />
              <Route
                path="/reviews"
                exact={true}
                render={() => <ReviewContainer resetRedirect={this.handleClick}/>}
              />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
