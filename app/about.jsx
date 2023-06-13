export default function AboutMe() {
  return (
    <div class="container mx-auto px-4 bg-neutral-900 md:pt-40">
      <div class="flex flex-wrap -mx-4 mt-5">
        <div class="w-full md:w-1/2 px-5">
          <h1 class="text-4xl font-medium leading-tight text-gray-100 mt-5 mb-2">
            About Me
          </h1>
          <img
            class="flex justify-center"
            src="/aboutHeader.svg"
            alt="Hero underline"
            width={180}
            height={10}
          />
          <p class="text-gray-100 text-left mt-5 text-lg">
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
        </div>

        <div class="w-full md:w-1/2 px-4 relative pt-24">
          <img
            src="/about.svg"
            class="w-3/5 h-3/5 object-fill absolute bottom-14 right-64"
            alt="About underline"
          />
          <img
            class="rounded-2xl drop-shadow-2xl object-cover w-3/5 h-3/5 ml-32 mt-5"
            src="/about.jpg"
            alt="Flowbite Tailwind CSS UI Kit"
          />
        </div>
      </div>
    </div>
  );
}
