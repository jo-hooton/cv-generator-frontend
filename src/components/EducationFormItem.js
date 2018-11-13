import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class EducationFormItem extends React.Component {
  state = {
    qualification: "",
    institution: "",
    dates: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

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
          label="Dates"
          value={this.state.dates}
          onChange={this.handleChange}
          margin="normal"
          name="dates"
          type="dates"
        />
        <br />
        <Button
          onClick={() =>
            this.props.handleClick({
              qualification: this.state.qualification,
              institution: this.state.institution,
              dates: this.state.dates
            })
          }
        >
          Save
        </Button>
      </div>
    );
  }
}

export default EducationFormItem;
