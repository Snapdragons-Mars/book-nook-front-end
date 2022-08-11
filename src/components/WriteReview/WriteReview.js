import './WriteReview.css'
import Star from './Star'
import { useState, useEffect } from 'react'
import { useNavigate, Link, useParams } from 'react-router-dom'
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
  const { spot, reviewId } = useParams()

  function handleStudySpot(event) {
    setStudySpot(event.target.value)
  }

  function handleTitle(event) {
    setTitle(event.target.value)
  }

  function handleComment(event) {
    setComment(event.target.value)
  }

  function handlePost(event) {
    event.preventDefault()

    axios.get(`https://book-nooks-api.herokuapp.com/api/users`)
      .then(res => {
          const usersArr = res.data
          const loggedOnUser = usersArr.find(user => user.email === window.localStorage.getItem('Email'))
          axios.post(`https://book-nooks-api.herokuapp.com/api/reviews`, {
            'title': title,
            'comment': comment,
            'study_spot': studySpot,
            'wifi_rating': wifiRating,
            'noise_level_rating': noiseRating,
            'aesthetic_rating': aestheticRating,
            'outlets_rating': outletsRating,
            'owner': loggedOnUser
          })
            .then(res => {
              console.log(res)
            })
            .then(() => {
              navigate('/reviews')
            })
            .catch(err => console.log(err))
          })
  }
  
  const navigate = useNavigate() 

  function handleBack() {
    navigate(-1)
  }

  function handleCancel() {
    navigate('/profile')
  }

  function handleUpdate(event) {
    event.preventDefault()

    axios.put(`https://book-nooks-api.herokuapp.com/api/reviews/${reviewId}`, {
      'title': title,
      'comment': comment,
      'study_spot': spot,
      'wifi_rating': wifiRating,
      'noise_level_rating': noiseRating,
      'aesthetic_rating': aestheticRating,
      'outlets_rating': outletsRating
    })
    .then(res => {
      console.log(res)
    })
    .then(() => {
      navigate('/reviews')
    })
    .catch(err => console.log(err))

  }

  return (
    <div className="write-review-page">
    <div className="write-header">
          <button onClick={handleBack} className="back-button">Back</button>
          <Link to="/profile">
              <img className="profile-btn" src={profile} alt="profile"/>
          </Link>
      </div>

    <div class="write-chunk">
      {spot ? (
        <h1 className="write-review-title">Update your {spot} Review</h1>
      ) : (
        <h1 className="write-review-title">Write a Review</h1>
      )}
      <form className="rating-form" type="submit">

        {!spot && 
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
          }

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

        <div className="grid-chunk">
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
        </div>

        {spot ? (
          <div className="cancel-edit-btn">
            <button onClick={handleCancel} className="cancel-btn">Cancel</button>
            <button onClick={handleUpdate} className="edit-btn">Update</button>
          </div>
        ) : 
        (<button className="post-btn" type="submit" onClick={handlePost}>Post</button>)
        }
      </form>
      </div>


    </div>
    
  );
};

export default WriteReview;