import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from 'semantic-ui-react'


class ExperienceFormItem extends React.Component {
  state = {
    position: "",
    company: "",
    dates: "",
    button: "active"
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  buttonClick = () => {
    this.props.handleClick({
      position: this.state.position,
      company: this.state.company,
      dates: this.state.dates})
    this.setState({button: "disabled"})
  }

  render() {
    return (
      <div>
        <TextField
          id="positionInput"
          label="Position"
          value={this.state.position}
          onChange={this.handleChange}
          margin="normal"
          name="position"
          type="position"
        />
        <br />
        <TextField
          id="companyInput"
          label="Company"
          value={this.state.company}
          onChange={this.handleChange}
          margin="normal"
          name="company"
          type="company"
        />
        <br />
        <TextField
          id="experienceDatesInput"
          label="Dates"
          value={this.state.dates}
          onChange={this.handleChange}
          margin="normal"
          name="dates"
          type="experienceDates"
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

export default ExperienceFormItem;
