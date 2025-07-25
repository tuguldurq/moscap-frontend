import {
  CREATE_NEW_SONG,
  EDIT_SONG,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_ALL_SONG_LIST,
  GET_SONG_LIST,
  SET_SONG_DATA,
  SHOW_MESSAGE,
} from 'shared/constants/ActionTypes';
import Api from '../../@crema/services/auth/jwt-auth/jwt-api';
//repertory
export const songSearch = (values, page, per_page) => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    console.log('values', values);
    Api.get(`/repertory`, {
      params: {query: values.query, type: values.type, page, per_page},
    })
      .then((response) => {
        if (response.status === 200 && response.data.status === 'success') {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_SONG_LIST, payload: response.data.result});
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

// songs
export const getSongList = (search, page, per_page) => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get(`/admin/songs`, {
      params: {search, page, per_page},
    })
      .then((response) => {
        console.log(response);
        if (response.status === 200 && response.data.status === 'success') {
          dispatch({type: FETCH_SUCCESS});
          dispatch({
            type: GET_ALL_SONG_LIST,
            payload: response.data.result,
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const createSong = (values) => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.post(`/admin/songs`, {...values})
      .then((response) => {
        if (response.status === 200 && response.data.status === 'success') {
          dispatch({type: FETCH_SUCCESS});
          dispatch({
            type: CREATE_NEW_SONG,
            payload: response.data.result,
          });
          dispatch({
            type: SHOW_MESSAGE,
            payload: 'Амжилттай бүртгэгдлээ.',
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};
export const editSong = (values, id) => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.put(`/admin/songs/${id}`, {...values})
      .then((response) => {
        if (response.status === 200 && response.data.status === 'success') {
          dispatch({type: FETCH_SUCCESS});
          dispatch({
            type: EDIT_SONG,
            payload: response.data.result,
          });
          dispatch({
            type: SHOW_MESSAGE,
            payload: 'Амжилттай засагдлаа.',
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};
export const setCurrentSong = (song) => {
  return (dispatch) => {
    dispatch({type: SET_SONG_DATA, payload: song});
  };
};
