import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from 'semantic-ui-react'

class ContactFormItem extends React.Component {
  state = {
    phoneNumber: "",
    address: "",
    button: "active"
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  buttonClick = () => {
    this.props.handleClick({
      phoneNumber: this.state.phoneNumber,
      address: this.state.address})
    this.setState({button: "disabled"})
  }

  render() {
    return (
      <div>
        <TextField
          id="phoneNumberInput"
          label="Phone Number"
          value={this.state.phoneNumber}
          onChange={this.handleChange}
          margin="normal"
          name="phoneNumber"
          type="phoneNumber"
        />
        <br />
        <TextField
          id="addressInput"
          label="Location"
          value={this.state.address}
          onChange={this.handleChange}
          margin="normal"
          name="address"
          type="address"
        />
        <br />
        {this.state.button === 'active' ?
        <Button 
        basic color='blue'
          onClick={
              () => this.buttonClick()
          }
        >
          Save
        </Button>
        :
        <Button disabled>Saved</Button>
        }
      </div>
    );
  }
}

export default ContactFormItem;
