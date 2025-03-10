import React from "react";
import Navbar from "../../componets/NavBar";
import Footer from "../../componets/Footer";

export default function Clients() {
  return (
    <div>
      <Navbar />

      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center mt-24">
          <h1 className="text-4xl font-bold text-[#4eb3d1] mb-4">
            Recreational Surfacing INC Clients
          </h1>
         
        </div>
      </section>

      <section className="bg-[#4eb3d1] py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
            <img
              src="/img/img11.webp"
              alt="For School Administrators"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              For School Administrators, Park & Recreation Directors, Day Care
              Centers & Fitness Facilities Directors, Military Base Commanders
            </h3>
            <p className="text-gray-700">
              With a rich history of installing thousands of playground and play
              area safety surfacing systems across the western United States,
              Recreational Surfacing INC stands as a reliable name in the
              industry. Our commitment to excellence is evident in every aspect
              of our work, from the quality of materials we use to the
              efficiency of our installations.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
            <img
              src="/img/img4.webp"
              alt="For Architects & Planners"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              For Architects & Planners
            </h3>
            <p className="text-gray-700">
              Recreational Surfacing INC is a trusted partner to architects and
              municipal planners who want to add design and inspiration to
              rubberized playground safety surfacing. Our experienced installers
              know how to make a rubber playground safety surface come alive!
              More importantly, our quality installations last. We use the best
              materials, so our rubber play surfaces are clean, safe, and made
              to last. Recreational Surfacing INC comes in many colors, and we
              have actual material samples and attractive literature you can use
              to make presentations.
            </p>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-lg p-6 text-center">
            <img
              src="/img/img15.webp"
              alt="For Developers"
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              For Developers
            </h3>
            <p className="text-gray-700">
              Recreational Surfacing INC is a trusted partner to developers who
              want to create vibrant, functional, and durable outdoor spaces. We
              offer a wide variety of materials, colors, and designs that meet
              all safety and aesthetic requirements. Our team ensures seamless
              execution and lasting results.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center mt-2">
          <p className="text-lg text-gray-600 mb-6">
            As the premier provider of safety playground and recreational
            surfacing solutions in the United States, Recreational Surfacing INC
            is committed to crafting exceptional, safe, and enduring outdoor
            environments nationwide. We prioritize being leaders in delivering
            premier solutions for outdoor spaces, acknowledging the significance
            of recreation for individuals of all ages across the country.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
