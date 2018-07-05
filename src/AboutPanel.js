import React from 'react'
import { AnchorButton, Intent } from "@blueprintjs/core";

class AboutPanel extends React.Component {
    render() {
        return (
            <div className="w3-center navbar-padding">
                <div className="w3-container about">
                    <h3>ABOUT ME</h3>
                    <p className="w3-large">Artist, Jeweler, Coder</p>
                    <div className="w3-card">
                        <img src="me2.jpg"/>
                        <div className="w3-container">
                            <h4 className="w3-padding">Joshua Sheridan</h4>
                            <div className="w3-opacity">Loves learning and doing</div>
                            <br />
                            <div className="w3-half w3-padding">
                                <AnchorButton
                                href="jsheridan_cv.pdf" 
                                text="Artist CV" 
                                fill={true} 
                                minimal={true}
                                intent={Intent.PRIMARY}
                                 />
                            </div>
                            <div className="w3-half w3-padding">
                            <AnchorButton
                                href="resume.html" 
                                text="Resume" 
                                fill={true} 
                                minimal={true}
                                intent={Intent.PRIMARY}
                             />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w3-row-padding about w3-margin">
                    <div className="w3-third">
                        {/* <i className="fa fa-paint-brush w3-margin-bottom w3-jumbo"></i> */}
                        <img src="art-logo.png" className="w3-padding w3-jumbo"/>
                        <p className="w3-large">Art</p>
                        <p>Painter, likes art that is funny and sad.</p>
                    </div>
                    <div className="w3-third">
                        {/* <i className="fa fa-diamond w3-margin-bottom w3-jumbo"></i> */}
                        <img src="tc-key.png" className="w3-padding w3-jumbo"/>
                        <p className="w3-large">Design</p>
                        <p className>Founded<br /><a href="http://thoughtcrimedesigns.com">Thought Crime Designs</a> <br /> 3D Printed Jewelry</p>
                    </div>
                    <div className="w3-third">
                    <img src="GitHub-Mark-Light-64px.png" className="w3-padding w3-jumbo"/>
                        <p className="w3-large">Code</p>
                        <p>
                            <a href="https://github.com/jooshkins?tab=repositories">See what I am making on GitHub 
                            <br />
                            {/* <img src="GitHub-Mark-32px.png" className="w3-padding invert-color"/> */}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPanel;