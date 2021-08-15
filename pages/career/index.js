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
