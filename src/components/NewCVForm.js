import React from 'react'

import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

class NewCVForm extends React.Component {
    
    state = {
        title: '',
        bio: '',
        photo: '',
        experience: [],
        education: [],
        skills: []
    }

    handleSubmit = () => {
        const { title, bio } = this.state
        
      }
    
    handleChange = event =>
        this.setState({ [event.target.name]: event.target.value })
    
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
          id='datesInput'
          label='Dates'
          value={this.state.dates}
          onChange={this.handleChange}
          margin='normal'
          name='dates'
          type='dates'
        />
        <br />
        <Button variant='contained' color='primary'>
          +
        </Button>
        <h3>Education</h3>
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
        <Button variant='contained' color='primary'>
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