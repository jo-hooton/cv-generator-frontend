import React from 'react';
import { checkPropTypes } from 'prop-types';

const Nav = (props) => {
    return (
        <div>
            CV Generator Nav
            {props.email ? <button>Sign Out</button> : null}
        </div>
    )
}

export default Nav