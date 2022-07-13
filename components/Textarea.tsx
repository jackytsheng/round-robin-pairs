import React from 'react';

type TextareaProps = {
  setValues: (val: string[]) => void;
  defaultValue: string;
};

const Textarea = ({ setValues, defaultValue }: TextareaProps) => {
  return (
    <section>
      <label
        htmlFor='names'
        className='block mb-2 text-sm font-medium dark:text-gray-400'
      >
        Enter Names for Pairing
      </label>
      <textarea
        onChange={({ target }) => {
          setValues(target.value.split('\n').filter((r) => r.trim()));
        }}
        defaultValue={defaultValue}
        id='names'
        rows={10}
        maxLength={300}
        className='block p-2.5 w-full text-sm focus:outline-none  bg-slate-50/90  rounded-lg border border-gray-300 focus-visible:border-blue-300 dark:focus-visible:border-blue-300 focus:ring-blue-300 focus:border-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-300 dark:focus:border-blue-300'
        placeholder='Enter names here'
      ></textarea>
    </section>
  );
};
export default Textarea;
