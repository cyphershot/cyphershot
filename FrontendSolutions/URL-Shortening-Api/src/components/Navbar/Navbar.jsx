import React, { useState, useEffect, useRef } from "react";
import Logo from "../../assets/logo.svg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  let Menu = useRef();
  ClickOutside(Menu, () => setIsOpen(false));

  function ClickOutside(ref, handler) {
    useEffect(() => {
      const listener = (event) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }
        handler(event);
      };
      document.addEventListener("mousedown", listener);
      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, [ref, handler]);
  }
  return (
    <header
      data-overlay={isOpen ? "true" : "false"}
      className="flex items-center justify-between p-4 sm:p-6 sm:px-8 lg:p-8 lg:px-20"
    >
      <div>
        <img src={Logo} alt="Main Logo" />
      </div>
      <nav
        ref={Menu}
        className={`open ${
          isOpen ? "active z-10" : "z-auto"
        } flex min-h-[320px] items-center rounded-lg bg-[#3b3054] px-24 text-lg font-bold transition-all duration-[350ms] sm:min-h-fit sm:bg-transparent sm:px-0 sm:text-base sm:font-medium sm:text-slate-800`}
      >
        <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6">
          <li className="nav-links relative text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-slate-200 sm:text-slate-900 sm:hover:text-slate-600">
            <a href="#">Features</a>
          </li>
          <li className="nav-links relative text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-slate-200 sm:text-slate-900 sm:hover:text-slate-600">
            <a href="#">Pricing</a>
          </li>
          <li className="nav-links relative text-white transition-all duration-300 ease-in-out hover:-translate-y-1 hover:text-slate-200 sm:text-slate-900 sm:hover:text-slate-600">
            <a href="#">Resources</a>
          </li>
        </ul>
      </nav>
      
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full bg-slate-50 p-2 hover:cursor-pointer hover:bg-slate-100 hover:shadow-md sm:hidden"
        >
          {!isOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}

          {/* Close Icon */}
          {isOpen && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      
    </header>
  );
}
