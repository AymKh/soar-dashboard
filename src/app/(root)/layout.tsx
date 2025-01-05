import type { Metadata } from "next";
import "../globals.css";
import { inter } from "../../lib/fonts";
import TopNav from "@/components/topnav";
import SideNav from "@/components/sidenav";

export const metadata: Metadata = {
  title: "Soar | Financial Freedom",
  description: "Your all-in-one financial management platform.",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        url: '/soar_logo_light.png',
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/soar_logo.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased bg-secondary-100`}
      >
        <main className="lg:flex lg:flex-row justify-start">

          <SideNav />

          <section className="flex flex-col w-full">
            <TopNav />
            {children}
          </section>

        </main>
      </body>
    </html>
  );
}
