import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from 'semantic-ui-react'


class EducationFormItem extends React.Component {
  state = {
    qualification: "",
    institution: "",
    dates: "",
    button: "active"
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  buttonClick = () => {
    this.props.handleClick({
      qualification: this.state.qualification,
      institution: this.state.institution,
      dates: this.state.dates})
    this.setState({button: "disabled"})
  }

  render() {
    return (
      <div>
        <TextField
          id="qualificationInput"
          label="Qualification"
          value={this.state.qualification}
          onChange={this.handleChange}
          margin="normal"
          name="qualification"
          type="qualification"
        />
        <br />
        <TextField
          id="institutionInput"
          label="Institution"
          value={this.state.institution}
          onChange={this.handleChange}
          margin="normal"
          name="institution"
          type="institution"
        />
        <br />
        <TextField
          id="datesInput"
          label="Year"
          value={this.state.dates}
          onChange={this.handleChange}
          margin="normal"
          name="dates"
          type="dates"
        />
        <br />
        <div style={{ margin: '1.5em' }}>
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
      </div>
    );
  }
}

export default EducationFormItem;
