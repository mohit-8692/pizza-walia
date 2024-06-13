import React, { useState } from 'react';
import Image from 'next/image';

// const priceOptions = ['regular', 'medium', 'large'];

function Card(props) {
  const data = props.foodData;
  const priceOptions = Object.keys(data.price);

  const [qty,setQty] = useState(priceOptions[0]); 
  return (
    <div className="box">
      <div className="w-80 rounded-lg bg-white overflow-hidden dark:bg-black border-gradient">
        <div className="relative w-full h-80">
          <Image
            src={data.img} // Specify a valid image path
            layout="fill"
            objectFit="cover"
            alt="pizza"
          />
        </div>

        <div className="p-4">
          <div className="font-bold mb-2 text-xl uppercase">{data.name}</div>
          <p className="text-gray-700 dark:text-gray-400 text-base">
            {data.description}
          </p>
        </div>
        <div className="flex px-4 justify-between">
          <select
            className="h-100 p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300 border border-black dark:border-gray-400 bg-gray-700 rounded"
            onChange={handleQty}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>

          <select className="h-100 p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300 border border-black dark:border-gray-400 bg-gray-700 rounded">
            {priceOptions.map((option) => {
              return (
                <option className="uppercase" key={option} value={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>

        <div className='flex p-4 font-bold justify-between'>
            <button className="border font-bold  rounded mr-2 p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700 hover:text-gray-400">Add to cart</button>
            <p className='p-2 text-xl'>₹ 79/-</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
