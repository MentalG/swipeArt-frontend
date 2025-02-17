import React from 'react';

const Creator = (props) => {
  const { value } = props;
  console.log(value);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 159.05 159.05'
      width='50px'
      height='50px'
    >
      <defs />
      <path
        d='M152.84 73.31a6.22 6.22 0 00-6.21 6.22C146.63 90.74 139 92 135.75 92c-4.65 0-6.88-1.15-10-2.74a30.53 30.53 0 00-15.49-4.09 26.63 26.63 0 00-18.8 7.35 25.93 25.93 0 00-7.6 18.74 26.66 26.66 0 004.6 15.4c1.72 2.84 2.85 4.72 2.85 9.14a12 12 0 01-2.27 7.36c-1.88 2.33-5.09 3.52-9.53 3.52a67.1 67.1 0 1160.86-95.4A6.21 6.21 0 00151.65 46a79.54 79.54 0 10-72.12 113.05c10.44 0 16.2-4.42 19.2-8.13a24.14 24.14 0 005-15.17c0-7.88-2.58-12.14-4.64-15.57-1.7-2.8-2.82-4.66-2.82-9 0-8 5.75-13.67 14-13.67 4.53 0 6.75 1.14 9.8 2.72a30.88 30.88 0 0015.67 4.12 23.69 23.69 0 0015.3-5.45c3.65-3.12 8-9 8-19.4a6.22 6.22 0 00-6.2-6.19zm-118.67-.93a9.32 9.32 0 109.32 9.32 9.33 9.33 0 00-9.32-9.32zm44.74-47.53a9.32 9.32 0 109.31 9.32 9.33 9.33 0 00-9.31-9.32zM52.57 42.49a9.32 9.32 0 100 13.19 9.33 9.33 0 000-13.19zm64.93-2.17a9.32 9.32 0 100 13.18 9.33 9.33 0 000-13.18zm-64 65.54a9.34 9.34 0 00-13.18 0 9.32 9.32 0 1013.18 0z'
        data-name='Creator'
        fill={value === 'artist' ? '#401665' : '#fff'}
      />
    </svg>
  );
};

export default Creator;
