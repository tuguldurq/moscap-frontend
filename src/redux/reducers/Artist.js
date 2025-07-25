import {
  GET_ARTIST_LIST,
  GET_ARTIST_ITEM,
  NULLIFY_ARTIST,
  GET_ARTIST_CONTACT_LIST,
  UPDATE_ARTIST_CONTACT_DETAIL,
  DELETE_ARTIST_CONTACT,
  CREATE_NEW_ARTIST_CONTACT,
  GET_MANAGER_LIST,
  ADD_NEW_MANAGER,
  DELETE_MANAGER,
  UPDATE_MANAGER,
  ADD_NEW_HEIR,
  GET_HEIR_INFO,
  UPDATE_HEIR_INFO,
  ADD_NEW_ARTIST,
  GET_ARTIST_SONGS,
  CREATE_ARTIST_SONG,
  GET_ARTIST_SONG_DETAIL,
  UPDATE_ARTIST_SONG,
  DELETE_ARTIST_SONG,
} from '../../shared/constants/ActionTypes';

const initialState = {
  artistData: {},
  selectedArtist: null,
  contactList: [],
  selectedContact: null,
  totalArtists: 0,
  managerList: [],
  selectedManager: null,
  heir: null,
  artistSongs: [],
  songDetail: null,
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTIST_LIST:
      return {
        ...state,
        artistData: action.payload,
        totalArtists: action.payload?.data.length,
      };
    case GET_ARTIST_ITEM: {
      return {
        ...state,
        selectedArtist: action.payload,
      };
    }
    case ADD_NEW_ARTIST: {
      return {
        ...state,
        totalArtists: state.totalArtists + 1,
      };
    }
    // state.artistData is not iterable
    case GET_ARTIST_CONTACT_LIST: {
      return {
        ...state,
        contactList: action.payload,
      };
    }
    case UPDATE_ARTIST_CONTACT_DETAIL: {
      return {
        ...state,
        selectedContact: action.payload,
        contactList: state.contactList.map((contact) =>
          contact.id === action.payload.id ? action.payload : contact,
        ),
      };
    }
    case DELETE_ARTIST_CONTACT: {
      return {
        ...state,
        contactList: action.payload,
      };
    }
    case CREATE_NEW_ARTIST_CONTACT: {
      return {
        ...state,
        contactList: action.payload,
      };
    }
    case GET_MANAGER_LIST: {
      return {
        ...state,
        managerList: action.payload,
      };
    }
    case ADD_NEW_MANAGER: {
      return {
        ...state,
        managerList: action.payload,
      };
    }
    case DELETE_MANAGER: {
      return {
        ...state,
        managerList: action.payload,
      };
    }
    case UPDATE_MANAGER: {
      return {
        ...state,
        selectedManager: action.payload,
        managerList: state.managerList.map((manager) =>
          manager.id === action.payload.id ? action.payload : manager,
        ),
      };
    }
    case ADD_NEW_HEIR: {
      return {
        ...state,
        heir: action.payload,
      };
    }
    case GET_HEIR_INFO: {
      return {
        ...state,
        heir: action.payload,
      };
    }
    case UPDATE_HEIR_INFO: {
      return {
        ...state,
        heir: action.payload,
      };
    }
    case NULLIFY_ARTIST: {
      return {
        ...state,
        selectedArtist: null,
      };
    }
    case GET_ARTIST_SONGS: {
      return {
        ...state,
        artistSongs: action.payload,
      };
    }
    case CREATE_ARTIST_SONG: {
      return {
        ...state,
        artistSongs: action.payload,
      };
    }
    case GET_ARTIST_SONG_DETAIL: {
      return {
        ...state,
        songDetail: action.payload,
      };
    }
    case UPDATE_ARTIST_SONG: {
      return {
        ...state,
        artistSongs: action.payload,
      };
    }
    case DELETE_ARTIST_SONG: {
      return {
        ...state,
        artistSongs: action.payload,
      };
    }
    default:
      return state;
  }
};
export default artistReducer;
