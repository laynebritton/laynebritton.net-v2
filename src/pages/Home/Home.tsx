import { FC } from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero/Hero';
import styles from './Home.module.css';
import { TrackEvent } from '../../util/Analytics';
import * as ANALYTICS_CONSTANTS from '../../util/AnalyticsConstants';
import Resume from '../Resume/Resume';
import Contact from '../Contact/Contact';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  TrackEvent(ANALYTICS_CONSTANTS.VIEW_HOME_PAGE);
  return (
    <>
      <div
        id="home"
        // Hide background image on mobile
        // className={'d-none d-sm-block'}
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
          animate={{ opacity: 0.35 }}
          transition={{ duration: 2, delay: 1.75 }}
          style={{
            width: '100%',
            height: '100%',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            // background:
            //   'linear-gradient(to bottom, transparent, 55%, black), url("https://s3.amazonaws.com/laynebritton.net-media/public/rosebud_trail_lowered_png.png") no-repeat center center'
            // background:
            //   'linear-gradient(to bottom, transparent, 70%, black), url("https://s3.amazonaws.com/laynebritton.net-media/public/cold_spring_starry_sky_png_lower.png") no-repeat center center'
            background:
              'linear-gradient(to bottom, transparent, 45%, black), url("https://s3.amazonaws.com/laynebritton.net-media/public/nyc_fidi_from_brooklyn.png") no-repeat center center'
          }}
        ></motion.div>
      </div>
      <div className={styles.Home} data-testid="Home">
        <Hero />
      </div>
      <span id="resume" />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;
