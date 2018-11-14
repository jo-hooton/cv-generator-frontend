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
      <br />
      {
        props.email &&
          <Button inverted color="blue" onClick={props.signout}>SIGN OUT</Button>
      }
    </h1>
  </header>

export default Header