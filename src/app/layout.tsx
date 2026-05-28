import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bharth K S | AI Engineer & Robotics Researcher",
  description:
    "AI Engineer and MSc Robotics student specializing in Generative AI, LLM applications, Responsible AI, and intelligent robotic systems.",
  keywords: [
    "AI Engineer",
    "Robotics",
    "LLM",
    "Generative AI",
    "Responsible AI",
    "Machine Learning",
    "ROS",
    "Portfolio",
  ],
  authors: [{ name: "Bharth K S" }],
  openGraph: {
    title: "Bharth K S | Robotics & AI Engineer",
    description:
      "AI Engineer specializing in Generative AI, LLM applications, Responsible AI, and robotics.\n Robotics Engineer with a focus on intelligent robotic systems, IoT, HRI, OpenCV and ROS.",
    url: "https://bharthks.vercel.app",
    siteName: "Bharth K S Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharth K S | Robotics & AI Engineer",
    description:
      "AI Engineer specializing in Generative AI, LLM applications, Responsible AI, and robotics.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
