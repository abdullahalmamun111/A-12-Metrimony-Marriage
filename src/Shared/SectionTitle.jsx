import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeProvider';

const SectionTitle = ({title, subtitle}) => {
      const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className='mx-auto text-center md:w-7/12 my-8'>
            <p className='text-yellow-500 text-xl mb-2'>---- {subtitle} ----</p>
            {/* <h1 className='text-4xl border-y-4 py-4 uppercase'>{title}</h1> */}
            <h1 className={`${theme === "dark" ? "text-gray-300": "text-gray-900"} text-4xl border-y-4 py-4 uppercase`}>{title}</h1>
        </div>
    );
};

export default SectionTitle;