import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terraform Task-2",
  description: "Terraform Task-2",
  generator: "Terraform Task-2",
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
