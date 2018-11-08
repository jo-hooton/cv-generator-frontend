import React from 'react'

import logo from '../logo.svg'

const Header = props =>
  <header className='App-header'>
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <h1 className='App-title'>
      {
        props.email ?
          `Welcome back, ${props.email}!` :
          'CV Generator'
      }
      <br />
      {
        props.email &&
          <button onClick={props.signout}>SIGN OUT</button>
      }
    </h1>
  </header>

export default Header