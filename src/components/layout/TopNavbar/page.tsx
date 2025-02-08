import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TopNavbar = () => {
  return (
    <div className="bg-black text-white text-center px-4 sm:px-6 xl:px-8"> {/* Reduced height here */}
      <div className="relative mx-auto w-full max-w-[80%]"> {/* Width remains adjusted */}
        <p className="text-sm sm:text-base">
          Sign up and get 20% off your first order.{" "}
          <Link href="#" className="font-medium inline-block mt-1 mb-2 border-b-2 border-white">
            Sign Up Now
          </Link>
        </p>
        <Button
          variant="ghost"
          className="hover:bg-transparent absolute right-0 top-1/2 -translate-y-1/2 w-fit h-fit p-1 hidden sm:flex"
          size="icon"
          type="button"
          aria-label="close banner"
        >
          <Image
            priority
            src="/icons/times.svg"
            height={13}
            width={13}
            alt="close banner"
          />
        </Button>
      </div>
    </div>
  );
};

export default TopNavbar;
