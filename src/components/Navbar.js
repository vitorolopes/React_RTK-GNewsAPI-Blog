import React from 'react';
import '../styling/navbar.css';

import { useSelector, useDispatch} from 'react-redux';
import { Avatar } from '@material-ui/core';
import { GoogleLogout } from 'react-google-login';

import { setSignedIn } from '../features/userSlice';

const Navbar = () => {

  const {isSignedIn, userData} = useSelector( store => store.user)
  // console.log(userData);

  const dispatch = useDispatch()

  const logout = () => {
    dispatch(setSignedIn(false))
  }

  return (
    <nav className='navbar'>

        <header className="navbar-header">BlogMania 💬</header>

        {isSignedIn ?  <input type="text"/> : ""}

        {isSignedIn ? (
              <div className='navbar-user-data'>

                  <Avatar className='user'
                          src={userData.imageUrl}
                          alt={userData.name}
                  />
                  <h1>{userData.givenName}</h1>

                  <GoogleLogout
                      clientId="1084334404054-jch76dh3eqbj787ostatku2t93h61muv.apps.googleusercontent.com"
                      render={renderProps => (
                        <button onClick={renderProps.onClick} 
                                disabled={renderProps.disabled}
                                className="logout-button" 
                        >
                          Logout
                        </button> 
                      )}
                      onLogoutSuccess={logout}
                    >     
                  </GoogleLogout>
                
              </div>
          ) :
          (<h1 className="notSignedIn">User not available 😞</h1>)
        }  

    </nav>
  )
}

export default Navbar