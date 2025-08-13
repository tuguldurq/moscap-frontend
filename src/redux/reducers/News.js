import {
  GET_NEWS_ITEM,
  GET_NEWS_LIST,
  SET_NEWS_FILTER,
  SET_NEWS_VIEW_TYPE,
} from '../../shared/constants/ActionTypes';

export const VIEW_TYPE = Object.freeze({LIST: 1, GRID: 2});
const INIT = {
  newsList: [],
  newsItem: null,
  viewType: VIEW_TYPE.GRID,
  filter: null,
};

const NewsReducer = (state = INIT, action) => {
  switch (action.type) {
    case SET_NEWS_VIEW_TYPE:
      return {
        ...state,
        viewType: action.payload,
      };
    case GET_NEWS_LIST:
      return {
        ...state,
        newsList: action.payload,
      };
    case GET_NEWS_ITEM:
      return {
        ...state,
        newsItem: action.payload,
      };
    case SET_NEWS_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default NewsReducer;
