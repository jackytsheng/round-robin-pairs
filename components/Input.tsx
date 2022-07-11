import React from 'react';

type InputProps = {
  label?: string;
};

const Input = ({ label }: InputProps) => (
  <div>
    <label
      htmlFor='title'
      className='block mb-2 text-sm font-medium dark:text-gray-400'
    >
      Enter Pair Title
    </label>
    <input
      id='title'
      maxLength={20}
      className='block p-2.5 w-full text-sm focus:outline-none  bg-slate-50/90  rounded-lg border border-gray-300 focus-visible:border-blue-300 dark:focus-visible:border-blue-300 focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300'
      placeholder='Enter title here'
    ></input>
  </div>
);
export default Input;
