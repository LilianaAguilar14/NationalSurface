import React from "react";
import Navbar from "../../componets/NavBar";
import Footer from "../../componets/Footer";

export const metadata = {
  title: "About Us | JC Safety Surfacing - Playground Safety Experts",
  description:
    "JC Safety Surfacing specializes in poured-in-place rubber surfacing for playgrounds and recreational areas. Safe, ADA-compliant, and eco-conscious since 2003.",
  keywords:
    "poured-in-place rubber, playground surfacing, ADA compliant, safe playgrounds, rubber flooring, JC Safety Surfacing, sustainable playground materials",
  openGraph: {
    title: "About JC Safety Surfacing",
    description:
      "Industry leaders in rubberized playground surfacing, delivering safe and sustainable play environments.",
    images: [
      {
        url: "/img/img10.webp",
        width: 1200,
        height: 630,
        alt: "JC Safety Surfacing Playground Safety",
      },
    ],
  },
  alternates: {
    canonical: "https://www.jcsafety-surfacing.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function About() {
  return (
    <div itemScope itemType="https://schema.org/AboutPage">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AboutPage",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://www.jcsafety-surfacing.com/about",
          },
          headline: "About JC Safety Surfacing",
          description:
            "Since 2003, JC Safety Surfacing has installed safe, ADA-compliant playground surfaces using high-quality and eco-friendly materials.",
          image: "/img/img10.webp",
          author: {
            "@type": "Organization",
            name: "JC Safety Surfacing",
            logo: "/img/logo.png",
          },
          datePublished: "2023-01-01",
        })}
      </script>

      <Navbar />

      <section className="bg-gray-50 py-20 mt-24" itemProp="mainContentOfPage">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:space-x-12 items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1
              className="text-4xl font-bold text-[#4eb3d1] mb-4"
              itemProp="headline"
            >
              JC Safety Surfacing: Redefining Safe and Fun Playgrounds
            </h1>
            <p className="text-lg text-gray-700 mb-6" itemProp="description">
              At JC Safety Surfacing, we stand as pioneers in the manufacturing
              and installation of rubberized playground safety surfacing.
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
              loading="lazy"
              itemProp="image"
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
              className="rounded-lg w-4/5 lg:w-full"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-10">
            <ul
              className="list-disc list-inside text-lg text-white space-y-4"
              itemProp="values"
            >
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
            <div
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg"
              itemProp="hasPart"
            >
              <h3 className="text-xl font-bold text-[#4eb3d1] mb-4">
                Diverse Applications
              </h3>
              <p className="text-gray-700">
                Poured-in-place, tile, and artificial turf systems are available
                in a variety of colors for a wide array of applications. JC
                Safety Surfacing is used at schools, parks, daycare centers,
                fitness facilities, military bases, quick-serve restaurants,
                hospitality, shopping centers, and homeowner playgrounds.
              </p>
            </div>
            <div
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg"
              itemProp="hasPart"
            >
              <h3 className="text-xl font-bold text-[#4eb3d1] mb-4">
                Quality Materials and Installation
              </h3>
              <p className="text-gray-700">
                We use the best materials so our rubber play surfaces are clean,
                safe, and made to last. Our experienced installers know how to
                make a rubber playground safety surface come alive! Our quality
                installations last. Our work is done fast, right, and on budget.
              </p>
            </div>
            <div
              className="p-6 bg-white rounded-lg shadow hover:shadow-lg"
              itemProp="hasPart"
            >
              <h3 className="text-xl font-bold text-[#4eb3d1] mb-4">
                Seamless Project Management
              </h3>
              <p className="text-gray-700">
                JC Safety Surfacing excels in project management by staying on
                top of every detail from bid and specification through
                construction and closeout. We confidently guarantee our work
                because it’s our own people who deliver it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 flex justify-center mb-8 lg:mb-0">
            <img
              src="/img/img15.webp"
              alt="Sustainability"
              className="rounded-lg shadow-lg w-4/5 lg:w-full"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2 text-right">
            <h2 className="text-3xl font-bold text-[#4eb3d1] mb-6">
              Sustainability Matters
            </h2>
            <p className="text-lg text-gray-700 mb-6" itemProp="slogan">
              JC Safety Surfacing adheres to the Consumer Product Safety
              Commission’s guidelines for public playgrounds. We test all raw
              materials for quality and strength, and our upcycling initiatives
              divert thousands of tires from landfills every year.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
