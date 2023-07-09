import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter, Cormorant } from "next/font/google";
import Socials from "@/components/Socials";
import Cart from "@/components/Cart";
import Link from "next/link";
import clsx from "clsx";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className=" p-8 font-sans bg-gradient-to-r from-lime-100 to-green-100">
        {/* TOP MENU */}
        {/* <div className={clsx("grid no-wrap grid-cols-5 items-center lg:grid-cols-3")}> */}
        <div className={clsx("flex justify-between items-center")}>

          <Link href="/home" className=''>
            <h1 className="font-serif text-4xl">Lucky</h1>
          </Link>
          {/* NAVIGATION */}
          {/* <div className="col-span-3 lg:col-span-1"> */}
          <div className="">

            <NavBar />
          </div>
          <div className="flex justify-end">
            {/* Social list */}
            <Socials />

            {/* CART */}
            <Link href="/cart">
              <Cart />
            </Link>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
