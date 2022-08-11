import './WriteReview.css'
import Star from './Star'
import { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import noise from '../../assets/noise-icon.svg'
import outlet from '../../assets/outlet-icon.svg'
import wifi from '../../assets/wifi-icon.svg'
import aesthetic from '../../assets/aesthetic-icon.svg'
import profile from '../../assets/profile-icon.svg'
import axios from 'axios'

function WriteReview() {
  const [studySpot, setStudySpot] = useState('')
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')
  const [noiseRating, setNoiseRating] = useState(0)
  const [outletsRating, setOutletsRating] = useState(0)
  const [wifiRating, setWifiRating] = useState(0)
  const [aestheticRating, setAestheticRating] = useState(0)
  const [review, setReview] = useState({
    study_spot: '',
    title: '',
    comment: '',
    noise_level_rating: '',
    outlets_rating: '',
    wifi_rating: '',
    aesthetic_rating: '',
    owner: {}
  })
  const [owner, setOwner] = useState({})

  function handleStudySpot(event) {
    setStudySpot(event.target.value)
  }

  function handleTitle(event) {
    setTitle(event.target.value)
  }

  function handleComment(event) {
    setComment(event.target.value)
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/users`)
    .then(res => {
        const usersArr = res.data
        const loggedOnUser = usersArr.find(user => user.email === window.localStorage.getItem('Email'))
        setOwner(loggedOnUser)
  }, [])})

  function handlePost(event) {
    event.preventDefault()
    const reviewObj = {
      study_spot: studySpot,
      title: title,
      comment: comment,
      noise_level_rating: noiseRating,
      outlets_rating: outletsRating,
      aesthetic_rating: aestheticRating,
      owner: owner
    }
    setReview(reviewObj)
    console.log(review)

    axios.post(`http://localhost:8000/api/reviews`, review)
    .then(res => {
      console.log(res)
    })
    .then(() => {
      navigate('/reviews')
    })
    .catch(err => console.log(err))
  }

// useEffect(() => {
//   console.log(review)
// })

  const navigate = useNavigate() 

    function handleBack() {
        navigate(-1)
    }

  return (
    <div className="write-review-page">
    <div className="header">
          <button onClick={handleBack} className="back-button">Back</button>
          <Link to="/profile">
              <img className="profile-btn" src={profile} alt="profile"/>
          </Link>
      </div>

      <h1 className="write-review-title">Write a Review</h1>
      <form className="rating-form" type="submit">
        <div type="category-chunk">
          <p className="category">Study Spot</p>
          <div className="input-div">
            <input
              type="text"
              onChange={handleStudySpot}
              className="fields"
              id='study-spot'
              value={studySpot}
            />
          </div>
        </div>

        <div type="category-chunk">
          <p className="category">Title</p>
          <div className="input-div">
            <input
              type="text"
              onChange={handleTitle}
              className="fields"
              id='title'
              value={title}
            />
          </div>
        </div>

        <div type="category-chunk">
          <p className="category">Comment</p>
          <div className="input-div cat-comment">
            <input
              type="text"
              onChange={handleComment}
              className="fields"
              id='comment'
              value={comment}
            />
          </div>
        </div>

        <div className="rating-chunk">
          <p className="category">Noise Level</p>
          <div className="star-div">
            <img className="rating-icon" src={noise} alt="noise icon"/>
            <Star rating={noiseRating} setRating={setNoiseRating}/>
          </div>
        </div>

        <div className="rating-chunk">
          <p className="category">Outlet Availability</p>
          <div className="star-div">
            <img className="rating-icon" src={outlet} alt="outlet icon"/>
            <Star rating={outletsRating} setRating={setOutletsRating}/>
          </div>
        </div>

        <div className="rating-chunk">
          <p className="category">Wifi Speed</p>
          <div className="star-div">
            <img className="rating-icon" src={wifi} alt="wifi icon"/>
            <Star rating={wifiRating} setRating={setWifiRating}/>
          </div>
        </div>

        <div className="rating-chunk">
          <p className="category">Ambiance</p>
          <div className="star-div">
            <img className="rating-icon" src={aesthetic} alt="aesthetic icon"/>
            <Star rating={aestheticRating} setRating={setAestheticRating}/>
          </div>
        </div>   

        <button className="post-btn" type="submit" onClick={handlePost}>Post</button>
      </form>


    </div>
    
  );
};

export default WriteReview;