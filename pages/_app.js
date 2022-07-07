import { SessionProvider } from "next-auth/react";

import { UserProvider } from "../context/actions/UserProvider";

import "../assets/styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </SessionProvider>
  );
}

export default MyApp;
