import axios from 'axios';
import cookie from 'js-cookie';
import { toast } from 'react-toastify';
import {
  GET_MUSIC,
  LOADING,
  GET_MUSIC_SINGLE,
  UPLOADED_MUSIC,
  GET_LATEST_MUSIC,
  GET_TRENDING_MUSIC,
  CATEGORISED_MUSIC,
  RESET_CATEGORISED_MUSIC,
  SET_ERROR,
} from './type';
import setAuthToken from './utils/setAuthToken';

export const getAllMusic = page => async dispatch => {
  try {
    dispatch({ type: LOADING });
    const res = await axios.get(
      `https://vovoca-backend-deploy.vercel.app/api/music/?page=${page}&limit=5`
    );
    dispatch({
      type: GET_MUSIC,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const getSingleMusic = id => async dispatch => {
  try {
    dispatch({ type: LOADING });
    const res = await axios.get(
      `https://vovoca-backend-deploy.vercel.app/api/music/${id}`
    );
    dispatch({
      type: GET_MUSIC_SINGLE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTrendingMusic = () => async dispatch => {
  try {
    dispatch({ type: LOADING });
    const res = await axios.get(
      `https://vovoca-backend-deploy.vercel.app/api/music/trending`
    );
    dispatch({
      type: GET_TRENDING_MUSIC,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getLatestMusic = () => async dispatch => {
  try {
    dispatch({ type: LOADING });
    const res = await axios.get(
      `https://vovoca-backend-deploy.vercel.app/api/music/latest`
    );

    dispatch({
      type: GET_LATEST_MUSIC,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUploadedMusic =
  (page = 1) =>
  async dispatch => {
    try {
      setAuthToken(cookie.get('token'));
      const res = await axios.get(
        `https://vovoca-backend-deploy.vercel.app/api/admin/uploaded?page=${page}`
      );

      dispatch({
        type: UPLOADED_MUSIC,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: SET_ERROR });
      console.log(error);
    }
  };

export const getCategorisedMusic =
  (selected_category, page) => async dispatch => {
    try {
      const res = await axios.get(
        `https://vovoca-backend-deploy.vercel.app/api/music/?category=${selected_category.join(
          '+'
        )}&page=${page}`
      );
      dispatch({
        type: CATEGORISED_MUSIC,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const resetCategorisedMusic = () => async dispatch => {
  dispatch({
    type: RESET_CATEGORISED_MUSIC,
  });
};
