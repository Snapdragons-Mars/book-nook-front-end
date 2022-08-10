import './UserReview.css'
import axios from  "axios"
import { useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react';
import profile from '../../assets/profile-icon.svg'
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

    function handleLogout() {
        window.localStorage.removeItem('Token')
        window.localStorage.removeItem('Email')
        navigate('/home')
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
                <h2> Edit or Delete Book Nooks</h2>
            </div>

            <ul className="booknooks-list">
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
                        <Link to= "/createreview"><button className="edit"> Edit</button></Link>
                        <button onClick={handleDelete} className="delete"> Delete</button>
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
            <div className="log-out-div">
                <button onClick={handleLogout} className="log-out-button">Logout</button>
            </div>
        </div>
    );
};

export default UserReviewPage;