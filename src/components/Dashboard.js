import React from "react"
import NewCVForm from "./NewCVForm"
import CVContainer from "./CVContainer"

class Dashboard extends React.Component {


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
        {this.props.selectedCV ? <CVContainer cv={this.props.selectedCV} photo={this.props.photo} savePhoto={this.props.savePhoto} /> : <NewCVForm />}
        
        </>
      </div>
    );
  }
}

export default Dashboard;
