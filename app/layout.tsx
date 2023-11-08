import { type Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

import Cursor from "~/components/cursor";
import Footer from "~/components/footer";
import Header from "~/components/header";
import MouseContextProvider from "~/context/mouse-context";
import siteMetadata from "~/data/site-metadata";

const NBInternational = localFont({
  src: [
    {
      path: "_fonts/NBInternationalPro-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "_fonts/NBInternationalPro-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "_fonts/NBInternationalPro-Medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-NBInternational",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.title}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: "./",
    siteName: siteMetadata.title,
    // images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: "summary_large_image",
    // images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang={siteMetadata.language}
      className={`${NBInternational.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <link rel="icon" href="/favicons/favicon.svg" sizes="any" />
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/static/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#fff"
      />
      <meta name="msapplication-TileColor" content="#000" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <MouseContextProvider>
        <body>
          <Header />
          <main className="max-w-[1500px] px-2 sm:px-5">{children}</main>
          <Footer />
          <Cursor />
        </body>
      </MouseContextProvider>
    </html>
  );
}
