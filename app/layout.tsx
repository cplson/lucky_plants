import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter, Cormorant } from "next/font/google";
import Socials from "@/components/Socials";
import Cart from "@/components/Cart";
import Link from "next/link";
import { cookies } from "next/headers";
import DropdownMenu from "@/components/DropdownMenu";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import {AppProps} from "next/app"
import Providers from "@/components/Providers";
import options from "./api/auth/[...nextauth]/options";
import {getServerSession} from "next-auth/next"
import AuthProviders from "./context/AuthProvider"
import SignIOBtn from "@/components/SignIOBtn";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});
const cormorant = Cormorant({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata = {
  title: "Lucky Plants",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  // const session = await getServerSession(options)
  // console.log('session in layout:', session)
  return (
    <html
      lang="en"
      id="root"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="flex-column justify-center p-4 sm:w-4/5 font-sans bg-gradient-to-r from-lime-100 to-green-100  max-w-7xl mx-auto">
        <AuthProviders>
        {/* TOP MENU */}
        <div className="relative">
          <div className="flex justify-between items-center invisible md:visible absolute w-full">
            <Link href="/home" className="">
              <h1 className="font-serif text-4xl font-semibold text-green-900">
                Lucky
              </h1>
            </Link>
            {/* NAVIGATION */}
            <div className="">
              <NavBar isMobile={false}/>
            </div>
            {/* CART */}
            <Link href="/cart" className="">
              <Cart  />
            </Link>
            <SignIOBtn />
          </div>
          <div className="flex justify-between items-center md:invisible absolute w-full">
            <DropdownMenu />
            <Link href="/home" className="">
              <h1 className="font-serif text-4xl font-semibold text-green-900">
                Lucky
              </h1>
            </Link>
            <Link href="/cart" className="">
              <Cart  />
            </Link>
            <SignIOBtn />
          </div>
        </div>
        <div className="mt-20 w-full">{children}</div>
        <footer className="">
          <Socials />
        </footer>
        </AuthProviders>
      </body>
    </html>
  );
}
