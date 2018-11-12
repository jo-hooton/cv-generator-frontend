import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class NewCVForm extends React.Component {
    
    state = {
        numExperiences: 1,
        numEducations: 1,
        title: '',
        bio: '',
        experience: [],
        education: [],
        skills: []
    }

    addExperience = () => {
        this.setState({
            numExperiences: this.state.numExperiences += 1
        })
    }

    addEducation = () => {
        this.setState({
            numEducations: this.state.numEducations += 1
        })
    }


    handleSubmit = () => {
        const { title, bio, experience, education, skills } = this.state
        
      }
    
    handleChange = event =>
        this.setState({ [event.target.name]: event.target.value })

    showExperienceForms = () => {
        let counter = 0
        let expArr = []
        for (counter ; counter < this.state.numExperiences; counter++) {
                  expArr.push( <>
                    <TextField
                      id='positionInput'
                      label='Position'
                      value={this.state.position}
                      onChange={this.handleChange}
                      margin='normal'
                      name='position'
                      type='position'
                    />
                    <br />
                    <TextField
                      id='companyInput'
                      label='Company'
                      value={this.state.company}
                      onChange={this.handleChange}
                      margin='normal'
                      name='company'
                      type='company'
                    />
                    <br />
                    <TextField
                      id='experienceDatesInput'
                      label='Dates'
                      value={this.state.dates}
                      onChange={this.handleChange}
                      margin='normal'
                      name='experienceDates'
                      type='experienceDates'
                    />
                    <br />
                  </> )
        
    }
    return expArr
    }
    showEducationForms = () => {
        let counter = 0
        let eduArr = []
        for (counter ; counter < this.state.numEducations; counter++) {
                  eduArr.push( <>
                    <TextField
                        id='qualificationInput'
                        label='Qualification'
                        value={this.state.qualification}
                        onChange={this.handleChange}
                        margin='normal'
                        name='qualification'
                        type='qualification'
                        />
                        <br />
                    <TextField
                        id='institutionInput'
                        label='Institution'
                        value={this.state.institution}
                        onChange={this.handleChange}
                        margin='normal'
                        name='institution'
                        type='institution'
                        />
                        <br />
                    <TextField
                        id='datesInput'
                        label='Dates'
                        value={this.state.dates}
                        onChange={this.handleChange}
                        margin='normal'
                        name='dates'
                        type='dates'
                        />
                    <br />
                  </> )
        
        }
        return eduArr
    }
    

    
    render() {
    return (
        <div>
        <h2>Create New CV</h2>
        <TextField
          id='cvTitleInput'
          label='Title'
          value={this.state.title}
          onChange={this.handleChange}
          margin='normal'
          name='title'
        />
        <br />
        <TextField
          id='bioInput'
          label='Bio'
          value={this.state.bio}
          onChange={this.handleChange}
          margin='normal'
          name='bio'
          type='bio'
        />
        <br />
        <TextField
          id='photoInput'
          label='Photo URL'
          value={this.state.photo}
          onChange={this.handleChange}
          margin='normal'
          name='photo'
          type='photo'
        />
        <br />
        <h3>Experience</h3>
        {
            this.showExperienceForms()
         }
        <Button onClick={this.addExperience} variant='contained' color='primary'>
          +
        </Button>
        <h3>Education</h3>
        {
            this.showEducationForms()
         }
        <Button onClick={this.addEducation} variant='contained' color='primary'>
          +
        </Button>
        <h3>Skills</h3>
        <TextField
          id='skillInput'
          label='Skill'
          value={this.state.skill}
          onChange={this.handleChange}
          margin='normal'
          name='skill'
          type='skill'
        />
        <br />
        <TextField
          id='skillfulnessInput'
          label='Skillfulness out of 10'
          value={this.state.skillfulness}
          onChange={this.handleChange}
          margin='normal'
          name='skillfulness'
          type='skillfulness'
        />
        <br />
        <Button variant='contained' color='primary'>
          +
        </Button>
        <br />
        <br />
        <Button onClick={this.handleSubmit} variant='contained' color='primary'>
          Save CV
        </Button>
      </div>

    )
  }
}

export default NewCVForm