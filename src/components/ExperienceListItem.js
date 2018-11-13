import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class ListItem extends React.Component {
  state = {
    position: "",
    company: "",
    dates: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

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
        <Button
          onClick={() =>
            this.props.handleClick({
              position: this.state.position,
              company: this.state.company,
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

export default ListItem;
