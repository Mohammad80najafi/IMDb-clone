import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Providers } from "./Providers";
import Navbar from "./components/Navbar";
import SearchBox from "./components/SearchBox";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });
export const metadata = {
  title: "IMDb clone",
  description: "this is imdb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={vazirmatn.className}>
        <Providers>
          <Header />
          <Navbar />
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
