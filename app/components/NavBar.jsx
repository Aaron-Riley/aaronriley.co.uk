import Image from "next/image"; // Correct import
import logosvg from "@/public/logo.svg"; // Correct import

export default function NavBar() {
  return (
    <div className="navbar p-8 bg-neutral-900">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
        </div>
        <a href="/">
          <Image src={logosvg} alt="logo" width={40} height={40} />{" "}
        </a>
      </div>
      <div className="navbar-end">
        <a className="btn bg-cyan-500 text-stone-900 hover:ring-cyan-500 hover:bg-stone-900 hover:text-stone-50 hover:ring transition ease-in-out delay-150 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500">
          Let's Talk <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
