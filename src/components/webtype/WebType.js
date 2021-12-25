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
                        <Col lg={8} md={8} sm={12} className='colSideBar topMargin'>
                            <h3 className='text-center title'>I WANT TO BUILD</h3>
                            <Card className='card'>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>An ecommerce site</Card.Title>
                                    <Card.Text className='carddetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='card'>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>An online course platform</Card.Title>
                                    <Card.Text className='carddetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='card'>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>A blog site</Card.Title>
                                    <Card.Text className='carddetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card className='card'>
                                <Card.Body>
                                    <Card.Title className='cardTitle'>My company website with pics calculations</Card.Title>
                                    <Card.Text className='carddetails'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</Card.Text>
                                </Card.Body>
                            </Card>
                            <div className='prevNextDiv'>            
                               <Button className='enableButton previous'><Link className='enableButtonLink' to="/">PREVIOUS</Link></Button>
                                <ProgressBar className='progressBar' now={66} />
                                <Button className='enableButton next'><Link className='enableButtonLink' to="/details">NEXT</Link></Button>
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

export default WebType;