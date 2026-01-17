'use client'
import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";

function PopularCard(item) {
    const data = item.item;
    console.log(data)
    return (
        <div className='bg-base-100 shadow  transition-all duration-300 hover:shadow-xl dark:hover:shadow-xl dark:hover:shadow-slate-900/50 hover:-translate-y-2 hover:border-gray-300 dark:hover:border-yellow-600/50'>
            {/* Card Image */}
            <div className='relative'>
                <img src={data.image} alt="" className='h-70 w-full'/>
                <div className='absolute top-2 right-2'>
                    <button className='btn btn-sm bg-secondary font-semibold text-gray-50 border-0 outline-0 text-base'>-{data.discount}%</button>
                </div>
            </div>
            {/* card body */}
            <div className='p-6 space-y-4'>
                <h2 className='text-xl font-bold'>{data.name}</h2>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-1 text-amber-400'>
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <TiStarFullOutline />
                        <p>({data.rating})</p>
                    </span>
                    
                </div>

                <p className='text-gray-900 font-bold'>${data.price} <s className='text-gray-500 font-normal'>{data.originalPrice}</s></p>

                <div className='flex justify-center'>
                    <button className='btn bg-primary text-gray-50'>View Details</button>
                </div>
            </div>
        </div>
    );
}

export default PopularCard;