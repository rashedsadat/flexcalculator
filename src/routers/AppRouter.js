import React, { Component, Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import ChooseFrameworkPage from '../pages/ChooseFrameworkPage';
import ConfirmationPage from '../pages/ConfirmationPage';
import WebsiteTypePage from '../pages/WebsiteTypePage';

class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<ChooseFrameworkPage/>} />
                    <Route path="/webtype" element={<WebsiteTypePage/>} />
                    <Route path="/details" element={<ConfirmationPage/>} />
                </Routes>
            </Fragment>
        );
    }
}

export default AppRouter;