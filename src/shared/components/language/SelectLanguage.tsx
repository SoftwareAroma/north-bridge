'use client';
import React from 'react';
import { languages } from "./data";

const SelectLanguage = () => {
  return (
    <div className="flex flex-row w-full flex-wrap items-end md:flex-nowrap md:mb-0 gap-4">
      <select name="language" id="language" className='bg-transparent border border-none active:border-none focus:border-none outline-none focus:outline-none active:outline-none h-10 px-2'>
        {
          languages.map((lang, index: number) => {
            return (
              <option
                key={index}
                value={lang.value}
                className='text-gray-700 text-sm h-full w-full'
              >
                {lang.label}
              </option>
            );
          })
        }
      </select>
    </div>
  );
}

export default SelectLanguage;