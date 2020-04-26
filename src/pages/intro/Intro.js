import React, { useState } from 'react';
import ReactSwipe from 'react-swipe';
import Logo from '../../images/Logo.png';
import Theatre from '../../images/Theatre.png';
import Artist from '../../images/Artist.png';
import Singer from '../../images/Singer.png';
import Guitar from '../../images/Guitar.png';
import Arrow from '../../components/ui-kit/icons/Arrow';
import { useHistory } from "react-router-dom";
import ProgressBar from '../../components/ProgressBar';

import './styles.scss';

const Intro = (props) => {
  const history = useHistory();
  let slide = 0;
  let reactSwipeEl;

  return (
    <div>
      <ReactSwipe
        className='Intro'
        swipeOptions={{
          continuous: false,
          stopPropagation: true,
          transitionEnd: () => {
            // slide = reactSwipeEl.getPos();
            // if(slide > 4) return history.push('/someRoute')
          },
          callback: () => {
            slide = reactSwipeEl.getPos();
            if(slide > 4) return history.push('/registration/roll')
          }
        }}
        ref={(el) => (reactSwipeEl = el)}
      >
        <div>
          <div className='welcomeWrapper'>
            <div className='logoWrappeer'>
              <img src={Logo} alt='Logo' width='275px' height='50px' />
            </div>
            <div className='SwipetoArt'>
              <div className='SwipetoArtText'>Свайпай у напрямку мистецтва</div>
              <Arrow />
            </div>
          </div>
        </div>
        <div>
          <div className='theaterWrapper'>
            <img
              className='theaterImg'
              src={Theatre}
              alt='Theatre'
              width='255px'
              height='255px'
            />
            <div className='theaterText'>
              Swipe –<br />і твій театр в он-лайні!
            </div>
            {/* <ProgressBar slide={slide} /> */}
            <div className='progressBarWrapper'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
            <button className='TeaterSwipe'>Посвайпали</button>
          </div>
        </div>
        {/* ARTIST */}
        <div>
          <div className='artistWrapper'>
            <img
              className='artistImg'
              src={Artist}
              alt='Theatre'
              width='255px'
              height='255px'
            />
            <div className='artistText'>
              Swipe – і ти продаєш
              <br />
              свою першу картину!
            </div>
            <div className='progressBarWrapper'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
            <button className='artistSwipe'>Посвайпали</button>
          </div>
        </div>
        {/* ARTIST */}
        {/* Singer */}
        <div>
          <div className='singerWrapper'>
            <img
              className='singerImg'
              src={Singer}
              alt='Theatre'
              width='255px'
              height='255px'
            />
            <div className='singerText'>
              Swipe –
              <br />і ти вже навчаєш співу!
            </div>
            <div className='progressBarWrapper'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
            <button className='singerSwipe'>Посвайпали</button>
          </div>
        </div>
        {/* Singer */}
        {/* guitar */}
        <div>
          <div className='guitarWrapper'>
            <img
              className='guitarImg'
              src={Guitar}
              alt='guitar'
              width='255px'
              height='255px'
            />
            <div className='guitarText'>
              Swipe –
              <br />і ти вже навчаєш співу!
            </div>
            <div className='progressBarWrapper'>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
              <div className='dot'></div>
            </div>
            <button className='guitarSwipe'>Посвайпали</button>
          </div>
        </div>
        {/* guitar */}
        <div className='redirect'>
        </div>
      </ReactSwipe>
      {/* <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button> */}
    </div>
  );
};

export default Intro;
