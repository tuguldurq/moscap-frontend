import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {onUpdateSelectedArtist} from '../../../../redux/actions/Artist';
import PropTypes from 'prop-types';
import ArtistActions from './ArtistActions';
import PersonalDetails from './PersonalDetails';
import {Col, Modal, Button, Row} from 'antd';
import AppScrollbar from '../../../../@crema/core/AppScrollbar';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import SocialMedia from './SocialMedia';
import HeirInfo from './HeirInfo';
// import OtherDetails from './OtherDetails';
import './index.style.less';

const ArtistDetail = (props) => {
  const {
    isShowDetail,
    selectedArtist,
    onShowDetail,
    onSelectArtistsForDelete,
    onOpenEditArtist,
  } = props;
  const dispatch = useDispatch();

  const [artist, setArtist] = useState(selectedArtist);

  useEffect(() => {
    setArtist(selectedArtist);
  }, [selectedArtist]);

  const onChangeStarred = (checked) => {
    const updatedArtist = artist;
    artist.isStarred = checked;
    setArtist(updatedArtist);
    dispatch(onUpdateSelectedArtist(artist));
  };

  const onDeleteArtist = () => {
    onSelectArtistsForDelete([artist.id]);
    onShowDetail(false);
  };

  const onArtistDetailClose = () => {
    onShowDetail(false);
  };

  return (
    <>
      <Modal
        open={isShowDetail}
        onOk={isShowDetail}
        width={1000}
        footer={false}
        onCancel={() => onShowDetail(false)}
        className='artist-detail-modal'>
        <div className='artist-detail-modal-header'>
          <div className='artist-detail-modal-user'>
            {/* {artist.image ? (
              <Avatar
                className='artist-detail-modal-user-avatar'
                src={artist.image}
              />
            ) : (
              <Avatar className='artist-detail-modal-user-avatar'>
                {artist.first_name[0].toUpperCase()}
              </Avatar>
            )} */}
            <h2 style={{marginBottom: 0}}> Уран бүтээлчийн мэдээлэл </h2>
          </div>
          <ArtistActions
            onChangeStarred={onChangeStarred}
            onDeleteArtist={onDeleteArtist}
            onOpenEditArtist={onOpenEditArtist}
            artist={artist}
          />
        </div>

        <AppScrollbar className='artist-detail-modal-scrollbar'>
          <div className='artist-detail-modal-content'>
            <Row gutter={[20, 45]}>
              <Col item xs={12} md={12}>
                <PersonalDetails artist={artist} />
              </Col>
              <Col item xs={12} md={12}>
                <SocialMedia artist={artist} />
              </Col>
              {artist?.user?.heir && (
                <Col item xs={24} md={24}>
                  <HeirInfo artist={artist} />
                </Col>
              )}
              {/* <Col item xs={24} md={24}>
                <OtherDetails artist={artist} />
              </Col> */}
            </Row>
          </div>

          <div className='artist-form-footer'>
            <Button
              type='primary'
              ghost
              className='artist-form-btn'
              onClick={onArtistDetailClose}>
              <IntlMessages id='common.cancel' />
            </Button>
          </div>
        </AppScrollbar>
      </Modal>
    </>
  );
};

export default ArtistDetail;

ArtistDetail.propTypes = {
  isShowDetail: PropTypes.bool.isRequired,
  onShowDetail: PropTypes.func.isRequired,
  selectedArtist: PropTypes.object.isRequired,
  onSelectArtistsForDelete: PropTypes.func,
  onOpenEditArtist: PropTypes.func,
};
