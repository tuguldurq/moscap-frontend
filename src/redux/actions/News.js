import {
  CREATE_NEWS,
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_NEWS_ITEM,
  GET_NEWS_LIST,
  SET_NEWS_VIEW_TYPE,
  SHOW_MESSAGE,
} from '../../shared/constants/ActionTypes';
import Api from '../../@crema/services/auth/jwt-auth/jwt-api';
import IntlMessages from '../../@crema/utility/IntlMessages';

export const onGetNewsList = () => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get('/news')
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_NEWS_LIST, payload: data.data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const setCurrentNews = (id) => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get(`/news/${id}`)
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_NEWS_ITEM, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const createNews = (data) => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.post('/news', {...data})
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: CREATE_NEWS, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: <IntlMessages id='message.contactCreated' />,
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: <IntlMessages id='message.somethingWentWrong' />,
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const setViewType = (viewType) => {
  return (dispatch) => {
    dispatch({type: SET_NEWS_VIEW_TYPE, payload: viewType});
  };
};
