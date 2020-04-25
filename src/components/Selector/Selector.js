import React, { useState } from 'react';
import Creator from '../ui-kit/icons/Creator';
import User from '../ui-kit/icons/User';
import Organization from '../ui-kit/icons/Organization';
import './styles.scss';

const Selector = () => {
  const [roll, setRoll] = useState('');

  const clickHandle = (e) => {
    // const value = e.target.textContent;
    const value = e.target.offsetWidth;
    console.dir(value);
    setRoll(value);
  };

  return (
    <div className='content'>
      <div className='icons'>
        <Creator />
        <User />
        <Organization />
      </div>
      <div className='buttons'>
        <div style={{ marginRight: '30px' }}>Я: </div>
        {/* <div className='activeRoll'>{roll}</div> */}
        <button
          className='buttonArtist'
          onClick={(e) => clickHandle(e)}
        >
          Митець
        </button>
        <button onClick={(e) => clickHandle(e)}>
          Поціновувач
        </button>
        <button
          className='buttonInstitution'
          onClick={(e) => clickHandle(e)}
        >
          Установа
        </button>
      </div>
      <div className='text'>
        Театр, музей, галерея та будь яка інша культурна установа на відстані
        одного свайпу від відвідувача
      </div>
    </div>
  );
};

export default Selector;
