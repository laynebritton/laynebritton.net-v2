import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const EmailLink = 'mailto:laynebritton1998@gmail.com';

const Contact: FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs="1" className={'d-xs-block d-sm-none'}></Col>
          <Col xs="10" sm="8">
            <br />

            <h2>
              Email: <a href={EmailLink}>laynebritton1998@gmail.com</a>{' '}
            </h2>
            <br />

            <h2>Phone: 971-999-1749</h2>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
