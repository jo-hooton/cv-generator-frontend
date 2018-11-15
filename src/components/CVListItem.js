import React from 'react';
import { List } from 'semantic-ui-react'
import { prototype } from 'react-transition-group/TransitionGroup';

const CVListItem = (props) => {
    return (
        <List.Item>
            <List.Icon name='book' size='large' verticalAlign='middle' />
            <List.Content>
        <List.Header >{props.name}</List.Header>
        <List.Description >{props.sub_heading} | {props.content}</List.Description>
            </List.Content>
        </List.Item>
    )
}

export default CVListItem