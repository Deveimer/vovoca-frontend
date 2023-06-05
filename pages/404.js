import React from 'react';
import style from '../styles/Error.module.css';

const NotFoundPage = () => {
  const handleOnClick = () => {
    window.location.href = '/';
  };
  return (
    <>
      <div className={style.container}>
        <h1>404 - Page Not Found</h1>
        <img
          width='300'
          src='https://media.tenor.com/9SFSfC2n0lkAAAAM/head-phones-music.gif'
        ></img>
        <p className={style.para}>
          Looks like this page went away to create Music!
        </p>
        <button className={style.butn} onClick={handleOnClick}>
          Go To HomePage
        </button>
      </div>
    </>
  );
};

export default NotFoundPage;
