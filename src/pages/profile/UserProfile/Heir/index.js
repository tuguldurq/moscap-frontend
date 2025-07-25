import {useIntl} from 'react-intl';
import {Empty, Descriptions} from 'antd';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {onCreateHeir, onGetArtistHeir, onUpdateHeir} from 'redux/actions';
import AppsContainer from '@crema/core/AppsContainer';
import ListEmptyResult from '@crema/core/AppList/ListEmptyResult';
import IntlMessages from '@crema/utility/IntlMessages';
import ContactListSkeleton from '@crema/core/AppSkeleton/ContactListSkeleton';
import Header from './Header';
import CreateHeir from './CreateHeir';
import UpdateHeir from './UpdateHeir';

const Heirinfo = () => {
  const loading = useSelector(({common}) => common.loading);

  const {messages} = useIntl();
  const {heir} = useSelector(({artist}) => artist);
  const [updateForm, setUpdateForm] = useState(false);
  const [addHeirModal, setAddHeirModal] = useState(false);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(onGetArtistHeir());
  }, [dispatch]);

  const onSubmitUpdateHeir = (values) => {
    dispatch(onUpdateHeir(values));
    setUpdateForm(false);
  };
  const onSubmitAddHeirModal = (values) => {
    dispatch(onCreateHeir(values));
    setAddHeirModal(false);
  };
  const onOpenCreateHeirModal = () => {
    setAddHeirModal(true);
  };

  const onCloseAddHeirModal = () => {
    setAddHeirModal(false);
  };

  const onOpenUpdateHeirModal = () => {
    setUpdateForm(true);
  };
  const onCloseUpdateHeirModal = () => {
    setUpdateForm(false);
  };

  // const onFinishFailed = (errorInfo) => {
  //   console.log('Failed:', errorInfo);
  // };

  return (
    <>
      <Header
        title={messages['common.heir']}
        isShowUpdateButton={heir !== null}
        onClickUpdateForm={onOpenUpdateHeirModal}
      />
      <AppsContainer fullView>
        <div style={{padding: 24}}>
          {heir !== null ? (
            <Descriptions bordered column={1}>
              <Descriptions.Item label={messages['common.heirFirstName']}>
                {heir.first_name}
              </Descriptions.Item>
              <Descriptions.Item label={messages['common.heirName']}>
                {heir.last_name}
              </Descriptions.Item>
              <Descriptions.Item label={messages['common.heirRegister']}>
                {heir.register_number.letter1}
                {heir.register_number.letter2}
                {heir.register_number.number}
              </Descriptions.Item>
              <Descriptions.Item label={messages['common.heirPhone']}>
                {heir.phone.prefix} {heir.phone.number}
              </Descriptions.Item>
              <Descriptions.Item label={messages['common.heirEmail']}>
                {heir.email}
              </Descriptions.Item>
            </Descriptions>
          ) : (
            <ListEmptyResult
              content={<Empty />}
              loading={loading}
              onClick={onOpenCreateHeirModal}
              actionTitle={<IntlMessages id='contactApp.createContact' />}
              placeholder={<ContactListSkeleton />}
            />
          )}
        </div>
        {addHeirModal ? (
          <CreateHeir
            isOpenAddHeir={addHeirModal}
            closeAddHeirModal={onCloseAddHeirModal}
            onFinish={onSubmitAddHeirModal}
          />
        ) : null}

        {updateForm ? (
          <UpdateHeir
            data={heir}
            isOpenAddHeir={updateForm}
            closeUpdateHeirModal={onCloseUpdateHeirModal}
            onFinish={onSubmitUpdateHeir}
          />
        ) : null}
      </AppsContainer>
    </>
  );
};

export default Heirinfo;
