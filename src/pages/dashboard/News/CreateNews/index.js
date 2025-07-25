import React, {useState} from 'react';
import {Button, Form, Input, Modal, Upload} from 'antd';
import {PlusOutlined} from '@ant-design/icons';
import {useIntl} from 'react-intl';
import AppCard from '@crema/core/AppCard';
import getBase64 from 'util/getBase64';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import Classic from '@ckeditor/ckeditor5-build-classic';
import {useDispatch} from 'react-redux';
import {createNews} from 'redux/actions/News';

const CreateNews = () => {
  const [content, setContent] = useState();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const {messages} = useIntl();

  const onFinish = (values) => {
    const files = [];
    fileList?.forEach(
      (x) => x.status === 'done' && files.push({path: x.response}),
    );
    const data = {
      title: values.title,
      description: content,
      images: files,
    };
    dispatch(createNews(data));
  };

  const handleChange = ({fileList: newFileList}) => {
    setFileList(newFileList);
  };

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewVisible(true);
    setPreviewImage(file.url || file.preview);
    setPreviewTitle(
      file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
    );
  };
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{marginTop: 8}}>Upload</div>
    </div>
  );
  return (
    <AppCard>
      <Form form={form} layout='vertical' onFinish={onFinish}>
        <Form.Item label={messages['common.title']} name='title' required>
          <Input size='large' type='text' />
        </Form.Item>
        <Form.Item label={messages['common.image']} name='images'>
          <Upload
            action={`${process.env.REACT_APP_API_URL}/upload`}
            listType='picture-card'
            fileList={fileList}
            onPreview={handlePreview}
            onChange={handleChange}>
            {uploadButton}
          </Upload>
          <Modal
            open={previewVisible}
            title={previewTitle}
            footer={null}
            onCancel={() => setPreviewVisible(false)}>
            <img alt='example' style={{width: '100%'}} src={previewImage} />
          </Modal>
        </Form.Item>
        <Form.Item
          label={messages['common.description']}
          name='description'
          required>
          <CKEditor
            editor={Classic}
            data={content}
            onChange={(event, editor) => setContent(editor.getData())}
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            {messages['common.news.post']}
          </Button>
        </Form.Item>
      </Form>
    </AppCard>
  );
};

export default CreateNews;
