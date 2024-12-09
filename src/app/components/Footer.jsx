import React from "react";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import twitter from "../../../public/assets/twitter.png";
import instagram from "../../../public/assets/instagram.png";
import linkedin from "../../../public/assets/linkedin-in.png";

const Footer = () => {
  return (
    <footer className="w-full bg-white min-h-screen sm:min-h-[78vh] py-10 border-t border-[#E5E7EB] px-4 sm:px-8 flex flex-col sm:flex-row gap-10">
      <div className="w-full sm:w-auto flex flex-col items-center sm:items-start mt-8 sm:mt-16">
        <Image
          src={logo}
          alt="Logo"
          className="h-10 sm:h-12 mb-4 w-[140px] sm:w-[163px]"
        />
      </div>

      <div className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-4">
          {[
            {
              title: "INFOS PRATIQUES",
              items: [
                "À propos",
                "Livraisons & Reprises",
                "Mode d'emploi",
                "F.A.Q",
              ],
            },
            {
              title: "LÉGAL",
              items: [
                "Mentions légales",
                "CGU",
                "CGV",
                "Politique de confidentialité",
              ],
            },
            {
              title: "MON COMPTE",
              items: [
                "Accéder à mon compte",
                "Ma liste d'envie",
                "Créer un compte",
                "Mot de passe oublié",
              ],
            },
          ].map((section) => (
            <div key={section.title} className="font-medium">
              <h3 className="text-base sm:text-lg font-bold mb-2">
                {section.title}
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-[#393939]">
                {section.items.map((item) => (
                  <li key={item} className="cursor-pointer hover:text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 sm:mt-0">
        <h3 className="text-base sm:text-lg font-bold mb-2 text-center sm:text-end">
          NOUS SUIVRE
        </h3>
        <div className="flex justify-center sm:justify-end space-x-4">
          {[
            { icon: twitter, alt: "Twitter" },
            { icon: instagram, alt: "Instagram" },
            { icon: linkedin, alt: "LinkedIn" },
          ].map((social) => (
            <a
              key={social.alt}
              href="#"
              className="p-2 sm:p-3 border rounded-md hover:bg-gray-100"
            >
              <Image
                src={social.icon}
                alt={social.alt}
                className="w-5 md:w-10 "
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
