import React from "react";

import API from "../API";

import TextField from "@material-ui/core/TextField";
import { Button } from 'semantic-ui-react'

class AuthForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleSubmit = () => {
    if (this.props.location.pathname === "/signin") {
      const { email, password } = this.state;
      API.signin(email, password).then(data => {
        if (data.error) {
          alert("Wrong!");
        } else {
          this.props.authenticate(data);
        }
      });
    } else {
      const { email, password } = this.state;
      API.signup(email, password).then(data => {
        if (data.error) {
          alert("Wrong!");
        } else {
          this.props.authenticate(data);
        }
      });
    }
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  render() {
    const { email, password } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div>
        <TextField
          id="emailInput"
          label="Email"
          value={email}
          onChange={handleChange}
          margin="normal"
          name="email"
        />
        <br />
        <TextField
          id="passwordInput"
          label="Password"
          value={password}
          onChange={handleChange}
          margin="normal"
          name="password"
          type="password"
        />
        <br />
        <Button onClick={handleSubmit} variant="contained" color="primary">
          SUBMIT
        </Button>
      </div>
    );
  }
}

export default AuthForm;
