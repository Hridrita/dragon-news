import LeftsideBar from "@/components/homepage/LeftsideBar";
import RightsideBar from "@/components/homepage/RightsideBar";


async function getCategories() {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories');
  const data = await res.json();
  return data;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category);
  return (
    <div className="grid grid-cols-12 gap-4 container mx-auto my-15">

        <div className=" col-span-3">
          <LeftsideBar categories={categories} activeId={null}></LeftsideBar>
        </div>

        <div className="font-bold text-3xl bg-purple-100 col-span-6">
          all news
        </div>

        <div className="col-span-3">
          <RightsideBar></RightsideBar>
        </div>
    </div>
   
  );
}
