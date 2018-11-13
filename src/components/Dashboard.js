import React from "react";
import NewCVForm from "./NewCVForm";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        {/* If CV has beed created render CV container else render NewCV form */}
        {/* <CVContainer /> */}
        <NewCVForm />
      </div>
    );
  }
}

export default Dashboard;
