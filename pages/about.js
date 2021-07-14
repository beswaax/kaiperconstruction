import React from "react";
import { makeStyles } from "@material-ui/core";

import PageHeader from "../src/components/headers/PageHeader";
import AboutPageContent1 from "../src/components/content/AboutPageContent1";
import AboutPageContent2 from "../src/components/content/AboutPageContent2";
import AboutPageContent3 from "../src/components/content/AboutPageContent3";

import Head from "next/head";
import Contact2 from "../src/components/content/ServicesContent6";

const useStyles = makeStyles((theme) => ({}));

const About = () => {
  const classes = useStyles();

  return (
    <section>
      <Head>
        <title key="title">About | Kaiper Construction Group Perth</title>{" "}
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
      <PageHeader title={"About Us"} />
      <AboutPageContent1 />
      <AboutPageContent2 />
      <AboutPageContent3 />
      <Contact2
        content={{
          "header-p1": "Work with an accountant that understands your business",
          button1: "Contact Us",
        }}
      />
      {/* <Gallery /> */}
    </section>
  );
};

export default About;
