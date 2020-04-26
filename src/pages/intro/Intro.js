import React, { useState } from 'react';
import ReactSwipe from 'react-swipe';
import Logo from '../../images/Logo.png';
import Theatre from '../../images/Theatre.png';
import Arrow from '../../components/ui-kit/icons/Arrow';
import ProgressBar from '../../components/ProgressBar';
import './styles.scss';

const Intro = (props) => {
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
            slide = reactSwipeEl.getPos();
          },
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
          </div>
        </div>
      </ReactSwipe>
      {/* <button onClick={() => reactSwipeEl.next()}>Next</button>
      <button onClick={() => reactSwipeEl.prev()}>Previous</button> */}
    </div>
  );
};

export default Intro;
