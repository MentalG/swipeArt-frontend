import React from 'react';

const Arrow = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 78.48 144.89' width='36px' height='56px'>
      <defs />
      <defs>
        <linearGradient
          id='a'
          x2='78.48'
          y1='72.44'
          y2='72.44'
          gradientUnits='userSpaceOnUse'
        >
          <stop offset='.07' stopColor='#401665' />
          <stop offset='.33' stopColor='#c700a8' />
          <stop offset='.41' stopColor='#ca009f' />
          <stop offset='.52' stopColor='#d30088' />
          <stop offset='.67' stopColor='#e00161' />
          <stop offset='.68' stopColor='#e2015c' />
          <stop offset='.73' stopColor='#e40b63' />
          <stop offset='.8' stopColor='#ea2477' />
          <stop offset='.9' stopColor='#f44f97' />
          <stop offset='1' stopColor='#ff80bc' />
        </linearGradient>
      </defs>
      <path
        fill='url(#a)'
        d='M1.77 1.77a6 6 0 000 8.54l62.14 62.13-62.14 62.14a6 6 0 108.54 8.54l66.4-66.41a6 6 0 000-8.54l-66.4-66.4a6 6 0 00-8.54 0z'
        data-name='Welcoming screen'
      />
    </svg>
  );
};

export default Arrow;
