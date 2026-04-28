import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { IoEye, IoStar } from "react-icons/io5";

const NewsCard = ({ n }) => {
  console.log(n);
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <div className="card-body">
        <div className="flex justify-between items-center bg-slate-100 p-4">
          <div className="flex gap-1 items-center">
            <div>
              <Image
                src={n.author?.img}
                alt={n.author?.img}
                height={40}
                width={40}
                className="rounded-full"
              ></Image>
            </div>
            <div>
              <h2 className="font-semibold">{n.author.name}</h2>
              <p className="text-xs">{n.author.published_date}</p>
            </div>
          </div>

          <div className="flex gap-1 items-center">
            <CiShare2 className="text-xl" />
            <CiBookmark className="text-xl" />
          </div>
        </div>
        <h2 className="card-title font-bold text-2xl">{n.title}</h2>
        <figure>
          <Image
            src={n.image_url}
            alt={n.title}
            width={300}
            height={300}
            className="w-full"
          />
        </figure>

        <p className="line-clamp-4 text-[#706f6f]">{n.details}</p>

        <div>
          <Link href={`/news/${n._id}`}>
            <button className="text-orange-500 font-bold">Read More</button>
          </Link>

          <div className="flex justify-between items-center text-center mt-5">
            <div className="flex gap-3 items-center">
              <div className="flex gap-1 text-orange-400">
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
                <IoStar />
              </div>

              <div>
                <h2>{n.rating.number}</h2>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <div>
                <IoEye />
              </div>

              <div>
                <h2>{n.total_view}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
