import React from 'react';

const LoadingPage = () => {
    return (
        <div className='flex h-[80vh] items-center justify-center'>
            <h2>Loading</h2>
            <span className="loading loading-spinner text-error"></span>
        </div>
    );
};

export default LoadingPage;