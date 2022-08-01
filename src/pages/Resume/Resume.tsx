import React, { FC } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { SitePrimaryButton } from '../../theme/theme';
import ProfilePicture from '../../img/layne.png';
import { TrackEvent } from '../../util/Analytics';
import * as ANALYTICS_CONSTANTS from '../../util/AnalyticsConstants';

const GoogleDriveResumeLink =
  'https://docs.google.com/document/d/1ntg-qp8GKCgLZqkCdXmn6jiNTcvupTqnP4o6Cp7Zqe4/edit';

const GitHubLink = 'https://github.com/laynebritton';

const LinkedInLink = 'https://www.linkedin.com/in/layne-britton-85339b149/';

const Resume: FC = () => {
  TrackEvent(ANALYTICS_CONSTANTS.VIEW_ABOUT);

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

            <br />

            <Button
              href={GoogleDriveResumeLink}
              target="_blank"
              style={SitePrimaryButton}
              onClick={() => {
                TrackEvent(ANALYTICS_CONSTANTS.CLICK_RESUME);
              }}
            >
              Resume
            </Button>
            <br />
            <br />

            <Button
              href={GitHubLink}
              target="_blank"
              style={SitePrimaryButton}
              onClick={() => {
                TrackEvent(ANALYTICS_CONSTANTS.CLICK_GITHUB);
              }}
            >
              GitHub
            </Button>
            <br />
            <br />

            <Button
              href={LinkedInLink}
              target="_blank"
              style={SitePrimaryButton}
              onClick={() => {
                TrackEvent(ANALYTICS_CONSTANTS.CLICK_LINKEDIN);
              }}
            >
              LinkedIn
            </Button>
            <br />
            <br />
          </Col>
          <Col sm="4">
            <img
              style={{ width: '100%', borderRadius: '50%' }}
              src={ProfilePicture}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="1" className={'d-xs-block d-sm-none'}></Col>
          <Col xs="10" sm="8">
            <h2>Bio</h2>
            <p>
              {
                "Hello! My name is Layne. I'm an engineer currently living in Brooklyn, NY."
              }
            </p>
            <br />
            <p>
              {
                "Right now I'm a Software Engineer at Ribbon Home, building a platform to help regular people win offers on homes against investment banks and house flippers."
              }
            </p>
            <br />
            <p>
              {
                'I previously worked at BCG Digital Ventures where I built, launched, and handed-off startups to our clients. Before that I was at the Japan Research Institute America, upgrading and developing financial systems. Learn more in my resume.'
              }
            </p>
            <br />
            <p>
              {
                "Very interested in how technology intersects with society. Areas of interest are urban development, sustainability, education, and political activism. Please reach out if you know of any interesting projects there, especially if it's open source!"
              }
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs="1" className={'d-xs-block d-sm-none'}></Col>
          <Col xs="10" sm="8"></Col>
        </Row>
      </Container>
    </>
  );
};

export default Resume;
