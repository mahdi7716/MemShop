import "@/styles/globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

import Contact from "@/Components/Contact";
export default function App({ Component, pageProps }) {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=
              Oswald:wght@200..700&family=Roboto:ital,
              wght@0,100;0,300;0,400;0,500;0,700;0,900
              ;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        rel="stylesheet"
      ></link>

      <Header/>
      <Component {...pageProps} />
      <Footer/>
      {/* <Contact/> */}
    </>
  );
}
