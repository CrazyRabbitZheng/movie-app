
import { useState } from 'react'

function NavBar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const handleLoginClick = () => {
    setLoggedIn(!loggedIn);
  };
  return (
  <><h1>Assignment 1</h1>
  <button type='button' class='btn btn-primary' onClick={handleLoginClick}>{loggedIn ? 'Logout': 'Login'}</button>
  </>
  )
}

export default NavBar