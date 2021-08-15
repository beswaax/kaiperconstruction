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
      </Head>
      <PageHeader title={"Team"} />
      <Features />
      <Contact2 />
    </section>
  );
};

export default About;
