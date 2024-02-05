import React from 'react';
import {SelectType, countries} from "./data";

const SelectCountry = () => {
    return (
        <div className="flex w-full flex-wrap items-end h-full">
            <select 
                name="country" 
                id="country" 
                className='bg-transparent border border-none active:border-none focus:border-none outline-none focus:outline-none active:outline-none h-10 px-2'
            >
                {
                    countries.map((country: SelectType, index: number) => {
                        return (
                            <option 
                                key={index}
                                value={country.value}
                                className='text-gray-700 text-sm'
                            >
                                {country.label}
                            </option>
                        );
                    })
                }
            </select>
        </div>
    )
}

export default SelectCountry;