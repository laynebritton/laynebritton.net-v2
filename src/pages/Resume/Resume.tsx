import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProfilePicture from '../../img/layne.png';

const Resume: FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs="1" className={'d-xs-block d-sm-none'}></Col>
          <Col xs="10" sm="8">
            <br />
            <h1>Layne Britton</h1>
            <br />
            <h5>{'Software engineer at Ribbon Home'}</h5>
            <h5>{'B.A. in Computer Science, Columbia University'}</h5>
          </Col>
          <Col sm="4">
            <img
              style={{ width: '100%', borderRadius: '50%' }}
              src={ProfilePicture}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Resume;
