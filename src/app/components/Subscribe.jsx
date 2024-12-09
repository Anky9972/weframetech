import React from "react";
import Image from "next/image";
import trolly from "../../../public/assets/trolly.png";
import van from "../../../public/assets/van.png";
import pc from "../../../public/assets/pc.png";
import dish from "../../../public/assets/dish.png";
import line from "../../../public/assets/Line.png";
import buffet from "../../../public/assets/buffet.png";
import arrow from "../../../public/assets/arrow-right.png";

function Subscribe() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#fef6fa] to-[#FFFFFF] px-4 py-16 flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <div className="flex flex-col items-center text-center mb-16">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
            On s&apos;occupe de <span className="text-[#5CD2DD]">tout</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#9C9C9C] max-w-md">
            Office ipsum you must be muted. It meeting commitment busy pain.
          </p>

          <div className="w-full flex justify-center ">
            <div className="flex items-center justify-center mt-10 flex-col md:flex-row gap-5 lg:gap-0">
              {[
                {
                  icon: trolly,
                  title: "Livraison & Reprise",
                  subtitle: "Selon vos besoins",
                },
                {
                  icon: dish,
                  title: "Nettoyage",
                  subtitle: "Selon vos besoins",
                },
                {
                  icon: pc,
                  title: "Commande Illimitée",
                  subtitle: "Tout est possible",
                },
                {
                  icon: van,
                  title: "Transport & Enlèvement",
                  subtitle: "On s'occupe de tout.",
                },
              ].map((service, index) => (
                <React.Fragment key={service.title}>
                  <div className="flex flex-col items-center mx-4">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      className="w-12 sm:w-14"
                    />
                    <span className="text-base sm:text-xl font-medium mt-2 text-center">
                      {service.title}
                    </span>
                    <span className="text-xs sm:text-sm mt-3 text-[#9C9C9C] text-center">
                      {service.subtitle}
                    </span>
                  </div>
                  {index < 3 && (
                    <Image
                      src={line}
                      alt="line"
                      className="w-20 sm:w-28 mb-10 hidden sm:block"
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-4 lg:gap-6">
          <div className="w-full lg:w-1/2 rounded-xl overflow-hidden">
            <Image
              src={buffet}
              alt="buffet"
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 bg-[#FFF3F9] p-4 sm:p-6 lg:p-8 rounded-xl">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-4">
              S&apos;inscrire & économiser{" "}
              <span className="text-[#5CD2DD]">10%</span>
            </h1>
            <p className="text-[#BDA2B0] font-medium mt-2 text-xs sm:text-sm">
              Office ipsum you must be muted. Synergize helicopter prioritize
              anyway job due harvest most opportunity didn&apos;t. Yet busy any
              meeting shark light marginalised 4-blocker message. Productize
              corporate nail caught synergy highlights lunch. Company another
              pushback items dear or any.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-2 mt-5">
              <input
                type="text"
                className="border py-2 px-4 rounded-md border-[#F5E1EB] text-base w-full sm:w-4/5 sm:mb-0"
                placeholder="john@doe.com"
              />
              <button className="bg-[#5CD2DD] text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 text-base font-bold w-full sm:w-auto">
                S&apos;inscrire{" "}
                <Image src={arrow} alt="arrow-right" className="w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
