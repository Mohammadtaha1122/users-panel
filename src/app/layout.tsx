import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../style/globals.css";
import UserProvider from "@/context/contextApi";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ['400', '500', '700'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "users panel",
  description: "users panel",
  icons:{
    icon:'/favicon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
        <body
          className={`${poppins.variable} font-sans `}
        >
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
