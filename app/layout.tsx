'use client'
import type { Metadata } from "next";
import { Poppins, Josefin_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./utils/theme-provider";
import { Toaster } from "react-hot-toast";
import { AppProvider } from "./Provider";
import { SessionProvider } from "next-auth/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "600"],
  variable: "--font-Poppins"
})

const josefin_sans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "600"],
  variable: "--font-Josefin_Sans"
});

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${josefin_sans.variable} !bg-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black duration-300`}>
        <AppProvider>
          <SessionProvider>

            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>{children}
              <Toaster position="top-center" reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </AppProvider>
      </body>
    </html>
  );
}
