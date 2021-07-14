import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Image from "next/image";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#fffff",
    backgroundImage: `url(${"/assets/header.jpg"})`,
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    backfaceisibility: "hidden",
    // backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f0f0f0' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    borderRadius: 0,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 8,
    paddingBottom: 8,
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  span: {
    color: theme.palette.primary.dark,
  },
  img: {
    maxWidth: "100%",
    borderTopLeftRadius: 125,
    borderBottomRightRadius: 100,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    [theme.breakpoints.down("xs")]: {
      borderTopLeftRadius: 80,
      borderBottomRightRadius: 80,
      borderTopRightRadius: 15,
      borderBottomLeftRadius: 15,
    },
  },
  title: {
    fontWeight: 600,
    color: theme.palette.common.white,
  },
  description: {
    fontWeight: 500,
    color: theme.palette.grey[50],
  },
  link: {
    border: "1px solid lightgray",
    padding: 8,
    borderRadius: 5,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [appbarColor, setAppbarColor] = useState("primary");

  const content = {
    "header-p1": "RELIABLE",
    "header-p2": "POWERFUL",
    "header-p3": "COMMITTED",
    "header-p4": "FLEXIBLE",
    description:
      "Quality awareness, reliability and technical innovation have set us apart for over 50 years.",
    "primary-action": "LEARN MORE ABOUT US",
    // "secondary-action": "Learn More",
    image: "/assets/15.jpg",
    ...props.content,
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box
          pt={matchesXS ? 10 : matchesSM ? 15 : matchesMD ? 20 : 25}
          pb={matchesXS ? 10 : matchesSM ? 15 : matchesMD ? 20 : 25}
        >
          <Grid
            direction={matchesSM ? "column" : "inherit"}
            justify={matchesSM ? "center" : "inherit"}
            alignItems={matchesSM ? "center" : "inherit"}
            container
          >
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Container maxWidth="sm">
                    <Typography variant="h2" component="h2" gutterBottom={true}>
                      <Typography
                        className={classes.title}
                        variant="h2"
                        color="primary"
                      >
                        {content["header-p1"]}{" "}
                      </Typography>
                      <Typography
                        className={classes.title}
                        variant="h2"
                        color="primary"
                      >
                        {content["header-p2"]}{" "}
                      </Typography>

                      <Typography
                        className={classes.title}
                        variant="h2"
                        color="primary"
                      >
                        {content["header-p3"]}{" "}
                      </Typography>
                      <Typography
                        className={classes.title}
                        variant="h2"
                        color="primary"
                      >
                        {content["header-p4"]}{" "}
                      </Typography>
                    </Typography>

                    <Typography className={classes.description} variant="h6">
                      {content["description"]}
                    </Typography>
                    <Box mt={5}>
                      <Button
                        disableRipple
                        disableTouchRipple
                        variant="contained"
                        href="https://calendly.com/accountingservices-philly/60min"
                        target="_blank"
                        color="secondary"
                        className={classes.primaryAction}
                      >
                        {content["primary-action"]}
                      </Button>
                    </Box>
                  </Container>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up"></Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
