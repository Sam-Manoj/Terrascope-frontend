import { Inter, Anton } from "next/font/google";
import "./globals.css";
import "./flowers.css"; 
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Standard font for paragraphs and small text
const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-body'
});

// Ultra-bold block font for the titles
const anton = Anton({ 
  weight: '400', 
  subsets: ["latin"],
  variable: '--font-display'
});

export const metadata = {
  title: "Terrascope",
  description: "Explore the world through our lens",
};

export default function RootLayout({ children }) {
  return (
    // Apply both font variables to the HTML tag
    <html lang="en" className={`${inter.variable} ${anton.variable}`}>
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}