import React, { Component, Fragment } from 'react';
import Details from '../components/details/Details';
import NavComponent from '../components/navComponent/NavComponent';

class ConfirmationPage extends Component {
    render() {
        return (
            <Fragment>
                <NavComponent/>
                <Details/>
            </Fragment>
        );
    }
}

export default ConfirmationPage;