import React from "react";
import { FaTshirt, FaInfoCircle, FaMapMarkerAlt, FaWeightHanging, FaRecycle, FaTag, FaUserAlt, FaPaintBrush } from 'react-icons/fa';

export type SpecItem = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

const specsData: SpecItem[] = [
  {
    label: "Fabric Type",
    value: "Soft-touch Polyester Blend",
    icon: <FaTshirt className="text-xl text-indigo-600" />,
  },
  {
    label: "Wash Instructions",
    value: "Hand wash cold, lay flat to dry",
    icon: <FaInfoCircle className="text-xl text-green-600" />,
  },
  {
    label: "Design",
    value: "Premium Embroidered Logo",
    icon: <FaTag className="text-xl text-yellow-600" />,
  },
  {
    label: "Color Options",
    value: "Black, White, Navy Blue",
    icon: <FaPaintBrush className="text-xl text-purple-600" />,  // Replaced FaPalette with FaPaintBrush
  },
  {
    label: "Weight",
    value: "200g",
    icon: <FaWeightHanging className="text-xl text-red-600" />,
  },
  {
    label: "Size Guide",
    value: "Available in S, M, L, XL, XXL",
    icon: <FaUserAlt className="text-xl text-blue-600" />,
  },
  {
    label: "Packaging",
    value: "Eco-friendly Recycled Paper Packaging",
    icon: <FaRecycle className="text-xl text-teal-600" />,
  },
  {
    label: "Origin",
    value: "Made in Italy",
    icon: <FaMapMarkerAlt className="text-xl text-orange-600" />,
  },
];

const ProductDetails = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl space-y-8">
      <h2 className="text-4xl font-semibold text-gray-900 text-center mb-8">
        Product Details
      </h2>
      <div className="space-y-6">
        {specsData.map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center py-5 px-7 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            {/* Icon with Label */}
            <div className="flex items-center space-x-3">
              <div className="text-2xl">{item.icon}</div>
              <p className="text-lg text-gray-700 font-medium">{item.label}</p>
            </div>

            {/* Value */}
            <p className="text-lg text-gray-900 font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      {/* Product Details Footer */}
      <div className="border-t pt-6 text-center">
        <p className="text-sm text-gray-500">
          All product details are carefully crafted to give you the best shopping experience. Enjoy shopping with us!
        </p>
      </div>
    </section>
  );
};

export default ProductDetails;