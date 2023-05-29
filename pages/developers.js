import styles from '../styles/Testimonial.module.css';
import Head from 'next/head';
import { AiFillLinkedin } from 'react-icons/ai';
import Link from 'next/link';
import Footer from '../components/homepage/Footer/Footer';
import Loader from '../components/Loader/Loader';
import useSWR from 'swr';

async function fetcher(...args) {
  const res = await fetch(...args);
  return res.json();
}

const developers = () => {
  const { data } = useSWR('/api/github', fetcher);
  return (
    <>
      <div>
        <div className={styles.testimonials}>
          <Head>
            <title>VOVOCA | Team</title>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
              integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
              crossOrigin="anonymous"
            />
          </Head>
          <div className={styles.container}>
            <h1 className={styles.testimonial__heading}>Developers</h1>
            <div className={styles.testimonial__row__1}>
              <div className={styles.testimonial}>
                <article className={styles.testimonial__article}>
                  <div className={styles.testimonial__content}>
                    <p>
VOVOCA-5
                   From humble beginnings to an extraordinary ride, BTS, we conquered bugs and reached new heights. Teamwork and dedication, our driving force with pride, Hard work paid off, now Vovoca stands by your side.

                      Though this is a simple music streaming and downloading
                      website, but BTS it was a roller coaster ride while
                      resolving the bugs and adding features to it, but teamwork
                      and dedication helped us overcome these problems , and
                      here we are with all of our hard Work
 Development
                    </p>
                    <span>Varun Singh</span>
                    <br />
                    <span>Developer, Vovoca</span>
                  </div>
                  <div
                    className={styles.developer__img}
                    style={{
                      backgroundImage: `url(https://media-exp1.licdn.com/dms/image/C5103AQHlqCz2y6gWFA/profile-displayphoto-shrink_800_800/0/1576986523117?e=1640217600&v=beta&t=wKHjyBSdnUwaXGmafmZ6MS_lij51Q_MIKNvLTa1ot1A)`,
                    }}
                  ></div>
                </article>
                <Link scroll={true} href="https://www.linkedin.com/in/v-varun/">
                  <button
                    style={{
                      width: '100%',
                      borderTopLeftRadius: '0px',
                      borderTopRightRadius: '0px',
                      borderBottomLeftRadius: '1.25rem',
                      borderBottomRightRadius: '1.25rem',
                      marginTop: '-5%',
                    }}
                  >
                    <AiFillLinkedin style={{ fontSize: 'x-large' }} />
                  </button>
                </Link>
              </div>
              <div className={styles.testimonial}>
                <article className={styles.testimonial__article}>
                  <div className={styles.testimonial__content}>
                    <p>
                      The concept was fairly new and it was challenging to
                      forsee the design of our website as such websites are not
                      in huge quantities on the web, however, we worked hard as
                      a team and coded vovoca as beautiful as we can. I hope you
                      all will love vovoca too.
                    </p>
                    <span>Prakhar Pandey</span>
                    <br />
                    <span>Developer, Vovoca</span>
                  </div>
                  <div
                    className={styles.developer__img}
                    style={{
                      backgroundImage: `url(https://avatars.githubusercontent.com/u/51090491?v=4)`,
                      backgroundSize: '90px 90px',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                </article>
                <Link
                  scroll={true}
                  href="https://www.linkedin.com/in/prakhar-pandey-a307b7191/"
                >
                  <button
                    style={{
                      width: '100%',
                      borderTopLeftRadius: '0px',
                      borderTopRightRadius: '0px',
                      borderBottomLeftRadius: '1.25rem',
                      borderBottomRightRadius: '1.25rem',
                      marginTop: '-10%',
                    }}
                  >
                    <AiFillLinkedin style={{ fontSize: 'x-large' }} />
                  </button>
                </Link>
              </div>
              <div className={styles.testimonial}>
                <article className={styles.testimonial__article}>
                  <div className={styles.testimonial__content}>
                    <p>
                      We all have learned a lot while completing Vovoca. I think
                      the hardest part for all of us was shifting from react to next
                      as it is fairly new and none of us had used it before.
                      Overall, voovca came out to be of great success
                    </p>
                    <span>Kaustubh Mishra</span>
                    <br />
                    <span>Developer, Vovoca</span>
                  </div>
                  <div
                    className={styles.developer__img}
                    style={{
                      backgroundImage: `url(https://media-exp1.licdn.com/dms/image/C5103AQFIQ2yP_StD7g/profile-displayphoto-shrink_800_800/0/1566850251714?e=1640217600&v=beta&t=olTFXy-j2NtqoGnuPoBrvUV5Y1lgSG9kHSAAwKKgZEA)`,
                      backgroundSize: '90px 90px',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                </article>
                <Link
                  scroll={true}
                  href="https://www.linkedin.com/in/kaustubhai/"
                >
                  <button
                    style={{
                      width: '100%',
                      borderTopLeftRadius: '0px',
                      borderTopRightRadius: '0px',
                      borderBottomLeftRadius: '1.25rem',
                      borderBottomRightRadius: '1.25rem',
                      marginTop: '-5%',
                    }}
                  >
                    <AiFillLinkedin style={{ fontSize: 'x-large' }} />
                  </button>
                </Link>
              </div>
            </div>
            <h1
              className={styles.testimonial__heading}
              style={{ paddingTop: '3rem' }}
            >
              Contributors
            </h1>
            <div className={styles.testimonial__row__2}>
              {data ? (
                data.users.map((user, index) => (
                  <div className={styles.testimonial} key={index}>
                    <article className={styles.testimonial__article}>
                      <a target="_blank" rel="" href={user.url}>
                        <div
                          className={styles.contributor__img}
                          style={{
                            backgroundImage: `url(${user.avatar_url})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: '90px 90px',
                          }}
                        ></div>
                      </a>
                    </article>
                  </div>
                ))
              ) : (
                <Loader loading={true} />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default developers;
