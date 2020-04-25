import React from 'react';

const Gradient = () => {
  return (
    <defs>
      <linearGradient
        id='a'
        x2='149.16'
        y1='74.58'
        y2='74.58'
        gradientUnits='userSpaceOnUse'
      >
        <stop offset='.01' stopColor='#401665' />
        <stop offset='.41' stopColor='#700070' />
        <stop offset='.49' stopColor='#790070' />
        <stop offset='.62' stopColor='#900171' />
        <stop offset='.68' stopColor='#9f0171' />
        <stop offset='.73' stopColor='#a70b77' />
        <stop offset='.82' stopColor='#be2489' />
        <stop offset='.92' stopColor='#e24ea5' />
        <stop offset='1' stopColor='#ff70bc' />
      </linearGradient>
    </defs>
  );
};

export default Gradient;
