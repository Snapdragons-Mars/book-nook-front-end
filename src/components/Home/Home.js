import './Home.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
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
            axios.post(`http://localhost:8005/api/users/signup`, userSignUp)
                .then(res => {
                    setSignUp(!signUp)
                    setWelcomeUser(true)
                    setError(null)
                })
                .catch(err => {
                    if (err.response.data.includes("User validation failed: email: Invalid email")) {
                        setError("Please enter a valid email.")
                    }
                    else {
                        setError(err.response.data)
                    }
                })
        }
        else {
            axios.post(`http://localhost:8005/api/users/signin`, userSignIn)
                .then(res => {
                    // console.log(res)
                    // save token to local storage
                    window.localStorage.setItem("Token", res.data.token)
                    console.log(res.data.token)
                    // save email to local storage
                    window.localStorage.setItem("Email", userSignIn.email)
                })
                .then(() => {
                    navigate('/reviews')
                })
                .catch(err => {
                    setError("Provided email or password is incorrect.")
                })
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
        setError(null)
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
            </div>
            <div className="book-nook-logo-div">
                <img className="book-nook-logo" src={logo} alt="Book Nook Logo"/>
            </div> 
        </div>
    );
};

export default Home;