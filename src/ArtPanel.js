import React from 'react'
import ImageGallery from './ImageGallery'
import Nav from './Nav'

class ArtPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {path: 'art'}
    }

    render() {
        return (
            <div>
                <Nav tabId="Art" />
                <div className="navbar-padding">
                    <ImageGallery
                        amount={50}
                        path={this.state.path}
                    />
                </div>
            </div>
        );
    }
}

export default ArtPanel;