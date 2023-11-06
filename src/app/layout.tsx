import EczodexContextProvider from "@/context/eczodex-context";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eczodex App",
  description: "Gateway to the New Financial Economy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EczodexContextProvider>
          {children}
        </EczodexContextProvider>
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
      </body>
    </html>
  );
}
