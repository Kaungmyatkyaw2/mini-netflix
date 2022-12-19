import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsFillBellFill, BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <header className={`bg-blur duration-300 shadow`}>
      <div className="flex space-x-[40px] items-center">
        <Image
          alt="logo"
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />
        <ul className="md:flex hidden items-center space-x-[25px]">
          <li className="nav-link">Home</li>
          <li className="nav-link">TV Show</li>
          <li className="nav-link">Movies</li>
          <li className="nav-link">News & Popular</li>
          <li className="nav-link">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-[25px] text-sm font-medium">
        <BsSearch className="text-[16px] cursor-pointer" />
        <p className="text-sm sm:inline hidden cursor-pointer">Kid</p>
        <BsFillBellFill className="text-[18px] cursor-pointer" />
        <Link href="/profile">
          <Image
            src="https://robohash.org/facilisdignissimosdolore.png"
            className="rounded-full cursor-pointer h-[30px]"
            alt="image"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
