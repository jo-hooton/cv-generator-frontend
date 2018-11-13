import React from 'react';
import CVHeader from './CVHeader'
import CVSkills from './CVSkills'
import CVContactDetails from './CVContactDetails'
import CVTextItem from './CVTextItem'
import CVList from './CVList'

const CVContainer = (props) => {
    
    return (
        <div>CV Container
            <CVHeader 
            // title={this.props.title} 
            />
            <CVSkills 
            // skills={this.props.skills}
             />
            <CVContactDetails
            //  contactDetails={this.props.contactDetails} 
             />
            <CVTextItem 
            // heading='Bio' content={this.props.bio} 
            />
            <CVList 
            // list={this.props.experience} 
            />
            <CVList 
            // list={this.props.education} 
            />
        </div>
    )

}

export default CVContainer