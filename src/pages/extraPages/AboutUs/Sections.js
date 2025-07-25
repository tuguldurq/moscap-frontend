import React from 'react';
import IntlMessages from '../../../@crema/utility/IntlMessages';
import PropTypes from 'prop-types';
import {Button, Card} from 'antd';
import './index.style.less';
import Title from 'antd/lib/typography/Title';
import {Link} from 'react-router-dom';

const Sections = ({data}) => {
  return (
    <Card
      className='about-section-card'
      style={{padding: 20}}
      cover={<img src={data.image} style={{maxHeight: 223}} />}>
      <Title level={3}>{data.title}</Title>

      <p>{data.content}</p>

      {data.url !== null && (
        <Link target={'_blank'} to={data.url}>
          <Button className='btn-white read-btn'>
            <IntlMessages id='dashboard.readMore' />
          </Button>
        </Link>
      )}
    </Card>
  );
};

export default Sections;

Sections.propTypes = {
  data: PropTypes.object.isRequired,
};
