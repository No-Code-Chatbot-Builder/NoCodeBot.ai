
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@aws-amplify/ui-react/styles.css';
import clsx from "clsx";
import { ThemeProvider } from "@/providers/theme-provider";
import { ModalProvider } from "@/providers/modal-provider";
import { Toaster } from "@/components/ui/sonner";

import AmplifyClient from "@/components/amplifyClient";

import { Amplify } from "aws-amplify";
import amplifyconfiguration from "../aws-exports";

Amplify.configure(amplifyconfiguration);

const font = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NoCodeBot.ai",
  description: "Make Custom Chatbots for your everyday tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(font.className, " ")}>
        <AmplifyClient />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ModalProvider>{children}</ModalProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
