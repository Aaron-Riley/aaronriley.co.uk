export default function Projects() {
  return (
    <div
      id="projects"
      className="md:container md:mx-auto px-20 bg-neutral-900 md:pt-20 mb-12"
    >
      <h1 className="text-3xl font-medium leading-tight text-gray-100 mb-2 mt-5">
        Showcase
      </h1>
      <img
        className="flex justify-center"
        src="/aboutHeader.svg"
        alt="Hero underline"
        width={140}
        height={10}
      />
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="md:w-2/3 p-4">
          <div className="text-gray-100 text-xl font-semibold mb-4">
            Web Application Cloud Deployment
          </div>
          <div className="max-w-[600px] text-gray-100 text-lg mb-4">
            I've had the pleasure of creating a PHP CMS web application recently
            and deploying it on AWS. It was hosted on an ubuntu EC2 instance, it
            stores object data in S3, and the database is managed with RDS.
            Using SSH, I've ensured its secure and reliable operation.
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2 text-cyan-400">AWS</div>
            <div className="w-full md:w-1/3 px-2 text-cyan-400">Deployment</div>
            <div className="w-full md:w-1/3 px-2 text-cyan-400">
              Architecture
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="pb-[56.25%] relative">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[10px] shadow"
              src="/aws.png"
              alt="Image of AWS logo."
            />
          </div>
        </div>
      </div>
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="md:w-2/3 p-4">
          <div className="text-gray-100 text-xl font-semibold mb-4">
            The Railway Cafe Website
          </div>
          <div className="max-w-[600px] text-gray-100 text-lg mb-4">
            I have designed and I am currently developing a website for a local
            cafe. It will have a booking system for customers to reserve tables,
            and a menu system for customers to order food and drinks. It will be
            hosted on AWS.
          </div>
          {/* <div className="grid grid-rows-4 sm:grid-cols-12 grid-flow-col gap-4">
            <div className="text-cyan-400 text-base mr-4">Conveinience</div>
            <div className="text-cyan-400 text-base mr-4">Efficiency</div>
            <div className="text-cyan-400 text-base">Scalability</div>
          </div> */}
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2 text-cyan-400">
              Conveinience
            </div>
            <div className="w-full md:w-1/3 px-2 text-cyan-400">Efficiency</div>
            <div className="w-full md:w-1/3 px-2 text-cyan-400">
              Scalability
            </div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="pb-[56.25%] relative">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[10px] shadow"
              src="/cafe.jpg"
              alt="Image of coffee."
            />
          </div>
        </div>
      </div>
      <div className="md:flex md:items-center md:justify-between mb-4">
        <div className="md:w-2/3 p-4">
          <div className="text-gray-100 text-xl font-semibold mb-4">
            Aesthtics Beauty Company Website
          </div>
          <div className="max-w-[600px] text-gray-100 text-lg mb-4">
            I have designed and developed a website for an aesthetics beauty
            company. It is a landing page that showcases the company's services
            and products. It is hosted on Vercel.
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="w-full md:w-1/3 px-2 text-cyan-400">MongoDB</div>
            <div className="w-full md:w-1/3 px-2 text-cyan-400">NextJS</div>
            <div className="w-full md:w-1/3 px-2 text-cyan-400">SEO</div>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="pb-[56.25%] relative">
            <img
              className="absolute inset-0 w-full h-full object-cover rounded-[10px] shadow"
              src="/dcr.png"
              alt="Aesthetic beauty company wesbie landing page."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
