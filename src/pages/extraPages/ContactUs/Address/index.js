import React from 'react';
import {FiMail, FiPhone} from 'react-icons/fi';
import './index.style.less';

const Address = () => {
  return (
    <div className='contact-address'>
      {/* <div className='contact-address-item'>
        <div className='avatar-icon'>
          <HiOutlineLocationMarker />
        </div>
        <p>
          Улаанбаатар хот, Хан-Уул дүүрэг, <br /> Академи хотхон-2, 31-1
        </p>
      </div> */}
      <div className='contact-address-item'>
        <div className='avatar-icon'>
          <FiPhone />
        </div>
        <p>7202 3999</p>
      </div>
      <div className='contact-address-item'>
        <div className='avatar-icon'>
          <FiMail />
        </div>
        <p> info@moscap.mn </p>
      </div>
    </div>
  );
};

export default Address;
