import React from 'react';
import Introduction from './Introduction';
import {aboutUsData} from '../../../@crema/services/db/extraPages/aboutUs';
import Sections from './Sections';
import AppRowContainer from '../../../@crema/core/AppRowContainer';
import {Col, Divider} from 'antd';
import AppPageMetadata from '../../../@crema/core/AppPageMetadata';
import {useIntl} from 'react-intl';
import Title from 'antd/lib/typography/Title';

const AboutUs = () => {
  const {messages} = useIntl();
  const brandingData = aboutUsData.find((about) => about.alias === 'cisac');
  const nug = aboutUsData.find((about) => about.alias === 'nug');
  const oug = aboutUsData.find((about) => about.alias === 'oug');

  return (
    <AppRowContainer type='bottom'>
      <AppPageMetadata title='About us' />
      <Col xs={24} md={24} key='a'>
        <Introduction />
      </Col>
      <Col>
        <Divider orientation='center' style={{marginTop: 50, marginBottom: 40}}>
          <Title>{messages['about.supportCompany']}</Title>
        </Divider>
        <AppRowContainer>
          <Col xs={24} lg={8} key='b'>
            <Sections data={brandingData} />
          </Col>

          <Col xs={24} lg={8} key='d'>
            <Sections data={oug} />
          </Col>

          <Col xs={24} lg={8} key='c'>
            <Sections data={nug} />
          </Col>
        </AppRowContainer>
      </Col>
    </AppRowContainer>
  );
};

export default AboutUs;
