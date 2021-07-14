import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../src/theme/index";

import Navigation from "../src/components/navigation/HorizontalNav2";
import Footer from "../src/components/footers/Footer4";

import { PageTransition } from "next-page-transitions";
import AOS from "aos";
import { useRouter } from "next/router";
import "aos/dist/aos.css";

import "slick-carousel/slick/slick.scss";
import "react-modal-video/scss/modal-video.scss";
import "../styles/style.scss";

export default function MyApp(props) {
  const { Component, pageProps } = props;
  const router = useRouter();

  const findPathname = () => {
    if (router.pathname === "/") {
      return 0;
    } else if (router.pathname === "/about") {
      return 1;
    } else if (router.pathname === "/services") {
      return 2;
    } else if (router.pathname === "/career") {
      return 3;
    } else if (router.pathname === "/team") {
      return 4;
    } else if (router.pathname === "/portfolio") {
      return 5;
    } else if (router.pathname === "/contact") {
      return 6;
    } else {
      return 9;
    }
  };

  const [tabValue, setTabValue] = useState(findPathname());

  React.useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      delay: 50,
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* <UpperNavigation /> */}
        <Navigation tabValue={tabValue} setTabValue={setTabValue} />
        <PageTransition timeout={500} classNames="page-transition">
          <Component {...pageProps} />
        </PageTransition>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
