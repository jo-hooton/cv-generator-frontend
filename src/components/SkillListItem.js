import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class SkillListItem extends React.Component {
  state = {
    skill: "",
    skillfulness: ""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <TextField
          id="skillInput"
          label="Skill"
          value={this.state.skill}
          onChange={this.handleChange}
          margin="normal"
          name="skill"
          type="skill"
        />
        <br />
        <TextField
          id="skillfulnessInput"
          label="Skillfulness out of 10"
          value={this.state.skillfulness}
          onChange={this.handleChange}
          margin="normal"
          name="skillfulness"
          type="skillfulness"
        />
        <br />
        <Button
          onClick={() =>
            this.props.handleClick({
              skill: this.state.skill,
              skillfulness: this.state.skillfulness
            })
          }
        >
          Save
        </Button>
      </div>
    );
  }
}

export default SkillListItem;
