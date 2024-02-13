import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";
import { Authenticator } from "@aws-amplify/ui-react";
import AutheicatorProvider from "@/providers/authenticator-provider";

Amplify.configure(awsExports, { ssr: true });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Authenticator.Provider>
      <main className="scroll-smooth antialiased [font-feature-settings:'ss01']">
        <Component {...pageProps} />
      </main>
    </Authenticator.Provider>
  );
}

export default MyApp;
