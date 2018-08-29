import React from 'react';
import {Row, Col, Card} from 'react-materialize';
import Experience from '../experience/experience'
import UserProfile from '../user_profile/user_profile';
import company_avatar2 from '../../images/company2.png';
import company_avatar from '../../images/company.png';

const Home = () => (
    <Row>
        <Col m={3} s={12}>
            <UserProfile/>
        </Col>
        <Col m={8} s={12}>
            <h5 className="grey lighten-2">Education</h5>
            <Card >
                <div>
                    <p><b>Formação acadêmica</b></p>
                    <p>Bacharel em Ciência da computação</p>
                    <p>Universidade Federal de Campina Grande - UFCG</p>
                    <p><small>Ago/2011 - Ago/2018</small></p>
                    <br/>
                    <div class="divider"></div>
                    <br/>
                    <p><b>Programa de intercâmbio</b></p>
                    <p>Ciência sem Fronteiras</p>
                    <p>Portland State University</p>
                    <p><small>Jul/2014 - Dez/2015</small></p>
                </div>
            </Card>

            <h5 className="grey lighten-2">Experiences</h5>
            <Experience title="Android Developer"
                    company="Peasa"
                    description="Desenvolvimento de aplicação para gestão de APLs de Leite no Semiárido Paraibano"
                    technologies="Android, PHP, Mysql"
                    avatar={company_avatar2}/>
            <Experience title="Android Developer"
                    company="Embedded"
                    description="Desenvolvimento de aplicação mobile para auxílio remoto de cuidados com jardim"
                    technologies="Android, Web e IOT"
                    avatar={company_avatar}/>
        </Col>

    </Row>
);

export default Home;