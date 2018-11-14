import React from 'react';
import CVHeader from './CVHeader'
import CVSkills from './CVSkills'
import CVContactDetails from './CVContactDetails'
import CVTextItem from './CVTextItem'
import CVList from './CVList'

const CVContainer = (props) => {
    
    return (
        <div>
            <CVHeader 
            title={props.cv.title} 
            photo={props.photo}
            />
            <CVSkills 
            skills={props.cv.skills}
             />
            <CVContactDetails
             contactDetails={props.cv.contact_details} />
             
            {props.cv.text_items.map(textItem => 
            <CVTextItem heading={textItem.title} content={textItem.content} />)}
            {props.cv.lists.map(list => <CVList cvList={list} />)}

        </div>
    )

}

export default CVContainer