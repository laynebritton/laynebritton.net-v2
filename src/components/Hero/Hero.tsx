import React, { FC } from 'react';
import { motion } from 'framer-motion';
import { Button, Col, Container, Row } from 'react-bootstrap';
import * as ROUTES from '../../util/Routes';
import { SitePrimaryButton } from '../../theme/theme';

interface HeroProps {}

const Hero: FC<HeroProps> = () => (
  <>
    <Container>
      <Row>
        <Col xs="12" sm="12">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '80vh'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexFlow: 'wrap',
                flexWrap: 'wrap',
                textAlign: 'center'
              }}
            >
              <motion.div
                initial={{ opacity: 0.8, marginTop: 80 }}
                animate={{ opacity: 1, marginTop: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 style={{ fontSize: '10vh', color: '#FFF' }}>hello!</h1>
              </motion.div>
              <div style={{ display: 'block', width: '100%', height: '0' }} />

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.6 }}
              >
                <p style={{ fontSize: '2rem', color: '#FFF' }}>
                  {"I'm Layne Britton"}
                </p>
              </motion.div>

              <div style={{ display: 'block', width: '100%', height: '0' }} />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.6 }}
              >
                <Row>
                  <Col xs="6">
                    <Button href={ROUTES.RESUME} style={SitePrimaryButton}>
                      What I do
                    </Button>
                  </Col>
                  <Col xs="6">
                    <Button href={ROUTES.CONTACT} style={SitePrimaryButton}>
                      Contact
                    </Button>
                  </Col>
                </Row>
              </motion.div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </>
);

export default Hero;
