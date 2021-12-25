import React, { Component, Fragment } from 'react';
import { Button, Col, Container, Form, InputGroup, Row, ProgressBar, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Range } from "react-range";

class Details extends Component {
    state = {
        values: [0]
    };
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="text-center">
                    <Row>
                        <Col lg={8} md={8} sm={12} className='colSideBar topMargin'>
                            <h3 className='text-center title'>DO YOU HAVE UX DESIGN READY?</h3>
                            <div className='detailsDiv'>
                                <Button className='detailsOptionButton' variant="outline-secondary">Yes</Button>
                                <Button className='detailsOptionButton' variant="outline-secondary">No</Button>
                            </div>
                            <h3 className='text-center title'>HOW MANY WEBPAGES DO YOU WANT FOR YOUR PUBLIC WEBSITE?</h3>
                            <div className='detailsDiv'>
                                <span>{this.state.values} Pages</span>
                                <Range
                                    step={1}
                                    min={0}
                                    max={20}
                                    allowOverlap={true}
                                    values={this.state.values}
                                    onChange={(values) => this.setState({ values })}
                                    renderTrack={({ props, children }) => (
                                        <div
                                            {...props}
                                            style={{
                                            ...props.style,
                                            height: '10px',
                                            width: '50%',
                                            borderRadius: '20px',
                                            marginLeft: '250px',
                                            backgroundColor: '#E8E8E9'
                                            }}
                                        >
                                            {children}
                                        </div>
                                    )}
                                    renderThumb={({ props }) => (
                                        <div
                                            {...props}
                                            style={{
                                            ...props.style,
                                            height: '14px',
                                            width: '14px',
                                            borderRadius: '50%',
                                            backgroundColor: 'white',
                                            boxShadow: '0 0 12px 0 rgba(0, 115, 230, 0.2)'
                                            }}
                                        />
                                    )}
                                />
                            </div>
                            
                            <h3 className='text-center title'>ANY PAYMENT GATEWAY INTEGRATION?</h3>
                            <div className='detailsDiv'>
                                <Button className='detailsOptionButton' variant="outline-secondary">Stripe</Button>
                                <Button className='detailsOptionButton' variant="outline-secondary">Paypal</Button>
                                <Button className='detailsOptionButton' variant="outline-secondary">Both</Button>
                                <Button className='detailsOptionButton' variant="outline-secondary">None</Button>
                            </div>
                            <div className='prevNextDetails'>
                                <Button className='enableButton previous'><Link className='enableButtonLink' to="/webtype">PREVIOUS</Link></Button>
                                <ProgressBar className='progressBar' now={100} />
                                <Button className='disableButton next' disabled={true}>NEXT</Button>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12} className='topMargin'>
                            <Card className='detailsCard'>
                                <Card.Body>
                                    <Card.Title className='detailsCardTitle'>Est Cost</Card.Title>
                                    <Card.Subtitle className="detailsPrice">$3,000 - $3,500</Card.Subtitle>
                                    <Card.Text className='detailsCardDetail'>
                                    "This cost will include 2 rounds of corrections at UI design stage, and once the design is finalized, we will proceed to development. Project will be divided into 2 - 3 milestone payments."
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Button className='detailsButton' variant="outline-secondary">START YOUR PROJECT NOW</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Details;