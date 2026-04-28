import LeftsideBar from '@/components/homepage/LeftsideBar';
import NewsCard from '@/components/homepage/NewsCard';
import RightsideBar from '@/components/homepage/RightsideBar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';



//  async function getCategories() {
//   const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
//   const data = await res.json();
//   return data;
// }

//  async function getNewsByCategoryId(category_id) {
//   const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
//   const data = await res.json();
//   return data.data;
// }         egulu lib folder e rakha hoyeche oraganized rakhar jnno


const NewsCategory = async({params}) => {
    const {id} = await params;
    console.log(id);

    const categories = await getCategories();
  console.log(categories.news_category);


  const news = await getNewsByCategoryId(id);
  console.log(news);


    
    return (
        <div className="grid grid-cols-12 gap-4 container mx-auto my-15">

        <div className=" col-span-3">
          <LeftsideBar categories={categories} activeId={id}></LeftsideBar>
        </div>

        <div className="col-span-6">
            <h2 className='font-bold text-lg bg-slate-100 p-3'>all news</h2>
          
          <div className="space-y-4 mt-6">

            {
                news.length > 0 ?
            news.map(n => {
              return (<NewsCard n={n} key={n._id} >
                
              </NewsCard>
            );
        }) : 
        <h2 className='font-bold text-4xl text-center'>No News Found</h2>} 

          </div>
          
        </div>

        <div className="col-span-3">
          <RightsideBar></RightsideBar>
        </div>
    </div>
    );
};

export default NewsCategory;