import localFont from "next/font/local";

export const coiny = localFont({
  src: [
    {
      path: "../assets/fonts/Coiny-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-coiny",
});