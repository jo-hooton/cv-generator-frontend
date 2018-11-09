import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom'

import API from './API'
import Nav from './components/Nav.js'
import Header from './components/Header'
import SignInForm from './components/SignInForm'
import Dashboard from './components/Dashboard'

import './App.css';

class App extends Component {

  state = {
    email: null
  }

  signin = (user) => {
    localStorage.setItem('token', user.token)
    this.setState({ email: user.email })
    this.props.history.push('/dashboard')
  }

  signout = () => {
    localStorage.removeItem('token')
    this.setState({ email: null })
    this.props.history.push('/signin')
  }

  componentDidMount() {
    if (!localStorage.getItem('token')) return
    API.validate()
    .then(user => {
      this.signin(user)
      this.props/history.push('/dashboard')
    })
    .catch(error => this.props.history.push('/signin'))
  }

  render() {
    const { email } = this.state
    const { signin, signout } = this
    return (
      <div className="App">
        < Nav />
        <Header email={email} signout={signout} />
        <Route path='/signin' render={props => <SignInForm {...props} signin={signin} />} />
    <Route path ='/dashboard' render={<Dashboard />} />
      </div>
    )
  }
}

export default withRouter(App)