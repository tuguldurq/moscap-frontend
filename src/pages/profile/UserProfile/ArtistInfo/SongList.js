import {Button, Popconfirm, Space, Table} from 'antd';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {deleteSong, getSongDetail, updateSong} from 'redux/actions';
import UpdateSong from './UpdateSong';
import {useDispatch} from 'react-redux';
import {useState} from 'react';

const SongList = ({data}) => {
  const columns = [
    {
      title: '№',
      dataIndex: 'index',
      key: 'index',
      render: (text, record, index) => index + 1,
    },
    {
      title: 'Дууны код',
      dataIndex: 'song_code',
      key: 'song_code',
    },
    {
      title: 'Дууны нэр',
      dataIndex: 'origin_name',
      key: 'origin_name',
    },
    // {
    //   title: 'Яруу найрагч',
    //   dataIndex: 'composer',
    //   key: 'composer',
    // },
    {
      title: 'Хамтлаг дуучин',
      dataIndex: 'performer',
      key: 'performer',
    },
    {
      title: 'Өөрчлөх',
      key: 'action',
      render: (_, record) => (
        <Space size='middle'>
          <Button size='small' onClick={() => onHandleSongDetail(record.id)}>
            Дэлгэрэнгүй
          </Button>
          <Popconfirm
            title='Жагсаалтаас устгах уу?'
            description='Жагсаалтаас устгахдаа итгэлтэй байна уу?'
            onConfirm={() => onHandleDeleteSong(record.id)}
            okText='Тийм'
            cancelText='Үгүй'>
            <Button danger ghost size='small'>
              Устгах
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];
  const dispatch = useDispatch();
  const {songDetail} = useSelector(({artist}) => artist);
  const [isUpdateSong, setIsUpdateSong] = useState(false);
  const [isDeleteSong, setIsDeleteSong] = useState(false);

  const onHandleSongDetail = (id) => {
    dispatch(getSongDetail(id));
    setIsUpdateSong(!isUpdateSong);
  };

  const onHandleDeleteSong = (id) => {
    dispatch(deleteSong(id));
    setIsDeleteSong(!isDeleteSong);
  };

  const onHandleClose = () => {
    setIsUpdateSong(!isUpdateSong);
  };
  const onHandleUpdateSong = (values) => {
    values.id = songDetail.id;
    dispatch(updateSong(values));
    onHandleClose();
  };

  return (
    <>
      <Table columns={columns} dataSource={data}></Table>
      {songDetail !== null ? (
        <UpdateSong
          isUpdateSong={isUpdateSong}
          selectedSong={songDetail}
          onUpdateSong={onHandleUpdateSong}
          handleClose={onHandleClose}
        />
      ) : null}
    </>
  );
};

export default SongList;

SongList.propTypes = {
  data: PropTypes.any,
};
