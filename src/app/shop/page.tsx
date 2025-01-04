'use client';
import React from "react";
import BreadcrumbShop from "@/components/shop-page/filters/BreadcrumbShop";
import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import Filters from "@/components/shop-page/filters";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { newArrivalsData, relatedProductData, topSellingData } from "../page";
import ProductCard from "@/components/CardProductItem/CardItem";
import { useState } from "react";

export default function ShopPage() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(true);

  // Combine the product data
  const combinedProductData = [
    ...relatedProductData.slice(1, 4),
    ...newArrivalsData.slice(1, 4),
    ...topSellingData.slice(1, 4),
  ];

  // Check if there is valid data to map
  const hasProducts = combinedProductData.length > 0;

  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <BreadcrumbShop />
        <div className="flex md:space-x-5 items-start">
          <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filters</span>
              <button
                className="text-2xl text-black/40"
                onClick={() => setIsFiltersOpen(!isFiltersOpen)}
              >
                {isFiltersOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
            </div>
            {isFiltersOpen && <Filters />}
          </div>
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl md:text-[32px]">Casual</h1>
                <MobileFilters />
              </div>
              <div className="flex flex-col sm:items-center sm:flex-row">
                <span className="text-sm md:text-base text-black/60 mr-3">
                  Showing 1-10 of 100 Products
                </span>
                <div className="flex items-center">
                  Sort by:
                  <button className="font-medium text-sm px-3 py-1.5 sm:text-base w-fit text-black bg-transparent border border-black/10 rounded-md">
                    Most Popular
                  </button>
                  <button className="font-medium text-sm px-3 py-1.5 sm:text-base w-fit text-black bg-transparent border border-black/10 rounded-md ml-2">
                    Low Price
                  </button>
                  <button className="font-medium text-sm px-3 py-1.5 sm:text-base w-fit text-black bg-transparent border border-black/10 rounded-md ml-2">
                    High Price
                  </button>
                </div>
              </div>
            </div>
            {/* Check if there are any products to display */}
            {hasProducts ? (
              <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                {combinedProductData.map((product) => (
                  <ProductCard key={product.id} data={product} />
                ))}
              </div>
            ) : (
              <p>No products available.</p>  // Show message if no products
            )}
            <hr className="border-t-black/10" />
          </div>
        </div>
      </div>
    </main>
  );
}