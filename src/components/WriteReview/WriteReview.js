import React from 'react';
import SpotItem from '../common/SpotItem';
import ReviewForm from '../common/ReviewForm/ReviewForm';
import StarRating from '../common/ReviewForm/StarRating';

function WriteReview(props) {
    return (
        <div>
            <SpotItem/>
            <ReviewForm/>
            <StarRating/>
        </div>
    );
}

export default WriteReview;