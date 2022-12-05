import { FC } from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero/Hero';
import styles from './Home.module.css';
import { TrackEvent } from '../../util/Analytics';
import * as ANALYTICS_CONSTANTS from '../../util/AnalyticsConstants';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  TrackEvent(ANALYTICS_CONSTANTS.VIEW_HOME_PAGE);
  return (
    <>
      <div
        className={'d-md-block d-sm-none'}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
          height: '100%',
          width: '100%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ duration: 2.0, delay: 1.5 }}
        >
          <img
            style={{ objectFit: 'cover' }}
            src="https://s3.amazonaws.com/laynebritton.net-media/public/cold_spring_starry_sky_png_lower.png"
            // src="https://s3.amazonaws.com/laynebritton.net-media/public/rosebud_trail_lowered_png.png"
          ></img>
        </motion.div>
      </div>
      <div className={styles.Home} data-testid="Home">
        <Hero />
      </div>
    </>
  );
};

export default Home;
