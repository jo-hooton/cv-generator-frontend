import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

import API from "./API";
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
    allCVs: [],
    selectedCV: null
  };

  signin = user => {
    localStorage.setItem("token", user.token);
    this.setState({ email: user.email, photo: user.photo });
    this.props.history.push("/dashboard");
  };

  signout = () => {
    localStorage.removeItem("token");
    this.setState({ email: null });
    this.props.history.push("/signin");
  };

  selectCV = (id) => {
    let foundCV = this.state.allCVs.find(cv => cv.id == id)
    this.setState({selectedCV: foundCV})
  }

  resetSelectCV = () => {
    this.setState({selectedCV: null})
  }

  setPhoto = (url) => {
    this.setState({photo: url})
    console.log("setPhoto called");
    
    API.updatePhoto(url)
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
      // .then(() => API.getUserCvs())
      .then(() => API.getAllCvs())
      // .then(resp => this.setState({allUserCVs: resp}))
      .then(resp => this.setState({allCVs: resp}))
      .catch(error => this.props.history.push("/signin"));
  }

  render() {
    const { email, allUserCVs, allCVs, selectedCV, photo } = this.state;
    const { signin, signout, selectCV, setPhoto, resetSelectCV } = this;
    return (
      <div className="App">
        <Header 
        email={email} 
        signout={signout} 
        photo={photo} 
        />
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
          email={email} 
          allUserCVs={allUserCVs} 
          allCVs={allCVs} 
          selectCV={selectCV} 
          selectedCV={selectedCV} 
          resetSelectCV={resetSelectCV}
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
