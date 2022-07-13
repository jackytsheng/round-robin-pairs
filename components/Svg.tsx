import React from 'react';

type SvgProps = {
  icon: Icon;
};

const sun = (
  <svg
    className='w-6 h-6'
    fill='none'
    stroke='currentColor'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z'
    />
  </svg>
);

const moon = (
  <svg
    className='w-6 h-6'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z' />
  </svg>
);
const leftChervon = (
  <svg
    className='w-6 h-6'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
      clipRule='evenodd'
    />
  </svg>
);
const download = (
  <svg
    className='w-5 h-5'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      d='M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z'
      clipRule='evenodd'
    />
  </svg>
);
const info = (
  <svg
    className='w-4 h-4'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
      clipRule='evenodd'
    />
  </svg>
);
const external = (
  <svg
    className='w-4 h-4'
    fill='currentColor'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z' />
    <path d='M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z' />
  </svg>
);

export enum Icon {
  Sun,
  Moon,
  LeftChervon,
  Download,
  Info,
  External,
}
const Svg = ({ icon }: SvgProps) => {
  let iconToBeRendered;
  switch (icon) {
    case Icon.Moon:
      iconToBeRendered = moon;
      break;
    case Icon.Sun:
      iconToBeRendered = sun;
      break;
    case Icon.LeftChervon:
      iconToBeRendered = leftChervon;
      break;
    case Icon.Download:
      iconToBeRendered = download;
      break;
    case Icon.Info:
      iconToBeRendered = info;
      break;
    case Icon.External:
      iconToBeRendered = external;
      break;

    default:
      iconToBeRendered = sun;
  }

  return iconToBeRendered;
};

export default Svg;
