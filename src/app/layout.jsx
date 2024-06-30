import { Josefin_Sans } from "next/font/google";

import Logo from "@/components/Logo";
import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import Header from "@/components/Header";
import { ReservationProvider } from "@/context/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The Wild Oasis",
  title: {
    template: "%s - The Wild Oasis",
    default: "Welcome | The Wild Oasis ",
  },

  description: `Luxurious cabin hotel, located in the heart of the Italian Dolomites, 
    surrounded by beautiful mountain and dark forest`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 
        min-h-screen flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
