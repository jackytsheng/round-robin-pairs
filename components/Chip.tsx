import React from 'react';

type ChipProps = {
  name: string;
};

const Chip = ({ name }: ChipProps) => (
  <span className='text-center rounded-lg dark:bg-gray-700  dark:text-white bg-blue-100 py-1 px-3 text-blue-400 '>
    {name}
  </span>
);
export default Chip;
