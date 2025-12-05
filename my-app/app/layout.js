import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Consola Mental Health | Expert Mental Health Services in MD & TX",
  description:
    "Consola Mental Health provides compassionate, evidence-based care for anxiety, depression, PTSD, ADHD, and more. Book an appointment today.",
  applicationName: "Consola Mental Health",
  keywords:
    "mental health, therapy, counseling, depression, anxiety, PTSD, ADHD, bipolar disorder, schizophrenia, Maryland, Texas, psychiatric care",
  authors: [
    {
      name: "Consola Mental Health",
      url: "https://www.consolamentalhealth.com",
    },
  ],
  publisher: "Consola Mental Health",
  metadataBase: new URL("https://www.consolamentalhealth.com"),
  alternates: {
    canonical: "https://www.consolamentalhealth.com",
  },
  openGraph: {
    title: "Consola Mental Health | Expert Mental Health Services",
    description:
      "Providing compassionate, holistic mental health care including therapy for depression, anxiety, ADHD, PTSD, and more. Serving MD & TX.",
    url: "https://www.consolamentalhealth.com",
    siteName: "Consola Mental Health",
    images: [
      {
        url: "https://www.consolamentalhealth.com/images/og-image.jpg", // replace with actual image
        width: 1200,
        height: 630,
        alt: "Consola Mental Health",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consola Mental Health | Expert Mental Health Services",
    description:
      "Compassionate care for anxiety, depression, ADHD, PTSD, and more. Book your appointment at Consola Mental Health today.",
    images: ["https://www.consolamentalhealth.com/images/og-image.jpg"], // replace with actual image
    creator: "@ConsolaHealth", // optional Twitter handle
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              name: "Consola Mental Health",
              url: "https://www.consolamentalhealth.com",
              logo: "https://www.consolamentalhealth.com/images/logo.png",
              sameAs: [
                "https://www.facebook.com/ConsolaMentalHealth",
                "https://twitter.com/ConsolaHealth",
                "https://www.linkedin.com/company/consola-mental-health",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-443-739-5882",
                  contactType: "customer service",
                  email: "info@consolamentalhealth.com",
                  areaServed: "US",
                  availableLanguage: ["English"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "9331 Liberty Rd",
                addressLocality: "Randallstown",
                addressRegion: "MD",
                postalCode: "21133",
                addressCountry: "US",
              },
              medicalSpecialty: "Psychiatric",
              department: [
                {
                  "@type": "MedicalDepartment",
                  name: "Mental Health Services",
                  availableService: [
                    { "@type": "MedicalService", name: "Depression Treatment" },
                    { "@type": "MedicalService", name: "Anxiety Therapy" },
                    { "@type": "MedicalService", name: "PTSD Treatment" },
                    { "@type": "MedicalService", name: "ADHD Support" },
                    {
                      "@type": "MedicalService",
                      name: "Bipolar Disorder Care",
                    },
                  ],
                },
              ],
            }),
          }}
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="google-site-verification"
          content="yeUCAwf-oJj922VY2rDTKRDRw3UE0aXrgp1yU6tqysQ"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              name: "Consola Mental Health",
              url: "https://www.consolamentalhealth.com",
              logo: "https://www.consolamentalhealth.com/images/logo.png",
              sameAs: [
                "https://www.facebook.com/ConsolaMentalHealth",
                "https://twitter.com/ConsolaHealth",
                "https://www.linkedin.com/company/consola-mental-health",
              ],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+1-443-739-5882",
                  contactType: "customer service",
                  email: "info@consolamentalhealth.com",
                  areaServed: "US",
                  availableLanguage: ["English"],
                },
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "9331 Liberty Rd",
                addressLocality: "Randallstown",
                addressRegion: "MD",
                postalCode: "21133",
                addressCountry: "US",
              },
              medicalSpecialty: "Psychiatric",
              department: [
                {
                  "@type": "MedicalDepartment",
                  name: "Mental Health Services",
                  availableService: [
                    { "@type": "MedicalService", name: "Depression Treatment" },
                    { "@type": "MedicalService", name: "Anxiety Therapy" },
                    { "@type": "MedicalService", name: "PTSD Treatment" },
                    { "@type": "MedicalService", name: "ADHD Support" },
                    {
                      "@type": "MedicalService",
                      name: "Bipolar Disorder Care",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
