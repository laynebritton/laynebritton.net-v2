import { FC } from 'react';
import { Button } from 'react-bootstrap';
import { SitePrimaryButton } from '../../theme/theme';
import * as ROUTES from '../../util/Routes';

const NotFound: FC = () => (
  <div
    style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '2rem'
    }}
  >
    <h1>404</h1>
    <h5 style={{ marginBottom: '2rem' }}>This page could not be found.</h5>
    <Button href={ROUTES.HOME} style={SitePrimaryButton}>
      Back to home
    </Button>
  </div>
);

export default NotFound;
