import React from 'react'
import {Card, Elevation } from "@blueprintjs/core";


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
            <div className="w3-container navbar-padding code" style={{paddingTop: "64px"}}>
                <Card interactive={true} elevation={Elevation.THREE} className="w3-quarter w3-margin" onClick={this.openSpray.bind()}>
                    <h5><a href="https://github.com/jooshkins/SprayBottle">SprayBottle</a></h5>
                    <p>A simple tool for supercharging your scripts</p>
                    <img src="icon-spraybottle.png" />
                </Card>
                <Card interactive={true} elevation={Elevation.THREE} className="w3-quarter w3-margin" onClick={this.openColor.bind()}>
                    <h5><a href="https://github.com/jooshkins/ColorPencil">ColorPencil</a></h5>
                    <p>A little utility to help manage folder permissions</p>
                    <img src="icon-colorpencil.png" />
                </Card>
                <Card interactive={true} elevation={Elevation.THREE} className="w3-quarter w3-margin" onClick={this.openGame.bind()}>
                    <h5><a href="https://github.com/jooshkins/Divided">Divided</a></h5>
                    <p>A mobile game about a single-celled organism.</p>
                    <img src="icon-game.png" />
                </Card>
            </div>
        );
    }
}

export default CodePanel;