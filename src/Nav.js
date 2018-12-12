import React from 'react'
import { Tab, Tabs, Navbar, NavbarHeading, NavbarDivider, AnchorButton} from "@blueprintjs/core";
import '@blueprintjs/core/lib/css/blueprint.css';

export default (props) => (
    <div className="pt-dark">
    <Navbar fixedToTop={true}>
        <Navbar.Group>
            <NavbarHeading>Joshua Sheridan</NavbarHeading>
            <NavbarDivider />
            <Tabs
                id="navbar"
                large={true}
                selectedTabId={props.tabId}
                renderActiveTabPanelOnly={true}
            >
                <Tab id="Art" title={<AnchorButton text="Art" href="/" minimal={true} fill="true" icon="trash"/>} />
                <Tab id="Code" title={<AnchorButton text="Code" href="/code" minimal={true} fill="true" icon="code" />} />
                <Tab id="About" title={<AnchorButton text="About" href="/about" minimal={true} fill="true" icon="user" />} />
            </Tabs>
        </Navbar.Group>
    </Navbar>
    </div>
);