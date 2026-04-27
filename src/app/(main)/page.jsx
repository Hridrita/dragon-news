// import LeftsideBar from "@/components/homepage/LeftsideBar";
// import RightsideBar from "@/components/homepage/RightsideBar";

import { redirect } from "next/navigation";

// async function getCategories() {
//   const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
//   const data = await res.json();
//   return data;
// }

// async function getNewsByCategoryId(category_id) {
//   const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`);
//   const data = await res.json();
//   return data.data;
// }

const default_category_id = "01"


export default async function Home() {
  redirect(`/category/${default_category_id}`)




  //  const categories = await getCategories();
  // console.log(categories.news_category);


  // const news = await getNewsByCategoryId("01");
  // console.log(news);

  // return (
  //   <div className="grid grid-cols-12 gap-4 container mx-auto my-15">

  //       <div className=" col-span-3">
  //         <LeftsideBar categories={categories} activeId={"01"}></LeftsideBar>
  //       </div>

  //       <div className="font-bold col-span-6 ">
  //         <h2 className="font-bold text-lg bg-slate-100 p-3 mb-6">All News</h2>
          
  //         <div className="space-y-4">

  //           {
  //           news.map(n => {
  //             return <div key={n._id} className="p-6 rounded-md border">
  //               {n.title}
  //             </div>
  //           })
  //         }

  //         </div>
          
  //       </div>

  //       <div className="col-span-3">
  //         <RightsideBar></RightsideBar>
  //       </div>
  //   </div>
   
  // );
}
