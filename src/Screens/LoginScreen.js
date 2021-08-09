import React, { useState } from 'react'
import './Loginscreen.css';
import SignUpScreen from './SignUpScreen';

function LoginScreen() {    
    // const {signIn, setSignIn} = React.useState(false)
    const [signIn, setSignIn] = useState(false)


    return (
        <div className = 'loginScreen'>
            <div className= 'loginScreen__background'>
                <img 
                className= "loginScreen__logo"
                // src="https://www.kindpng.com/picc/m/40-408261_batman-silhouette-logo-transparent-background-batman-logo-png.png"
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
                alt="" />
                <button 
                onClick={() => setSignIn(false)}
                className='loginScreen__button'>
                    Sign In
                </button>
                <div className= "loginScreen__gradient"></div>
                
                <div className="loginScreen__body">
                    {signIn ? (
                        <SignUpScreen />
                    ): (
                        <React.Fragment>
                            <h1> Welcome Bazu</h1>
                    {/* <h1>Unlimited Films, TV Programmes and more</h1> */}
                    <h2> Watch anywhere. Cancel at any time</h2>
                    <h3>
                        Ready to watch? Enter your email to create or restart your membership.
                    </h3>
                    <div className="loginScreen__input">
                        <form>
                            <input type="Email" placeholder="Email Address" />
                            <button 
                            onClick={() => setSignIn(true)}
                            className= "loginScreen__getStarted">
                                Get Started
                            </button>
                        </form>
                    </div>
                    </React.Fragment>
                    )}
                
                </div>
            </div>
            
        </div>
    )
}

export default LoginScreen
