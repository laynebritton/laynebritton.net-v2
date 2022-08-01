import { FC } from 'react';
import Hero from '../../components/Hero/Hero';
import styles from './Home.module.css';
import { TrackEvent } from '../../util/Analytics';
import * as ANALYTICS_CONSTANTS from '../../util/AnalyticsConstants';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  TrackEvent(ANALYTICS_CONSTANTS.VIEW_HOME_PAGE);
  return (
    <div className={styles.Home} data-testid="Home">
      <Hero />
    </div>
  );
};

export default Home;
