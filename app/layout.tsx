import { ThemeProvider } from "../components/theme-provider";
import { Toaster } from "../components/ui/sonner";
import { cn } from "../lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Link from "next/link"; // Import Next's Link component
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Coursebite",
  description:
    "The first all-in-one Integrated Learning Environment as a Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
