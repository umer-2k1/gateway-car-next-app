import React, { useContext, useEffect } from 'react';
import { themeContext } from '@/context/ThemeContext';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const ThemeIcons = () => {
  const { toggleTheme, mode, theme } = useContext(themeContext);

  useEffect(() => {
    console.log('toggleTheme: ', toggleTheme);
    console.log('mode: ', mode);
    console.log('theme: ', theme);
  });

  return (
    <>
      {mode === 'light' ? (
        <>
          <button
            onClick={toggleTheme}
            className='w-[44px] h-[44px] rounded-full border-2 flex items-center justify-center'
          >
            <BsFillMoonStarsFill style={{ color: theme.iconColor }} className='text-3xl' />
          </button>
          <div
            id='tooltip-dark'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700'
          >
            Tooltip content
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>
        </>
      ) : (
        <>
          <button
            onClick={toggleTheme}
            className='w-[44px] h-[44px] rounded-full border-2 flex items-center justify-center'
          >
            <BsFillSunFill style={{ color: theme.iconColor }} className='text-3xl' />
          </button>
        </>
      )}
    </>
  );
};

export default ThemeIcons;
