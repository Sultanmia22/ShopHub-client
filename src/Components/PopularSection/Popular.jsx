
import React from 'react';
import Title from '../Title';
import DescriptionText from '../DescriptionText';
import PopularCard from './PopularCard';

const itemPromise = async () => {
    const res = await fetch('https://shop-hub-server-eight.vercel.app/get/items')
    const data = await res.json()
    return data
}

const Popular = async (props) => {

    const items = await itemPromise()


    return (
        <div className='my-16 mt-20 py-20 md:py-32 px-4 md:px-6 bg-gradient-to-r from-white via-gray-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300'>
            <div className='text-center space-y-3'>
                <Title> Featured Products </Title>
                <DescriptionText> Discover our most popular and best-selling products loved by thousands of customers</DescriptionText>
            </div>

            <div className="card-section mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {
                    items.map(item => <PopularCard key={item._id} item={item} />)
                }

            </div>
        </div>
    );
}

export default Popular;