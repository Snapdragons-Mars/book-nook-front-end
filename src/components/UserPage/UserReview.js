// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const ReviewList = () => {
// 	const [reviews, setReviews] = useState([]);
// 	const [loading, setLoading] = useState(true);

// 	useEffect(() => {
// 		const handleLoadingTimeOut = setTimeout(() => {
// 			if (!reviews.length) {
// 				setLoading(false);
// 			}
// 		}, 5000);
		
// 		// Write your GET fetch() or axios() request here
// 		axios.get('http://localhost:8000/user/')
// 			.then(res => {
// 				setReviews(res.data)
// 				setLoading(false);
// 			})

// 		return () => clearTimeout(handleLoadingTimeOut);
// 	}, []);

// 	if (loading && !reviews.length) {
// 		return <h2>Loading...</h2>;
// 	}

// 	if (!loading && !reviews.length) {
// 		return <h2>Oops, something went wrong. Please try again later! </h2>;
// 	}

// 	return (
// 		<ul>
// 			{reviews.map((review) => (
// 				<ReviewItem key={review._id} review={review} />
// 			))}
// 		</ul>
// 	);
// };

// export default ReviewList;
import React from "react"
import axios from  "axios"
import { useNavigate, Link } from 'react-router-dom'
import profile from '../../assets/profile-icon.svg'
import noise from '../../assets/noise-icon.svg'
import outlet from '../../assets/outlet-icon.svg'
import wifi from '../../assets/wifi-icon.svg'
import aesthetic from '../../assets/aesthetic-icon.svg'
import coffee from '../../assets/coffee-icon.svg'
import star from '../../assets/star-icon.svg'

function UserReviewPage() {
    const navigate = useNavigate() 

    function handleBack() {
        navigate(-1)
    }
    function handleDelete(e){
        axios.delete(`http://localhost:8005/api/reviews/62f2d962eb20c39f89aac277/`, window.localStorage.getItem("Token"))
            .then(() => {
                navigate('/profile')
            })   
    }

    return (
        <div className="user-review-page">
            <div className="back">
                <button onClick={handleBack} className="back-button">Back</button>
                <Link to="/home">
                    <img className="profile-btn" src={profile} alt="profile"/>
                </Link>
            </div>

            <div className="header">
                <h2> Personal Book Nooks</h2>
            </div>

            <ul className="booknooks">
                <li>
                    <div className="study-spot-info">
                    <div className="study-spot-icon-name">
                        <img className="study-spot-icon" src={coffee} alt="coffee-icon"/>
                        <h2 className="study-spot-name">[Starbucks]</h2>
                    </div>
                    <div className="study-spot-star-rating">
                        <img className="star" src={star} alt="star-icon"/>
                        <p className="rating">3.5</p>
                    </div>
                </div>
                <div className="deleteAndEdit">
                    <button onClick={handleDelete} className="delete"> Delete</button>
                    <Link to= "/createreview"><button className="edit"> Edit</button></Link>
                </div>
                </li>



                <li>
                    <div className="study-spot-info">
                    <div className="study-spot-icon-name">
                        <img className="study-spot-icon" src={coffee} alt="coffee-icon"/>
                        <h2 className="study-spot-name">[Starbucks]</h2>
                    </div>
                    <div className="study-spot-star-rating">
                        <img className="star" src={star} alt="star-icon"/>
                        <p className="rating">3.5</p>
                    </div>
                </div>
                <div className="deleteAndEdit">
                    <button className="delete"> Delete</button>
                    <button className="edit"> Edit</button>
                </div>
                </li>


                <li>
                    <div className="study-spot-info">
                    <div className="study-spot-icon-name">
                        <img className="study-spot-icon" src={coffee} alt="coffee-icon"/>
                        <h2 className="study-spot-name">[Starbucks]</h2>
                    </div>
                    <div className="study-spot-star-rating">
                        <img className="star" src={star} alt="star-icon"/>
                        <p className="rating">3.5</p>
                    </div>
                </div>
                <div className="deleteAndEdit">
                    <button className="delete"> Delete</button>
                    <button className="edit"> Edit</button>
                </div>
                </li>
                </ul>
                    </div>
    );
};

export default UserReviewPage;