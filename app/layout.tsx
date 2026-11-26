import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mirza Ahmar Baig — MERN Developer",
  description: "Selected frontend and MERN development work by Mirza Ahmar Baig.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
