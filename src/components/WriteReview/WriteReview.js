import React from 'react';
import SpotItem from './common/SpotItem';
import ReviewForm from './common/ReviewForm/ReviewForm';

function WriteReview(props) {
    return (
        <div>
            <SpotItem/>
            <ReviewForm/>
        </div>
    );
}

export default WriteReview;