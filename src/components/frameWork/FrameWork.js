import React, { Component, Fragment } from 'react';
import { Button, Card, Col, Container, Row, ProgressBar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class FrameWork extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}>
                    <Row>
                        <Col lg={8} md={8} sm={12} className='colSideBar topMargin'>
                            <h3 className='text-center title'>I WANT MY SITE TO BE BUILT ON (CHOOSE FRAMEWORK)</h3>
                            <Card className='card'>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>Python</Card.Title>
                                    <Card.Text className='carddetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='card'>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>Wordpress</Card.Title>
                                    <Card.Text className='carddetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='card'>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>Php Laravel</Card.Title>
                                    <Card.Text className='carddetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='card'>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>Php (From Scratch)</Card.Title>
                                    <Card.Text className='carddetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='card'>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>Kajabi</Card.Title>
                                    <Card.Text className='carddetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Card.Text>
                                </Card.Body>
                            </Card>
                            <div className='prevNextDiv'>
                                <Button className='disableButton previous' disabled={true}>PREVIOUS</Button>
                                <ProgressBar className='progressBar' now={33} />
                                <Button className='enableButton next'><Link className='enableButtonLink' to="/webtype">NEXT</Link></Button>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} className='topMargin'>
                            <h5 className='rightHeading'>PLEASE INPUT ALL THE FIELDS TO<br/>SHOW ESTIMATED PRICE</h5>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default FrameWork;