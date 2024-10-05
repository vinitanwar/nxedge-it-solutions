import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
// import TopBar from "./Components/Topbar";
// import 'aos/dist/aos.css'; // AOS CSS
// import AOS from 'aos';
// import { useEffect } from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <TopBar/> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
