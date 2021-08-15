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
      </Head>
      <Header />
      <Content1 />
      <Content2 />
      <Content3 />
      <Certificates bg={theme.palette.common.white} />
    </div>
  );
}
