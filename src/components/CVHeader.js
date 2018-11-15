import React from 'react';

const CVHeader = (props) => {
    return (
        <div>
            <h1 style={{color: '#33AFFF'}}>
            {props.title}
            </h1>
            <div className="profile-photo-cv" style={ { backgroundImage: `url(${props.photo})` } }></div>
        </div>
    )
}

export default CVHeader