import React, { useState } from 'react';
import Creator from '../../components/ui-kit/icons/Creator';
import User from '../../components/ui-kit/icons/User';
import Organization from '../../components/ui-kit/icons/Organization';
import { useSpring, animated } from 'react-spring';
import './styles.scss';

const Selector = () => {
  const [roll, setRoll] = useState({});
  const [animateProps, setAnimateProps] = useSpring(() => ({
    opacity: 0,
    left: 0,
  }));

  const clickHandle = (e) => {
    const text = e.target.textContent;
    const position = {
      x: e.target.offsetLeft,
      y: e.target.offsetTop,
    };
    console.dir(e.target.offsetTop);
    const value = e.target.value;
    setRoll({ text, position, value });
    setAnimateProps({ opacity: 1, left: position.x, top: position.y - 4 });
  };

  return (
    <div className='content'>
      <div className='icons'>
        <Creator value={roll.value} />
        <User value={roll.value} />
        <Organization value={roll.value} />
      </div>
      <div className='buttons'>
        <div className='im'>Я: </div>
        <animated.div className='activeRoll' style={animateProps}>
          {roll.text}
        </animated.div>
        <div>
          <button
            className='buttonArtist'
            value='artist'
            onClick={(e) => clickHandle(e)}
          >
            Митець
          </button>
          <button
            value='user'
            className='buttonUser'
            onClick={(e) => clickHandle(e)}
          >
            Поціновувач
          </button>
          <button
            value='institution'
            className='buttonInstitution'
            onClick={(e) => clickHandle(e)}
          >
            Установа
          </button>
        </div>
      </div>
      <div className='text'>
        Театр, музей, галерея та будь яка інша культурна установа на відстані
        одного свайпу від відвідувача
      </div>
    </div>
  );
};

export default Selector;
