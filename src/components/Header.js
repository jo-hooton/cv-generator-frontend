import React from 'react'


const Header = props =>
  <header className='App-header'>
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
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