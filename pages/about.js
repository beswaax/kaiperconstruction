import React from "react";

import PageHeader from "../src/components/headers/PageHeader";
import AboutPageContent1 from "../src/components/content/AboutPageContent1";
import AboutPageContent2 from "../src/components/content/AboutPageContent2";
import AboutPageContent3 from "../src/components/content/AboutPageContent3";

import Head from "next/head";
import Contact2 from "../src/components/content/ServicesContent6";

const About = () => {
  return (
    <section>
      <Head>
        <title key="title">About | Kaiper Construction Group Perth</title>{" "}
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
    </section>
  );
};

export default About;
