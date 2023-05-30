import axios from 'axios';
import { USER_LOGIN, LOADING, USER_LOGIN_FAILED, LOAD_USER, FETCH_USER } from './type';
import setAuthToken from './utils/setAuthToken';
import cookie from 'js-cookie';

export const loginUser = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'Application/json'
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    dispatch({ type: LOADING });
    const res = await axios.post('https://vovoca-backend-deploy.vercel.app/api/admin/login', body, config);
    dispatch({
      type: USER_LOGIN,
      payload: res.data
    });
    // dispatch({ type: USER_LOGIN_FAILED, payload: null });
    dispatch({ type: LOAD_USER, payload: res.data });
    return true;
  } catch (err) {
    dispatch({ type: USER_LOGIN_FAILED, payload: err?.response.data });
    return false;
  }
};

export const registerUser = async (username, email, password) => {
  const config = {
    headers: {
      'Content-Type': 'Application/json'
    }
  };

  // request Body
  const body = JSON.stringify({ username, email, password });
  try {
    const res = await axios.post('https://vovoca-backend-deploy.vercel.app/api/admin/register', body, config);
    return res.data;
  } catch (err) {
    console.error(err);
    return err?.response.data;
  }
};

export const getUserDetails = () => async (dispatch) => {
  if (cookie.get('token')) {
    setAuthToken(cookie.get('token'));
    const res = await axios.get('https://vovoca-backend-deploy.vercel.app/api/admin');
    dispatch({
      type: FETCH_USER,
      payload: res.data
    });
  }
};
