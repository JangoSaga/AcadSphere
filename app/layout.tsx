import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Acadsphere",
    default: "Acadsphere",
  },
  description:
    "Acadsphere is a comprehensive college ERP system designed to streamline academic and administrative processes for educational institutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
