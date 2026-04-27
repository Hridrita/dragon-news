import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoLogoGoogle } from 'react-icons/io';

const RightsideBar = () => {
    return (
        <div>
            <h2 className='font-bold text-lg mb-6 bg-slate-100 p-3'>Login With</h2>
            <div className='flex flex-col gap-2'>
                <button className='btn border-blue-500 text-blue-500'> <IoLogoGoogle />Login With Goggle</button>
            <button className='btn'><FaGithub />Login With GitHub</button>
            </div>
            
        </div>
    );
};

export default RightsideBar;