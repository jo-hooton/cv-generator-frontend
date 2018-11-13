import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import API from "./API";
import Nav from "./components/Nav.js";
import Header from "./components/Header";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";
import NewCVForm from "./components/NewCVForm";
import "./App.css";

class App extends Component {
  state = {
    email: null,

    AllUserCVs: []
  };

  signin = user => {
    localStorage.setItem("token", user.token);
    this.setState({ email: user.email });
    this.props.history.push("/dashboard");
  };

  signout = () => {
    localStorage.removeItem("token");
    this.setState({ email: null });
    this.props.history.push("/signin");
  };

  // showCV = () => {
  //   this.props.history.push("/dashboard");
  // };

  componentDidMount() {
    if (!localStorage.getItem("token")) return;
    API.validate()
      .then(user => {
        this.signin(user);
        this.props.history.push("/dashboard");
      })
      .catch(error => this.props.history.push("/signin"));
  }

  render() {
    const { email } = this.state;
    const { signin, signout } = this;
    return (
      <div className="App">
        <Nav email={this.state.email} />
        <Header email={email} signout={signout} />
        <Route
          path="/signin"
          render={props => <AuthForm {...props} authenticate={signin} />}
        />
        <Route
          path="/signup"
          render={props => <AuthForm {...props} authenticate={signin} />}
        />
        <Route
          path="/dashboard"
          render={props => <Dashboard {...props} showCV={this.showCV} />}
          // render={props => <NewCVForm {...props}   />}
        />
      </div>
    );
  }
}

export default withRouter(App);
