import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Self-hosted via next/font — no request sent to Google at runtime
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Christopher Parker | IAM Engineer",
  description:
    "Personal portfolio of CJ Parker — IAM engineer building identity security tools, Okta automation, and infrastructure as code.",
  metadataBase: new URL("https://cjparker102.dev"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={jetbrains.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
