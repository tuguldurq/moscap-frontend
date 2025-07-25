import {authRole} from '../../../shared/constants/AppEnums';

export const getUserFromAuth0 = (user) => {
  if (user)
    return {
      id: 1,
      uid: user.sub,
      displayName: user.name,
      email: user.email,
      photoURL: user.picture,
      role: authRole.user,
    };
  return user;
};

export const getUserFromFirebase = (user) => {
  if (user)
    return {
      id: 1,
      uid: user.uid,
      displayName: user.displayName ? user.displayName : 'Crema User',
      email: user.email,
      photoURL: user.photoURL ? user.photoURL : '/assets/images/avatar/A11.jpg',
      role: authRole.user,
    };
  return user;
};
export const getUserFromAWS = (user) => {
  if (user)
    return {
      id: 1,
      uid: user.username,
      displayName: user.attributes.name ? user.attributes.name : 'Crema User',
      email: user.attributes.email,
      photoURL: user.photoURL,
      role: authRole.user,
    };
  return user;
};

export const getUserFromJwtAuth = (user) => {
  const displayName = `${user?.first_name.substring(0, 1).toUpperCase()}.${
    user?.last_name
  }`;
  const register = {
    letter1: user?.register_number?.charAt(0),
    letter2: user?.register_number?.charAt(1),
    number: user?.register_number?.substring(2, user?.register_number.length),
  };
  if (user) {
    return {
      uid: user.id,
      displayName: displayName,
      photoURL: user.avatar,
      role: user.role,
      register,
      ...user,
    };
  }

  return user;
};

export const getUserFromBank = (user) => {
  if (user.bank) return user?.bank;
  return user.bank;
};
