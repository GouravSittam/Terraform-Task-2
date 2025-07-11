import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Terraform AWS Infrastructure | Gourav Sittam",
    template: "%s | Terraform AWS Infrastructure",
  },
  description:
    "Secure Ubuntu EC2 instance deployment using Terraform Infrastructure as Code (IaC) with proper security groups for SSH and HTTPS access. Built by Gourav Sittam.",
  keywords: [
    "Terraform",
    "AWS",
    "Infrastructure as Code",
    "IaC",
    "EC2",
    "Ubuntu",
    "DevOps",
    "Cloud Computing",
  ],
  authors: [{ name: "Gourav Sittam" }],
  creator: "Gourav Sittam",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://terraform-task-2.vercel.app",
    title: "Terraform AWS Infrastructure | Gourav Sittam",
    description:
      "Secure Ubuntu EC2 instance deployment using Terraform Infrastructure as Code (IaC)",
    siteName: "Terraform AWS Infrastructure",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terraform AWS Infrastructure | Gourav Sittam",
    description:
      "Secure Ubuntu EC2 instance deployment using Terraform Infrastructure as Code (IaC)",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
