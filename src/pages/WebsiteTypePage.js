import React, { Component, Fragment } from 'react';
import CommonComponent from '../components/commonComponent/CommonComponent';

class WebsiteTypePage extends Component {
    constructor(){
        super();
        this.state = {
            py_details : "Dolor nisi magna excepteur cillum id culpa quis.",
            wp_details : "Laborum quis ullamco nulla esse id dolore nostrud reprehenderit commodo.",
            pl_details : "Non ex nostrud ut elit voluptate officia.",
            ph_details : "Adipisicing sunt ad minim reprehenderit officia incididunt deserunt dolore tempor nostrud.",
            ka_details : "Id anim ut in laboris fugiat laboris culpa in.",
            pageTitle : "I WANT TO BUILD"
        }
    }
    render() {
        return (
            <Fragment>
                <CommonComponent framework="An ecommerce site" details={this.state.py_details} pageTitle={this.state.pageTitle}/>
                <CommonComponent framework="An online course platform" details={this.state.wp_details}/>
                <CommonComponent framework="A blog site" details={this.state.pl_details}/>
                <CommonComponent framework="My company website with pics calculations" details={this.state.ph_details}/>
                <CommonComponent framework="Kajabi" details={this.state.ka_details}/>
            </Fragment>
        );
    }
}

export default WebsiteTypePage;