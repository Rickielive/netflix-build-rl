import React, { useRef } from 'react'
import { auth } from '../firebase';
import './SignUpScreen.css';

function SignUpScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();  // when ever a button is inside a form it will refresh .so this code not allow

        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
            
        ).then((authUser) =>{
            // console.log(authUser)

        }).catch((error) =>
            alert(error.message));
    };

    const signIn = (e) => {
        e.preventDefault();  
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        )
        .then((authUser) =>{
            // console.log(authUser);

        })
        .catch((error) => alert(error.message));
    }
  
    
    return (
        <div className= "signupScreen">
             <form>
                 <h1> Sign In</h1>
                 <input ref= {emailRef} type="Email" placeholder="Email Address" />
                 <input ref= {passwordRef} placeholder= "Password" type = "password"/>
                 <button type="submit" onClick={signIn}> 
                 Sign In 
                 </button>
                 <h4>
                 <span className= "signupScreen__gray" >New to Netflix?</span>
                     <span className= "signupScreen__link" onClick={register} > Sign up now </span>
                 </h4>
             </form>
        </div>
    ) 
}

export default SignUpScreen
