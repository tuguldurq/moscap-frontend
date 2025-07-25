import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  GET_ARTIST_LIST,
  GET_ARTIST_ITEM,
  ADD_NEW_ARTIST,
  NULLIFY_ARTIST,
  DELETE_ARTIST,
  SHOW_MESSAGE,
  UPDATE_ARTIST_STARRED_STATUS,
  GET_ARTIST_FOLDER_LIST,
  UPDATE_ARTIST_DETAIL,
  UPDATE_ARTIST_LABEL,
  UPDATE_ARTIST_CONTACT_DETAIL,
  GET_ARTIST_CONTACT_LIST,
  DELETE_ARTIST_CONTACT,
  CREATE_NEW_ARTIST_CONTACT,
  GET_MANAGER_LIST,
  DELETE_MANAGER,
  ADD_NEW_MANAGER,
  UPDATE_MANAGER,
  ADD_NEW_HEIR,
  GET_HEIR_INFO,
  UPDATE_HEIR_INFO,
  GET_ARTIST_SONGS,
  CREATE_ARTIST_SONG,
  GET_ARTIST_SONG_DETAIL,
  UPDATE_ARTIST_SONG,
  DELETE_ARTIST_SONG,
} from '../../shared/constants/ActionTypes';
import Api from '../../@crema/services/auth/jwt-auth/jwt-api';
import {appIntl} from '../../@crema/utility/helper/Utils';

