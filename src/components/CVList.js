import React from 'react';
import CVListItem from './CVListItem'

const CVList = (props) => {
    return (
        <div>
            <h3>{props.cvList.title}</h3>
            {props.cvList.list_items.map(list_item => 
            <CVListItem 
            name={list_item.name} 
            sub_heading={list_item.sub_heading} 
            content={list_item.content} 
            />)}
        </div>
    )
}

export default CVList