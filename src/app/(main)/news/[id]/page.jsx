import { getNewsByDetailsById } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import { IoEye, IoStar } from 'react-icons/io5';

export const generateMetaData = async({params}) =>{
    const {id} = await params;
    const news = await getNewsByDetailsById(id);

    return{
        title: news.title,
        description: news.details
    };


};

const NewsDetailsPage = async({params}) => {
    const {id} = await params;
    console.log(id);

    const news = await getNewsByDetailsById(id);
    console.log(news);

    return (
        <div className='container max-w-2xl mx-auto my-8'>
            <div className="card bg-base-100 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between items-center bg-slate-100 p-4">
          <div className="flex gap-1 items-center">
            <div>
              <Image
                src={news?.author?.img}
                alt={news?.author?.img}
                height={40}
                width={40}
                className="rounded-full"
              ></Image>
            </div>
            <div>
              <h2 className="font-semibold">{news.author.name}</h2>
              <p className="text-xs">{news.author.published_date}</p>
            </div>
          </div>

          <div className="flex gap-1 items-center">
            <CiShare2 className="text-xl" />
            <CiBookmark className="text-xl" />
          </div>
        </div>
        <h2 className="card-title font-bold text-2xl">{news.title}</h2>
        <figure>
          <Image
            src={news.image_url}
            alt={news.title}
            width={300}
            height={300}
            className='w-full'
            
          />
        </figure>

        <p className=" text-[#706f6f]">{news.details}</p>

        <div>
          <div className='flex flex-col gap-4'>
            <Link href={"/"}>
            <button className="text-orange-500 font-bold">Back to Home</button>
          </Link>

          <Link href={`/category/${news.category_id}`}>
            <button className="btn bg-purple-500 text-white font-bold flex">See Other News for This Category <BsArrowUpRight></BsArrowUpRight></button>
          </Link>
          </div>

          <div className="flex justify-between items-center text-center mt-5">
            <div className="flex gap-3 items-center">
              <div className="flex gap-1 text-orange-400">
                <IoStar className="text-lg" />
                <IoStar className="text-lg" />
                <IoStar className="text-lg" />
                <IoStar className="text-lg" />
                <IoStar className="text-lg"  />
              </div>

              <div>
                <h2>{news.rating.number}</h2>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div>
                <IoEye className="text-lg" />
              </div>

              <div>
                <h2>{news.total_view}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default NewsDetailsPage;