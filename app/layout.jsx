import "./globals.css";
import { Roboto } from "next/font/google";
import NavBar from "./components/NavBar";

const roboto = Roboto({
  weight: ["400", "700"],
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Web & Cloud Solutions | Aaron Riley",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-neutral-900">
      <head>
        <title>Web & Cloud Solutions | Aaron Riley</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Next.js App" />
        <link rel="icon" href="/logo.svg" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="bg-neutral-900">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
