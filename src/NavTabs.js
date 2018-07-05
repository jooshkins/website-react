import React from 'react'
import { Tab, Tabs, Navbar, NavbarHeading, NavbarDivider, Button} from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';

import ArtPanel from './ArtPanel'
import AboutPanel from './AboutPanel'
import CodePanel from './CodePanel'
import Footer from './Footer'

class NavTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navebarTabId: 'Art',
            panel: <ArtPanel />,
        };
    }

    handleNavbarTabChange = (navbarTabId) => {
        switch (navbarTabId) {
            case 'Art':
                this.setState({ panel: <ArtPanel /> });
                break;

            case 'Code':
                this.setState({ panel: <CodePanel /> });
                break;

            case 'About':
                this.setState({ panel: <AboutPanel /> });
        }
    }

    render() {
        return (
            <div className="pt-dark">
                <Navbar fixedToTop={true}>
                    <Navbar.Group>
                        <NavbarHeading>Joshua Sheridan</NavbarHeading>
                        <NavbarDivider />
                        <Tabs
                            animate={this.state.animate}
                            id="navbar"
                            large={true}
                            onChange={this.handleNavbarTabChange}
                            selectedTabId={this.state.navbarTabId}
                            renderActiveTabPanelOnly={true}
                        >
                            <Tab id="Art" title={<Button text="Art" minimal={true} icon="trash"/>} />
                            <Tab id="Code" title={<Button text="Code" minimal={true} icon="code" />} />
                            <Tab id="About" title={<Button text="About" minimal={true} icon="user" />} />
                        </Tabs>
                    </Navbar.Group>
                </Navbar>
                {this.state.panel}
            </div>
        );
    }
}

export default NavTabs;