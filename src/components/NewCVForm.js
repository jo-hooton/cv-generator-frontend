import React from "react";
import ExperienceFormItem from "./ExperienceFormItem";
import EducationFormItem from "./EducationFormItem";
import SkillFormItem from "./SkillFormItem";
import ContactFormItem from "./ContactFormItem"
import API from "../API";
import { Grid, Image } from 'semantic-ui-react'
import { Form } from 'semantic-ui-react'



import CVContainer from "./CVContainer";

import TextField from "@material-ui/core/TextField";
import TextArea from "@material-ui/core/TextField";
import { Button } from 'semantic-ui-react'

class NewCVForm extends React.Component {
  state = {
    numExperiences: 1,
    numEducations: 1,
    numSkills: 1,
    numContacts: 1,
    title: "",
    bio: "",
    experience: [],
    education: [],
    skills: [],
    contact: []
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

  handleContactClick = item => {
    this.setState({
      contact: [...this.state.contact, item]
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

  showContactForms = () => {
    let contactArr = [];
    
      contactArr.push(<ContactFormItem handleClick={this.handleContactClick} />);
    
    return contactArr;
  };

  saveCV = () => {
    const { title, bio, experience, education, skills, contact, photo} = this.state;
    API.newCV(title, bio, experience, education, skills, contact, photo).then(data => {
      if (data.error) {
        alert("Nope");
      } else {
        this.props.renderCVForm();
      }
    });
  };

  render() {
    return (
      <>
      <div style={{ margin: '2em' }}>
        <h1>Create New CV</h1>
        <TextField
          id="cvTitleInput"
          label="Title"
          value={this.state.title}
          onChange={this.handleChange}
          margin="normal"
          name="title"
        />
        <br />
        <TextArea
          id="bioInput"
          label="Bio"
          value={this.state.bio}
          onChange={this.handleChange}
          margin="normal"
          name="bio"
          type="bio"
        />
       </div>
        <Grid columns='four' divided>
          <Grid.Row>
           <Grid.Column>
        <h2>Contact</h2>
        {this.showContactForms()}
        <br />
        </Grid.Column>
        <Grid.Column>
        <h2>Experience</h2>
        {this.showExperienceForms()}
        <Button
          onClick={this.addExperience}
          variant="contained"
          color="primary"
        >
          Add More Experience
        </Button>
        <br />
        </Grid.Column>
        <Grid.Column>
        <h2>Education</h2>
        {this.showEducationForms()}
        <Button onClick={this.addEducation} variant="contained" color="primary">
          Add More Education
        </Button>
        </Grid.Column>
        <Grid.Column>
        <h2>Skills</h2>

        {this.showSkillsForms()}
        <Button onClick={this.addSkill} variant="contained" color="primary">
          Add a Skill
        </Button>
        <br />
        </Grid.Column>
        </Grid.Row>
        </Grid>
        <br />
        <div style={{ margin: '2em' }}>
        <Button
          onClick={() => this.saveCV()}
          variant="contained"
          color="primary"
        >
          Save CV
        </Button>
        </div>
      </>
  
    );
  }
}

export default NewCVForm;
