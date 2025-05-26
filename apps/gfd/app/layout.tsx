import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AdobeAnalyticsScript from "./components/adobe-analytics-script";
import AnalyticsProvider from "./components/analytics-provider";
import Navigation from "./components/navigation";
import AnalyticsTerminal from "./components/analytics-terminal";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Adobe Analytics Demo - GFD App",
  description: "Demonstration of Adobe Analytics implementation with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <AdobeAnalyticsScript />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AnalyticsProvider>
          <Navigation />
          <main className="min-h-screen">{children}</main>
          <AnalyticsTerminal />
        </AnalyticsProvider>
      </body>
    </html>
  );
}
