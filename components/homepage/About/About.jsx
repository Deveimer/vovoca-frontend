import React from 'react'
import style from './About.module.css';

const About=()=>{
    return(
        <div id="about" className={style.about}>
            <div className={style.container}>
                <h2>Welcome to Vovoca</h2>
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
                                <p>Let the melodies soar, no strings attached, Vovoca's music, freely used, without credit or cash.</p>
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
            </div>
        </div>
    )
}

export default About