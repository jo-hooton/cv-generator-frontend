import React from 'react'
import { Button } from 'semantic-ui-react'

const Header = props =>
  <header className='App-header'>
    <h1 className='App-title'>
      {
        props.email ?
          `CV Generator` :
          'CV Generator'
      }
      </h1>
      <br />
      <div className="header-photo" style={ { backgroundImage: `url(${props.photo})` } }>
      </div>
      <div>
      {
        props.email &&
          <Button inverted color="blue" onClick={props.signout}>SIGN OUT</Button>
      }
      </div>
    
   
  </header>

export default Header