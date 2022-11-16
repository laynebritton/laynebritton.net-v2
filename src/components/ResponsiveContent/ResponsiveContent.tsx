import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

export enum ResponsiveContentType {
  CONTAINER,
  ROW,
  COLUMN
}

export type ResponsiveContentProps = {
  children: React.ReactNode;
  type?: ResponsiveContentType;
};

/* 
Shorthand component for the commonly re-used page margins
*/
export const ResponsiveContent = ({
  children,
  type = ResponsiveContentType.CONTAINER
}: ResponsiveContentProps) => {
  switch (type) {
    case ResponsiveContentType.CONTAINER:
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

    case ResponsiveContentType.ROW:
      return (
        <Row>
          <Col xs="1" className={'d-xs-block d-sm-none'}></Col>
          <Col xs="10" sm="8">
            {children}
          </Col>
        </Row>
      );

    case ResponsiveContentType.COLUMN:
      return (
        <>
          <Col xs="1" className={'d-xs-block d-sm-none'}></Col>
          <Col xs="10" sm="8">
            {children}
          </Col>
        </>
      );
  }
};
