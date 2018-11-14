import React from 'react'

import TextField from "@material-ui/core/TextField";
import { Button } from 'semantic-ui-react'


class Photo extends React.Component {

    state = {
        photoUrl: ''
    }

    renderPhotoForm = () => {
        return (
        <div>
            <TextField
                id="photoInput"
                label="Photo URL"
                value={this.state.photoUrl} 
                onChange={(event) => this.setState({photoUrl: event.target.value})}
                margin="normal"
                name="photo"
                type="photo"
                />
                <br />
            <Button
                onClick={() =>{ 
                    this.props.savePhoto(this.state.photoUrl)
                    this.props.handleClick()
                }
                   
                }
                variant="contained"
                color="primary"
                >
                Save Photo
            </Button>
        </div>
        )
    }

    render() {
        return(
        <div>
            {!this.props.photo ? 
            <>
            <div>
                <img className='profile-img' src='https://i.kym-cdn.com/photos/images/original/001/297/705/588.png' alt='profile-photo'></img><br />
                { this.props.photoForm ? this.renderPhotoForm() 
                : 
                <Button
                variant="contained"
                color="primary"
                onClick={() => this.props.handleClick()}>Add Photo</Button>
                }
            </div>
            </>
            :
            <>
            <div>
            <img className='profile-img' src={this.props.photo} alt='profile-photo'></img><br />
            { this.props.photoForm ? this.renderPhotoForm() 
                : 
                <Button 
                variant="contained"
                color="primary"
                onClick={() => this.props.handleClick()}>Edit Photo</Button>
                }
            </div>
            </>
            }
        
        </div>
        )
    }

}

export default Photo