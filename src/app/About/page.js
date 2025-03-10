import React from "react";
import Navbar from "../../componets/NavBar";
import Footer from "../../componets/Footer";

export default function About() {
  return (
    <div>
      <Navbar />

      <section className="bg-gray-50 py-20 mt-24">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:space-x-12 items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl font-bold text-[#4eb3d1] mb-4">
              National Safety Surfaces: Redefining Safe and Fun Playgrounds
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              At National Safety Surfaces, we stand as pioneers in the
              manufacturing and installation of rubberized playground safety
              surfacing.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our commitment to safety is paramount, and we achieve this by
              utilizing a blend of pre-consumer and post-consumer reclaimed
              material components. As industry innovators, we take pride in
              crafting surfaces that not only provide a cushioned and secure
              play area but also contribute to environmental sustainability.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="/img/img10.webp"
              alt="Playground Safety"
              className="rounded-lg shadow-lg w-4/5 lg:w-full"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#4eb3d1] py-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:space-x-12 items-center">
          <div className="lg:w-1/2 flex justify-center mb-12 lg:mb-0">
            <img
              src="/img/values.webp"
              alt="Core Values"
              className="rounded-lg  w-4/5 lg:w-full"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <ul className="list-disc list-inside text-lg text-white space-y-4">
              <li>
                <strong>Safety Paramount:</strong> Quality materials, rigorous
                standards, accessibility for all users.
              </li>
              <li>
                <strong>Quality:</strong> Ensuring excellence in beauty,
                durability, safety, and versatility.
              </li>
              <li>
                <strong>Communication:</strong> Transparent, clear, and
                responsive to client needs and concerns.
              </li>
              <li>
                <strong>Team Work:</strong> Expecting teamwork with our partners
                and employees.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-950 mb-10">
            Detailed Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#4eb3d1]  mb-4">
                Diverse Applications
              </h3>
              <p className="text-gray-700">
                Poured-in-place, tile, and artificial turf systems are available
                in a variety of colors for a wide array of applications.
                National Safety Surfaces is used at schools, parks, daycare
                centers, fitness facilities, military bases, quick-serve
                restaurants, hospitality, shopping centers, and homeowner
                playgrounds. Our porous surfaces are highly weather-resistant
                and provide customers with a virtually maintenance-free play
                surface.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#4eb3d1]  mb-4">
                Quality Materials and Installation
              </h3>
              <p className="text-gray-700">
                We use the best materials so our rubber play surfaces are clean,
                safe, and made to last. Our experienced installers know how to
                make a rubber playground safety surface come alive! Our quality
                installations last. Our work is done fast, right, and on budget.
                Customers appreciate our friendly service and helpful support –
                before, during, and after installation.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg">
              <h3 className="text-xl font-bold text-[#4eb3d1]  mb-4">
                Seamless Project Management
              </h3>
              <p className="text-gray-700">
                National Safety Surfaces excels in project management by
                staying on top of every detail from bid and specification
                through construction and closeout to carefully adhering to
                schedules and budgets. We confidently guarantee our work because
                it’s our own people who deliver the quality product and service.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
  <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:items-center lg:space-x-12">
    {/* Imagen alineada a la izquierda */}
    <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
      <img
        src="/img/img15.webp"
        alt="Sustainability"
        className="rounded-lg shadow-lg w-4/5 lg:w-full"
      />
    </div>

    {/* Texto alineado a la derecha */}
    <div className="lg:w-1/2 text-right">
      <h2 className="text-3xl font-bold text-[#4eb3d1] mb-6">
        Sustainability Matters
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        National Safety Surfaces adheres to the Consumer Product Safety
        Commission’s guidelines for public playgrounds. We also perform
        continual testing on all raw materials used in our systems for
        quality, properties, and strength. Our commitment to sustainability
        is reflected in our upcycling initiatives, which divert thousands of
        tires from landfills every year.
      </p>
    </div>
  </div>
</section>


      <Footer />
    </div>
  );
}
