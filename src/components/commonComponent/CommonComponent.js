import React, { Component, Fragment } from 'react';
import '../../assets/css/bootstrap.min.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import '../../assets/css/style.css';

class CommonComponent extends Component {
    constructor(props){
        super();
        this.state = {
            Title : props.framework,
            details : props.details,
            pageTitle : props.pageTitle
        }
    }
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <h3>{this.state.pageTitle}</h3>
                            <Card>
                                <Card.Body>
                                    <Card.Title>{this.state.Title}</Card.Title>
                                    <Card.Text>{this.state.details}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <h5>PLEASE INPUT ALL THE FIELDS TO<br/>SHOW ESTIMATED PRICE</h5>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default CommonComponent;