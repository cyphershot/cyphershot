import React from "react";

const footerLinks = [
  {
    title: "Features",
    link1: "Link Shortening",
    link2: "Branded Links",
    link3: "Analytics",
  },
  {
    title: "Resources",
    link1: "Blog",
    link2: "Developers",
    link3: "Support",
  },
  {
    title: "Company",
    link1: "About",
    link2: "Our Team",
    link3: "Careers",
    link4: "Contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="main-container flex flex-col items-center justify-between gap-12 py-8 sm:items-center lg:flex-row lg:items-start lg:px-20 xl:px-32 xl:py-20">
        <div className="text-4xl font-bold">
          <h2>Shortly</h2>
        </div>
        <nav className="flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-12 xl:gap-20 xxl:gap-40">
          <div className="flex flex-col justify-between gap-8 text-center sm:flex-row sm:gap-10 lg:text-left xl:gap-32">
            {footerLinks.map((links, index) => {
              const { title, link1, link2, link3, link4 } = links;
              return (
                <div className="footer-column grid gap-5 sm:gap-0" key={index}>
                  <h2 className="text-lg font-bold md:text-lg">{title}</h2>
                  <div className="flex flex-col items-center gap-3 text-sm opacity-80 lg:items-start">
                    <a
                      className="footer-links relative w-fit rounded-lg transition-transform duration-300 ease-in-out hover:-translate-y-1"
                      href=""
                    >
                      {link1}
                    </a>
                    <a
                      className="footer-links relative w-fit transition-transform duration-300 ease-in-out hover:-translate-y-1"
                      href=""
                    >
                      {link2}
                    </a>
                    <a
                      className="footer-links relative w-fit transition-transform duration-300 ease-in-out hover:-translate-y-1"
                      href=""
                    >
                      {link3}
                    </a>
                    <a
                      className="footer-links relative w-fit transition-transform duration-300 ease-in-out hover:-translate-y-1"
                      href=""
                    >
                      {link4}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/"
              target={"_blank"}
              className="social-link group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="26"
                height="26"
              >
                <path
                  fill="#fff"
                  d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                />
              </svg>
            </a>

            <a
              href="https://github.com/SameerJS6"
              target={"_blank"}
              className="social-link group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 496 512"
                width="26"
                height="26"
              >
                <path
                  fill="#fff"
                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/"
              target={"_blank"}
              className="social-link group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <path
                  fill="#FFF"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                />
              </svg>
            </a>

            <a
              href="https://twitter.com/"
              target={"_blank"}
              className="social-link group transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20">
                <path
                  fill="#FFF"
                  d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z"
                />
              </svg>
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}
