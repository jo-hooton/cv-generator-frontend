import React from "react";
import NewCVForm from "./NewCVForm";

class Dashboard extends React.Component {


  render() {
    let options = this.props.allUserCVs.map(cv => {
      return <option value={`${cv.id}`}>{cv.title}</option>
      }
    )

    return (
      <div>
        
        { this.props.allUserCVs === [] ?
          null:
          <select onChange={(event) => this.props.selectCV(event.target.value)}>
            {options}
          </select>
        }

        {/* If CV has beed created render CV container else render NewCV form */}
        {/* <CVContainer /> */}
        <NewCVForm />
      </div>
    );
  }
}

export default Dashboard;
