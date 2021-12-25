import React, { Component, Fragment } from 'react';
import NavComponent from '../components/navComponent/NavComponent';
import WebType from '../components/webtype/WebType';

class WebsiteTypePage extends Component {
    render() {
        return (
            <Fragment>
                <NavComponent/>
                <WebType/>
            </Fragment>
        );
    }
}

export default WebsiteTypePage;