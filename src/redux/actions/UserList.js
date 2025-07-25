import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_USER_LIST,
} from '../../shared/constants/ActionTypes';
import IntlMessages from '../../@crema/utility/IntlMessages';
import React from 'react';
import Api from '../../@crema/services/auth/jwt-auth/jwt-api';

export const onGetUserList = () => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get('/api/user/list')
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_USER_LIST, payload: data.data});
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
export const onUserListOfAdmin = () => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get('/admin/users')
      .then((response) => {
        if (response.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_USER_LIST, payload: response.data.result});
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
