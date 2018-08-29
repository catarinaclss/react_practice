import React from 'react';
import {Row, Col, Card, Input, Button} from 'react-materialize';
import UserProfile from '../user_profile/user_profile';

const Contact = () => (
    <Row>
        <Col m={3} s={12}>
            <UserProfile/>
        </Col>

        <Col m={8} s={12}>
            <h5 className="grey lighten-2">Contact</h5>
            <Card>
                <Row>
                    <Input placeholder="examplem@email.com" type="email" label="Email" s={12} />
                    <Input placeholder="Escreva sua mensagem aqui..." label="Message" s={12} />

                     <Col s={12} m={12}>
                        <Button waves='light' className="right grey darken-2">SEND</Button>
                    </Col>
                </Row>
               
            </Card>
        </Col>
    </Row>
);

export default Contact;