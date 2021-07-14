import React, { useState } from "react";
import {
  Card,
  Container,
  Grid,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";

import Link from "../../src/Link";

import Head from "next/head";

import PageHeader from "../../src/components/headers/PageHeader";
import Contact from "../../src/components/content/ServicesContent6";

const portfolioPieces = [
  {
    id: 1,
    title: "Murdoch University Perth",
    img: "/assets/portfolio/1.jpg",
  },
  {
    id: 2,
    title: "Turnkey house in Perth",
    img: "/assets/portfolio/2.jpg",
  },
  {
    id: 3,
    title: "Turnkey house in Sydney",
    img: "/assets/portfolio/3.jpg",
  },
  {
    id: 4,
    title: "St. Adelaide Church",
    img: "/assets/portfolio/4.jpg",
  },
  {
    id: 5,
    title: "Jake Under Medical Centre",
    img: "/assets/portfolio/5.jpg",
  },
  {
    id: 6,
    title: "Turnkey Duplex",
    img: "/assets/portfolio/6.jpg",
  },
];

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.nav,
    // backgroundImage: `url(${"/assets/bg-black.jpg"})`,
  },
  root: {
    maxWidth: "100%",
    border: `6px solid ${theme.palette.common.white}`,
    borderRadius: 0,
  },
  media: {
    transition: "transform 0.4s ease-in-out",
    border: `2px solid ${theme.palette.common.white}`,
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      transform: "scale(1.01)",
    },
    height: 350,
  },
  cardContent: {
    borderRadius: 0,
    backgroundColor: theme.palette.secondary.dark,
    padding: "1px, 3px",
    transition:
      "background-color 0.4s ease-in-out, text-color 0.4s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
      color: "white",
    },
  },
  cardAction: {
    borderRadius: 0,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const Portfolio = () => {
  const classes = useStyles();
  const [show, setShow] = useState(false);

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
      <React.Fragment>
        <PageHeader title={"Portfolio"} />
        <Box py={20}>
          <Container maxWidth="xl">
            <Grid container spacing={4}>
              {portfolioPieces.map((portfolio, i) => (
                <Grid item md={4} sm={6} xs={12} key={i}>
                  <Card
                    className={classes.root}
                    onMouseOver={() => setShow(true)}
                    onMouseOut={() => setShow(false)}
                  >
                    <CardActionArea
                      disableRipple
                      disableTouchRipple
                      component={Link}
                      href={`/portfolio/${portfolio.id}`}
                      className={classes.cardAction}
                    >
                      <CardMedia
                        className={classes.media}
                        image={portfolio.img}
                        title="Contemplative Reptile"
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography
                          align="center"
                          gutterBottom
                          variant="h6"
                          style={{ color: "white" }}
                          component="h4"
                        >
                          {portfolio.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Contact />
      </React.Fragment>
    </section>
  );
};

export default Portfolio;
