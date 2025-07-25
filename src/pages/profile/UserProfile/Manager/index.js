import React from 'react';
import AppsContainer from '@crema/core/AppsContainer';
import ManagerList from './ManagerList/index';

const Manager = () => {
  return (
    <AppsContainer fullView title={'Менежерийн мэдээлэл'}>
      <ManagerList />
    </AppsContainer>
  );
};

export default Manager;
