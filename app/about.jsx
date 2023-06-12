export default function AboutMe() {

    return(
        <div class="flex flex-wrap -mx-4 mt-5">
        <div class="w-full md:w-1/2 px-5">
          <h1 class="text-5xl font-medium leading-tight text-gray-100 mt-5 mb-16 text-center">About Me</h1>
          <img
              src="/hero.svg"
              alt="Hero underline"
              width={300} 
              height={10}
              />
          <p class="text-gray-100 mb-16 text-left mt-5 text-lg">Lorem ipsum dolor sit amet consectetur. Eget metus fermentum adipiscing nunc praesent pretium et purus non. Elementum ante nisl vestibulum tincidunt. Etiam eu nec amet quis. Proin ac tortor cursus suspendisse ornare iaculis blandit. Nunc sodales congue turpis tortor. Hendrerit habitasse ultrices est duis elementum magna massa in. Et placerat ultricies pharetra cras dapibus nulla. Donec tortor vitae tincidunt nunc. Pellentesque neque at vitae enim. Purus mauris nec amet praesent lorem tempor vestibulum viverra et. Accumsan ut pulvinar elementum vitae. </p>

        </div>
        <div class="w-full md:w-1/2 px-4 mt-5">
          <img class="rounded-2xl drop-shadow-2xl object-cover scale-50 absolute" src="/about.jpg" alt="Flowbite Tailwind CSS UI Kit" />
          <img
            src="/about.svg"
            class=""
            alt="About underline"
            width={300} 
            height={10}
            />
        </div>
      </div>
    );
}

