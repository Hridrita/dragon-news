import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IoLogoGoogle } from 'react-icons/io';

const RightsideBar = () => {
    return (
        <div>
            <h2>Login With</h2>
            <div className='flex flex-col gap-2 mt-2'>
                <button className='btn'> <IoLogoGoogle />Login With Goggle</button>
            <button className='btn'><FaGithub />Login With GitHub</button>
            </div>
            
        </div>
    );
};

export default RightsideBar;