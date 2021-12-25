import React, { Component, Fragment } from 'react';
import '../../assets/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row, ProgressBar } from 'react-bootstrap';
import '../../assets/css/style.css';
import { Link } from 'react-router-dom';

class WebType extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                        <h3 className='text-center'>I WANT TO BUILD</h3>
                            <Row>
                                <Col lg={2} md={2} sm={0}></Col>
                                <Col lg={8} md={8} sm={12}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>An ecommerce site</Card.Title>
                                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>An online course platform</Card.Title>
                                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>A blog site</Card.Title>
                                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>My company website with pics calculations</Card.Title>
                                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <div>
                                        
                                        <Button><Link to="/">PREVIOUS</Link></Button>
                                        <ProgressBar now={66} />
                                        <Button><Link to="/details">NEXT</Link></Button>
                                    </div>
                                </Col>
                                <Col lg={2} md={2} sm={0}></Col>
                            </Row>
                            
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <h5>PLEASE INPUT ALL THE FIELDS TO<br/>SHOW ESTIMATED PRICE</h5>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WebType;