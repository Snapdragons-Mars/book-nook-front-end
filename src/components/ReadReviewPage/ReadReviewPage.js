import './ReadReviewPage.css'
import { useNavigate, Link } from 'react-router-dom'
import profile from '../../assets/profile-icon.svg'
import noise from '../../assets/noise-icon.svg'
import outlet from '../../assets/outlet-icon.svg'
import wifi from '../../assets/wifi-icon.svg'
import aesthetic from '../../assets/aesthetic-icon.svg'
import coffee from '../../assets/coffee-icon.svg'
import star from '../../assets/star-icon.svg'

function ReadReviewPage() {
    const navigate = useNavigate() 

    function handleBack() {
        navigate(-1)
    }

    return (
        <div className="read-review-page">
            <div className="heading">
                <button onClick={handleBack} className="back-button">Back</button>
                <Link to="/profile">
                    <img className="profile-btn" src={profile} alt="profile"/>
                </Link>
            </div>

            <div className="body-container">
                <div className="write-btn-container">
                    <Link to="/createreview">
                        <button className="write-btn">Write a Review</button>
                    </Link>
                </div>

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
                        <h3 className="review-title">[Review Title]</h3>
                        <p className="review-paragraph">
                            [Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.]
                        </p>
                    </div>
                    <div className="divider-div">
                        <div className="divider"></div>
                    </div>
                    <div className="right-side">
                        <div className="ratings-grid">
                            <div className="rating-div">
                                <img className="icon" src={noise} alt="Noise icon"/>
                                <p className="rating-number">4</p>
                            </div>
                            <div className="rating-div">
                                <img className="icon" src={outlet} alt="Outlet icon"/>
                                <p className="rating-number">2.5</p>
                            </div>
                            <div className="rating-div">
                                <img className="icon" src={wifi} alt="Wifi icon"/>
                                <p className="rating-number">3</p>
                            </div>
                            <div className="rating-div">
                                <img className="icon" src={aesthetic} alt="Aesthetic icon"/>
                                <p className="rating-number">1</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ReadReviewPage;