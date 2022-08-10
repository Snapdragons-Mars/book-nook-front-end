import React from "react";
import "./ReviewForm.css"
class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: "Title",
          comment: "Your comment",
          noiseLevel: null,
          outlets: null,
          wifi: null,
          aesthetic: null,
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

      handleClick(event) {
        event.preventDefault()

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
          [name]: value
        });
      }

      handleSubmit(event) {
        event.preventDefault()
        console.log(this.state.title)
        console.log(this.state.comment)
        console.log(this.state.noiseLevel)
        console.log(this.state.outlets)
        console.log(this.state.wifi)
        console.log(this.state.aesthetics)
      }
    
      render() {
        return (
        <div className="review-page">
          <form className="form-container">
            <label className="input-fields">
              Title:
              <input 
                name="title"
                type="text"
                value={this.state.title}
                onChange={this.handleInputChange} />
            </label>
            <br/>
            <label className="input-fields">
              Comment:
              <input
                name="comment"
                type="text"
                value={this.state.comment}
                onChange={this.handleInputChange} />
            </label>
            <br/>
            <label className="input-fields">
              Noise Level:
              <button id="rating-button"
                name="noiseLevel"
                value={1}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="noiseLevel"
                value={2}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="noiseLevel"
                value={3}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="noiseLevel"
                value={4}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="noiseLevel"
                value={5}
                onClick={this.handleClick}/>
            </label>
            <br/>
            <label className="input-fields">
              Outlets:
              <button id="rating-button"
                name="outlets"
                value={1}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="outlets"
                value={2}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="outlets"
                value={3}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="outlets"
                value={4}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="outlets"
                value={5}
                onClick={this.handleClick}/>
            </label>
            <br/>
            <label className="input-fields">
              Wifi:
              <button id="rating-button"
                name="wifi"
                value={1}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="wifi"
                value={2}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="wifi"
                value={3}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="wifi"
                value={4}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="wifi"
                value={5}
                onClick={this.handleClick}/>
            </label>
            <br/>
            <label className="input-fields">
              Aesthetics:
              <button id="rating-button"
                name="aesthetics"
                value={1}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="aesthetics"
                value={2}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="aesthetics"
                value={3}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="aesthetics"
                value={4}
                onClick={this.handleClick}/>
              <button id="rating-button"
                name="aesthetics"
                value={5}
                onClick={this.handleClick}/>
            </label>
            <br/>
            <button
              type="submit"
              onClick={this.handleSubmit}>Post</button>
          </form>
          </div>
        );
      }
    }

export default ReviewForm;