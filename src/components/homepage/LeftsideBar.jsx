import Link from 'next/link';
import React from 'react';

const LeftsideBar = ({categories, activeId}) => {
    return (
        <div>
            <h2 className="font-bold text-lg bg-slate-100 p-3">All categories</h2>
          

          <ul className="flex flex-col gap-3 mt-6">
            {
            categories.data.news_category?.map(category => {
              return <li key={category.category_id} href={'/'} className= {`${activeId === category.category_id && "bg-red-100 text-red-600"} rounded-md font-bold text-center text-md text-[#9f9f9f]`} >
                
                <Link href={`/category/${category.category_id}`} className='block p-2'>{category.category_name}</Link>
                </li>
            })
          }
          </ul>
        </div>
    );
};

export default LeftsideBar;