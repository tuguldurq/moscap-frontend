export const name = (artist) => {
  if (artist) {
    const {first_name, last_name} = artist?.user;
    return `${last_name?.charAt(0)?.toUpperCase()}.${
      first_name?.charAt(0)?.toUpperCase() + first_name?.slice(1)
    }`;
  }
  return null;
};
export const profileName = (user) => {
  if (user) {
    const {first_name, last_name} = user;
    return `${first_name?.charAt(0)?.toUpperCase()}.${
      last_name?.charAt(0)?.toUpperCase() + last_name?.slice(1)
    }`;
  }
  return null;
};
export const heirName = (heir) => {
  const {first_name, last_name} = heir;
  if (first_name || last_name) {
    return `${last_name?.charAt(0)?.toUpperCase()}.${
      first_name?.charAt(0)?.toUpperCase() + first_name?.slice(1)
    }`;
  }
  return null;
};

export const artistProfileType = (user) => {
  const {type} = user;
  return type === 'C' ? 'Хөгжийн зохиолч' : 'Яруу найрагч';
};

export const artistType = (user) => {
  const {type} = user?.artist;
  return type === 'C' ? 'Хөгжийн зохиолч' : 'Яруу найрагч';
};

export const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
