import React from 'react';
import CVHeader from './CVHeader'
import CVSkills from './CVSkills'
import CVContactDetails from './CVContactDetails'
import CVTextItem from './CVTextItem'
import CVList from './CVList'

const CVContainer = (props) => {
    
    return (
        <div>
            <div className="cv-header">
            <CVHeader 
            title={props.cv.title} 
            photo={props.photo}
            />
            </div>
            <div className="cv-skills">
            <CVSkills 
            skills={props.cv.skills}
             />
            </div>
            <div className="cv-contact">
            <CVContactDetails
             contactDetails={props.cv.contact_details}
             email={props.email}  />
            </div>
            <div className="cv-text">
            {props.cv.text_items.map(textItem => 
            <CVTextItem heading={textItem.title} content={textItem.content} />)}
            </div>
            <div className="cv-list">
            {props.cv.lists.map(list => <CVList cvList={list} />)}
            </div>
        </div>
    )

}

export default CVContainer