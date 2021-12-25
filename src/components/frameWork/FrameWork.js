import React, { Component, Fragment } from 'react';
import '../../assets/css/bootstrap.min.css';
import { Button, Card, Col, Container, Row, ProgressBar } from 'react-bootstrap';
import '../../assets/css/style.css';
import { Link } from 'react-router-dom';

class FrameWork extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col lg={8} md={8} sm={12}>
                        <h3 className='text-center'>I WANT MY SITE TO BE BUILT ON (CHOOSE FRAMEWORK)</h3>
                            <Row>
                                <Col lg={2} md={2} sm={0}></Col>
                                <Col lg={8} md={8} sm={12}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Python</Card.Title>
                                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Wordpress</Card.Title>
                                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Php Laravel</Card.Title>
                                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Php (From Scratch)</Card.Title>
                                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title>Kajabi</Card.Title>
                                            <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <div>
                                        <Button disabled={true}>PREVIOUS</Button>
                                        <ProgressBar now={33} />
                                        <Button><Link to="/webtype">NEXT</Link></Button>
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

export default FrameWork;