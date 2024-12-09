import Image from "next/image";
import React from "react";
import { FiArrowUpLeft } from "react-icons/fi";
import { IoReload } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { GoTag } from "react-icons/go";
const SuggestionsProducts = () => {
  const suggestions = [
    "fourchettes",
    "fourchette grande",
    "fourchette Piranha",
    "fourchette",
    "Fourchettes",
    "Sport addict",
  ];

  const products = [
    {
      name: "Produit Simple",
      price: "7€",
      category: "ART DE LA TABLE",
      image:
        "https://res.cloudinary.com/dj0eulqd8/image/upload/v1733678733/table-bg_ysfj6z.png",
    },
    {
      name: "Produit Gamme",
      price: "2,20€ ",
      category: "ART DE LA TABLE",
      image:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ-myhS6q4g2LPsqF7DM74POjYjmt0S3Z-3e9xpjzhRyvRKwOvo",
    },
    {
      name: "Jewel Grand Couteau",
      price: "7€",
      category: "ART DE LA TABLE",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOqSGCV-h6HzEXcyTxQk0mERWjib8HgXi3iPn52yPjL-xXZ_b",
    },
    {
      name: "Piranha Fourchette à Zakouski",
      price: "2,20€ ",
      category: "ART DE LA TABLE",
      image:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ-7CnxNJRXnpmfGIqy4pmrb4ahCy12Wpbm0qLcgCDqYadXiiNj",
    },
  ];

  return (
    <div className="absolute top-16 left-40 w-full max-w-4xl bg-white border rounded-lg p-4 shadow-md">
      <div className="flex ">
        {/* Suggestions */}
        <div className="flex flex-col w-1/3">
          <h3 className="text-lg font-bold mb-4">Suggestions</h3>
          <ul className="flex flex-col gap-5">
            {suggestions.map((item, index) => (
              <li
                key={index}
                className={`flex items-center justify-between pr-2 ${
                  index === 4 ? "font-semibold" : ""
                }`}
              >
                <span className="flex items-center gap-2">
                  {index === 0 && <IoReload />}
                  {index != 0 && index <= 4 && (
                    <CiSearch className=" font-bold text-lg" />
                  )}
                  {index === 5 && <GoTag className=" rotate-90 text-sm" />}
                  <span>{item}</span>
                </span>
                {index <= 3 && <FiArrowUpLeft />}
              </li>
            ))}
          </ul>
        </div>

        {/* Products */}
        <div className="w-3/4 flex flex-col">
          <h3 className="text-lg font-bold mb-4">Produits</h3>
          <div className="flex">
            {products.map((product, index) => (
              <div
                key={index}
                className="w-full max-w-sm flex flex-col items-start gap-1"
              >
                <div className="w-28 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="responsive"
                    width={112}
                    height={112}
                    objectFit="cover"
                  />
                </div>
                <p className="text-[10px] text-[#9C9C9C]">{product.category}</p>
                <p className="text-sm">{product.name}</p>
                <p className="text-base font-bold flex items-center">
                  {product.price}{" "}
                  <span className="text-xs text-[#9C9C9C] font-medium ml-1">
                    / 20 pièces
                  </span>
                </p>
              </div>
            ))}
          </div>
          {/* View All */}
          <div className="text-center mt-4">
            <button className="border w-full font-semibold text-gray-900 p-2 ">
              Voir tous les résultats
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionsProducts;
