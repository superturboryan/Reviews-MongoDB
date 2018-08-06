import React, { Component } from "react";
import "./css/InputForm.css";

class InputForm extends Component {
  constructor() {
    super();
    this.state = {
      usernameInput: "",
      reviewInput: "",
      ratingInput: null
    };
  }
  render() {
    return (
      <div>
        <form handleSubmit={this.handleSubmit} className="reviewForm">
          User: <input type="text" onChange={this.handleUsernameChange} value={this.state.usernameInput} className="usernameInput"/>
          <br />
          Rating:
          <section className="radioRow">
          <label>
          <input type="radio" name="review" value="1" />
          1</label>
          <label>
          <input type="radio" name="review" value="2" />
                    2</label>
                <label>
          <input type="radio" name="review" value="3" />
                    3</label>
                <label>
          <input type="radio" name="review" value="4" />
                    4</label>
                <label>
          <input type="radio" name="review" value="5" checked={true}/>
                    5</label>
                    </section>
          <br />
          Review:
          <textarea onChange={this.handleTextAreaChange} className="reviewTextArea" value={this.state.usernameInput}/>
        </form>
      </div>
    );
  }
}

export default InputForm;
