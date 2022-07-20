import React, { FC } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export const Archive: FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col xs="1" className={'d-xs-block d-sm-none'}></Col>
          <Col xs="10" sm="8">
            <h2> Education </h2>
            <p />
            Columbia University - Columbia College{' '}
            <span style={{ float: 'right' }}>August 2018 - May 2020</span>
            <br />
            Bachelor of Arts, Computer Science, 3.60 GPA
            <p />
            Rocky Mountain College{' '}
            <span style={{ float: 'right' }}>
              August 2016 - May 2018 (Transferred)
            </span>
            <br />
            Bachelor of Science, Computer Science, 3.83 GPA
          </Col>
        </Row>
      </Container>
    </>
  );
};
