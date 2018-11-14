import React from 'react';

const CVTextItem = (props) => {
    return (
        <div>
            <h3>{props.heading}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default CVTextItem