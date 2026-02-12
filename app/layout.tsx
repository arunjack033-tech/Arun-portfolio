import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Arun Kumar | Full Stack Developer",
  description:
    "Full Stack Developer specializing in Python, Django, ASP.NET, Angular, and SQL-based systems. Building scalable, secure, and performance-driven web applications.",
  keywords: [
    "Full Stack Developer",
    "Python Developer",
    "Django Developer",
    "ASP.NET Developer",
    "Angular Developer",
    "SQL Server",
  ],
  authors: [{ name: "Arun Kumar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
