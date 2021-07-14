import React from "react";

import Header from "../src/components/headers/Header7";
import Content1 from "../src/components/content/Content1";
import Content2 from "../src/components/content/Content2";
import Content3 from "../src/components/content/Content3";
import Certificates from "../src/components/content/Certificates";
import Head from "next/head";
import { makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));

export default function Index() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div className={classes.section}>
      <Head>
        <title key="title">Kaiper Construction Group Perth</title>{" "}
        {/* <meta
          name="description"
          key="description"
          content="The company at a glance. Find out more about us and our motivations. We have stood for the highest quality craftsmanship for over 10 years. We offer engineering services to a broad array of fields. As a provider of engineering services, we supply our customers with everything from a single source."
        />
        <meta
          name="keywords"
          content="engineering toronto, engineering structural toronto, toronto envelope engineering, structural engineering gta, mississauga engineering, mississauga engineering services, toronto engineering services"
        />
        <meta
          property="og:title"
          content="Engineering Link Toronto"
          key="og:title"
        />
        <meta property="og:url" key="og:url" content="engineeringlink.ca/" />

        <meta
          property="og:description"
          key="og:description"
          content="The company at a glance. Find out more about us and our motivations. We have stood for the highest quality craftsmanship for over 10 years. We offer engineering services to a broad array of fields. As a provider of engineering services, we supply our customers with everything from a single source."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/" /> */}
      </Head>
      <Header />
      {/* <CustomerSegments /> */}
      <Content1 />
      <Content2 />
      <Content3 />
      <Certificates bg={theme.palette.common.white} />
    </div>
  );
}
