import React from 'react';

const Organization = props => {
  const { value } = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 149.16 149.16' width='64px'>
      <defs />
      <path
        fill={value === 'institution' ? '#401665' : '#fff'}
        d='M123.82 0H25.35a25.35 25.35 0 100 50.69 25 25 0 008.47-1.46v99.93h12.64L65 135.79 89.68 128l25.66-32.11V49.23a25.1 25.1 0 008.48 1.46 25.35 25.35 0 000-50.69zM45.47 135.5V40.73A25.07 25.07 0 0047.85 37h9.25v90.12zm34.94-16.82l-11.65 3.69V37h11.65zm11.65-12.36V37h9.25a25.91 25.91 0 002.38 3.73v51zM123.82 39a13.71 13.71 0 01-13.7-13.69H39a13.7 13.7 0 11-13.69-13.7h98.47a13.7 13.7 0 010 27.39z'
        data-name='Organization'
      />
    </svg>
  );
};

export default Organization;
