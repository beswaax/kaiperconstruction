import React from "react";
import { makeStyles, useTheme } from "@material-ui/core";

import PageHeader from "../../src/components/headers/PageHeader";
import Content1 from "../../src/components/content/CareersPageContent1";
import Content2 from "../../src/components/content/CareersPageContent2";
import Contact from "../../src/components/contact/ContactBasic";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({}));

const Careers = () => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <section>
      <Head>
        <title key="title">Careers | Kaiper Construction Group Perth</title>{" "}
        {/* <meta
          name="description"
          key="description"
          content="As a traditional, successful and healthy medium-sized engineering company, we know exactly how important competent and success-oriented employees are. Whether you are an engineer or an architect, you always have a place with us."
        />
        <meta
          name="keywords"
          content="engineer toronto, careers engineering toronto, engineer toronto, pavement engineer toronto job, engineer jobs toronto, structural engineer job, structural engineer job toronto, envelope engineer career, envelope engineer career toronto, career structural engineer toronto"
        />
        <meta
          property="og:title"
          content="Careers | Engineering Link Toronto"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="engineeringlink.ca/career"
        />

        <meta
          property="og:description"
          key="og:description"
          content="As a traditional, successful and healthy medium-sized engineering company, we know exactly how important competent and success-oriented employees are. Whether you are an engineer or an architect, you always have a place with us."
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/career" /> */}
      </Head>
      <PageHeader
        title={"Careers"}
        background={"/assets/9.jpg"}
        description={
          "We were founded by leading professional accountants with a combined experience of 60 years in the field."
        }
      />
      <Content1 />
      <Content2 />
      <Contact />
    </section>
  );
};

export default Careers;
