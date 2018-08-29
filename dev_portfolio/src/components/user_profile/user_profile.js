import React from 'react';
import {Row, Col, Card} from 'react-materialize';
import avatar from '../../images/avatar.png';

const UserProfile = () => (
    <Card>
        <Row>
            <Col m={8} s={8} offset="s2 m2">
                <img src={avatar} className="circle responsive-img" />
            </Col>
        </Row>
        <Row className="center-align">
            <h5 >Catarina Silva</h5>
            <p className="grey darken-2 white-text">React Developer</p>
      </Row>
    </Card>
);

export default UserProfile;