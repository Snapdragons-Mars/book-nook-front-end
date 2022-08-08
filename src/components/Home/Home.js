import './Home.css'
import { useState } from 'react'
import apple from '../../assets/apple-icon.svg';
import google from '../../assets/google-icon.svg';
import facebook from '../../assets/facebook-icon.svg'
import logo from '../../assets/book-nook-icon.svg'

function Home() {
    const [signUp, setSignUp] = useState(true)

    function handleSwitch() {
        setSignUp(!signUp)
    }

    return (
        <div className="home-page">
            <div className="book-nook-title-div">
                <h1 className="book-nook-title">Book Nook</h1>
            </div>
            <div className="form-container">
                <form className="sign-form" type="submit">
                    <div className="input-fields">
                        {signUp ? (<h3 className="sign-title">Sign Up</h3>) : (<h3 className="sign-title">Sign In</h3>)}
                        {signUp ? 
                            (<input 
                                className="field"
                                type="text"
                                placeholder="Name"
                            />) 
                            : null
                        }
                        <input
                            className="field"
                            type="text"
                            placeholder="Email Address"
                        />
                        <input
                            className="field"
                            type="text"
                            placeholder="Password"
                        />
                    </div>
                    {signUp ? (<button variant="contained" className="sign-button">Create Account</button>) : (<button variant="contained" className="sign-button">Log In</button>)}
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

export default Home;T