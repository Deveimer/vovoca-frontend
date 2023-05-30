import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUploadedMusic } from '../../actions/musicActions';
import Music from '../music/music';
import Loader from '../Loader/Loader';
import style from '../../styles/AllMusic.module.css';
import ReactPaginate from 'react-paginate';
import { LOADING } from '../../actions/type';

const History = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUploadedMusic());
  }, []);
  const musics = useSelector((state) => state.music.uploaded);
  const loading = useSelector((state) => state.music.loading);
  const error = useSelector((state) => state.music.error);

  const handleChange = (e) => {
    dispatch({ type: LOADING });
    dispatch(getUploadedMusic(e.selected + 1));
  };

  if (!musics && !error) {
    return <Loader loading={true} />;
  }
  if (error) {
    return <h2 style={{ color: 'wheat' }}>No Music Found</h2>;
  }

  return (
    <div id="container">
      <h1>Upload History</h1>
      <div className="container">
        {musics && !loading ? (
          musics.data.map((i, index) => (
            <Music key={index} music={i} />
            // <h1>{i.name}</h1>
          )) || <h2>Loading...</h2>
        ) : (
          <Loader loading={true} />
        )}
        <div className={style.pagination_container}>
          <ReactPaginate
            containerClassName={style.pagination} /* as this work same as bootstrap class */
            subContainerClassName={[style.pages, style.pagination].join(' ')} /* as this work same as bootstrap class */
            activeClassName={style.active}
            pageCount={musics.totalPages}
            breakLabel={false}
            marginPagesDisplayed={0}
            pageRangeDisplayed={0}
            previousLabel={'<'}
            nextLabel={'>'}
            onPageChange={(e) => handleChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default History;
