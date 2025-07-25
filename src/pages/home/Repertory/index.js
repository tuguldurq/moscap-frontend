import {Col, Row, Select, Layout, Input, Button, Divider, Form} from 'antd';
import Header from '../Components/Header/dark';
import {SearchOutlined} from '@ant-design/icons';
import IntlMessages from '@crema/utility/IntlMessages';
import {useIntl} from 'react-intl';
import SongItem from './SongItem';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {songSearch} from 'redux/actions/Song';
import {useEffect, useState} from 'react';

const {Content} = Layout;

const Repertory = () => {
  const [page, setPage] = useState(0);
  const [per_page, setPageSize] = useState(10);
  const [search, setSearch] = useState();
  const {messages} = useIntl();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const songList = useSelector(({song}) => song.songList);
  const {loading} = useSelector(({common}) => common);

  // useEffect(() => {
  //   dispatch(getSongList());
  // }, [dispatch]);
  const onHandleSearch = (values) => {
    setSearch(values);
    dispatch(songSearch(values));
  };
  useEffect(() => {
    console.log(search);
    if (search) {
      dispatch(songSearch(search, page, per_page));
    }
  }, [page, per_page]);
  const onChangePaginate = (page, pageSize) => {
    console.log(page, pageSize);
    setPage(page);
    setPageSize(pageSize);
  };
  return (
    <Layout>
      <Header />
      <Content style={{marginTop: 120}} className='container'>
        <center>
          <h1>УРАН БҮТЭЭЛИЙН ХАЙЛТ</h1>
        </center>
        <Form form={form} onFinish={onHandleSearch}>
          <Row
            gutter={40}
            justify={'center'}
            style={{marginRight: 0, marginLeft: 0, marginTop: 40}}>
            <Col xs={24} sm={8} md={5}>
              <Form.Item name={'type'} initialValue={1}>
                <Select style={{width: '100%'}}>
                  <Select.Option value={1}>Бүтээлийн нэрээр</Select.Option>
                  {/* <Select.Option value={2}>Зохиогчийн нэрээр</Select.Option> */}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={10}>
              <Form.Item name={'query'}>
                <Input
                  size='large'
                  placeholder={messages['common.searchHere.placeholder']}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={4} md={4}>
              <Button type='primary' htmlType='submit' style={{width: '100%'}}>
                <SearchOutlined color='#6a6a6a' style={{marginRight: 10}} />
                <IntlMessages id='common.searchHere' />
              </Button>
            </Col>
          </Row>
        </Form>
        <Divider></Divider>
        <Row style={{marginRight: 0, marginLeft: 0}}>
          <SongItem
            list={songList}
            onChangePagination={onChangePaginate}
            loading={loading}
          />
        </Row>
      </Content>
    </Layout>
  );
};

export default Repertory;
