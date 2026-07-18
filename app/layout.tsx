import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "./Components/navbar";
import Footer from "./Components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thesayhi.com"),

  title: {
    default:
      "TheSayHi | Website Live Chat, Lead Qualification & Appointment Scheduling",
    template: "%s | TheSayHi",
  },

  description:
    "TheSayHi helps businesses engage website visitors in real time, qualify leads, schedule appointments, and integrate conversations directly into your CRM to increase conversions.",

  keywords: [
    "website live chat",
    "live chat software",
    "business chat",
    "lead generation",
    "lead qualification",
    "appointment scheduling",
    "CRM integration",
    "customer engagement",
    "website messaging",
    "sales automation",
    "real-time chat",
    "lead capture",
    "online chat",
    "law firm live chat",
    "medical live chat",
    "real estate live chat",
    "insurance live chat",
    "marketing agency chat",
    "TheSayHi",
  ],

  authors: [
    {
      name: "TheSayHi",
      url: "https://thesayhi.com",
    },
  ],

  creator: "TheSayHi",
  publisher: "TheSayHi",
  applicationName: "TheSayHi",

  alternates: {
    canonical: "https://thesayhi.com",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thesayhi.com",
    title:
      "TheSayHi | Website Live Chat, Lead Qualification & Appointment Scheduling",
    description:
      "Convert more visitors into customers with real-time live chat, lead qualification, appointment scheduling, and CRM integration.",
    siteName: "TheSayHi",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TheSayHi",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "TheSayHi | Website Live Chat, Lead Qualification & Appointment Scheduling",
    description:
      "Engage visitors instantly, qualify leads, schedule appointments and integrate with your CRM.",
    images: ["/og-image.jpg"],
    creator: "@TheSayHi",
  },

  icons: {
    icon: "/fav-icon.png",
    shortcut: "/fav-icon.png",
    apple: "/apple-touch-icon.png",
  },

  category: "Business",

  verification: {
    // Add your verification codes later
    google: "",
    // yandex: "",
    // yahoo: "",
    // other: {}
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TheSayHi",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: "https://thesayhi.com",
    logo: "https://thesayhi.com/logo.png",
    image: "https://thesayhi.com/og-image.jpg",
    description:
      "TheSayHi helps businesses engage website visitors, qualify leads, schedule appointments, and integrate with CRM platforms.",

    publisher: {
      "@type": "Organization",
      name: "TheSayHi",
      url: "https://thesayhi.com",
      logo: {
        "@type": "ImageObject",
        url: "https://thesayhi.com/logo.png",
      },
    },
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-900">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}