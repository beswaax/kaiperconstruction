import React from "react";
import { makeStyles } from "@material-ui/core";

import PageHeader from "../src/components/headers/PageHeader";
import Features from "../src/components/features/Features";

import Head from "next/head";
import Contact2 from "../src/components/content/ServicesContent6";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.grey[100],
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Head>
        <title key="title">Team | Kaiper Construction Group Perth</title>{" "}
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
          content="About Us | Engineering Link Toronto"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="engineeringlink.ca/about"
        />

        <meta
          property="og:description"
          key="og:description"
          content="The company at a glance. Find out more about us and our motivations. We have stood for the highest quality craftsmanship for over 10 years. We offer engineering services to a broad array of fields. As a provider of engineering services, we supply our customers with everything from a single source."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/about" /> */}
      </Head>
      <PageHeader title={"Team"} />
      <Features />
      <Contact2 />
    </section>
  );
};

export default About;
