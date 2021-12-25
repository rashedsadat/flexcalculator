import React, { Component, Fragment } from 'react';
import FrameWork from '../components/frameWork/FrameWork';
import NavComponent from '../components/navComponent/NavComponent';

class ChooseFrameworkPage extends Component {
    render() {
        return (
            <Fragment>
                <NavComponent/>
                <FrameWork/>
            </Fragment>
        );
    }
}

export default ChooseFrameworkPage;