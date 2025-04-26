import React from "react";
import Navbar from "../../componets/NavBar";
import Footer from "../../componets/Footer";

export const metadata = {
  title: "Our Clients | JC Safety Surfacing - Trusted by Schools, Developers, and Architects",
  description:
    "JC Safety Surfacing proudly serves schools, architects, developers, military bases, and fitness facilities with premier poured-in-place rubber surfacing solutions.",
  keywords:
    "JC Safety Surfacing clients, school playground surfacing, architects playground safety, developers outdoor spaces, military base surfacing, safe playground design",
  openGraph: {
    title: "JC Safety Surfacing - Our Clients",
    description:
      "Discover how JC Safety Surfacing collaborates with schools, planners, and developers to create safe and durable outdoor environments across the U.S.",
    images: [
      {
        url: "/img/img11.webp",
        width: 1200,
        height: 630,
        alt: "JC Safety Surfacing for Schools and Developers",
      },
    ],
  },
  alternates: {
    canonical: "https://www.jcsafety-surfacing.com/clients",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Clients() {
  return (
    <div itemScope itemType="https://schema.org/WebPage">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.jcsafety-surfacing.com/clients",
          },
          "headline": "JC Safety Surfacing Clients",
          "description":
            "Proudly partnering with schools, developers, and architects to deliver safe and beautiful playground surfaces across the U.S.",
          "image": "/img/img11.webp",
          "author": {
            "@type": "Organization",
            "name": "JC Safety Surfacing",
            "logo": "/img/logo.png",
          },
          "datePublished": "2023-01-01",
        })}
      </script>

      <Navbar />

      <section className="bg-white py-16" itemProp="mainContentOfPage">
        <div className="container mx-auto px-6 text-center mt-24">
          <h1
            className="text-4xl font-bold text-[#4eb3d1] mb-4"
            itemProp="headline"
          >
            JC Safety Surfacing Clients
          </h1>
        </div>
      </section>

      <section className="bg-[#4eb3d1] py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="bg-gray-50 rounded-lg shadow-lg p-6 text-center"
            itemProp="hasPart"
          >
            <img
              src="/img/img11.webp"
              alt="For School Administrators"
              className="mx-auto mb-4"
              loading="lazy"
              itemProp="image"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              For School Administrators, Park & Recreation Directors, Day Care
              Centers & Fitness Facilities Directors, Military Base Commanders
            </h3>
            <p className="text-gray-700">
              With a rich history of installing thousands of playground and play
              area safety surfacing systems across the western United States,
              JC Safety Surfacing stands as a reliable name in the industry.
              Our commitment to excellence is evident in every aspect of our work,
              from the quality of materials we use to the efficiency of our installations.
            </p>
          </div>

          <div
            className="bg-gray-50 rounded-lg shadow-lg p-6 text-center"
            itemProp="hasPart"
          >
            <img
              src="/img/img4.webp"
              alt="For Architects & Planners"
              className="mx-auto mb-4"
              loading="lazy"
              itemProp="image"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              For Architects & Planners
            </h3>
            <p className="text-gray-700">
              JC Safety Surfacing is a trusted partner to architects and municipal
              planners who want to add design and inspiration to rubberized playground
              safety surfacing. Our quality installations last, and we offer material
              samples and attractive literature to support your projects.
            </p>
          </div>

          <div
            className="bg-gray-50 rounded-lg shadow-lg p-6 text-center"
            itemProp="hasPart"
          >
            <img
              src="/img/img15.webp"
              alt="For Developers"
              className="mx-auto mb-4"
              loading="lazy"
              itemProp="image"
            />
            <h3 className="text-lg font-semibold text-black mb-2">
              For Developers
            </h3>
            <p className="text-gray-700">
              JC Safety Surfacing partners with developers to create vibrant,
              functional, and durable outdoor spaces. We offer a wide variety
              of surfacing options to meet both safety and aesthetic goals.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-6 text-center mt-2">
          <p className="text-lg text-gray-600 mb-6" itemProp="description">
            As the premier provider of safety playground and JC Safety Surfacing
            solutions in the United States, JC Safety Surfacing is committed to
            crafting exceptional, safe, and enduring outdoor environments nationwide.
            We prioritize being leaders in delivering premier solutions for outdoor
            spaces, acknowledging the significance of recreation for individuals
            of all ages across the country.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
