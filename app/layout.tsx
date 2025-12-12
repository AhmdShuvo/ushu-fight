import type { Metadata } from "next";
import { Kanit, Roboto } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Sword - Boxing & Mixed Martial Arts Fighting Html Template",
  description: "Sword - Boxing & Mixed Martial Arts Fighting Html Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/lightcase.css" />
        <link rel="stylesheet" href="/assets/css/odometer.css" />
        <link rel="stylesheet" href="/assets/css/icomoon.css" />
        <link rel="stylesheet" href="/assets/css/line-awesome.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.css" />
        <link rel="stylesheet" href="/assets/css/aos.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/flipclock.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body className={`${kanit.variable} ${roboto.variable}`}>
        {children}
      </body>
    </html>
  );
}
