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
