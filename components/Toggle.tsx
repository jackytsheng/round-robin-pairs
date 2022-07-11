import React from 'react';
import Image from 'next/image';
import Svg, { Icon } from '../svgs/Svg';

type ToggleProps = {
  onToggle: (bool: boolean) => void;
  isChecked: boolean;
};

const Toggle = ({ onToggle, isChecked }: ToggleProps) => (
  <label
    htmlFor='toggle'
    className='inline-flex relative items-center cursor-pointer'
  >
    <input
      type='checkbox'
      value=''
      defaultChecked={isChecked}
      onChange={(e) => onToggle(e.target.checked)}
      id='toggle'
      className='sr-only peer'
    />
    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-100 dark:peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-400"></div>
    <span className='ml-3 text-sm font-medium text-slate-900 dark:text-slate-200'>
      <Svg icon={Icon.Sun}></Svg>
    </span>
  </label>
);

export default Toggle;
