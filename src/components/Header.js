import React from 'react'
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Button,
} from 'semantic-ui-react'

const Header = props =>

  // <header className='App-header'>
  //   <h1 className='App-title'>
  //     {
  //       props.email ?
  //         `CV Generator` :
  //         'CV Generator'
  //     }
  //     </h1>
  //     <br />
  //     <div className="header-photo" style={ { backgroundImage: `url(${props.photo})` } }>
  //     </div>
  //     <div>
  //     {
  //       props.email &&
  //         <Button inverted color="blue" onClick={props.signout}>SIGN OUT</Button>
  //     }
  //     </div>
    
   
  // </header>
  <header className='App-header'>
<Menu fixed='top' inverted>
<Container>
  <Menu.Item as='a' header>
    <Image size='mini' src={props.photo} style={{ marginRight: '1.5em', backgroundImage: `url(${props.photo})` }} />
    CV Builder
  </Menu.Item>
  <Menu.Item as='a' href="/dashboard">Dashboard</Menu.Item>

 
  {props.email &&
          <Button style={{ marginLeft: '35em', marginTop: '1em', marginBottom: '1em'}} inverted color="blue" onClick={props.signout}>Sign Out</Button>}
</Container>
</Menu>
</header>


export default Header