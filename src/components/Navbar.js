import React, {useState} from 'react';
import '../styling/navbar.css';

import { useSelector, useDispatch} from 'react-redux';
import { Avatar } from '@material-ui/core';
import { GoogleLogout } from 'react-google-login';

import { setSignedIn, setSearchInput, setUserData, setBlogData} from '../features/userSlice';

const Navbar = () => {

  const {isSignedIn, userData, searchInput} = useSelector( store => store.user)

  const [inputText, setInputText] = useState(searchInput)

  const dispatch = useDispatch()

  const logout = () => {
    dispatch(setSignedIn(false));
    dispatch(setUserData(null));
    dispatch(setBlogData(null));
  }

  const handleClick = (e) => { 
    e.preventDefault();
    dispatch(setSearchInput(inputText))
  }

  return (
    <nav className='navbar'>

        <header className="navbar-header">BlogMania 💬</header>

        {isSignedIn &&
          <div className='blog-search'>
            <input type="text"
                   className='search'
                   placeholder="Search for a blog"
                   value={inputText}
                   onChange={ e => setInputText(e.target.value)}
            /> 
            <button 
                className='submit'
                onClick={handleClick}
            >
                  Search
            </button>
          </div>
        }

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
                          Logout 😞
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