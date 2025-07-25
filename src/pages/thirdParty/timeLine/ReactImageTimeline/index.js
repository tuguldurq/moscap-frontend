import {Button, Col, Row} from 'antd';
import React, {useState} from 'react';
import Timeline from 'react-image-timeline';
import './index.style.less';

const events = [
  {
    date: new Date(2014, 4, 21),
    text: 'Монголын зохиолч, хөгжмийн зохиолч, нийтлэгчдийн нийгэмлэг /МОSCAP/-ийн Бүх гишүүдийн ээлжит чуулган Улаанбаатар хотноо Багшийн сургуулийн Урлаг танхимд болж тус нийгэмлэгийн Гүйцэтгэх захирал М. Энхцэцэгийн тайлан илтгэл, зохион байгуулалтын асуудал хэлэлцэв.',
    title: '/МОSCAP/-ийн Бүх гишүүдийн ээлжит чуулган',
    buttonText: 'Read More',
    imageUrl: '',
  },
  {
    date: new Date(2014, 4, 22),
    text: 'Монголын зохиолч, хөгжмийн зохиолч, нийтлэгчдийн нийгэмлэг /MOSCAP/-ийн Удирдах зөвлөлийн анхдугаар хурал болж тус нийгэмлэгийн гүйцэтгэх удирдлагын тухай хэлэлцэв. Хурлаас “Гүйцэтгэх захирлыг томилох тухай” 01 тоот тогтоол гаргаж тус нийгэмлэгийн Гүйцэтгэх захирлаар Үржингийн Хүрэлбаатарыг томилов. Ажил хүлээлцүүлэх комиссыг Хяналтын зөвлөлийн дарга Д. Чулуунаар ахлуулан байгуулжээ.',
    title: '/MOSCAP/-ийн Удирдах зөвлөлийн анхдугаар хурал ',
    buttonText: 'Read More',
    imageUrl: '',
  },
  {
    date: new Date(2014, 4, 28),
    text: 'Монгол Улсын Хөдөлмөрийн баатар, төрийн шагналт хөгжмийн зохиолч Д. Лувсаншарав тэнгэрт хальсан тул MOSCAP-ийн Удирдах зөвлөлийн дарга Б. Бямбабаяр, Гүйцэтгэх захирал Ү. Хүрэлбаатар нар нийгэмлэгийн нэрийн өмнөөс гүн эмгэнэл илэрхийлэв.',
    title:
      'Монгол Улсын Хөдөлмөрийн баатар, төрийн шагналт хөгжмийн зохиолч Д. Лувсаншарав гуайд гүн эмгэнэл илэрхийлэв.',
    buttonText: 'Read More',
    // imageUrl: 'https://via.placeholder.com/900x600',
  },
  {
    date: new Date(2018, 5, 8),
    text: 'Монголын зохиолч, хөгжмийн зохиолч, нийтлэгчдийн нийгэмлэг /MOSCAP/-ийн шинээр сонгогдсон удирдлага санхүүгийн баримт материалуудыг хүлээн авав. Үүгээр санхүүгийн үйл ажиллагаа эхэллээ. ',
    title: 'Санхүүгийн үйл ажиллагаа эхлэв. ',
    buttonText: 'Read More',
    // imageUrl: 'https://via.placeholder.com/800x600',
  },
];
const IMAGES_PER_PAGE = 2;

const ReactImageTimeline = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const renderEvents = () => {
    const startIndex = currentPage * IMAGES_PER_PAGE;
    const endIndex = startIndex + IMAGES_PER_PAGE;
    return <Timeline events={events.slice(0, endIndex)} />;
  };
  return (
    <div className='timeline-image'>
      {renderEvents()}
      <Row justify={'center'}>
        <Col span={6}>
          {currentPage < events.length / 2 && (
            <Button
              style={{width: '100%'}}
              onClick={() => setCurrentPage(currentPage + IMAGES_PER_PAGE)}>
              Цааш үзэх
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
};
export default ReactImageTimeline;
