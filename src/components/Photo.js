import React from 'react'

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


class Photo extends React.Component {

    render() {
        return(
        <div>
            {this.props.photo === null ? 
            <>
            <div>
                <img className='profile-img' src='https://i.kym-cdn.com/photos/images/original/001/297/705/588.png'></img>
            </div>
                <TextField
                id="photoInput"
                label="Photo URL"
                value={this.props.photo} 
                margin="normal"
                name="photo"
                type="photo"
                />
                <br />
                <Button
                    onClick={(event) => this.props.savePhoto(event.target.value)}
                    variant="contained"
                    color="primary"
                    >
                    Save Photo
                </Button>
            </>
            :
            <img src={this.props.photo} alt='profile-photo'></img>
            }
        
        </div>
        )
    }

}

export default Photo