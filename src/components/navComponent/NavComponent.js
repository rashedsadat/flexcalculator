import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/style.css';

class NavComponent extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className='navContainer text-center mt-3'>
                    <Row>
                        <Col lg={2} md={2} sm={0}>
                            <FontAwesomeIcon className='navIcon' icon={faCircle} /> 
                            <FontAwesomeIcon className='navIcon' icon={faCircle} /> 
                            <FontAwesomeIcon className='navIcon' icon={faCircle} /> 
                        </Col>
                        <Col lg={8} md={8} sm={12} className='nav'>
                            <span claaName='navTitle'>WANT TO DISCUSS YOUR PROJECT IN DETAIL?</span>
                            <a className='navLink' href="#">SCHEDULE A CALL HERE</a>
                        </Col>
                        <Col lg={2} md={2} sm={0}>
                             <FontAwesomeIcon className='navIcon' icon={faCircle} />
                             <FontAwesomeIcon className='navIcon' icon={faCircle} /> 
                             <FontAwesomeIcon className='navIcon' icon={faCircle} /> 
                        </Col>
                    </Row>
                            
                </Container>
            </Fragment>
        );
    }
}

export default NavComponent;