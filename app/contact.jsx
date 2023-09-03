// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// export default function Contact() {
//   return (
//     <div className="container mx-auto px-20 bg-stone-900 pt-20">
//       <div className="text-center text-zinc-100 text-3xl font-semibold pb-5">Get In Touch</div>
//       <div className="text-center text-zinc-100 text-xl font-normal mt-4 pb-5">If you would like to get in touch with me for anything tech or business related you can reach me by my email below. </div>

//       <div className="flex justify-center mt-4 pb-5">
//         <a href="mailto:aaron_lee_gott@hotmail.com?subject=Inquiry%20from%20Portfolio%20Website&body=Hi%20there,%0A%0AI%20found%20your%20website%20and%20I%20have%20some%20questions%20I'd%20like%20to%20discuss.%20%0A%0AHere%20are%20my%20questions:%0A1.%20[Question%20one]%0A2.%20[Question%20two]%0A%0AThank%20you,%0A[Your%20Name]" className="px-4 py-2 font-semibold ring ring-cyan-300 text-sm hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 hover:ring active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500 rounded-md shadow-sm">Contact Me</a>
//       </div>

//       <hr className="border border-white my-4" />

//       <div className="flex justify-between items-center mt-4 pb-5">
//         <div className="text-white text-lg">2023 Aaron Riley. All rights reserved.</div>
//         <div class="flex text-center place-content-center">
//             <a
//               href="https://github.com/Aaron-Riley"
//               class="inline-block rounded-full px-3 py-1 mr-8 font-semibold text-gray-100 mr-2 text-lg hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
//             >
//               <i class="fa-brands fa-github"></i>
//             </a>
//             <a
//               href="https://twitter.com/ARileyDev"
//               class="inline-block rounded-full px-3 py-1 mr-8 font-semibold text-gray-100 mr-2 text-lg hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
//             >
//               <i class="fa-brands fa-twitter"></i>
//             </a>
//             <a
//               href="https://instagram.com/aaronrileyy_"
//               class="inline-block rounded-full px-3 py-1 mr-8 font-semibold text-gray-100 mr-2 text-lg hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
//             >
//               <i class="fa-brands fa-instagram"></i>
//             </a>
//             <a
//               href="https://www.linkedin.com/in/aaronrileydev/"
//               class="inline-block rounded-full px-3 py-1 font-semibold text-gray-100 mr-2 text-lg hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
//             >
//               <i class="fa-brands fa-linkedin"></i>
//             </a>
//           </div>
//       </div>
//     </div>
//   );
// }
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className="container mx-auto px-20 bg-stone-900 pt-20">
      <div className="text-center text-zinc-100 text-3xl font-semibold pb-5">Get In Touch</div>
      <div className="text-center text-zinc-100 text-xl font-normal mt-4 pb-5">
        If you would like to get in touch with me for anything tech or business related you can reach me by my email below.
      </div>

      <div className="flex justify-center mt-4 pb-5">
        <a
          href="mailto:aaron_lee_gott@hotmail.com?subject=Inquiry%20from%20Portfolio%20Website&body=Hi%20there,%0A%0AI%20found%20your%20website%20and%20I%20have%20some%20questions%20I'd%20like%20to%20discuss.%20%0A%0AHere%20are%20my%20questions:%0A1.%20[Question%20one]%0A2.%20[Question%20two]%0A%0AThank%20you,%0A[Your%20Name]"
          className="px-4 py-2 font-semibold ring ring-cyan-300 text-sm hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 hover:ring active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500 rounded-md shadow-sm"
        >
          Contact Me
        </a>
      </div>

      <hr className="border border-white my-4" />

      <div className="flex flex-col items-center mt-4 pb-5 md:flex-row md:justify-between">
        <div className="md:text-white md:text-lg hidden md:block">
          2023 Aaron Riley. All rights reserved.
        </div>

        <div className="flex text-center place-content-center">
          <a
            href="https://github.com/Aaron-Riley"
            className="inline-block rounded-full px-3 py-1 mr-8 font-semibold text-gray-100 mr-2 text-lg hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://twitter.com/ARileyDev"
            className="inline-block rounded-full px-3 py-1 mr-8 font-semibold text-gray-100 mr-2 text-lg hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com/aaronrileyy_"
            className="inline-block rounded-full px-3 py-1 mr-8 font-semibold text-gray-100 mr-2 text-lg hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/aaronrileydev/"
            className="inline-block rounded-full px-3 py-1 font-semibold text-gray-100 mr-2 text-lg hover:text-gray-700 transition ease-in-out delay-150 hover:bg-cyan-300 active:bg-cyan-500 focus:outline-none focus:ring focus:ring-cyan-500"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>

        <div className="text-white text-lg text-center md:hidden">
          2023 Aaron Riley. All rights reserved.
        </div>
      </div>
    </div>
  );
}
