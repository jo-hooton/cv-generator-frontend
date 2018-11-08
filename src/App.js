import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'

import Nav from './components/Nav.js'
import Header from './components/Header'
import SignInForm from './components/SignInForm'
import logo from './logo.svg';

import './App.css';

class App extends Component {

  state = {
    email: null
  }

  signin = (email) => {
    localStorage.setItem('email', email)
    this.setState({ email })
    this.props.history.push('/inventory')
  }

  signout = () => {
    localStorage.removeItem('email')
    this.setState({ email: null })
    this.props.history.push('/signin')
  }

  componentDidMount() {
    const email = localStorage.getItem('email')
    if (email) {
      this.signin(email)
      this.props.history.push('/inventory')
    } else {
      this.props.history.push('/signin')
    }
  }

  render() {
    const { email } = this.state
    const { signin, signout } = this
    return (
      <div className="App">
        < Nav />
        <Header email={email} signout={signout} />
        <Route path='/signin' render={props => <SignInForm {...props} signin={signin} />} />
      </div>
    )
  }
}

export default withRouter(App)