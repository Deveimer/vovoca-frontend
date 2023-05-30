import Link from 'next/link';
import styles from './Error.module.css';
import Footer from '../homepage/Footer/Footer';

const Error = () => {
    const handleOnClick = () => {
        window.location.href = '/';
    }
  return (
    <>
      <div className={styles.container}>
        <h1>404 - Page Not Found</h1>
        <img width="300" src='https://media.tenor.com/9SFSfC2n0lkAAAAM/head-phones-music.gif'></img>
        <p className={styles.para}>Looks like this page went away to create Music!</p>
        <button className={styles.butn} onClick={handleOnClick}>Go To HomePage</button>
      </div>
    </>
  );
};

export default Error;
