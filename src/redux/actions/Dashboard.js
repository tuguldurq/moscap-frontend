import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_DASHBOARD_DATA,
} from 'shared/constants/ActionTypes';
import Api from '@crema/services/auth/jwt-auth/jwt-api';
import IntlMessages from '@crema/utility/IntlMessages';

export const onGetDashboardData = () => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get('/dashboard')
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_DASHBOARD_DATA, payload: data.data});
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
