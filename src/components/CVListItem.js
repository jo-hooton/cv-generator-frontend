import React from 'react';
import { prototype } from 'react-transition-group/TransitionGroup';

const CVListItem = (props) => {
    return (
        <div>
           <h4>{props.name}</h4>
           <h6>{props.sub_heading}</h6>
           <p>{props.content}</p>
        </div>
    )
}

export default CVListItem