import React from 'react';

const CVHeader = (props) => {
    return (
        <div>
            <h1>
            {props.title}
            </h1>
            <div className="profile-photo" style={ { backgroundImage: `url(${props.photo})` } }></div>
        </div>
    )
}

export default CVHeader