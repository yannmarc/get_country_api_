"use client"

import { useState, use, useEffect } from 'react';
import Image from 'next/image';

import { BsSearch } from 'react-icons/bs';

import CountryDropdown from '@/components/CountryDropdown';



export default function Home() {
  const [region, setRegion] =  useState("");
  const [data, setData] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleInputChange = (e) => {
    e.preventDefault()
    setSearchCountry(e.target.value);
  }

  const getAllCountries = () => {

    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => setData(data))  
    
  }

  const fetchBySearch = () => {
    if (searchCountry !== "") {
      fetch(`https://restcountries.com/v3.1/name/${searchCountry}`)
      .then(res => res.json())
      .then(data => setData(data)) 
    }
  }

  const filterCountries = () => {
    if (region !== "") {
      fetch(`https://restcountries.com/v3.1/region/${region.toLowerCase()}`)
      .then(res => res.json())
      .then(data => setData(data))  
    }
  }

  getAllCountries();
  
  useEffect(() => {
    fetchBySearch();
    filterCountries();
  }, [data, setData])

  return (
    <main className="bg-gray-50 w-full h-full px-6 lg:px-16 main-container">
      <div className="filter-search flex justify-between pt-8 pb-24">
          <div className="search rounded-sm flex gap-x-3 font-semibold items-center w-[300px] py-2 px-4 bg-white shadow">
            <BsSearch />
            <input onChange={(e) => handleInputChange(e)} className="bg-transparent w-full focus:outline-none py-1 px-2 text-gray-600" type="text" name="" id="" />
          </div> 
          <CountryDropdown regionsArr={regions} region={region} setRegion={setRegion}/>
      </div>
      <section className="bg-gray-50 w-full grid grid-cols-4 gap-y-8 gap-x-2">
        {
          data.map((item, index) => (
            <article key={index} className="shadow max-w-[280px] max-h-fit hover:shadow-lg shadow-blue-50 transition-all delay-150 ease-in-out cursor-pointer">
            <div className="coutry-img w-[inherit] h-[150px] object-contain bg-purple-500">
                <img className="w-full h-full" src={item.flags.png} alt={item.flags.alt} />
            </div>
            <div className="country-desc bg-white py-6 px-4 mb-8">
                <h4 className='text-xl pb-4 font-bold'>{item.name.official}</h4>
                <div className="flex flex-col gapy-3">
                    <span className="inline-block"><strong className="font-semibold">Population</strong>: {item.population}</span>
                    <span className="inline-block"><strong>Region</strong>: {item.name.official}</span>
                    <span className="inline-block"><strong>Capital</strong>: {item.name.official}</span>
                </div>
            </div>
        </article>
          ))
        }
      </section>
    </main>
  )
}
