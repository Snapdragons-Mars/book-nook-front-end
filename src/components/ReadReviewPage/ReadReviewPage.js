import './ReadReviewPage.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import profile from '../../assets/profile-icon.svg'
import noise from '../../assets/noise-icon.svg'
import outlet from '../../assets/outlet-icon.svg'
import wifi from '../../assets/wifi-icon.svg'
import aesthetic from '../../assets/aesthetic-icon.svg'
import cafe from '../../assets/cafe-icon.svg'
import star from '../../assets/star-icon.svg'
import logo from '../../assets/book-nook-icon.svg'
import lofiGirl from '../../assets/lofi-girl.svg'
import axios from 'axios'

function ReadReviewPage() {
    const [reviews, setReviews] = useState([])
    const [username, setUsername] = useState('')

    useEffect(() => {
        axios.get(`https://book-nook-back-end-production.up.railway.app/api/users`)
        .then(res => {
            const usersArr = res.data
            const loggedOnUser = usersArr.find(user => user.email === window.localStorage.getItem('Email'))
            // console.log(loggedOnUser)
            const loggedOnUserId = loggedOnUser.id
            setUsername(loggedOnUser.username)
            // console.log(loggedOnUserId)
            axios.get(`https://book-nook-back-end-production.up.railway.app/api/reviews/user/${loggedOnUserId}`)
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
                    <img className="book-nook-logo-2" src={logo} alt="book nook logo"/>
                    <p className="book-nook-name">Book Nook</p>
                </div>
                <Link to="/profile">
                    <img className="profile-btn" src={profile} alt="profile"/>
                </Link>
            </div>

            {username && 
                <div className="hello">
                    <h1 className="hello-text">Hello {username[0].toUpperCase() + username.substring(1).toLowerCase()}! 👋</h1>
                </div>
            }

            <div className="body-container">
                <div className="write-btn-container">
                    <Link to="/createreview">
                        <button className="write-btn">+ Add a Study Spot Review</button>
                    </Link>
                </div>

                {reviews.length === 0 && (
                    <div className="no-reviews-div">
                        <p className="no-reviews-msg">No Reviews Yet</p>
                        <img className="lofi-girl" src={lofiGirl} alt="lofi girl"/>
                    </div>
                )}

                <div className="review-grid">
                    {reviews.map(review => (
                        
                        <div className="review-card" key={review._id}>
                            <div className="top">
                                <div className="study-spot-info">
                                    <div className="study-spot-icon-name">
                                        <img className="study-spot-icon" src={cafe} alt="coffee-icon"/>
                                        <h2 className="study-spot-name">{review.study_spot}</h2>
                                    </div>
                                    <div className="study-spot-star-rating">
                                        <img className="star" src={star} alt="star-icon"/>
                                        <p className="rating">{+((review.noise_level_rating + review.outlets_rating + review.wifi_rating + review.aesthetic_rating)/4).toFixed(1)}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="middle">
                                <h3 className="review-title">{review.title}</h3>
                                <p className="review-paragraph">
                                    {review.comment}
                                </p>
                            </div>

                            <hr className="divider"></hr>
                                
                            <div className="bottom">
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
                            <div className="date-div">
                                <p className="date">{review.updatedAt.slice(5,10)}-{review.updatedAt.slice(0,4)}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReadReviewPage;