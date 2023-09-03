
export default function Landing() {
  return (
    <div class="container mx-auto px-20 bg-neutral-900 md:pt-12">
      <div class="flex flex-wrap -mx-4">
        <div class="w-full md:w-1/2 px-5">
          <h1 class="text-4xl font-medium leading-tight text-gray-100 mt-5 mb-5 text-center">
            Building the Future with Business, Web Development and AWS
          </h1>
          <div class="w-full md:w-1/2 px-4 md:hidden">
          <img
            class="rounded-2xl drop-shadow-2xl"
            src="/headshot.jpg"
            alt="Flowbite Tailwind CSS UI Kit"
          />
        </div>
          <p class="text-gray-100 mb-16 text-center mt-5 text-2xl">
            I’m Aaron - A Full-Stack Developer with a huge passion for business, AWS Cloud
            and upcoming technologies.
          </p>
          <div class="flex mt-5 mb-16 text-center place-content-center">
            <a
              href="https://github.com/Aaron-Riley"
              class="inline-block rounded-full px-3 py-1 mr-8 font-semibold text-gray-100 mr-2 text-2xl hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
            >
              <i class="fa-brands fa-github"></i>
            </a>
            <a
              href="https://twitter.com/ARileyDev"
              class="inline-block rounded-full px-3 py-1 mr-8 font-semibold text-gray-100 mr-2 text-2xl hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com/aaronrileyy_"
              class="inline-block rounded-full px-3 py-1 mr-8 font-semibold text-gray-100 mr-2 text-2xl hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aaronrileydev/"
              class="inline-block rounded-full px-3 py-1 font-semibold text-gray-100 mr-2 text-2xl hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <a
            href="#projects"
            class="text-gray-100 font-semibold text-xl mt-5 flex justify-center hover:text-gray-700 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300"
          >
            View My Portfolio
            <i class="fa-solid fa-arrow-down ml-3 mt-2 animate-bounce"></i>
          </a>
          <div class="flex justify-center mt-2">
            <img src="/hero.svg" alt="Hero underline" width={250} height={10} />
          </div>
        </div>
        <div class="w-full md:w-1/2 px-4 mt-5 mt-5 hidden md:block">
          <img
            class="rounded-2xl drop-shadow-2xl"
            src="/headshot.jpg"
            alt="Flowbite Tailwind CSS UI Kit"
          />
        </div>
      </div>
    </div>
  );
}
