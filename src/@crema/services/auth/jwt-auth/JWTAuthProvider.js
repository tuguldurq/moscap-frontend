import React, {createContext, useContext, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  SHOW_MESSAGE,
} from '../../../../shared/constants/ActionTypes';
import jwtAxios, {setAuthToken} from './jwt-api';
import {useIntl} from 'react-intl';

const JWTAuthContext = createContext();
const JWTAuthActionsContext = createContext();

export const useJWTAuth = () => useContext(JWTAuthContext);

export const useJWTAuthActions = () => useContext(JWTAuthActionsContext);

const JWTAuthAuthProvider = ({children}) => {
  const [firebaseData, setJWTAuthData] = useState({
    user: null,
    isAuthenticated: false,
    isLoading: true,
  });

  const dispatch = useDispatch();
  const {messages} = useIntl();

  useEffect(() => {
    const getAuthUser = () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setJWTAuthData({
          user: undefined,
          isLoading: false,
          isAuthenticated: false,
        });
        return;
      }
      setAuthToken(token);
      jwtAxios
        .get('/me')
        .then(({data}) =>
          setJWTAuthData({
            user: data,
            isLoading: false,
            isAuthenticated: true,
          }),
        )
        .catch(() =>
          setJWTAuthData({
            user: undefined,
            isLoading: false,
            isAuthenticated: false,
          }),
        );
    };

    getAuthUser();
  }, []);

  const signInUser = async (params) => {
    dispatch({type: FETCH_START});
    try {
      const loginUser = {
        phone: `${params.phone.prefix} ${params.phone.number}`,
        password: params.password,
      };

      const {data} = await jwtAxios.post('/auth/login', loginUser);
      localStorage.setItem('token', data);
      setAuthToken(data);
      const res = await jwtAxios.get('/me');
      setJWTAuthData({user: res.data, isAuthenticated: true, isLoading: false});
      dispatch({type: FETCH_SUCCESS});
    } catch (error) {
      setJWTAuthData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch({
        type: FETCH_ERROR,
        payload: messages[error.response.data.message],
      });
    }
  };

  const signUpUser = async ({type, requestData}) => {
    dispatch({type: FETCH_START});
    try {
      if (requestData.user.register) {
        const r = requestData.user.register;
        requestData.user.role = type;
        requestData.user.register_number = `${r.letter1}${r.letter2}${r.number}`;
        delete requestData.user.register;
      }
      if (requestData.user.phone) {
        const r = requestData.user.phone;
        requestData.user.phone = `${r.prefix} ${r.number}`;
      }
      const {data} = await jwtAxios.post(`/auth/${type}/signup`, {
        ...requestData,
      });
      localStorage.setItem('token', data.token);
      setAuthToken(data.token);
      dispatch({
        type: SHOW_MESSAGE,
        payload: messages['message.artistRegistered'],
      });
      const res = await jwtAxios.get('/me');
      setJWTAuthData({
        user: res.data,
        isAuthenticated: true,
        isLoading: false,
      });
      dispatch({type: FETCH_SUCCESS});
    } catch (error) {
      setJWTAuthData({
        ...firebaseData,
        isAuthenticated: false,
        isLoading: false,
      });
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };

  const logout = async () => {
    localStorage.removeItem('token');
    setAuthToken();
    setJWTAuthData({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  const updatePasword = async (passwordData) => {
    dispatch({type: FETCH_START});
    try {
      const {data} = await jwtAxios.post(`/auth/update/password`, {
        ...passwordData,
      });
      if (data.error) {
        dispatch({type: FETCH_ERROR, payload: messages[data.error]});
      } else {
        dispatch({
          type: SHOW_MESSAGE,
          payload: messages[data.message],
        });
      }
    } catch (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };
  const forgetPassword = async (email) => {
    dispatch({type: FETCH_START});
    try {
      const {data} = await jwtAxios.post(`/auth/forget/password`, {
        ...email,
      });
      if (data.error) {
        dispatch({type: FETCH_ERROR, payload: messages[data.error]});
      } else {
        dispatch({
          type: SHOW_MESSAGE,
          payload: messages[data.message],
        });
      }
    } catch (error) {
      dispatch({type: FETCH_ERROR, payload: error.message});
    }
  };
  return (
    <JWTAuthContext.Provider
      value={{
        ...firebaseData,
      }}>
      <JWTAuthActionsContext.Provider
        value={{
          signUpUser,
          signInUser,
          logout,
          updatePasword,
          forgetPassword,
        }}>
        {children}
      </JWTAuthActionsContext.Provider>
    </JWTAuthContext.Provider>
  );
};
export default JWTAuthAuthProvider;

JWTAuthAuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
