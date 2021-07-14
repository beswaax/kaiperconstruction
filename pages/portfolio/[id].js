import React, { useState } from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";

import PageHeader from "../../src/components/headers/PageHeader";
import ServicesContent1 from "../../src/components/content/ServicesContent1";
import ServicesContent2 from "../../src/components/content/ServicesContent2";
import ServicesContent6 from "../../src/components/content/ServicesContent6";

import Head from "next/head";
const contents = [
  {
    id: 1,
    title: "Murdoch University Perth",
    img: "/assets/portfolio/1.jpg",
    attributes: [
      {
        title: "Year",
        value: 1998,
      },
      {
        title: "Location",
        value: "Perth",
      },
      {
        title: "Client",
        value: "Murdoch Uni.",
      },
      {
        title: "Value",
        value: "$3.5 Mil.",
      },
      {
        title: "Type",
        value: "Construction",
      },
    ],
  },
  {
    id: 2,
    title: "Turnkey House",
    img: "/assets/portfolio/2.jpg",
    attributes: [
      {
        title: "Year",
        value: 2015,
      },
      {
        title: "Location",
        value: "Perth",
      },
      {
        title: "Client",
        value: "Private",
      },
      {
        title: "Value",
        value: "$290k",
      },
      {
        title: "Type",
        value: "Construction",
      },
    ],
  },
  {
    id: 3,
    title: "Turnkey House",
    img: "/assets/portfolio/3.jpg",
    attributes: [
      {
        title: "Year",
        value: 2018,
      },
      {
        title: "Location",
        value: "Sydney",
      },
      {
        title: "Client",
        value: "Private",
      },
      {
        title: "Value",
        value: "$780k",
      },
      {
        title: "Type",
        value: "Construction",
      },
    ],
  },
  {
    id: 4,
    title: "St. Adelaide Church",
    img: "/assets/portfolio/4.jpg",
    attributes: [
      {
        title: "Year",
        value: 2020,
      },
      {
        title: "Location",
        value: "Perth",
      },
      {
        title: "Client",
        value: "Perth City",
      },
      {
        title: "Value",
        value: "$2.3 Mil.",
      },
      {
        title: "Type",
        value: "Construction",
      },
    ],
  },
  {
    id: 5,
    title: "Jake Under Medical Centre",
    img: "/assets/portfolio/5.jpg",
    attributes: [
      {
        title: "Year",
        value: 2020,
      },
      {
        title: "Location",
        value: "Melbourne",
      },
      {
        title: "Client",
        value: "Jake Under Medical",
      },
      {
        title: "Value",
        value: "$5.7 Mil.",
      },
      {
        title: "Type",
        value: "Construction",
      },
    ],
  },
  {
    id: 6,
    title: "Turnkey Duplex",
    img: "/assets/portfolio/6.jpg",
    attributes: [
      {
        title: "Year",
        value: 2019,
      },
      {
        title: "Location",
        value: "Albany",
      },
      {
        title: "Client",
        value: "Private",
      },
      {
        title: "Value",
        value: "$1.2 Mil.",
      },
      {
        title: "Type",
        value: "Construction",
      },
    ],
  },
];

function getPostDataById(id) {
  for (let i = 0; i < contents.length; i++) {
    if (contents[i].id === parseInt(id)) {
      return contents[i];
    }
  }
}

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.nav,
  },
}));

const Portfolio = ({ id }) => {
  const classes = useStyles();
  const currentPiece = getPostDataById(id);

  if (currentPiece == undefined) {
    return (
      <Box py={50}>
        <Typography variant="h3" color="textSecondary" align="center">
          404 error
        </Typography>
      </Box>
    );
  }
  return (
    <section className={classes.section}>
      <Head>
        <title key="title">Portfolio | Kaiper Construction Group Perth</title>{" "}
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
      <PageHeader title={"Portfolio"} />
      <ServicesContent1 currentPiece={currentPiece} />
      <ServicesContent2 currentPiece={currentPiece} />
      <ServicesContent6 />
    </section>
  );
};

export default Portfolio;

Portfolio.getInitialProps = async ({ query }) => {
  const id = query.id;
  return { id };
};
