import { toHaveDescription } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import StarRating from './StarRating';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        // this.handleChange = this.handleChange(bind)(this);
        // this.handleSubmit = this.handleSubmit(bind)(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
    }

render(){
    return (
        <div>
            <form onSubmit={this.handleSubmit}>

                <label>
                    Title:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label>
                    Comment:
                    <input type="textarea" value={this.state.value} onChange={this.handleChange} />
                </label>

                <label>
                    Noise Level:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <StarRating/>
                </label>

                <label>
                    Outlets:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <StarRating/>
                </label>

                <label>
                    Wifi:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <StarRating/>
                </label>

                <label>
                    Aesthetic:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    <StarRating/>
                </label>

            </form>
        </div>
    );
}
}

export default ReviewForm;