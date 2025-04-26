import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "JC Safety Surfacing| Safety Surfaces for Playgrounds",
  description: "Explore JC Safety Surfacing, leaders in safety surfaces for playgrounds and recreational areas. Durable, safe, and customizable solutions.",
  icons: {
    icon: "/favicon.ico", 
  },
  openGraph: {
    title: "JC Safety Surfacing",
    description: "Leaders in safety surfaces for playgrounds and recreational areas.",
    url: "https://www.nationalsafetysurfaces.com",
    images: [
      {
        url: "img/logo2.png", 
        width: 1200,
        height: 630,
        alt: "JC Safety Surfacing - Playground Surfaces",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.nationalsafetysurfaces.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "National Safety Surfaces",
              url: "https://www.nationalsafetysurfaces.com",
              logo: "https://www.nationalsafetysurfaces.com/logo.png",
              sameAs: [
                "https://www.facebook.com/nationalsafetysurfaces",
                "https://www.twitter.com/nationalsafetysurfaces",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-555-5555",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
