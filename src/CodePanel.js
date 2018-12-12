import React from 'react'
import { Card } from "@blueprintjs/core";
import Nav from './Nav'

class CodePanel extends React.Component {
    openSpray = () => {
        window.open('https://github.com/jooshkins/SprayBottle')
    }
    openColor = () => {
        window.open('https://github.com/jooshkins/ColorPencil')
    }
    openGame = () => {
        window.open('https://github.com/jooshkins/Divided')
    }

    render() {
        return (
            <div>
                <Nav tabId="Code" />
                <div className="w3-row-padding navbar-padding code" style={{paddingBottom: '1em', paddingTop: '64px'}}>
                    <div className="w3-third">
                        <Card interactive={true} onClick={this.openSpray.bind()}>
                            <h5><a href="https://github.com/jooshkins/SprayBottle">SprayBottle</a></h5>
                            <p>A simple tool for supercharging your scripts</p>
                            <img src="icon-spraybottle.png"/>
                        </Card>
                    </div>
                    <div className="w3-third">
                        <Card interactive={true} className="" onClick={this.openColor.bind()}>
                            <h5><a href="https://github.com/jooshkins/ColorPencil">ColorPencil</a></h5>
                            <p>A little utility to help manage folder permissions</p>
                            <img src="icon-colorpencil.png"/>
                        </Card>
                    </div>
                    <div className="w3-third">
                        <Card interactive={true} className="" onClick={this.openGame.bind()}>
                            <h5><a href="https://github.com/jooshkins/Divided">Divided</a></h5>
                            <p>A mobile game about a single-celled organism.</p>
                            <img src="icon-game.png"/>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}

export default CodePanel;