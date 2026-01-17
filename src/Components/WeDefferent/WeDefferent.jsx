'use client'
import React from 'react';
import Title from '../Title';
import DescriptionText from '../DescriptionText';
import { FiAward } from "react-icons/fi";
import { Award, Package, Users, Zap } from 'lucide-react';

const WeDefferent = () => {

    const reasons = [
        {
            icon: Award,
            title: 'Quality Assurance',
            description: 'Every product is hand-picked and verified for quality standards',
        },
        {
            icon: Users,
            title: 'Customer First',
            description: 'We prioritize your satisfaction above everything else',
        },
        {
            icon: Zap,
            title: 'Best Prices',
            description: 'Competitive pricing with regular discounts and exclusive offers',
        },
        {
            icon: Package,
            title: 'Fast & Reliable',
            description: 'Quick shipping with real-time tracking and support',
        },
    ];

    /* const stats = [
      {
        number: '100K+',
        label: 'Happy Customers',
        icon: Heart,
        color: 'from-red-500 to-pink-500',
      },
      {
        number: '5000+',
        label: 'Quality Products',
        icon: Package,
        color: 'from-blue-500 to-cyan-500',
      },
      {
        number: '500+',
        label: 'Expert Team',
        icon: Users,
        color: 'from-purple-500 to-pink-500',
      },
      {
        number: '99.8%',
        label: 'Satisfaction',
        icon: TrendingUp,
        color: 'from-green-500 to-emerald-500',
      },
    ]; */


    return (
        <div className='mt-40'>
            <div className='text-center space-y-3'>
                <Title>Why We're Different</Title>
                <DescriptionText>Discover what sets ShopHub apart from the competition and why thousands of customers trust us</DescriptionText>
            </div>

            <div className='mt-10'>
                <h2 className='text-2xl font-bold mb-5'>Our Strengths</h2>

                <div className='space-y-5'>
                    {
                        reasons.map((res, index) =>
                            <div key={index}>
                                {/* reasion card */}
                                <div className=' shadow border border-gray-300 rounded-2xl p-5 flex items-center  gap-5 '>
                                    <div className='reasion-icon bg-gradient-to-br from-blue-900/20 to-amber-500/20 dark:from-blue-500/20 dark:to-amber-500/20 p-2'>
                                        < res.icon size={28} />
                                    </div>

                                    <div>
                                        <h2 className='text-xl font-bold'>{res.title}</h2>
                                        <p>{res.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    );
}

export default WeDefferent;