"use client";

import Link from "next/link";
import Navbar from "../componets/NavBar";
import Footer from "../componets/Footer";

const featuredProjects = [
  {
    title: "Lauritzen Gardens",
    location: "Omaha, Nebraska",
    completion: "April 2025",
    image: "/img/home/surface-america-projects/lauritzen-gardens.jpeg",
    href: "https://www.surfaceamerica.com/lauritzen-gardens/",
  },
  {
    title: "Mississippi Gateway Regional Park",
    location: "Brooklyn Park, Minnesota",
    completion: "June 2025",
    image:
      "/img/home/surface-america-projects/mississippi-gateway-regional-park.jpeg",
    href: "https://www.surfaceamerica.com/mississippi-gateway-regional-park/",
  },
];

export default function HomePage() {
  return (
    <div>
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-b from-[#e8f7fb] via-white to-gray-50 pb-16 pt-40 sm:pb-20 sm:pt-44">
        <div
          className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-[#4eb3d1]/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="container relative mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-700">
              Featured installations
            </p>
            <h1 className="mb-4 text-3xl font-bold text-[#4eb3d1] sm:text-4xl lg:text-5xl">
              Our Work with Surface America
            </h1>
            <p className="text-lg leading-relaxed text-blue-950">
              Explore two recently completed PlayBound Poured-in-Place projects
              installed by JC Safety Surfacing in collaboration with our
              principal contractor, Surface America.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-cyan-100 border-t-4 border-t-[#4eb3d1] bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} project on Surface America`}
                  className="block focus:outline-none focus-visible:ring-4 focus-visible:ring-[#4eb3d1]"
                >
                  <div className="h-64 overflow-hidden sm:h-80">
                    <img
                      src={project.image}
                      alt={`${project.title} playground surfacing installed by JC Safety Surfacing`}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="mb-4 flex flex-wrap gap-2 text-sm font-medium text-gray-600">
                      <span className="rounded-full bg-cyan-50 px-3 py-1 text-cyan-800">
                        {project.location}
                      </span>
                      <span className="rounded-full bg-gray-100 px-3 py-1">
                        Completed {project.completion}
                      </span>
                    </div>
                    <h2 className="mb-2 text-2xl font-bold text-blue-950 transition group-hover:text-[#3193b0]">
                      {project.title}
                    </h2>
                    <p className="mb-6 text-gray-600">
                      PlayBound Poured-in-Place safety surfacing
                    </p>
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#4eb3d1] px-5 py-2.5 font-semibold text-white transition group-hover:bg-cyan-700">
                      View project on Surface America
                      <span
                        className="transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        &rarr;
                      </span>
                    </span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Sección principal */}
      <section className="bg-gray-50 py-10">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
          {/* Imagen del lado izquierdo */}
          <div className="lg:w-1/2 flex justify-start">
            <div className="relative">
              <img
                src="/img/home/img2.jpg"
                alt="Playground Surface"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Texto del lado derecho */}
          <div className="lg:w-1/2 text-left mb-8 lg:mb-0 lg:ml-8">
            <h2 className="text-4xl font-semibold text-[#4eb3d1] mb-4">
              Safe, fun, and engaging play areas designed for active recreation
            </h2>
            <p className="text-lg text-blue-950 mb-6">
              Secure and joyful play areas: JC Safety Surfacing where
              innovation and protection come together in every layer.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de grid con opciones */}
      <section className="bg-white py-5">
        <div className="container mx-auto px-6">
          <p className="text-lg text-gray-600 mb-6">
            At JC Safety Surfacing, we understand our role in the
            playground and recreation surfacing industry: deliver a beautiful,
            durable, safe, and versatile surface for playgrounds, splash pads,
            fitness trails, jogging or walking paths, or other indoor/outdoor
            areas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                src: "/img/home/img6.webp",
                title: "Poured-In-Place Rubber",
                link: "/Systems#poured-in-place",
              },
              {
                src: "/img/home/img7.webp",
                title: "Synthetic Turf",
                link: "/Systems#artificial-turf",
              },
              {
                src: "/img/home/img8.webp",
                title: "Bonded Rubber Mulch",
                link: "/Systems#bonded-rubber-mulch",
              },
              {
                src: "/img/home/img9.webp",
                title: "Equipment Installation",
                link: "/Systems#critical-fall-heights",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-lg p-6 shadow hover:shadow-lg transition"
              >
                <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-lg mb-4">
                  <img
                    src={card.src}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {card.title}
                </h3>
                <Link
                  href={card.link}
                  className="bg-[#4eb3d1] text-white py-2 px-4 rounded-full hover:bg-cyan-700 transition"
                >
                  Learn more
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección "Brilliant Design From Start to Finish" */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          {/* Texto alineado a la izquierda */}
          <div className="lg:w-1/2 text-left mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-8 text-[#4eb3d1]">
              Brilliant Design From Start to Finish
            </h2>
            <p className="text-lg text-gray-600 mb-6">
            JC Safety Surfacing is your premier nationwide
              industry-leading authority for all your commercial playground
              surfacing, sports surfacing, and recreational surfacing needs.
              With 10 years of playground safety surfacing experience, our
              mission is to provide you with the highest quality playground
              safety surface products, service, and installation at an
              affordable investment while promoting the importance of safety on
              playgrounds all across the world.
            </p>
          </div>

          {/* Imagen alineada a la derecha */}
          <div className="lg:w-1/2 flex justify-end">
            <img
              src="/img/home/homefinal.JPG"
              alt="Design Process"
              className="rounded-lg shadow-lg w-full lg:w-3/4 object-cover"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
