export default function Hero() {
  return (
    <div className="container mx-auto px-20 bg-neutral-900 md:pt-12">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-5">
          <div className="flex mt-5 mb-12 text-left place-content-left">
            <a
              href="https://github.com/Aaron-Riley"
              className="inline-block rounded-full px-3 py-1 mr-8 font-semibold text-gray-100 mr-2 text-2xl hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://twitter.com/ARileyDev"
              className="inline-block rounded-full px-3 py-1 mr-8 font-semibold text-gray-100 mr-2 text-2xl hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com/aaronrileyy_"
              className="inline-block rounded-full px-3 py-1 mr-8 font-semibold text-gray-100 mr-2 text-2xl hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aaronrileydev/"
              className="inline-block rounded-full px-3 py-1 font-semibold text-gray-100 mr-2 text-2xl hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <h1 className="lg:text-5xl text-2xl font-medium leading-tight text-gray-100 mb-12 text-left">
            👋Hey, I'm Aaron Riley
          </h1>
          <div className="w-full md:w-1/2 px-4 md:hidden">
            <img
              className="rounded-2xl drop-shadow-2xl"
              src="/portrait.jpeg"
              alt="Flowbite Tailwind CSS UI Kit"
            />
          </div>
          <p className="text-gray-100 mb-12 text-left lg:text-2xl text-xl">
            Welcome to my portfolio! I'm A Full-Stack Developer with a huge
            passion for building innovative business solutions with great UI/UX
            using modern frameworks like NextJS, TailwindCSS & Node.js, I also
            work with AWS and various technologies.
          </p>
          <div className="flex gap-4 items-center">
            <div className="w-72">
              <a
                href="#projects"
                className="btn bg-cyan-500 text-stone-900 hover:ring-cyan-500 hover:bg-stone-900 hover:text-stone-50 hover:ring transition ease-in-out delay-150 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500 flex items-center justify-center w-full"
              >
                Read my blog
                <i className="fa-solid fa-book ml-2"></i>
              </a>
            </div>
            <div className="relative">
              <a href="#projects" className="flex justify-center">
                <img
                  src="/aws-cloud-practitioner.png"
                  width={100}
                  height={100}
                  alt="AWS Cloud Practitioner Badge"
                />
              </a>
            </div>
            <div className="relative">
              <a href="#projects" className="flex justify-center">
                <img
                  src="/aws-solutions-architect.png"
                  width={100}
                  height={100}
                  alt="AWS Solutions Architect Associate Badge"
                  className="opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                    Studying
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-4 mt-5 hidden md:block">
          <img
            className="rounded-2xl drop-shadow-2xl"
            src="/headshot.jpg"
            alt="Portrait of Aaron Riley"
          />
        </div>
      </div>
    </div>
  );
}
