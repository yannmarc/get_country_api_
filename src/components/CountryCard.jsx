import React, { Fragment } from 'react';
import { Image } from 'next/image';

const CountryCard = ({cName, cPopoulation, cRegion, cCapital, cImg}) => {
  return (
    <Fragment>
        <article className="shadow max-w-[250px]">
            <div className="coutry-img w-[inherit] h-[200px] bg-purple-500">
                <Image src={cImg} fill={true} />
            </div>
            <div className="country-desc bg-white py-6 px-4">
                <h4>{cName}</h4>
                <div className="flex flex-col gapy-3">
                    <span className="inline-block"><strong>Population</strong>: {cPopoulation}</span>
                    <span className="inline-block"><strong>Region</strong>: {cRegion}</span>
                    <span className="inline-block"><strong>Capital</strong>: {cCapital}</span>
                </div>
            </div>
        </article>
    </Fragment>
  )
}

export default CountryCard