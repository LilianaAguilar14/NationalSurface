"use client";
import { useState } from "react";
import Navbar from "../../componets/NavBar";
import Footer from "../../componets/Footer";

export const metadata = {
  title: "Contact Us | JC Safety Surfacing - Playground Safety Experts",
  description:
    "Get in touch with JC Safety Surfacing for expert poured-in-place rubber playground surfacing solutions. Call, email, or fill out our contact form today.",
  keywords:
    "contact JC Safety Surfacing, playground surfacing experts, poured-in-place rubber, rubber flooring contact, playground safety contact, rubber surfaces installer",
  openGraph: {
    title: "Contact JC Safety Surfacing",
    description:
      "Contact JC Safety Surfacing today for professional playground surfacing solutions, tailored to your safety and design needs.",
    images: [
      {
        url: "/img/img11.webp",
        width: 1200,
        height: 630,
        alt: "JC Safety Surfacing Contact",
      },
    ],
  },
  alternates: {
    canonical: "https://www.jcsafety-surfacing.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !phone.trim()) {
      alert("All fields are required.");
      return;
    }

    const subject = `New Contact: ${firstName} ${lastName}`;
    const text = `
      The client ${firstName} ${lastName} wants to get in touch with you.

      Here are their contact details:
      - Email: ${email}
      - Phone: ${phone}
    `;
    const html = `
      <p>The client <strong>${firstName} ${lastName}</strong> wants to get in touch with you.</p>
      <p><strong>Contact details:</strong></p>
      <ul>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
      </ul>
    `;

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ subject, text, html }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(`Error sending email: ${errorData.error}`);
        return;
      }

      const data = await response.json();
      alert(data.message);

      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the email.");
    }
  };

  return (
    <div itemScope itemType="https://schema.org/ContactPage">
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://www.jcsafety-surfacing.com/contact",
          },
          "headline": "Contact JC Safety Surfacing",
          "description":
            "Reach out to JC Safety Surfacing to discuss your playground surfacing needs. Experts in poured-in-place rubber safety surfaces.",
          "image": "/img/img11.webp",
          "author": {
            "@type": "Organization",
            "name": "JC Safety Surfacing",
            "logo": "/img/logo.png",
          },
          "datePublished": "2023-01-01",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-516-242-7155",
            "contactType": "customer support",
            "email": "info.jcsafetysurfacing@gmail.com",
          },
        })}
      </script>

      <Navbar />

      <section className="bg-white py-20 mt-24" itemProp="mainContentOfPage">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold text-black text-center mb-8" itemProp="headline">
            Contact
          </h1>
          <p className="text-lg text-gray-700 text-center mb-8" itemProp="description">
            Thank you for your interest in JC Safety Surfacing! We would
            love to talk to you about your upcoming project or any questions you
            might have about our products. Feel free to give us a call or
            complete the form below.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Columna de datos y mapa */}
            <div className="text-center md:text-left" itemProp="hasPart">
              <h2 className="text-xl font-bold text-black mb-4">
                JC Safety Surfacing
              </h2>
              <p className="text-gray-700">
                252 Maple Place, Mineola, New York 11501
              </p>
              <p className="text-gray-700">
                Phone:{" "}
                <a href="tel:+15162427155" className="text-blue-500 underline">
                  (516) 242-7155
                </a>
              </p>
              <p className="text-gray-700">
                Email:{" "}
                <a
                  href="mailto:info.jcsafetysurfacing@gmail.com"
                  className="text-blue-500 underline"
                >
                  info.jcsafetysurfacing@gmail.com
                </a>
              </p>

              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps?q=252+Maple+Place,+Mineola,+New+York+11501&output=embed"
                  width="100%"
                  height="300"
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="bg-gray-50 p-6 rounded-lg shadow-lg"
                itemProp="potentialAction"
              >
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-bold text-gray-700"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold text-gray-700"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone"
                    className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className="bg-[#4eb3d1] text-white font-bold py-2 px-4 rounded-lg hover:bg-cyan-600 transition w-full"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
