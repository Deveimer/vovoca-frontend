import React from 'react';
import style from './About.module.css';

const About = () => {
  return (
    <div id='about' className={style.about}>
      <div className={style.container}>
        <h2>Welcome to Vovoca</h2>
 VOVOCA-5
        <hr className="divider-main"></hr>
                <div className={style.features}>
                    <div className={style.feature__col__1}>
                        <div className={style.feature}>
                            <div className={[style.feature__heading, style.left].join(' ')}>
                                <h2>Royalty Free</h2>
                                <p>Experience the rhythm, without spending a dime, Unlock endless melodies, vovoca's free for a lifetime!</p>
                            </div>
                        </div>
                        <hr className="divider"></hr>
                        <div className={style.feature}>
                        <div className={[style.feature__heading, style.left].join(' ')}>
                                <h2>No Credits Required</h2>
 VOVOCA-5
                                <p>Let the melodies soar, no strings attached, Vovoca's music, freely used, without credit or cash.</p>

                                <p>You dont even have to pay us or give us credit
                                for using our music anywhere, in your songs,
                                videos or office presentation</p>
 Development
                            </div>
                        </div>
                    </div>
                    <div className={style.vovoca__img}>
                        <img src="https://source.unsplash.com/daily?neon/1200x1200" />
                    </div>
                    <div className={style.feature__col__2}>
                    <div className={style.feature}>
                    <div className={[style.feature__heading, style.right].join(' ')}>
                                <h2>Filter Music</h2>
                                <p>Unlock Vovoca's full potential with a single login, Effortlessly browse and filter, music at your command</p>
                            </div>
                        </div>
                        <hr className="divider"></hr>
                        <div className={style.feature}>
                        <div className={[style.feature__heading, style.right].join(' ')}>
                                <h2>Upload Music</h2>
                                <p>Unleash your artistry, let your talent shine bright, Share your creations with the world, day or night. Vovoca welcomes your music, for free, with delight</p>
                            </div>
                        </div>
                    </div>
                </div>

        <hr className='divider-main'></hr>
        <div className={style.features}>
          <div className={style.feature__col__1}>
            <div className={style.feature}>
              <div className={[style.feature__heading, style.left].join(' ')}>
                <h2>Royalty Free</h2>
                <p>
                  Enjoy Royalty Free awesome music for free We provide all of
                  our services free Login and use vovoca for free forever
                </p>
              </div>
 Development
            </div>
            <hr className='divider'></hr>
            <div className={style.feature}>
              <div className={[style.feature__heading, style.left].join(' ')}>
                <h2>No Credits Required</h2>
                <p>
                  You dont even have to pay us or give us credit for using our
                  music anywhere, in your songs, videos or office presentation
                </p>
              </div>
            </div>
          </div>
          <div className={style.vovoca__img}>
            <img
              src='https://source.unsplash.com/daily?neon/1200x1200'
              alt='about image'
            />
          </div>
          <div className={style.feature__col__2}>
            <div className={style.feature}>
              <div className={[style.feature__heading, style.right].join(' ')}>
                <h2>Filter Music</h2>
                <p>
                  Login to utilise complete set of features of vovoca. You can
                  then easily filter our music category wise
                </p>
              </div>
            </div>
            <hr className='divider'></hr>
            <div className={style.feature}>
              <div className={[style.feature__heading, style.right].join(' ')}>
                <h2>Upload Music</h2>
                <p>
                  You can also share your work and talent to whole world for
                  free. Sign in and upload your created music with the world
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
