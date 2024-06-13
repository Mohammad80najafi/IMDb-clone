import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({ subsets: ["latin"] });
export const metadata = {
  title: "IMDb clone",
  description: "this is imdb clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={vazirmatn.className}>{children}</body>
    </html>
  );
}
