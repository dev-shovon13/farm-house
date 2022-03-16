import "../styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";

import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="https://i.ibb.co/SNdcNJ9/logo.png" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
