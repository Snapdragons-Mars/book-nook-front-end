import './ReadReviewPage.css'
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import profile from '../../assets/profile-icon.svg'
import noise from '../../assets/noise-icon.svg'
import outlet from '../../assets/outlet-icon.svg'
import wifi from '../../assets/wifi-icon.svg'
import aesthetic from '../../assets/aesthetic-icon.svg'
import coffee from '../../assets/coffee-icon.svg'
import star from '../../assets/star-icon.svg'
import logo from '../../assets/book-nook-icon.svg'
import axios from 'axios'

function ReadReviewPage() {
    const navigate = useNavigate() 
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users`)
            .then(res => {
                const usersArr = res.data
                const loggedOnUser = usersArr.find(user => user.email === window.localStorage.getItem('Email'))
                const loggedOnUserId = loggedOnUser.id
                // console.log(loggedOnUserId)
                axios.get(`http://localhost:8000/api/reviews/user/${loggedOnUserId}`)
                    .then(res => {
                        // console.log(res.data)
                        setReviews(res.data)
                    })
            })
    }, [])

    return (
        <div className="read-review-page">
            <div className="heading">
                <div className="logo-icon-name">
                    <img className="book-nook-logo" src={logo} alt="book nook logo"/>
                    <p className="book-nook-name">Book Nook</p>
                </div>
                <Link to="/profile">
                    <img className="profile-btn" src={profile} alt="profile"/>
                </Link>
            </div>

            <div className="body-container">
                <div className="write-btn-container">
                    <Link to="/createreview">
                        <button className="write-btn">Add a Study Spot Review</button>
                    </Link>
                </div>

                {reviews.map(review => (
                    <div className="study-spot" key={review.id}>
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
        
                        <div className="review-card">
                            <div className="left-side">
                                <h3 className="review-title">{review.title}</h3>
                                <p className="review-paragraph">
                                    {review.comment}
                                </p>
                            </div>
                            <div className="divider-div">
                                <div className="divider"></div>
                            </div>
                            <div className="right-side">
                                <div className="ratings-grid">
                                    <div className="rating-div">
                                        <img className="icon" src={noise} alt="Noise icon"/>
                                        <p className="rating-number">{review.noise_level_rating}</p>
                                    </div>
                                    <div className="rating-div">
                                        <img className="icon" src={outlet} alt="Outlet icon"/>
                                        <p className="rating-number">{review.outlets_rating}</p>
                                    </div>
                                    <div className="rating-div">
                                        <img className="icon" src={wifi} alt="Wifi icon"/>
                                        <p className="rating-number">{review.wifi_rating}</p>
                                    </div>
                                    <div className="rating-div">
                                        <img className="icon" src={aesthetic} alt="Aesthetic icon"/>
                                        <p className="rating-number">{review.wifi_rating}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default ReadReviewPage;