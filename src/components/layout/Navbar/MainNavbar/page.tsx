import { cn } from "@/lib/utils";
import { integralCF } from "@/styles/fonts";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import InputGroup from "@/components/ui/input-group";
import ResTopNavbar from "./OtherTopNavbar";  // Importing ResTopNavbar
import CartBtn from "./ButtonCard";
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

// Mock data for `NavMenu` (replace with actual data or fetch from an API)
const navMenuData = [
  { id: 1, label: 'Home', url: '/' },
  { id: 2, label: 'Shop', url: '/shop' },
  { id: 3, label: 'On Sale', url: '/shop' },
  { id: 4, label: 'New Arrivals', url: '/shop' },
  { id: 5, label: 'Brands', url: '/shop' }
];

const MainNavbar = () => {
  return (
    <nav className="sticky top-0 bg-white z-20">
      <div className="flex relative max-w-frame mx-auto items-center justify-between md:justify-start py-5 md:py-6 px-4 xl:px-0">
        <div className="flex items-center">
          <div className="block md:hidden mr-4">
            {/* Passing data prop to ResTopNavbar */}
            <ResTopNavbar data={navMenuData} />
          </div>
          <Link
            href="/"
            className={cn([
              integralCF.className,
              "text-2xl lg:text-[32px] mb-2 mr-3 lg:mr-10",
            ])}
          >
            SHOP.CO
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center ml-10 space-x-6 whitespace-nowrap">
          <Link
            href="/shop"
            className="text-black text-sm relative group"
          >
            Shop
            <MdOutlineKeyboardArrowDown className="ml-2 inline" />
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link
            href="/shop"
            className="text-gray-700 text-sm relative group"
          >
            On Sale
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link
            href="/shop"
            className="text-gray-700 text-sm relative group"
          >
            New Arrivals
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
          <Link
            href="/shop"
            className="text-gray-700 text-sm relative group"
          >
            Brands
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
          </Link>
        </div>

        {/* Search Bar and Icons */}
        <div className="flex items-center ml-auto space-x-4">
          <InputGroup className="hidden md:flex bg-[#F0F0F0] w-[580px]">
            <InputGroup.Text>
              <Image
                priority
                src="/icons/search.svg"
                height={20}
                width={20}
                alt="search"
                className="min-w-5 min-h-5"
              />
            </InputGroup.Text>
            <InputGroup.Input
              type="search"
              name="search"
              placeholder="Search for products..."
              className="bg-transparent placeholder:text-black/40"
            />
          </InputGroup>

          {/* Icons (Cart and User) */}
          <Link href="/search" className="block md:hidden mr-[14px] p-1">
            <Image
              priority
              src="/icons/search-black.svg"
              height={100}
              width={100}
              alt="search"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
          <CartBtn />
          <Link href="/auth" className="p-1">
            <Image
              priority
              src="/icons/user.svg"
              height={100}
              width={100}
              alt="user"
              className="max-w-[22px] max-h-[22px]"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;