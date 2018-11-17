import React from "react"
import NewCVForm from "./NewCVForm"
import CVContainer from "./CVContainer"
import Photo from "./Photo"

import { Button, Divider, Grid, Header, Icon, Search, Segment, Select } from 'semantic-ui-react'

class Dashboard extends React.Component {

  state = {
    photoForm: false,
    renderCVForm: false
  }

  handleClick = () => {
    this.setState({photoForm: !this.state.photoForm})
  }

  renderCVForm = () => {
    this.setState({renderCVForm: !this.state.renderCVForm})
    this.props.resetSelectCV()
  }

  render() {
    let selectOptions = this.props.allCVs.map(cv => {
      return <option value={`${cv.id}`}>{cv.title}</option>
      }
    )

    return (
      <div>
        <>
        <div>
        
          <>
          <Segment placeholder>
          <Grid columns={3} stackable textAlign='center'>

          <Grid.Row verticalAlign='middle'>
          <Grid.Column>
          <Header icon>
          <Icon name='file' />
          View a CV
          </Header>
          <br />
          <Select as='a' onClick={(event) => this.props.selectCV(event.target.value)} placeholder='Select CV' options={selectOptions} />
          </Grid.Column>
          <Grid.Column>
          <Header icon>
          <Icon name='edit' />
            Add New CV
          </Header>
          {this.state.renderCVForm ? 
          <Button primary onClick={() => this.renderCVForm()}>Cancel CV</Button>
          : <Button primary onClick={() => this.renderCVForm()}>Create</Button>
          }
          </Grid.Column>
          <Grid.Column>
          <Header icon>
          <Icon name='user' />
            Add New Photo
          </Header>
          <Photo photo={this.props.photo} savePhoto={this.props.savePhoto} photoForm={this.state.photoForm} handleClick={this.handleClick} />
          </Grid.Column>
          </Grid.Row>
          </Grid>
          </Segment>
          </>
        
        </div>
        {this.state.renderCVForm ? <NewCVForm renderCVForm={this.renderCVForm} selectCV={this.props.selectCV} /> : null}
        {this.props.selectedCV ? <CVContainer cv={this.props.selectedCV} photo={this.props.photo} savePhoto={this.props.savePhoto} email={this.props.email} /> : null }
        
        
        </>
      </div>
    );
  }
}

export default Dashboard;

    // <select onChange={(event) => this.props.selectCV(event.target.value)}>
          //   {options}
          // </select>