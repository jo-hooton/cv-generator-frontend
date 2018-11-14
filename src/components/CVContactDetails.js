import React from 'react';

const CVContactDetails = (props) => {
    return (
        <div>
            <h3>Contact</h3>
             <p>{props.contactDetails.map(contact => contact.phone_number)}</p>
             <p>{props.contactDetails.map(contact => contact.address)}</p>
        </div>
    )
}

export default CVContactDetails