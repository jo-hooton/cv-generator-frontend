import React from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from 'semantic-ui-react'


class SkillListItem extends React.Component {
  state = {
    skill: "",
    skillfulness: "",
    button: "active"
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  buttonClick = () => {
    this.props.handleClick({
      skill: this.state.skill,
      skillfulness: this.state.skillfulness})
    this.setState({button: "disabled"})
  }

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

export default SkillListItem;
