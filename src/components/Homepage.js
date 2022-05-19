import React from 'react';
import '../styling/home.css'
import { GoogleLogin } from 'react-google-login';

const Homepage = () => {

  const responseGoogle = (response) => {
    console.log(response); // --> Info about the user such as givenName in response.profileObj
  }
  

  return (
    <section className='homepage'>
  
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
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
          //  TODO isSignedIn={true}
          //! isSignedIn={true} attribute will call 
          //! onSuccess callback on load to keep the user signed in.
        />
          
         


      </div>
  </section>
  )
}

export default Homepage

