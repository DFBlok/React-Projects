import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nextjs ECommerce",
  description: "ECommerce created with nextjs and tailwindcss ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="flex h-screen flex-col">
          <Header />
          <main className="flex-1 wrapper"> {children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
