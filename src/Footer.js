import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer className="w3-container w3-padding footer">
                <h4 className="w3-center">CONTACT</h4>
                <div className="w3-row-padding">
                    <div className="w3-center">
                        <p>
                            <i className="fa fa-envelope fa-fw w3-xlarge w3-margin-right"></i>Email:
                            <a href="mailto:josh@joshuasheridan.com" target="_top">josh@joshuasheridan.com</a>
                        </p>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
