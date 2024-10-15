import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import { Container, ThemeProvider } from "@mui/material";

import Navbar from "@/components/navbar";

import theme from "@/lib/theme";

import Providers from "./providers";

import "@/globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata: Metadata = {
  title: "Unisenac",
  description: "CRUD Unisenac",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-neutral-100">
        <ThemeProvider theme={theme}>
          <Providers>
            <ToastContainer
              position="top-right"
              hideProgressBar={true}
              theme="colored"
              autoClose={3000}
              icon={false}
            />
            <Navbar />
            <Container
              disableGutters
              sx={{ padding: 2, height: "calc(100vh - 96px)" }}
            >
              {children}
            </Container>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
