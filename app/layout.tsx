import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luna Sonora — Light in harmony",
  description: "An independent Australian destination for UMA Mini by Pablo Designs: warm light, 360° sound and connected atmosphere.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
