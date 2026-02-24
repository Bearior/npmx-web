import type { Metadata } from "next";
import { Inter, Sarabun } from "next/font/google";
import "./globals.css";
import TopMenu from "@/components/TopMenu";
import { LangProvider } from "@/providers/LangProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sarabun",
});

export const metadata: Metadata = {
  title: "NPMx Technologies — Innovate. Build. Scale.",
  description:
    "NPMx Technologies delivers modern web development solutions — from static websites to large-scale enterprise systems.",
  openGraph: {
    title: "NPMx Technologies — Innovate. Build. Scale.",
    description: "Custom software, AI solutions, and scalable systems for modern businesses.",
    url: "https://www.npmxtech.com/",
    siteName: "NPMx Technologies",
    images: [
      {
        url: "https://scontent.fbkk12-1.fna.fbcdn.net/v/t39.30808-6/641440044_122093559873261574_3468879041835137306_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=KmRPYopSi3YQ7kNvwEfgUvj&_nc_oc=Adk2FAx7wga9Ts_qU7bcRf6PYfp_WjLFC7jliRJRAFGYsD-KHK2OV0ohtGYT_39v3LojoqZ7hghSPpBs0ORDdti6&_nc_zt=23&_nc_ht=scontent.fbkk12-1.fna&_nc_gid=bxUmxQUMnYTFbtgNYLOZ8g&oh=00_AftH5q2MI9edTvDRon9UvdXH3O-n6YXspm5suXjap6xQ_Q&oe=69A33448", // MUST be absolute URL
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sarabun.variable}`}>
        <LangProvider>
          <TopMenu />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
