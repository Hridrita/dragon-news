import Image from "next/image";
import Link from "next/link";
import React from "react";
import userAvatar from "../../assets/user.png";

const NavBar = () => {
  return (
    <div className=" container mx-auto flex justify-between gap-4 mt-6">
        <div></div>
      <ul className="flex justify-between items-center gap-3">
        <li className="text-[#706f6f]">
          <Link href={"/"}>Home</Link>
        </li>

        <li className="text-[#706f6f]">
          <Link href={"/about"}>About</Link>
        </li>

        <li className="text-[#706f6f]">
          <Link href={"/career"}>Career</Link>
        </li>
      </ul>

      <div className="flex items-center gap-2">
        <Image
          src={userAvatar}
          alt="User Avatar"
          width={60}
          height={60}
        ></Image>
        <button className="btn bg-[#403f3f] text-white w-full">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
