
export default function Home() {
  return (
    <main>
      <div class="container mx-auto px-4 bg-neutral-900">
        <div class="flex flex-wrap -mx-4 ">
          <div class="w-full md:w-1/2 px-4">
            <h1 class="text-4xl font-bold leading-tight mb-4">Flowbite Tailwind CSS components</h1>
            <p class="text-gray-600 mb-8">Flowbite is a free Open Source UI Kit that provides a set of basic and advance elements/components to start building your SAAS or Enterprise web application.</p>
            <div class="flex mb-4">
              <a href="#" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwind</a>
              <a href="#" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#tailwindcss</a>
              <a href="#" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#css</a>
              <a href="#" class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#component</a>
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Download</button>
          </div>
          <div class="w-full md:w-1/2 px-4">
            <img src="https://flowbite.com/docs/images/flowbite-illustration.svg" alt="Flowbite Tailwind CSS UI Kit" />
          </div>
        </div>
      </div>
    </main>
  )
}
