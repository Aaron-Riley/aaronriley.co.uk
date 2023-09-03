export default function Projects() {
  return (
    <div id="projects" class="md:container md:mx-auto px-20 bg-neutral-900 md:pt-20 mb-12">
      <h1 class="text-3xl font-medium leading-tight text-gray-100 mb-2 mt-5">
        Showcase
      </h1>
      <img
        class="flex justify-center"
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
          I've had the pleasure of creating a PHP CMS web application recently and deploying it on AWS. It was hosted on an ubuntu EC2 instance, it stores object data in S3, and the database is managed with RDS. Using SSH, I've ensured its secure and reliable operation.
          </div>
          <div className="flex">
            <div className="text-cyan-400 text-base mr-4">
              AWS
            </div>
            <div className="text-cyan-400 text-base mr-4">Deployment</div>
            <div className="text-cyan-400 text-base">Architecture</div>
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
            I have designed and I am currently developing a website for a local cafe. It will have a booking system for customers to reserve tables, and a menu system for customers to order food and drinks. It will be hosted on AWS. 
          </div>
          <div className="flex">
            <div className="text-cyan-400 text-base mr-4">
              Conveinience
            </div>
            <div className="text-cyan-400 text-base mr-4">Efficiency</div>
            <div className="text-cyan-400 text-base">Scalability</div>
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
            AWS Cloud Practitioner Certification
          </div>
          <div className="max-w-[600px] text-gray-100 text-lg mb-4">
            I have completed the AWS Cloud Practitioner Certification and I am well on the way to getting my Solutions Architecture Associate. I have learned about AWS Cloud and its global infrastructure, and how to use AWS services to build secure and reliable cloud applications.
          </div>
          <div className="flex">
            <div className="text-cyan-400 text-base mr-4">
                Cloud
            </div>
            <div className="text-cyan-400 text-base mr-4">Solutions Architecture</div>
            <div className="text-cyan-400 text-base">Learning</div>
          </div>
        </div>
        <div className="md:w-1/2">
        <div className="pb-[56.25%] relative">
      <img
        className="absolute inset-0 w-full h-full object-cover rounded-[10px] shadow"
        src="/certification.jpg"
        alt="Image of AWS Certification badge."
      />
    </div>
        </div>
      </div>
    </div>
  );
}
