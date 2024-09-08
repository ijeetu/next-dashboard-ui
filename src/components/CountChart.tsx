"use client";
import React from 'react';
import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    
    {
        total: 'Girls',
        count: 100,
        
        fill: '#ffffff',
    },
    
    {
        name: 'Girls',
        count: 50,
        
        fill: '#FAE27C',
    },
    {
        name: 'Boys',
        count: 50,
        
        fill: '#CEFBFA',
    },

];

const CountChart = () => {
    return (

        <div className='bg-white rounded-xl w-full h-full p-4 '>


            {/* TITTLE */}
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Students</h1>
                <Image src="/moreDark.png" alt="more" width={20} height={20} />
            </div>

            {/* CHART */}
            <div className='w-full h-[75%] relative '>

            <ResponsiveContainer>
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
      
            // label={{ position: 'insideStart', fill: '#fff' }}
            background
            
            dataKey="count"
          />
          {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" /> */}
        </RadialBarChart>
      </ResponsiveContainer>
      <Image src="/maleFemale.png" alt="chart" width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
      </div>

            {/* BOTTOM */}
            <div className='flex justify-center gap-16 '>
                <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-outSky rounded-full' />
                        <h1 className='font-bold'>1,234</h1>
                        <h2 className='text-xs text-gray-300'>Boys (55%)</h2>
                    
                 </div>
                 <div className='flex flex-col gap-1'>
                    <div className='w-5 h-5 bg-outYellow rounded-full' />
                        <h1 className='font-bold'>1,234</h1>
                        <h2 className='text-xs text-gray-300'>Girls (45%)</h2>
                    </div>
                 
            </div>



        </div>

    )
}

export default CountChart