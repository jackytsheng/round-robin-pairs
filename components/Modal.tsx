import React from 'react';
import { MenuItem } from './Nav';
import Svg, { Icon } from './Svg';

type ModalProps = {
  item: MenuItem;
  setShow: (m: MenuItem) => void;
};
const Modal = ({ item, setShow }: ModalProps) => {
  return item !== MenuItem.None ? (
    <div
      id='popup-modal'
      tabIndex={-1}
      className='flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-screen bg-slate-500/30 dark:bg-slate-900/80 h-screen'
    >
      <div className='relative p-4 w-full max-w-md h-full md:h-auto'>
        <div className='relative backdrop-blur-xl bg-white/50 dark:backdrop-blur-sm rounded-lg shadow dark:bg-gray-700/40'>
          <button
            type='button'
            onClick={() => setShow(MenuItem.None)}
            className='absolute top-3 right-2.5 text-gray-400 hover:text-blue-400 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-white'
            data-modal-toggle='popup-modal'
          >
            <Svg icon={Icon.Close} />
            <span className='sr-only'>Close model</span>
          </button>
          <div className='p-6 text-center pt-14'>
            <h3 className='mb-5 text-lg font-normal text-gray-500 dark:text-gray-400'>
              Creating a new pairs will override you current pairs. Are you sure
              you want to do this?
            </h3>
            <button
              data-modal-toggle='popup-modal'
              type='button'
              className='text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'
            >
              Yes, I'm sure
            </button>
            <button
              data-modal-toggle='popup-modal'
              type='button'
              className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
            >
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};
export default Modal;
