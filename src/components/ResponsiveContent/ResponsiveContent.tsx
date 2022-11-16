import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

type ResponsiveContentProps = {
  children: React.ReactNode;
};

export const ResponsiveContent = ({ children }: ResponsiveContentProps) => {
  return (
    <Container>
      <Row>
        <Col xs="1" className={'d-xs-block d-sm-none'}></Col>
        <Col xs="10" sm="8">
          {children}
        </Col>
      </Row>
    </Container>
  );
};
