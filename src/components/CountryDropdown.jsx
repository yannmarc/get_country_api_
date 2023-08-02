"use client"

import React, { Fragment, useState } from 'react';

import { BsCaretDown } from 'react-icons/bs';
import styles from '@/components/styles.module.css';
import clsx from 'clsx';

const CountryDropdown = ({region, setRegion, regionsArr}) => {
    const [active, setActive] = useState(false);

    const handleSetActive = () => {
        setActive((prevState) => !prevState);
    }

    const dropdownClasses = clsx({
        [styles.dropdown]: active,
        "hidden": active === false
    })

    return (
        <Fragment>
            <div className="filter relative w-[300px] gap-x-12 shadow items-center py-4 px-8 bg-white flex justify-between">
                <span className="inline-block font-semibold">{region === "" ? "Filter by region" : region}</span>
                <BsCaretDown className="cursor-pointer" onClick={handleSetActive}/>

                <ul className={dropdownClasses}>
                    {regionsArr.map((region, index) => (
                        <li onClick={() => setRegion(region)} className="font-semibold hover:bg-gray-50 transition-all py-3 cursor-pointer px-8" key={index} value={region.toLowerCase()}>{region}</li>
                    ))}
                </ul>
            </div>
           
        </Fragment>
    )
}

export default CountryDropdown