"use client";
import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import heart from "../../../public/assets/heart.png";
import bulb from "../../../public/assets/lightbulb.png";
import cart from "../../../public/assets/cart.png";
import search from "../../../public/assets/search.png";
import arrow from "../../../public/assets/arrow-down.png";
import menu from "../../../public/assets/menu.png";
import close from "../../../public/assets/close.png";
import SuggestionsProducts from "./Suggestions";
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [suggestions, setSuggestions] = useState(false);

  const menuCategories = [
    "ART DE LA TABLE",
    "MOBILIER",
    "NAPPAGE",
    "MATÉRIEL DE SALLE",
    "CUISINE",
    "BARBECUE",
    "TENTE",
    "CHAUFFAGE",
    "PODIUM PISTE DE DANSE",
    "SON ET LUMIERE",
    "PACKS",
    "CONSOMMABLES",
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <header className="w-full fixed top-0 left-0 bg-white z-10 shadow-sm">
      <nav className="w-full flex flex-col">
        {/* Top Navigation */}
        <div className="flex w-full items-center justify-between p-4 lg:px-8">
          <div className="w-full lg:w-3/5 flex">
            {/* Mobile Menu Toggle */}
            <button
              aria-label="Open Navigation Menu"
              className="lg:hidden absolute left-4 top-10 transform -translate-y-1/2"
              onClick={toggleMobileMenu}
            >
              <Image
                src={isMobileMenuOpen ? close : menu}
                alt="menu"
                className="w-6 h-6"
              />
            </button>

            {/* Logo */}
            <div className="w-full lg:w-auto flex justify-center items-center lg:justify-start">
              <Image src={logo} alt="logo" className="w-[120px] sm:w-[153px]" />
            </div>

            {/* Search Bar */}
            <div className="hidden relative lg:block w-full">
              <div className="flex w-full">
                <input
                  type="text"
                  className="bg-[#F9FAFB] w-full p-3 border-none rounded-l-md text-[#667482] outline-2 outline-[#0093D0] text-sm"
                  placeholder="Rechercher un produit"
                  onClick={() => setSuggestions(!suggestions)}
                />
                <button
                  aria-label="Search"
                  className={`px-3 rounded-r-md ${
                    suggestions ? "bg-[#0093D0]" : "bg-[#F9FAFB]"
                  }`}
                >
                  <FiSearch
                    className={`text-2xl ${
                      suggestions ? "text-white" : "text-[#c6c6c6]"
                    }`}
                  />
                </button>
              </div>
            </div>
            {suggestions && <SuggestionsProducts />}
          </div>

          {/* User Actions */}
          <div className="hidden lg:flex items-center justify-end gap-4">
            <div className="flex items-center gap-2 text-[#3B4347] text-sm font-semibold cursor-pointer">
              <Image
                src={bulb}
                alt="inspirations"
                className="h-[18px] w-[18px]"
              />
              <span>Inspirations</span>
            </div>
            <div className="flex items-center gap-2 text-[#3B4347] text-sm font-semibold cursor-pointer">
              <Image src={heart} alt="favoris" className="h-3 w-3" />
              <span>Mes favoris</span>
            </div>
            <button
              aria-label="Open Cart"
              className="flex bg-[#0093D0] p-3 items-center gap-2 rounded-md text-white font-medium"
            >
              <Image src={cart} alt="panier" className="h-4 w-4" />
              Panier
            </button>
            <div className="w-9 h-9 rounded-full bg-[#EAEDEE]"></div>
            <div
              className="relative flex items-center gap-2 cursor-pointer"
              onClick={toggleLanguageDropdown}
            >
              FR
              <Image src={arrow} alt="langue" className="w-2" />
              {isLanguageDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-md">
                  <ul className="py-1">
                    <li className="px-4 py-2 hover:bg-gray-100">EN</li>
                    <li className="px-4 py-2 hover:bg-gray-100">ES</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden p-4">
          <div className="flex">
            <input
              type="text"
              className="bg-[#F9FAFB] w-full p-3 rounded-l-md text-[#667482] text-sm outline-2 outline-[#0093D0]"
              placeholder="Rechercher un produit"
            />
            <button
              aria-label="Search"
              className={`px-3 rounded-r-md ${
                suggestions ? "bg-[#0093D0]" : "bg-[#F9FAFB]"
              }`}
            >
              <FiSearch
                className={`text-2xl ${
                  suggestions ? "text-white" : "text-[#c6c6c6]"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg">
            <div className="p-4">
              <ul className="space-y-4 text-sm text-[#3B4347] font-semibold">
                <li className="flex items-center gap-2">
                  <Image src={bulb} alt="inspirations" className="h-4" />
                  <span>Inspirations</span>
                </li>
                <li className="flex items-center gap-2">
                  <Image src={heart} alt="favoris" className="h-3 w-3" />
                  <span>Mes favoris</span>
                </li>
                <li>
                  <button
                    aria-label="Open Cart"
                    className="w-full flex bg-[#0093D0] p-3 items-center gap-2 rounded-md text-white text-sm font-medium justify-center"
                  >
                    <Image src={cart} alt="panier" className="h-4 w-4" />
                    Panier
                  </button>
                </li>
                <li className="flex items-center">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={toggleLanguageDropdown}
                  >
                    FR
                    <Image src={arrow} alt="langue" className="w-2" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Categories Navigation */}
        <div className="hidden lg:block w-full border-b p-5">
          <ul className="w-full flex items-center justify-between text-sm text-[#6B7280] font-semibold overflow-x-auto">
            {menuCategories.map((category, index) => (
              <li
                key={index}
                className={`whitespace-nowrap px-2 ${
                  category === "ART DE LA TABLE"
                    ? "text-[#0093D0] font-bold underline"
                    : ""
                }`}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Categories Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden p-4 border-t">
            <ul className="space-y-3 text-sm text-[#6B7280] font-semibold">
              {menuCategories.map((category, index) => (
                <li
                  key={index}
                  className={`${
                    category === "ART DE LA TABLE"
                      ? "text-[#0093D0] font-bold underline"
                      : ""
                  }`}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
