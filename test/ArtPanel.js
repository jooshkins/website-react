import React from 'react'
import ImageGallery from './ImageGallery'
import { Button, ButtonGroup, Intent } from '@blueprintjs/core'

class ArtPanel extends React.Component {
    constructor(props){
        super(props);
        this.state = {path: ''}

    // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(event) {
    //     console.log(event.target.id)
    //     // switch (event.target.id) {

    //     // }
    //     this.setState({path: event.target.id})
    // }

    render() {
        // if (this.state.path == '') {this.setState({path: "art"})}
        return (
            <div className="navbar-padding">
                <ButtonGroup 
                fill={true} 
                large={true}
                minimal={true}
                >
                    <Button id="2d" text="2D" intent={Intent.SUCCESS} />
                    <Button id="3d" text="3D" intent={Intent.SUCCESS} />
                    <Button id="jewelry" text="Jewelry" intent={Intent.SUCCESS} />
                </ButtonGroup>
                <ImageGallery
                    amount={50}
                    path={this.state.path}
                />
            </div>
        );
    }
}

export default ArtPanel;