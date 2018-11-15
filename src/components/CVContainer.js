import React from 'react';
import CVHeader from './CVHeader'
import CVSkills from './CVSkills'
import CVContactDetails from './CVContactDetails'
import CVTextItem from './CVTextItem'
import CVList from './CVList'
import { Grid, Image } from 'semantic-ui-react'


const CVContainer = (props) => {
    
    return (
         <Grid columns='three' divided>
          <Grid.Row>
           <Grid.Column>
            <CVHeader 
            title={props.cv.title} 
            photo={props.photo}
            />
            <div style={{ margin: '5em' }}>
             <CVContactDetails
             contactDetails={props.cv.contact_details}
             email={props.email}  />
             </div>
            </Grid.Column>
           
            <Grid.Column>
            <div style={{ margin: '2em' }}>
            <CVSkills 
            skills={props.cv.skills}
             />
            </div>
            <div style={{ margin: '2em' }}>
            {props.cv.text_items.map(textItem => 
            <CVTextItem heading={textItem.title} content={textItem.content} />)}
            </div>
           
            </Grid.Column>

            <Grid.Column>
            <div style={{ margin: '2em' }}>
             {props.cv.lists.map(list => <CVList cvList={list} />)}
             </div>
            </Grid.Column>
           
          
          
            
            </Grid.Row>
        </Grid>
    )

}

export default CVContainer