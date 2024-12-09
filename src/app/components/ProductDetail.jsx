"use client";
import React, { useState } from "react";
import Image from "next/image";
import machine from "../../../public/assets/machine.png";
import table from "../../../public/assets/table.png";
import plus from "../../../public/assets/plus.png";
import frame from "../../../public/assets/Frame.png";
import vector from "../../../public/assets/Vector.png";
import heart from "../../../public/assets/Heart-big.png";

function ProductDetail() {
  const [quantity, setQuantity] = useState(1);
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const decreaseQuantity = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="w-full flex flex-col gap-5 p-4 sm:p-6 lg:px-8 lg:py-5 mt-40">
      {/* Breadcrumb */}
      <div className="w-full">
        <ul className="flex items-center gap-5 text-sm">
          <li className="font-medium text-gray-700">Home</li>
          <li className="list-disc text-[#9C9C9C] font-medium">
            ART DE LA TABLE
          </li>
        </ul>
      </div>

      {/* Product Main Section */}
      <div className="w-full flex flex-col lg:flex-row gap-6">
        {/* Product Images */}
        <div className="w-full lg:w-1/2 bg-[#F8F6F4] p-6 sm:p-12 lg:p-24 relative rounded-md flex justify-center items-center">
          <Image
            priority
            src={machine}
            alt="machine"
            className="max-w-full h-auto object-contain"
          />

          {/* Thumbnail Images */}
          <div className="absolute top-3 left-3 hidden sm:flex flex-col gap-2">
            {[table, table, table, table].map((img, index) => (
              <div
                key={index}
                className={`p-2 bg-white rounded-md cursor-pointer 
                  ${index === 0 ? "" : "opacity-55"}`}
              >
                <Image
                  src={img}
                  alt={`thumbnail ${index + 1}`}
                  className="w-10 h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 relative">
          <div className="w-full flex flex-col">
            {/* Product Title and Wishlist */}
            <div className="flex justify-between items-center mb-4 lg:mb-0">
              <h1 className="text-2xl sm:text-3xl font-bold flex-grow pr-4">
                Cheese – appareil à raclette 1/2 roue
              </h1>
              <Image
                src={heart}
                alt="heart"
                className="w-[28px] h-[26px] flex-shrink-0"
              />
            </div>

            {/* Price */}
            <h2 className="text-xl sm:text-2xl mb-4">
              39,50€
              <span className="text-sm text-[#9C9C9C] ml-2">/pièce</span>
            </h2>

            {/* Product Specifications */}
            <div className="py-4 border-t border-b my-2">
              <ul className="flex flex-wrap items-center gap-4 sm:gap-8">
                <li className="flex items-center gap-2">
                  <Image
                    src={vector}
                    alt="vector"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <span className="text-gray-900 text-base">
                    20<sup className="text-xs">cm</sup>
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Image
                    src={frame}
                    alt="frame"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <span className="text-gray-900 text-base">
                    50<sup className="text-xs">cm</sup>
                  </span>
                </li>
                <li className="ml-auto text-xs text-[#9C9C9C]">RÉF : VABGN5</li>
              </ul>
            </div>

            {/* Product Description */}
            <div className="text-sm text-[#5D5D5D] font-medium my-4">
              <div>
                Location appareil à raclette - Raclette traditionnelle 1/2 roue
                <br />
                Réglable en hauteur <br />
                Appareil à raclette professionnel <br />
                Boîtier de chauffe horizontal réglable en hauteur <br />
              </div>
              <div className="mt-3">
                220V <br />
                900W
              </div>
            </div>

            {/* Add to Cart Section */}
            <div className="lg:absolute bottom-0 pb-2 pt-4 flex gap-2 w-full border-t items-center">
              <div className="flex w-1/3 items-center p-3 border rounded-md outline-none justify-between">
                <button
                  aria-label="Decrease Quantity"
                  className="text-[#9C9C9C]"
                >
                  -
                </button>
                <span className="font-bold">1</span>
                <button
                  aria-label="Increase Quantity"
                  className="text-[#9C9C9C]"
                >
                  +
                </button>
              </div>
              <div className="w-full flex items-center">
                <button
                  aria-label="Add to Cart"
                  className="w-full border border-[#5CD2DD] bg-[#5CD2DD] text-white p-3 rounded-md font-bold uppercase"
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        {/* Product Long Description */}
        <div className="w-full md:w-1/2">
          <h1 className="text-xl mb-3">Description produit</h1>
          <p className="text-sm text-[#9C9C9C] font-medium">
            Festi vous propose à la location un/une &quot;Jewel – grand
            couteau/10pc&quot; pour votre évenement et ce dès 0,35 € / pièce
            (HTVA). Que ce soit pour votre mariage, une fête d&apos;anniversaire
            ou du personnel, ce produit a fait l&apos;objet d&apos;une sélection
            rigoureuse par notre équipe. Il est en location chez nous sous la
            référence &quot;VAJGC&quot;. Nous sommes à votre disposition pour
            que les événements de nos clients, même en last-minute, soient
            toujours une réussite. Vous pourrez trouver tout une série
            d&apos;autre produit à louer de ce type dans la catégorie &quot;Art
            de la Table&quot;.
          </p>
        </div>

        {/* Expandable Sections */}
        <div className="w-full md:w-1/2">
          <ul className="overflow-hidden rounded-md">
            {["Livraisons", "Questions"].map((section) => (
              <li
                key={section}
                className="font-medium flex items-center justify-between bg-[#FBF9F899] p-4 cursor-pointer"
                onClick={() => toggleSection(section)}
              >
                {section}
                <Image
                  src={plus}
                  alt="plus"
                  className={`w-5 h-5 transform transition-transform 
                    ${activeSection === section ? "rotate-45" : ""}`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
