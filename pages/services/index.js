import React from "react";
import Head from "next/head";

import PageHeader from "../../src/components/headers/PageHeader";
import Content1 from "../../src/components/content/ServicesPageContentIndex1";
import Content2 from "../../src/components/content/ServicesPageContentIndex2";
import Content3 from "../../src/components/content/Certificates";
import Contact from "../../src/components/content/ServicesContent6";
import { useTheme } from "@material-ui/core";

const Services = () => {
  const theme = useTheme();
  return (
    <section>
      <Head>
        <title key="title">Services | Kaiper Construction Group Perth</title>{" "}
        {/* <meta
          name="description"
          key="description"
          content="Take a look at our services! We offer structural and evelope engineering services to a wide array of fields. As a general provider of engineering services, we supply our customers with everything from a single source. We operate in the greater Stuttgart area"
        />
        <meta
          name="keywords"
          content="engineering toronto, engineering structural toronto, toronto envelope engineering, structural engineering gta, mississauga engineering, mississauga engineering services, toronto engineering services"
        />
        <meta
          property="og:title"
          content="Services | Engineering Link Toronto"
          key="og:title"
        />
        <meta
          property="og:url"
          key="og:url"
          content="engineeringlink.ca/services"
        />

        <meta
          property="og:description"
          key="og:description"
          content="Take a look at our services! We offer structural and evelope engineering services to a wide array of fields. As a general provider of engineering services, we supply our customers with everything from a single source. We operate in the greater Stuttgart area"
        />
        <meta property="og:locale" key="og:locale" content="en_US" />
        <meta property="og:type" key="og:type" content="website" />

        <link rel="canonical" key="canonical" href="/services" /> */}
      </Head>
      <PageHeader title={"Services"} />
      <Content1 />
      <Content2 />
      <Content3 bg={theme.palette.grey[100]} />
      <Contact />
    </section>
  );
};

export default Services;
