import React from 'react';
import style from './Footer.module.css';

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.contents}>
          <div className={style.get__in__touch}>
            <h2>Subscribe to Newsletter</h2>
            <p>
              Unlock a world of boundless creativity with our royalty-free music
              library. Subscribe to our newsletter for weekly updates on fresh
              tunes, exclusive releases, and behind-the-scenes insights,
              empowering your projects with a soundtrack that&apos;s truly
              yours.
            </p>
            <form
              action='https://formspree.io/f/xnqlqgza'
              method='POST'
              className={style.get__in__touch__form}
            >
              <div className={style.form__row}>
                <div className={style.inputs}>
                  <input
                    className={style.feild__input}
                    type='email'
                    placeholder='Email address*'
                    name='email'
                    required
                  />
                  <div className={style.subscribe}>
                    <button className={style.subscribe__btn}>Subscribe</button>
                  </div>
                </div>
              </div>
            </form>
          </div>

          <div className={style.contacts}>
            <div className={style.contact__box}>
              <div className={style.row}>
                <div className={style.contact__details}>
                  <h4>Contacts:</h4>
                  <table className={style.contact__info}>
                    <tbody>
                      <tr>
                        <td className={style.contact__type}>Ph.</td>
                        <td className={style.contact__value}>
                          +91-70079 92740
                        </td>
                      </tr>
                      <tr>
                        <td className={style.contact__type}>Mail.</td>
                        <td className={style.contact__value}>
                          info@devbucket.com
                        </td>
                      </tr>
                      <tr>
                        <td className={style.contact__type}>Office.</td>
                        <td className={style.contact__value}>
                          DevBucket, Headoffice, Vikas Nagar, Lucknow, IN
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <hr className='divider'></hr>
              <div className={style.rights}>
                <p>
                  ©{/* <Link scroll={true} href="https://devbucket.tech/"> */}
                  <span
                    style={{ color: 'rgb(163, 151, 130)', cursor: 'pointer' }}
                  >
                    Devbucket
                  </span>
                  {/* </Link>  */}
                  <span> {new Date().getFullYear()}. All rights reserved</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
