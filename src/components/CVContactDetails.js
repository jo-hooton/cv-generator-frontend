import React from 'react';
import { List } from 'semantic-ui-react'

const CVContactDetails = (props) => {
    return (
        <>
        <h3>Contact</h3>
        <List>
        <List.Item icon='phone' content={props.contactDetails.map(contact => contact.phone_number)} />
        <List.Item icon='marker' content={props.contactDetails.map(contact => contact.address)} />
        <List.Item icon='mail' content={props.email} />
        </List>
        </>
    )
}

export default CVContactDetails