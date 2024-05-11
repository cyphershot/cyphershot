import React, { useState, useEffect } from "react";
import bgImageDesktop from "../../assets/bg-shorten-desktop.svg";
import bgImageMobile from "../../assets/bg-shorten-mobile.svg";
import Links from "./Links";

export default function Shortener() {
  const [error, setError] = useState(false);
  const [inputURL, setInputURL] = useState("");
  const [resultURL, setResultURL] = useState(() => {
    const savedURL = localStorage.getItem("links");
    if (savedURL) return JSON.parse(savedURL);
    return [];
  });
  const [inputError, setInputError] = useState(false);

  useEffect(() => {
    localStorage.setItem("links", JSON.stringify(resultURL));
  }, [resultURL]);

  let url = `https://api.shrtco.de/v2/shorten?url=${inputURL}`;

  const handleFetch = async () => {
    try {
      const response = await fetch(`${url}`);
      if (!response.ok) {
        throw new Error(
          `This is an HTTP Error: The Status is ${response.status}`
        );
      }
      let Data = await response.json();
      console.log(Data.result);
      setResultURL([
        ...resultURL,
        {
          oldURL: Data.result.original_link,
          shortenURL: Data.result.full_short_link,
        },
      ]);
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFetch();
    setInputURL("");
    inputURL === "" ? setInputError(true) : setInputError(false);
  };

  const handleClear = () => {
    localStorage.clear();
    setResultURL([]);
  };
  return (
    <>
      <div className="mx-auto mb-20 grid max-w-[1000px] gap-6 md:mt-[-23%] lg:mb-28 lg:-mt-[17%] xl:-mt-[16%]">
        <div className="relative mx-auto w-full overflow-hidden rounded-lg bg-[#3b3054] p-6 font-bold shadow-md sm:py-8 md:p-8 md:py-10 lg:p-12">
          <div className="absolute inset-0">
            <picture>
              <source media="(min-width: 600px)" srcSet={bgImageDesktop} />
              <img
                className="h-full w-full"
                src={bgImageMobile}
                alt="CTA Background Blob"
              />
            </picture>
          </div>
          <form onSubmit={handleSubmit} className="z-10">
            <div className="relative flex flex-col gap-10 sm:flex-row sm:items-center sm:gap-4 lg:gap-6">
              <input
                type="text"
                placeholder="Shorten a link here..."
                value={inputURL}
                className={`relative flex-1 rounded-md p-4 text-lg font-medium transition-all duration-300 ease-in-out lg:rounded-lg ${
                  inputError
                    ? "ring-4 ring-red-500 focus:ring-red-600"
                    : "focus:ring-4 focus:ring-cyan-500"
                }`}
                onChange={(e) => setInputURL(e.target.value)}
              />
              <div className="flex flex-col gap-4 md:flex-row">
                
                  <button
                    className="rounded-md bg-cyan-400 py-3 px-6 text-lg font-bold text-white transition-all duration-300 ease-in-out hover:bg-cyan-300 hover:shadow-sm "
                    type="submit"
                  >
                    Shorten It!
                  </button>
                
                  <button
                    onClick={handleClear}
                    className="rounded-md bg-red-500 py-3 px-6 text-lg font-bold text-white transition-all duration-300 ease-in-out hover:bg-red-400 hover:shadow-sm disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:shadow-none"
                    type="button"
                    disabled={resultURL.length === 0}
                  >
                    {resultURL.length > 1 ? "Clear All" : "Clear"}
                  </button>
                
              </div>
              <p
                className={`absolute bottom-32 left-0 text-sm font-medium text-red-400 transition-all duration-300 ease-in-out sm:-bottom-7 md:-bottom-7 lg:-bottom-8 ${
                  inputError
                    ? "translate-y-0 opacity-100"
                    : "translate-y-1 opacity-0"
                }`}
              >
                <i>Please add a link!!</i>
              </p>
            </div>
          </form>
        </div>
        {/* 25 character only  .substring(6, 24)*/}

        {resultURL.map((url) => {
          const { oldURL, shortenURL } = url;
          return (
            <Links key={shortenURL} oldURL={oldURL} shortenURL={shortenURL} />
          );
        })}
      </div>
    </>
  );
}
