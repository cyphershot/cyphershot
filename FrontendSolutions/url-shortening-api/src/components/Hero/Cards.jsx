import React from "react";
import Brand from "../../assets/icon-brand-recognition.svg";
import Records from "../../assets/icon-detailed-records.svg";
import Customized from "../../assets/icon-fully-customizable.svg";
import Shortener from "../Shortener/Shortener";

const CardData = [
  {
    image: Brand,
    title: "Brand Recognition",
    info: `Boost your brand recognition with each click. Generic links don't means thing. Branded links help instil confidence in your content.`,
  },
  {
    image: Records,
    title: "Detailed Records",
    translate: "translate-y-10",
    info: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.`,
  },
  {
    image: Customized,
    title: "Fully Customizable",
    translate: "translate-y-16",
    info: `Improve brand awareness and content dicoverability through customizable links, supercharging audience engagement.`,
  },
];

export default function Cards() {
  return (
    <div className="bg-gray-100">
      <div className="main-container p-4 pt-16 pb-24 sm:py-24 lg:px-20 xl:px-32">
        <Shortener />
        <div className="mb-16 grid gap-16 sm:gap-8">
          <div className="grid gap-4 text-center text-gray-800">
            <h2 className="text-3xl font-bold md:text-4xl">
              Advanced Statistics
            </h2>
            <p className="mx-auto text-sm font-medium text-black text-opacity-60 sm:w-[45ch] sm:text-base">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-4 md:flex-row lg:gap-8">
            {CardData.map((itemes, index) => {
              const { image, title, info, translate } = itemes;
              return (
                <article
                  className={`card-box relative grid rounded-lg bg-white p-4 text-center shadow-lg md:p-6 md:text-left lg:p-8 ${translate}`}
                  key={index}
                >
                  <div className="absolute -top-10 left-1/2 w-fit -translate-x-1/2 rounded-[50%] bg-slate-700 p-4 shadow-xl md:left-4 md:translate-x-0 lg:left-6">
                    <img src={image} alt={`${title} Logo`} />
                  </div>
                  <span className="my-4 mt-8 text-xl font-bold ">{title}</span>
                  <p className="text-sm text-[#bfbfbf] lg:text-base">{info}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
