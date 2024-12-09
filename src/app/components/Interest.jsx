import React from "react";
import Image from "next/image";
import table from "../../../public/assets/table-bg.png";
import heart from "../../../public/assets/Heart-big.png";

function Interest() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-[#FBF9F899]">
      <div className="max-w-7xl mx-auto">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4 sm:mb-0 text-center sm:text-left w-full sm:w-auto">
            Ces produits pourraient vous intéresser
          </h1>
          <span className=" underline text-[#393939] font-medium text-sm uppercase sm:text-base cursor-pointer hover:opacity-75 text-center w-full sm:w-auto">
            Voir toute la collection
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="w-full">
              <div className="w-full bg-[#F9F7F5] p-6 sm:p-10 lg:p-20 relative rounded-md">
                <Image
                  src={table}
                  alt="table"
                  className="w-full h-auto object-cover"
                  priority={index < 2}
                />
                <Image
                  src={heart}
                  alt="heart"
                  className="absolute top-3 sm:top-5 left-3 sm:left-5 w-6 sm:w-auto"
                />
                <span className="uppercase absolute text-[10px] sm:text-xs font-bold top-3 sm:top-6 p-1 right-2 bg-white rounded-md">
                  art de la table
                </span>
              </div>
              <div className="p-2">
                <div className="w-full flex justify-between items-center">
                  <span className="text-xl sm:text-2xl">Title</span>
                  <span className="text-xl sm:text-2xl font-medium">
                    0<span className="align-super text-xs">€</span>
                  </span>
                </div>
                <div className="w-full flex items-center justify-between flex-wrap sm:flex-nowrap mt-1">
                  <span className="text-xs sm:text-sm text-[#9C9C9C] w-full sm:w-auto">
                    0,35€/Pièce{" "}
                    <span className="text-[10px] sm:text-xs">
                      · RÉF : VABGN5
                    </span>
                  </span>
                  <span className=" truncate bg-[#F1F4F6] px-2 py-1 mt-2 sm:mt-0 text-[#546A7D] text-xs rounded-full font-medium">
                    20 pièces
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Interest;
