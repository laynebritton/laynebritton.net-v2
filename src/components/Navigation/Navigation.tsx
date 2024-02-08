import React, { FC } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import * as ROUTES from '../../util/Routes';
import styles from './Navigation.module.css';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => (
  <Navbar sticky="top" variant="dark" expand="lg" className={styles.Navigation}>
    <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href={ROUTES.HOME_ANCHOR}>laynebritton.net</Nav.Link>
          <Nav.Link href={ROUTES.RESUME_ANCHOR}>About</Nav.Link>
          <Nav.Link href={ROUTES.PROJECTS_ANCHOR}>Projects</Nav.Link>
          <Nav.Link href={ROUTES.CONTACT_ANCHOR}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default Navigation;
