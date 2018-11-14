import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class ContactFormItem extends React.Component {
  state = {
    phoneNumber: "",
    address: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

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
        <Button
          onClick={() =>
            this.props.handleClick({
              phoneNumber: this.state.phoneNumber,
              address: this.state.address
            })
          }
        >
          Save
        </Button>
      </div>
    );
  }
}

export default ContactFormItem;
