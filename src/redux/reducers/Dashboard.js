import {GET_DASHBOARD_DATA} from '../../shared/constants/ActionTypes';

const initialState = {
  data: null,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_DATA:
      return {
        ...state,
        dashboardData: action.payload.result,
      };
    default:
      return state;
  }
};
export default dashboardReducer;
