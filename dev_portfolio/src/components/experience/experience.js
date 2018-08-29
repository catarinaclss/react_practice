import React from 'react';
import {Card, Col, Row} from 'react-materialize';

const Experience = (props) => (
    <Card>
        <Row>
            <Col s={2} m={2}>
                <img src={props.avatar} className="circle responsive-img"/>
            </Col>
            <Col s={10} s={10}>
                <p><b>{props.title} in {props.company}</b></p>
                <p><b>Description:</b> {props.description}</p>
                <p><b>Tecnologias:</b> {props.technologies}</p>
            </Col>
        </Row>
    </Card>

);

export default Experience;