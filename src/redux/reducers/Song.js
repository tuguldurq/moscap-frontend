const {
  GET_SONG_LIST,
  GET_ALL_SONG_LIST,
  SET_SONG_DATA,
} = require('shared/constants/ActionTypes');

const initialState = {
  songList: [],
  selectedSong: null,
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONG_LIST:
      return {
        ...state,
        songList: action.payload,
      };
    case GET_ALL_SONG_LIST:
      return {
        ...state,
        songList: action.payload,
      };
    case SET_SONG_DATA:
      return {
        ...state,
        selectedSong: action.payload,
      };
    default:
      return state;
  }
};

export default songReducer;
