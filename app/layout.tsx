import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter, Cormorant } from "next/font/google";
import Socials from "@/components/Socials";
import Cart from "@/components/Cart";
import Link from "next/link";
import { cookies } from "next/headers";
import DropdownMenu from "@/components/DropdownMenu";

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
  const cookie = cookies();
  const cookieList = cookie.getAll();
  const cookieString = cookieList.map((c) => `${c.name}=${c.value}`).join("; ");
  return (
    <html
      lang="en"
      id="root"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="flex-column justify-center p-4 sm:w-4/5 font-sans bg-gradient-to-r from-lime-100 to-green-100  max-w-7xl mx-auto">
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
              <Cart cookieString={cookieString} />
            </Link>
          </div>
          <div className="flex justify-between items-center md:invisible absolute w-full">
            <DropdownMenu />
            <Link href="/home" className="">
              <h1 className="font-serif text-4xl font-semibold text-green-900">
                Lucky
              </h1>
            </Link>
            <Link href="/cart" className="">
              <Cart cookieString={cookieString} />
            </Link>
          </div>
        </div>
        <div className="mt-20 w-full">{children}</div>
        <footer className="">
          <Socials />
        </footer>
      </body>
    </html>
  );
}
