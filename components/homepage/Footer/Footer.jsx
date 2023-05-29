import React from 'react';
import style from './Footer.module.css';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.contents}>
          <div className={style.get__in__touch}>
            <h2>Get in Touch</h2>
            <p>
            Join forces with us, let's create something grand, Collaboration awaits, reach out with a click at hand. Share your ideas, let's shape our project, hand in hand.
            </p>
            <form action="https://formspree.io/f/xnqlqgza" method="POST" className={style.get__in__touch__form}>
              <div className={style.form__row}>
                <div className={style.inputs} >
                  <input
                    className={style.feild__input}
                    type="text"
                    placeholder="Your name*"
                    name="name"
                    required
                  />
                  <input
                    className={style.feild__input}
                    type="email"
                    placeholder="Your email id*"
                    name="email"
                    required
                  />
                  <input
                    type="hidden"
                    value="Vovoca "
                    name="from"
                  />
                </div>
                <div className={style.message}>
                  <textarea
                    className={style.mssg__input}
                    type="text"
                    placeholder="What you have to say*"
                    name="message"
                    required
                  />
                </div>
              </div>
              <div className={style.subscribe}>
                <button className={style.subscribe__btn}>Send Mail</button>
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
              <hr className="divider"></hr>
              <div className={style.rights}>
                <p>
                  ©{/* <Link scroll={true} href="https://devbucket.tech/"> */}
                  <span
                    style={{ color: 'rgb(163, 151, 130)', cursor: 'pointer' }}
                  >
                    Devbucket
                  </span>
                  {/* </Link>  */}
                  2021. All rights reserved
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
