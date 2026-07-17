import type { Metadata } from "next";
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
    default: "TheSayHi | Live Chat, Lead Qualification & Appointment Scheduling",
    template: "%s | TheSayHi",
  },

  description:
    "Convert more website visitors into customers with TheSayHi. Live chat, lead qualification, appointment scheduling, CRM integrations, and real-time customer conversations designed to increase conversions.",

  keywords: [
    "Live Chat Software",
    "Website Live Chat",
    "Lead Qualification",
    "Appointment Scheduling",
    "CRM Integration",
    "Customer Support",
    "Business Messaging",
    "Sales Chat",
    "Lead Generation",
    "Website Chat Widget",
    "Customer Engagement",
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
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thesayhi.com",
    siteName: "TheSayHi",
    title: "TheSayHi | Turn Website Visitors into Customers",
    description:
      "Engage visitors in real time with live chat, qualify leads instantly, schedule appointments, and connect seamlessly with your CRM.",

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
    title: "TheSayHi | Live Chat & Lead Conversion",
    description:
      "Capture more leads with live chat, appointment scheduling, and CRM integrations.",
    images: ["/og-image.jpg"],
    creator: "@TheSayHi",
  },

  icons: {
    icon: "/fav-icon.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },

  category: "Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
<<<<<<< HEAD
        {children}
=======
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
>>>>>>> 966c11959afa5aaa66be113f1472fe6bea50127b
      </body>
    </html>
  );
}