import React, { Component, Fragment } from 'react';
import '../../assets/css/bootstrap.min.css';
import { Button, Col, Container, Form, InputGroup, Row, ProgressBar, Card } from 'react-bootstrap';
import '../../assets/css/style.css';
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
                        <Col lg={8} md={8} sm={12}>
                            <h3 className='text-center'>DO YOU HAVE UX DESIGN READY?</h3>
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary">Yes</Button>
                                <Button variant="outline-secondary">No</Button>
                            </InputGroup>
                            <h3 className='text-center'>HOW MANY WEBPAGES DO YOU WANT FOR YOUR PUBLIC WEBSITE?</h3>
                            <span>{this.state.values}px</span>
                            <Range
                                step={1}
                                min={0}
                                max={100}
                                values={this.state.values}
                                onChange={(values) => this.setState({ values })}
                                renderTrack={({ props, children }) => (
                                    <div
                                        {...props}
                                        style={{
                                        ...props.style,
                                        height: '6px',
                                        width: '100%',
                                        backgroundColor: '#ccc'
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
                                        height: '7px',
                                        width: '7px',
                                        borderRadius: '50%',
                                        backgroundColor: 'white'
                                        }}
                                    />
                                )}
                            />
                            <h3 className='text-center'>ANY PAYMENT GATEWAY INTEGRATION?</h3>
                            <InputGroup className="mb-3">
                                <Button variant="outline-secondary">Stripe</Button>
                                <Button variant="outline-secondary">Paypal</Button>
                                <Button variant="outline-secondary">Both</Button>
                                <Button variant="outline-secondary">None</Button>
                            </InputGroup>
                            <div>
                                <Button><Link to="/webtype">PREVIOUS</Link></Button>
                                <ProgressBar now={100} />
                                <Button disabled={true}>NEXT</Button>
                            </div>
                        </Col>
                        <Col lg={4} md={4} sm={12}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>Est Cost</Card.Title>
                                    <Card.Subtitle className="mb-2">$3,000 - $3,500</Card.Subtitle>
                                    <Card.Text>
                                    "This cost will include 2 rounds of corrections at UI design stage, and once the design is finalized, we will proceed to development. Project will be divided into 2 - 3 milestone payments."
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Button variant="outline-secondary">START YOUR PROJECT NOW</Button>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Details;