import React from 'react';
import Svg, { Icon } from './Svg';

type ButtonType = {
  icon: Icon;
  text: string;
};

{
  /* <div className="w-9 h-5 relative bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 dark:peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400"></div>; */
}

const Button = ({ icon, text }: ButtonType) => {
  return (
    <button
      type='button'
      className='gap-2 text-blue-400 bg-blue-100 hover:bg-blue-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-100 font-medium rounded-lg text-sm pl-1 pr-2 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-blue-100 dark:bg-gray-700  dark:text-white dark:hover:bg-gray-400 dark:hover:text-gray-700'
    >
      <Svg icon={icon} />
      {text}
    </button>
  );
};
export default Button;
