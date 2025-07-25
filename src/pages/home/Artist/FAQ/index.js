import React, {useState} from 'react';
import AppInfoView from '@crema/core/AppInfoView';
import FaqSideBar from './FaqSideBar';
import FaqList from './FaqList';
import {moscap} from '../../../../@crema/services/db/extraPages/faqList/moscap';
import {artists} from '../../../../@crema/services/db/extraPages/faqList/artists';
import {musicUsers} from '../../../../@crema/services/db/extraPages/faqList/musicUsers';
import {copyright} from '../../../../@crema/services/db/extraPages/faqList/copyright';
import {supportFaq} from '../../../../@crema/services/db/extraPages/faqList/support';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import AppRowContainer from '../../../../@crema/core/AppRowContainer';
import {Col, Space} from 'antd';
import './index.style.less';
import AppAnimateGroup from '../../../../@crema/core/AppAnimateGroup';

const FAQ = () => {
  const [dataValue, setDataValue] = useState(moscap);
  const [selectionId, setSelectionId] = useState(101);

  const onGetFaqData = (value) => {
    setSelectionId(value);
    switch (value) {
      case 101:
        setDataValue(moscap);
        break;

      case 102:
        setDataValue(artists);
        break;

      case 103:
        setDataValue(musicUsers);
        break;

      case 104:
        setDataValue(copyright);
        break;

      case 105:
        setDataValue(supportFaq);
        break;
      default: {
        break;
      }
    }
  };

  return (
    <AppAnimateGroup type='bottom'>
      <div className='faq-section' key='a'>
        <div className='faq-header'>
          <p>
            Бид гишүүдийнхээ хөгжмийн уран бүтээлийн үнэ цэнийг дээдэлж,
            зохиогчдод үр шимээ хүртэх бололцоог олгохын тулд хөгжмийн бүтээлийг
            өдөр тутамдаа бизнестээ ашиглахтай зэрэгцэн хөгжихөд нь тусладаг.
          </p>
        </div>
        <Space align='center'>
          <h2>
            <IntlMessages id='faq.heading' />
          </h2>
        </Space>
        <AppRowContainer type='bottom'>
          <Col xs={24} md={8} lg={6} key='a'>
            <FaqSideBar onGetFaqData={onGetFaqData} selectionId={selectionId} />
          </Col>

          <Col xs={24} md={16} lg={18} key='b'>
            <FaqList faqList={dataValue} />
            <AppInfoView />
          </Col>
        </AppRowContainer>
      </div>
    </AppAnimateGroup>
  );
};

export default FAQ;
