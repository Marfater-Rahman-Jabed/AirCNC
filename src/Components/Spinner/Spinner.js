import React from 'react';

const Spinner = () => {
    return (
        <div className='flex justify-center items-center h-full my-56'>
            <p className='text-7xl font-thin'>L</p>
            <p className='w-10 h-10 border-8 rounded-full animate-spin border-dashed mt-6 border-green-400'> </p>
            <p className='text-7xl font-thin'>ading</p>
            <p className='border-4 mt-10 border-green-700 border-dotted  animate-pulse mx-1'></p>
            <p className='border-4 mt-10 border-green-700 border-dotted  animate-pulse mx-1'></p>
            <p className='border-4 mt-10 border-green-700 border-dotted  animate-pulse mx-1'></p>
            <p className='border-4 mt-10 border-green-700 border-dotted  animate-pulse mx-1'></p>

        </div>
    );
};

export default Spinner;