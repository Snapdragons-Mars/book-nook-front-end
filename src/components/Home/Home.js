import './Home.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import apple from '../../assets/apple-icon.svg';
import google from '../../assets/google-icon.svg';
import facebook from '../../assets/facebook-icon.svg'
import logo from '../../assets/book-nook-icon.svg'

function Home() {
    const navigate = useNavigate()
    const [signUp, setSignUp] = useState(true)
    const [welcomeUser, setWelcomeUser] = useState(false)
    const [userSignUp, setUserSignUp] = useState({
        username: '',
        email: '',
        password: ''
    })
    const [userSignIn, setUserSignIn] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState(null)

    function handleSignUpChange(event) {
        setUserSignUp({...userSignUp, [event.target.id]: event.target.value})
    }

    function handleSignInChange(event) {
        setUserSignIn({...userSignIn, [event.target.id]: event.target.value})
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (signUp) {
            axios.post(`http://localhost:8000/api/users/signup`, userSignUp)
                .then(res => {
                    setSignUp(!signUp)
                    setWelcomeUser(true)
                    setError(null)
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.data.includes("User validation failed")) {
                        setError("Invalid email.")
                    }
                    else {
                        setError(err.response.data)
                    }
                })
        }
        else {
            axios.post(`http://localhost:8000/api/users/signin`, userSignIn)
                .then(res => {
                    console.log(res)
                })
            // navigate('/browse')
        }
    }

    function handleSwitch() {
        setSignUp(!signUp)
        setWelcomeUser(false)
        setUserSignUp({
            username: '',
            email: '',
            password: ''
        })
        setUserSignIn({
            email: '',
            password: '' 
        })
    }

    return (
        <div className="home-page">
            <div className="book-nook-title-div">
                <h1 className="book-nook-title">Book Nook</h1>
            </div>
            <div className="form-container">
                <form className="sign-form" type="submit" onSubmit={handleSubmit}>
                    <div className="input-fields">
                        {signUp ? (<h3 className="sign-title">Sign Up</h3>) : (<h3 className="sign-title">Sign In</h3>)}
                        {welcomeUser ? (<p className="welcome-message">Welcome to Book Nook!</p>) : null}
                        {signUp ? 
                            (<input 
                                onChange={handleSignUpChange}
                                className="field"
                                id='username'
                                type="text"
                                placeholder="Username"
                                value={userSignUp.username}
                            />) 
                            : null
                        }
                        {signUp ?
                            (<input
                                onChange={handleSignUpChange}
                                className="field"
                                id='email'
                                type="text"
                                placeholder="Email Address"
                                value={userSignUp.email}
                            />) 
                            : 
                            (<input
                                onChange={handleSignInChange}
                                className="field"
                                id='email'
                                type="text"
                                placeholder="Email Address"
                                value={userSignIn.email}
                            />) 
                        }   
                        {signUp ?
                            (<input
                                onChange={handleSignUpChange}
                                className="field"
                                id='password'
                                type="password"
                                placeholder="Password"
                                value={userSignUp.password}
                            />)
                            :
                            (<input
                                onChange={handleSignInChange}
                                className="field"
                                id='password'
                                type="password"
                                placeholder="Password"
                                value={userSignIn.password}
                            />)
                        }
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    {signUp ? (<button type="submit" className="sign-button">Create Account</button>) : (<button type="submit" className="sign-button">Log In</button>)}
                </form>
                {signUp ? (<p className="switch">Already have an account? <span className="switch-link" onClick={handleSwitch}>Sign In</span></p>) : (<p className="switch">Need an account? <span className="switch-link" onClick={handleSwitch}>Sign Up</span></p>)}
                <div className="other-platform">
                    <div className="or">
                        <div className="divider divider-left"></div>
                        <p className="or-text">OR</p>
                        <div className="divider divider-right"></div>
                    </div>
                    <p className="continue">Continue with other platforms</p>
                    <div className="platforms">
                        <img className="sm-logo" src={apple} alt="Apple Logo"/>
                        <img className="sm-logo" src={google} alt="Google Logo"/>
                        <img className="sm-logo" src={facebook} alt="Facebook Logo"/>
                    </div>
                </div>
            </div>
            <div className="book-nook-logo-div">
                <img className="book-nook-logo" src={logo} alt="Book Nook Logo"/>
            </div> 
        </div>
    );
};

export default Home;