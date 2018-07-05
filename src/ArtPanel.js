import React from 'react'
import ImageGallery from './ImageGallery'
import { Button, ButtonGroup, Intent } from '@blueprintjs/core'

class ArtPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {path: 'art'}
    }

    render() {
        return (
            <div className="navbar-padding">
                <ImageGallery
                    amount={50}
                    path={this.state.path}
                />
            </div>
        );
    }
}

export default ArtPanel;