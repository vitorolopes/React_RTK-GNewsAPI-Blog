import React from 'react';
import '../styling/home.css'
import { GoogleLogin } from 'react-google-login';

import { useDispatch, useSelector } from 'react-redux';
import { setSignedIn, setData } from '../features/userSlice';



const Homepage = () => {

  const {isSignedIn} = useSelector( store => store.user)

  const dispatch = useDispatch();

  const login = (response) => {
    // console.log(response); // --> Info about the user such as givenName in response.profileObj
    dispatch(setSignedIn(true))
    dispatch(setData(response.profileObj))
  }
  
  return (
    <section className='homepage'>
      {isSignedIn ?  ("Signed In") : (
        <div className="message">
          <h2>📗</h2>
          <h1>A Readers favourite place!</h1>
          <p>
            We provide high quality online resource for reading blogs.
            Just sign up and start reading some quality blogs.
          </p> 

          <GoogleLogin
            clientId="1084334404054-jch76dh3eqbj787ostatku2t93h61muv.apps.googleusercontent.com"
            render={renderProps => (
              <button onClick={renderProps.onClick} 
                      disabled={renderProps.disabled}
                      className="login-button" // added this classname to the component coming
                                              // from react-google-login
              >
                Login with Google
              </button>
            )}
            buttonText="Login"
            onSuccess={login} // responseGoogle in react-google-login
            onFailure={login}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
            //! isSignedIn={true} attribute will call 
            //! onSuccess callback on load to keep the user signed in.
          />
        </div>
      )}

  </section>
  )
}

export default Homepage

