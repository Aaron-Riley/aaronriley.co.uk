import "./globals.css";
import { Roboto } from "next/font/google";
import logosvg from "../public/logo.svg"; // Correct import
import Image from "next/image"; // Correct import

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Web & Cloud Solutions | Aaron Riley",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <title>Web & Cloud Solutions | Aaron Riley</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Next.js App" />
        <link rel="icon" href="/logo.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>

      <body className="bg-neutral-900">
        {" "}
        {/* Corrected className */}
        <div className="navbar p-8">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Blog</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>Resources</a>
                </li>
                <li>
                  <a>About Me</a>
                </li>
                <li>
                  <a>Newsletter</a>
                </li>
              </ul>
            </div>
            <a href="/">
              <Image src={logosvg} alt="logo" width={40} height={40} />{" "}
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
              <li>
                <a>Resources</a>
              </li>
              <li>
                <a>About Me</a>
              </li>
              <li>
                <a>Newsletter</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-cyan-500 text-stone-900 hover:ring-cyan-500 hover:bg-stone-900 hover:text-stone-50 hover:ring transition ease-in-out delay-150 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500">
              Let's Talk <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
