import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import type { ReactNode } from "react";

import Navbar from "@/components/navbar";
import { Html } from "next/document"

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Rodtang NextJS",
  description: "NextJS 15 tutorial",
  keywords: "Rodtang,Camping,Thailand,NextJS",
};

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
const layout = ({children}:{children:ReactNode}) => {
  return(
    <html>
      <body>
        <Navbar/>
        {children}
      </body>
    </html>
  )
}
export default layout