export const onGetArtistList = (search, page, per_page) => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get('/artists', {
      params: {search, page, per_page},
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_ARTIST_LIST, payload: response.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: 'Something went wrong, Please try again!',
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onGetSelectedArtist = (id) => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get(`/artists/${id}`)
      .then((data) => {
        console.log('onGetSelectedMail: ', data.data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_ARTIST_ITEM, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onAddArtist = (data) => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    data.user.role = 'artist';
    const register =
      data.user.register.letter1 +
      data.user.register.letter2 +
      data.user.register.number;
    const phone = data.user.phone.prefix + ' ' + data.user.phone.number;
    data.user.register_number = register;
    data.user.phone = phone;
    delete data.user.register;
    Api.post('/artists', {...data})
      .then((response) => {
        if (response.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: ADD_NEW_ARTIST, payload: response.data});
          if (response.data.status === 'success') {
            dispatch({
              type: SHOW_MESSAGE,
              payload: messages['message.contactCreated'],
            });
          }
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onNullifyArtist = () => {
  return {
    type: NULLIFY_ARTIST,
  };
};

export const onDeleteArtists = (type, name, artistIds, page) => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.post('/api/artistApp/delete/artist', {type, name, artistIds, page})
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: DELETE_ARTIST, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['message.artistDeleted'],
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onUpdateStarredStatusForArtist = (
  artistIds,
  status,
  folderName,
) => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.put('/emergency', {artistIds, status})
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({
            type: UPDATE_ARTIST_STARRED_STATUS,
            payload: {data: data.data, folderName: folderName},
          });
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['message.starredStatus'],
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onGetFolderListForArtist = () => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get('/api/artistApp/folders/list')
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_ARTIST_FOLDER_LIST, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onUpdateSelectedArtist = (artist, id) => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    const register =
      artist.user.register.letter1 +
      artist.user.register.letter2 +
      artist.user.register.number;
    const phone = artist.user.phone.prefix + ' ' + artist.user.phone.number;
    artist.user.register_number = register;
    artist.user.phone = phone;
    delete artist.user.register;
    Api.put(`/artists/${id}`, {...artist})
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_ARTIST_DETAIL, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['message.artistUpdated'],
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onUpdateArtistLabel = (artistIds, type, labelName) => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.put('/api/artistApp/update/label', {artistIds, type})
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({
            type: UPDATE_ARTIST_LABEL,
            payload: {data: data.data, labelName: labelName, labelType: type},
          });
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['message.labelUpdated'],
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onUpdateSelectedEmergencyContact = (contact) => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.put(`/emergency/${contact.id}`, {...contact})
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_ARTIST_CONTACT_DETAIL, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['message.contactUpdated'],
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onCreateContact = (contact) => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.post('/emergency', {...contact})
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: CREATE_NEW_ARTIST_CONTACT, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['message.contactCreated'],
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onGetContactList = () => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get('/emergency')
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_ARTIST_CONTACT_LIST, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onDeleteContact = (contactId) => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.delete('/emergency/' + contactId)
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: DELETE_ARTIST_CONTACT, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['message.contactDeleted'],
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onGetManagerList = () => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get('/managers')
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_MANAGER_LIST, payload: data.data});
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onDeleteManager = (managerId) => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.delete('/managers/' + managerId)
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: DELETE_MANAGER, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['message.contactDeleted'],
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onCreateManager = (manager) => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.post('/managers', {...manager})
      .then((data) => {
        console.log('data', data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: ADD_NEW_MANAGER, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['message.contactCreated'],
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onUpdateSelectedManager = (manager) => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.put(`/managers/${manager.id}`, {...manager})
      .then((data) => {
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_MANAGER, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['message.contactUpdated'],
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onCreateHeir = (heir) => {
  const {messages} = appIntl();
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.post('/heirs', {...heir})
      .then((data) => {
        console.log('data', data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: ADD_NEW_HEIR, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['message.contactCreated'],
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        console.log('error', error);
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onGetArtistHeir = () => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get('/heirs')
      .then((data) => {
        console.log('data', data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: GET_HEIR_INFO, payload: data.data.data});
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const onUpdateHeir = (heir) => {
  const {messages} = appIntl();

  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.put(`/heirs/${heir.id}`, {...heir})
      .then((data) => {
        console.log('data', data);
        if (data.status === 200) {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_HEIR_INFO, payload: data.data});
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['message.contactUpdated'],
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const getAllSongList = () => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get(`/songs`)
      .then((response) => {
        if (response.status === 200 && response.data.status === 'success') {
          dispatch({type: GET_ARTIST_SONGS, payload: response.data.result});
          dispatch({type: FETCH_SUCCESS});
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const AddSong = (payload) => {
  const {messages} = appIntl();

  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.post(`/songs`, {...payload})
      .then((response) => {
        if (response.status === 200 && response.data.status === 'success') {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: CREATE_ARTIST_SONG, payload: response.data.result});
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['common.savingSuccess'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const getSongDetail = (id) => {
  return (dispatch) => {
    dispatch({type: FETCH_START});
    Api.get(`/songs/${id}`)
      .then((response) => {
        if (response.status === 200 && response.data.status === 'success') {
          dispatch({type: FETCH_SUCCESS});
          dispatch({
            type: GET_ARTIST_SONG_DETAIL,
            payload: response.data.result,
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const updateSong = (payload) => {
  const {messages} = appIntl();

  return (dispatch) => {
    Api.put(`/songs/${payload.id}`, {...payload})
      .then((response) => {
        if (response.status === 200 && response.data.status === 'success') {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: UPDATE_ARTIST_SONG, payload: response.data.result});
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['common.updateSuccess'],
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};

export const deleteSong = (id) => {
  const {messages} = appIntl();

  return (dispatch) => {
    Api.delete(`/songs/${id}`)
      .then((response) => {
        if (response.status === 200 && response.data.status === 'success') {
          dispatch({type: FETCH_SUCCESS});
          dispatch({type: DELETE_ARTIST_SONG, payload: response.data.result});
          dispatch({
            type: SHOW_MESSAGE,
            payload: messages['common.updateSuccess'],
          });
        } else {
          dispatch({
            type: FETCH_ERROR,
            payload: messages['message.somethingWentWrong'],
          });
        }
      })
      .catch((error) => {
        dispatch({type: FETCH_ERROR, payload: error.message});
      });
  };
};
