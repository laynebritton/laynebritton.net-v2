import { FC } from 'react';
import Hero from '../../components/Hero/Hero';
import styles from './Home.module.css';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <div className={styles.Home} data-testid="Home">
      <Hero />
    </div>
  );
};

export default Home;
