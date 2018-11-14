import React from 'react';
import CVHeader from './CVHeader'
import CVSkills from './CVSkills'
import CVContactDetails from './CVContactDetails'
import CVTextItem from './CVTextItem'
import CVList from './CVList'
import Photo from './Photo'

const CVContainer = (props) => {
    
    return (
        <div>CV Container
            <CVHeader 
            title={props.cv.title} 
            />
            <Photo photo={props.photo} savePhoto={props.savePhoto} /> 
            <CVSkills 
            // skills={this.props.cv.skills}
             />
            <CVContactDetails
            //  contactDetails={this.props.cv.contactDetails} 
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