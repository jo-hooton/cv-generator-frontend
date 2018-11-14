import React from "react";
import ExperienceFormItem from "./ExperienceFormItem";
import EducationFormItem from "./EducationFormItem";
import SkillFormItem from "./SkillFormItem";
import API from "../API";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class NewCVForm extends React.Component {
  state = {
    numExperiences: 1,
    numEducations: 1,
    numSkills: 1,
    title: "",
    bio: "",
    experience: [],
    education: [],
    skills: [],
    contactDetails: {}
  };

  addExperience = () => {
    this.setState({
      numExperiences: (this.state.numExperiences += 1)
    });
  };

  addEducation = () => {
    this.setState({
      numEducations: (this.state.numEducations += 1)
    });
  };

  addSkill = () => {
    this.setState({
      numSkills: (this.state.numSkills += 1)
    });
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleExperienceClick = item => {
    this.setState({
      experience: [...this.state.experience, item]
    });
  };

  handleEducationClick = item => {
    this.setState({
      education: [...this.state.education, item]
    });
  };
  handleSkillClick = item => {
    this.setState({
      skills: [...this.state.skills, item]
    });
  };

  showExperienceForms = () => {
    let counter = 0;
    let expArr = [];
    for (counter; counter < this.state.numExperiences; counter++) {
      expArr.push(
        <ExperienceFormItem handleClick={this.handleExperienceClick} />
      );
    }
    return expArr;
  };
  showEducationForms = () => {
    let counter = 0;
    let eduArr = [];
    for (counter; counter < this.state.numEducations; counter++) {
      eduArr.push(
        <EducationFormItem handleClick={this.handleEducationClick} />
      );
    }

    return eduArr;
  };

  showSkillsForms = () => {
    let counter = 0;
    let skillArr = [];
    for (counter; counter < this.state.numSkills; counter++) {
      skillArr.push(<SkillFormItem handleClick={this.handleSkillClick} />);
    }
    return skillArr;
  };

  saveCV = () => {
    const { title, bio, photo, experience, education, skills } = this.state;
    API.newCV(title, bio, photo, experience, education, skills).then(data => {
      if (data.error) {
        alert("Din't work!");
      } else {
        this.props.showCV(data);
      }
    });
  };

  render() {
    return (
      <div>
        <h2>Create New CV</h2>
        <TextField
          id="cvTitleInput"
          label="Title"
          value={this.state.title}
          onChange={this.handleChange}
          margin="normal"
          name="title"
        />
        <br />
        <TextField
          id="bioInput"
          label="Bio"
          value={this.state.bio}
          onChange={this.handleChange}
          margin="normal"
          name="bio"
          type="bio"
        />
        <br />
        <TextField
          id="photoInput"
          label="Photo URL"
          value={this.state.photo}
          onChange={this.handleChange}
          margin="normal"
          name="photo"
          type="photo"
        />
        <br />
        <h3>Experience</h3>
        {this.showExperienceForms()}
        <Button
          onClick={this.addExperience}
          variant="contained"
          color="primary"
        >
          Add More Experience
        </Button>
        <br />
        <h3>Education</h3>
        {this.showEducationForms()}
        <Button onClick={this.addEducation} variant="contained" color="primary">
          Add More Education
        </Button>
        <h3>Skills</h3>

        {this.showSkillsForms()}
        <Button onClick={this.addSkill} variant="contained" color="primary">
          Add a Skill
        </Button>
        <br />

        <br />
        <Button
          onClick={() => this.saveCV()}
          variant="contained"
          color="primary"
        >
          Save CV
        </Button>
      </div>
    );
  }
}

export default NewCVForm;
