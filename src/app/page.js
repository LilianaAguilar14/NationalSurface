"use client";

import Link from "next/link";
import Navbar from "../componets/NavBar";
import Footer from "../componets/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />

      {/* Sección principal */}
      <section className="bg-gray-50 pt-44 py-5">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
          {/* Imagen del lado izquierdo */}
          <div className="lg:w-1/2 flex justify-start">
            <div className="relative">
              <img
                src="/img/img2.jpg"
                alt="Playground Surface"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Texto del lado derecho */}
          <div className="lg:w-1/2 text-left mb-8 lg:mb-0 lg:ml-8">
            <h1 className="text-4xl font-semibold text-[#4eb3d1] mb-4">
              Safe, fun, and engaging play areas designed for active recreation
            </h1>
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
                src: "/img/img6.webp",
                title: "Poured-In-Place Rubber",
                link: "/Systems#poured-in-place",
              },
              {
                src: "/img/img7.webp",
                title: "Synthetic Turf",
                link: "/Systems#artificial-turf",
              },
              {
                src: "/img/img8.webp",
                title: "Bonded Rubber Mulch",
                link: "/Systems#bonded-rubber-mulch",
              },
              {
                src: "/img/img9.webp",
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
              src="/img/img11.webp"
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
