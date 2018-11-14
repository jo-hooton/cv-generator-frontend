import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import API from "./API";
import Nav from "./components/Nav.js";
import Header from "./components/Header";
import AuthForm from "./components/AuthForm";
import Dashboard from "./components/Dashboard";
import CVContainer from "./components/CVContainer"
// import NewCVForm from "./components/NewCVForm";
import "./App.css";

class App extends Component {
  state = {
    email: null,
    photo: null,
    allUserCVs: [],
    selectedCV: null
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

  selectCV = (id) => {
    let foundCV = this.state.allUserCVs.find(cv => cv.id == id)
    this.setState({selectedCV: foundCV})
  }

  setPhoto = (url) => {
    console.log(url);
    
    this.setState({photo: url})
  }

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
      .then(() => API.getUserCvs())
      .then(resp => this.setState({allUserCVs: resp}))
      .catch(error => this.props.history.push("/signin"));
  }

  render() {
    const { email, allUserCVs, selectedCV, photo } = this.state;
    const { signin, signout, selectCV, setPhoto } = this;
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
          render={props => <Dashboard {...props} 
          allUserCVs={allUserCVs} 
          selectCV={selectCV} 
          selectedCV={selectedCV} 
          photo={photo} 
          savePhoto={setPhoto}/>}
          // render={props => <NewCVForm {...props}  showCV={this.showCV} />}
        />
        <Route 
        path="/cv"
        render={props => <CVContainer {...props} selectedCV={selectedCV} />}
        />
      </div>
    );
  }
}

export default withRouter(App);
