import React from 'react';
import CVListItem from './CVListItem'
import { List } from 'semantic-ui-react'

const CVList = (props) => {
    return (
        <List divided relaxed>
            <h3>{props.cvList.name}</h3>
            {props.cvList.list_items.map(list_item => 
            <CVListItem 
            name={list_item.name} 
            sub_heading={list_item.sub_heading} 
            content={list_item.content} 
            />)}
       </List>
    )
}

export default CVList