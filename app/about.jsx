export default function AboutMe() {
  return (
    <div className="md:container md:mx-auto px-20 bg-neutral-900 md:pt-40 md:pb-20">
      <div className="flex flex-wrap -mx-4 mt-5">
        <div className="w-full md:w-1/2 px-5">
          <h1 className="text-3xl font-medium leading-tight text-gray-100 mt-12 mb-2">
            About Me
          </h1>
          <img
            className="flex justify-center"
            src="/aboutHeader.svg"
            alt="Hero underline"
            width={150}
            height={10}
          />
          <h2 className="text-gray-100 text-2xl font-semibold mb-5 pt-8">
            Getting to Know Me
          </h2>
          <div className="md:hidden">
            <img
              src="/holiday.jpg"
              className="rounded-lg drop-shadow-2xl object-cover w-full h-80"
              alt="About me"
            />
          </div>
          <p className="text-gray-100 text-left text-lg mb-5 max-w-[600px] mt-4">
          I'm passionate about many things in life. I love to travel with
            friends, exploring new destinations and creating lasting memories.
            Spending quality time with my son and family is a top priority.
            Professionally, I thrive on working with businesses, helping them
            grow and succeed in today's dynamic environment. Collaborating with
            teams, solving challenges, and driving innovation is what keeps me
            motivated. Additionally, I enjoy participating in networking events,
            sharing my insights and experiences with others. In my free time, I
            go to the gym, where I do my best to stay active and maintain a
            healthy lifestyle. I also enjoy reading self-help books,
            constantly seeking new knowledge and personal growth. These passions
            and pursuits drive me to be the best I can be and to continuously
            learn and grow. I also love coffee, so maybe you could...
            </p>

          <a
            href="https://www.buymeacoffee.com/aaronrileydev"
            className="px-4 mt-4 py-2 font-semibold ring ring-cyan-300 text-sm hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 hover:ring active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500 rounded-md shadow-sM mt-6"
          >
            Buy Me a Coffee
          </a>
        </div>

        <div className="w-full md:w-1/2 px-4 relative pt-24">
          <div className="hidden md:block">
            <img
              src="/holiday.jpg"
              className="rounded-lg drop-shadow-2xl object-cover w-full h-80"
              alt="About me"
            />

            <div className="flex mt-4">
              <div className="w-1/2 pr-2">
                <img
                  src="/thedeep.jpg"
                  className="rounded-lg drop-shadow-2xl object-cover w-full h-52"
                  alt="Square Image 1"
                />
              </div>
              <div className="w-1/2 pl-2">
                <img
                  src="/public-speaking.jpg"
                  className="rounded-lg drop-shadow-2xl object-cover w-full h-52"
                  alt="Square Image 2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
