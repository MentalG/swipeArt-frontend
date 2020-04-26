import React from 'react';
import Selector from '../Selector'
import './styles.scss';

const Header = () => {
  return <div className='header'>Реєстрація/Вхід</div>;
};

const Footer = () => {
  return (
    <div className='footer'>
      <button className='registrationButton'>Зареєструватися</button>
      <button className='signInButton'>Увійти</button>
    </div>
  );
};

const PickSide = (props) => {
  return (
    <div className='wrapper'>
      <Header />
      <Selector />
      <Footer />
    </div>
  );
};

export default PickSide;
