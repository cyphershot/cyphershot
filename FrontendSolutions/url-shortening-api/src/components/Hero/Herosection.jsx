import React from "react";
import Cards from "./Cards";
import CTA from "../CTA/CTA";
import HeroDesktop from "../../assets/illustration-working.svg";

export default function Herosection() {
  return (
    <>
      <div>
        <div className="main-contianer p-4 py-16 pb-24 sm:py-16 md:pb-40 lg:p-20 lg:pb-40 xl:p-32 xl:pb-48">
          <div className="flex flex-col-reverse items-center justify-center gap-20 md:flex-row">
            <div className="grid gap-4 text-center md:text-left">
              <h1 className="text-4xl font-bold text-slate-900 md:text-5xl xl:text-6xl xxl:text-7xl">
                More than just shorter links
              </h1>
              <p className="text-gray-400">
                Build your brand's recognition and get detailed insights on how
                your links are performing.
              </p>
             
                <button className="mx-auto w-fit rounded-full bg-cyan-400 py-3 px-6 text-lg font-bold capitalize text-white transition-all duration-300 ease-in-out hover:bg-cyan-300 hover:shadow-sm md:m-0">
                  Get Started
                </button>
              
            </div>

            <div>
              <img src={HeroDesktop} alt="Main Hero Working Illustration" />
            </div>
          </div>
        </div>
        <Cards />
        <CTA />
      </div>
    </>
  );
}
