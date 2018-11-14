import React from "react"
import NewCVForm from "./NewCVForm"
import CVContainer from "./CVContainer"
import Photo from "./Photo"

class Dashboard extends React.Component {

  state = {
    photoForm: false
  }

  handleClick = () => {
    this.setState({photoForm: !this.state.photoForm})
  }

  render() {
    let options = this.props.allUserCVs.map(cv => {
      return <option value={`${cv.id}`}>{cv.title}</option>
      }
    )

    return (
      <div>
        <>
        { this.props.allUserCVs === [] ?
          null:
          <select onChange={(event) => this.props.selectCV(event.target.value)}>
            {options}
          </select>
        }
        <Photo photo={this.props.photo} savePhoto={this.props.savePhoto} photoForm={this.state.photoForm} handleClick={this.handleClick} />
        {this.props.selectedCV ? <CVContainer cv={this.props.selectedCV} photo={this.props.photo} savePhoto={this.props.savePhoto} /> : <NewCVForm />}
        
        </>
      </div>
    );
  }
}

export default Dashboard;
