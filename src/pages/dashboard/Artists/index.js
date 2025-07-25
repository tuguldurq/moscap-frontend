import React from 'react';
import ArtistList from './ArtistList';
import AppsContainer from '../../../@crema/core/AppsContainer';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import ArtistItem from './ArtistDetail/ArtistItem';
import {useParams} from 'react-router-dom';
import {useIntl} from 'react-intl';
import './index.style.less';

const Customers = () => {
  const messages = useIntl();
  const {id} = useParams();
  const onGetMainComponent = () => {
    if (id) {
      return <ArtistItem />;
    } else {
      return <ArtistList />;
    }
  };

  return (
    <AppsContainer title={messages['sidebar.ecommerce.customers']} fullView>
      <AppPageMetadata title='Artists' />
      {onGetMainComponent()}
    </AppsContainer>
  );
};

export default Customers;
