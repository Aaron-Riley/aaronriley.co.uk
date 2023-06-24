export default function AboutMe() {
  return (
    <div class="md:container md:mx-auto px-20 bg-neutral-900 md:pt-40">
      <div class="flex flex-wrap -mx-4 mt-5">
        <div class="w-full md:w-1/2 px-5">
          <h1 class="text-4xl font-medium leading-tight text-gray-100 mt-12 mb-2">
            About Me
          </h1>
          <img
            class="flex justify-center"
            src="/aboutHeader.svg"
            alt="Hero underline"
            width={180}
            height={10}
          />
          
          <p class="text-gray-100 text-left mt-12 text-lg mb-5">
            Lorem ipsum dolor sit amet consectetur. Eget metus fermentum
            adipiscing nunc praesent pretium et purus non. Elementum ante nisl
            vestibulum tincidunt. Etiam eu nec amet quis. Proin ac tortor cursus
            suspendisse ornare iaculis blandit. Nunc sodales congue turpis
            tortor. Hendrerit habitasse ultrices est duis elementum magna massa
            in. Et placerat ultricies pharetra cras dapibus nulla. Donec tortor
            vitae tincidunt nunc. Pellentesque neque at vitae enim. Purus mauris
            nec amet praesent lorem tempor vestibulum viverra et. Accumsan ut
            pulvinar elementum vitae.
          </p>

          <p class="text-gray-100 text-left mt-12 text-lg mb-5">
            Lorem ipsum dolor sit amet consectetur. Eget metus fermentum
            adipiscing nunc praesent pretium et purus non. Elementum ante nisl
            vestibulum tincidunt. Etiam eu nec amet quis. Proin ac tortor cursus
            suspendisse ornare iaculis blandit. Nunc sodales congue turpis
            tortor. Hendrerit habitasse ultrices est duis elementum magna massa
            in. Et placerat ultricies pharetra cras dapibus nulla. Donec tortor
            vitae tincidunt nunc. Pellentesque neque at vitae enim. Purus mauris
            nec amet praesent lorem tempor vestibulum viverra et. Accumsan ut
            pulvinar elementum vitae.
          </p>
          {/* create a button */}
          <button class="px-4 py-2 font-semibold ring ring-cyan-300 text-sm hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 hover:ring active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500 rounded-md shadow-sM mt-6">Buy Me a Coffee</button>
        </div>

        <div class="w-full md:w-1/2 px-4 relative pt-24">
          <img
            src="/about.svg"
            class="w-3/5 h-3/5 object-fill absolute right-28"
            alt="About underline"
          />
           <img
            class="rounded-2xl drop-shadow-2xl object-cover w-3/5 h-3/5 ml-24 mt-24"
            src="/about.jpg"
            alt="About me"
          />
     
        </div>
      </div>
    </div>
  );
}
