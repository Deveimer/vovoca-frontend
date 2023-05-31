import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import style from './MusicCard.module.css';
import { toast } from 'react-toastify';
import { FaGetPocket } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const music = ({ music }) => {
  return (
    <div className={style.row}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          color: 'wheat',
          textAlign: 'center',
        }}
      >
        <Image
          className={style.image}
          src={music.image}
          alt='Ran'
          height='70px'
          width='70px'
        />
        <p style={{ marginBottom: '-2%' }}>{music.name}</p>
      </div>
      <AudioPlayer
        className={[
          style.rhap_containe,
          style.rhap_controls_section,
          style.rhap_main_controls_button,
        ].join(' ')}
        autoPlayAfterSrcChange={false}
        layout={'horizontal'}
        src={`data:audio/wav;base64,${Buffer.from(
          music.audiobuffer?.data
        ).toString('base64')}`}
        onError={() => {
          toast('Internal Server Error', {
            closeButton: false,
            className: style.toast_background,
          });
        }}
      />
      <Link scroll={true} href={`/music/${encodeURIComponent(music._id)}`}>
        <button style={{ cursor: 'pointer' }} className={style.music_button}>
          <FaGetPocket
            style={{ color: 'wheat' }}
            className={style.music_icon}
          />
        </button>
      </Link>
    </div>
  );
};

export default music;
