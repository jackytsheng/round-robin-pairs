import React from 'react';
import Toggle from './Toggle';

type NavProps = {
  onToggle: (bool: boolean) => void;
  isChecked: boolean;
};
const Nav = ({ onToggle, isChecked }: NavProps) => (
  <nav className='fixed justify-between top-0 left-0 right-0 px-4 py-3 flex items-center font-semibold text-sm text-slate-900 dark:text-slate-200 bg-slate-50/90 dark:bg-slate-700/90 backdrop-blur-sm ring-1 ring-slate-900/10 dark:ring-black/10'>
    <span>Generator</span>
    <Toggle onToggle={onToggle} isChecked={isChecked} />
  </nav>
);

export default Nav;
