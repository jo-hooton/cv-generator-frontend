import React from 'react';
import { Rating } from 'semantic-ui-react'

const Skills = (props) => {
    return ( 
            <>
            <h3>Skills</h3>
            
            {props.skills.map(skill => 
            <div style={{ margin: '1.5em' }}>
            <h4>{skill.name}</h4>
            <Rating defaultRating={skill.percentage} maxRating={5} disabled />
            </div>)
            }
            </>

            
    )
}
export default Skills