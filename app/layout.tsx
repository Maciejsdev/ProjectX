import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Container from "@/components/global/Container";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/sidebar/Sidebar";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Project",
  description: "not sure yet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className} style={{ height: "100vh" }}>
          <Providers>
            <Container className="h-full">
              <div className="grid grid-cols-1 sm:grid-cols-[250px_1fr] h-full">
                <div className="col-span-1 sm:col-span-2">
                  <Navbar />
                </div>
                <div className="h-full overflow-y-auto no-scrollbar">
                  <Sidebar />
                </div>
                <div className="p-4 h-full overflow-y-auto">{children}</div>
              </div>
            </Container>
          </Providers>
        </body>
      </html>
    </ClerkProvider>
  );
}
