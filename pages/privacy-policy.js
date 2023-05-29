import React from 'react';
import Head from 'next/head';
import Footer from '../components/homepage/Footer/Footer';
import style from '../styles/PrivacyPolicy.module.css';

const privacyPolicy = () => {
  const maximiseInfo = (num) => {
    if (process.browser) {
      const paraNum = document.getElementById(num);
      const paraNum1 = document.getElementById(1);
      const paraNum2 = document.getElementById(2);
      const paraNum3 = document.getElementById(3);
      paraNum1.classList.add('PrivacyPolicy_none__2C-dW');
      paraNum2.classList.add('PrivacyPolicy_none__2C-dW');
      paraNum3.classList.add('PrivacyPolicy_none__2C-dW');
      paraNum.classList.remove('PrivacyPolicy_none__2C-dW');
    }
  };

 VOVOCA-5
    return (
        <>
        <div className={style.container}>
            <Head>
                <title>VOVOCA | Privacy Policy</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
            </Head>
            <div className={style.app}>
                <h2>Privacy Policy</h2>
                <div className={style.modal__button}>
                    <div className={style.modal__button__info}>
                        <h4>General Information</h4>
                        <div onClick={() => {maximiseInfo('1')}} className={style.toggle__button}>
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                    <p id="1b" id="1" className={style.modal__button__para}>
                    Welcome to Vovoca, a remarkable endeavor by the passionate team at DevBucket. Our unwavering dedication has fueled the creation of this platform, offered to you completely free of charge. We owe our freedom today to the incredible open-source technologies that have seamlessly converged within Vovoca. With utmost commitment, our ultimate goal is to transform Vovoca into an open-source program, granting access to its inner workings once the foundation and interface are perfected. During our development journey, Vercel graciously hosts both our backend APIs and frontend, ensuring a seamless and efficient experience. Together, let's embrace the power of collaboration and embark on a harmonious musical voyage with Vovoca.
                    </p>
                </div>
                <div className={style.modal__button}>
                    <div className={style.modal__button__info}>
                        <h4>User Data Security</h4>
                        <div id="2b" onClick={() => {maximiseInfo('2')}} className={style.toggle__button}>
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                    <p id="2" className={[style.modal__button__para, style.none].join(' ')}>
                    At Vovoca, your privacy is our utmost priority. We understand the sensitivity of your personal information and have taken extensive measures to safeguard it. Through meticulous implementation of end-to-end encryption, we strive to ensure that your data remains protected throughout its journey. To provide an added layer of security, all passwords are securely hashed before being stored in our database. As an extra precaution, we strongly recommend refraining from using commonly used passwords on this platform. Instead, leverage the convenience of auto password generators available on various browsers. While Team DevBucket cannot provide an absolute guarantee against any potential data breaches or music leaks, we assure you that we have diligently adhered to industry best practices to fortify the security of your data. Rest assured, your privacy is in safe hands at Vovoca.
                    </p>
                </div>
                <div className={style.modal__button}>
                    <div className={style.modal__button__info}>
                        <h4>Database Policy</h4>
                        <div id="3b" onClick={() => {maximiseInfo('3')}} className={style.toggle__button}>
                            <i className="fas fa-plus"></i>
                        </div>
                    </div>
                    <p id="3" className={[style.modal__button__para, style.none].join(' ')}>
                    At Vovoca, we take the security of your data seriously and have implemented stringent measures to protect your information. Our web app is hosted using the highly secure and open-source programs, Vercel, Node, and PostgreSQL, ensuring a robust infrastructure for data storage. However, it is important to note that in the unlikely event of a data breach on the Vercel platform, there is a possibility of data leakage on our website.

While we strive to maintain the highest level of security, we cannot provide an absolute guarantee against data breaches. In the event of such an occurrence, neither Vovoca nor DevBucket can be held responsible. However, please be assured that we are working tirelessly, dedicating ourselves day and night to implementing additional methods and security measures to further enhance the protection of your music, email, and password within the Vovoca app.

We value your trust in us, and the privacy and security of your data remain our top priority. We will continue to make every effort to ensure the utmost security of your information and provide you with a safe and secure platform for your musical experience.

Thank you for choosing Vovoca, and we appreciate your understanding and support as we continually strive to improve our security practices.  
                    </p>
                </div>

  return (
    <>
      <div className={style.container}>
        <Head>
          <title>VOVOCA | Privacy Policy</title>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
            crossorigin="anonymous"
          />
        </Head>
        <div className={style.app}>
          <h2>Privacy Policy</h2>
          <div className={style.modal__button}>
            <div className={style.modal__button__info}>
              <h4>General Information</h4>
              <div
                onClick={() => {
                  maximiseInfo('1');
                }}
                className={style.toggle__button}
              >
                <i className="fas fa-plus"></i>
              </div>
            </div>
            <p id="1b" id="1" className={style.modal__button__para}>
              Vovoca is a project under team DevBucket. We have putted our heart
              and soul in it to bring it to you for free. We our free today
              because of several open-source technologies out there that we have
              used all togethor to bring you Vovoca. We therefore aim to bring
              you vovoca as a open-source program too after completion of all
              the basic structure and interface. Our backend APIs are currently
              hosted on heroku and frontend on vercel while in development mode.
            </p>
          </div>
          <div className={style.modal__button}>
            <div className={style.modal__button__info}>
              <h4>User Data Security</h4>
              <div
                id="2b"
                onClick={() => {
                  maximiseInfo('2');
                }}
                className={style.toggle__button}
              >
                <i className="fas fa-plus"></i>
              </div>
Development
            </div>
            <p
              id="2"
              className={[style.modal__button__para, style.none].join(' ')}
            >
              We are more than aware of your private data. We have taken care of
              end to end encryption as much as we could have. All your passwords
              are hashed before going into our database. We however suggest you
              to not to use your common password on this website. You can use
              auto password gernerator on any browser for the same. Team
              DevBucket does not hold any guarantee on any possible leakage of
              private data or your music. We However assure you that we have
              followed all the best practices to secure your data
            </p>
          </div>
          <div className={style.modal__button}>
            <div className={style.modal__button__info}>
              <h4>Database Policy</h4>
              <div
                id="3b"
                onClick={() => {
                  maximiseInfo('3');
                }}
                className={style.toggle__button}
              >
                <i className="fas fa-plus"></i>
              </div>
            </div>
            <p
              id="3"
              className={[style.modal__button__para, style.none].join(' ')}
            >
              We have used most secured and open sourced programs to host our
              web app currently. We are using heroku and node and postgreSQL for
              our database. Therefore any data breach over heroku may lead to
              data leakage on our website. In any such case, Vovoca or DevBucket
              does not holds any guarantee. We are currently working day and
              night and implementing methods to make vovoca a more secure app
              for your music and email and password.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default privacyPolicy;
