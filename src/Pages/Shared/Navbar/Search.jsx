import React from 'react';
import { LiaSearchSolid } from 'react-icons/lia'

const Search = () => {
    return (
        <>
            <div className=' w-full md:w-auto py-2  transition cursor-pointer'>
                  <div className='text-sm  text-gray-600 flex justify-center  items-center gap-4 '> 
                            <LiaSearchSolid size={25} className='mt-2 md:ml-0 text-white  ml-20 ' />
                        
                        <p className=' sm:block md:ms-0 ms-20 text-xl text-[#FC5F45] z-10'>Sign in</p>
                    </div>
            </div>
        </>
    );
};

export default Search;