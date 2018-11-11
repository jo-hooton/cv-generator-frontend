import React from 'react'
import NewCVForm from './NewCVForm'
import CVContainer from './CVContainer'

class Dashboard extends React.Component {
    render(){
        return <div>
            < NewCVForm />
            < CVContainer /> 
        </div>
    }
 
}

export default Dashboard