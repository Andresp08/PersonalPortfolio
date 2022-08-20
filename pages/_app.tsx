import "../styles/styles.scss";
import type { AppProps } from "next/app";
import { StyledProvider } from "theme";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {}, []);
  return (
    <StyledProvider>
      <Component {...pageProps} />
    </StyledProvider>
  );
}

export default MyApp;
