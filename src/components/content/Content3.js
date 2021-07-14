import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  switchOrder1: {
    backgroundColor: theme.palette.grey[200],
    transition: "background-color 0.4s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.grey[300],
    },
    [theme.breakpoints.up("sm")]: {
      order: 1,
    },
  },
  switchOrder0: {
    backgroundColor: theme.palette.grey[200],
    transition: "background-color 0.4s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.grey[300],
    },
    padding: 30,
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
      order: 0,
    },
  },
  title2: {
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
  title1: {
    color: "#2c2c2c",
    fontWeight: 500,
  },
  stepContainer: {
    marginBottom: theme.spacing(0),
  },
  media: {
    height: 256,
    width: "100%",
  },
  card: {
    borderRadius: 0,
  },
  gridContainer: {
    backgroundColor: theme.palette.primary.light,
    transition: "background-color 0.4s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    padding: 30,
  },
  textWhite: {
    color: theme.palette.common.white,
  },
  icon: {
    color: theme.palette.grey[200],
    fontSize: 40,
  },
  icon2: {
    color: theme.palette.secondary.dark,
    fontSize: 40,
  },
}));

export default function HowItWorks(props) {
  const classes = useStyles();

  const content = {
    image1: "/assets/services/1.jpg",
    step1: "Civil Engineering",
    "step1-desc":
      "Excellent execution and the associated know-how are the guarantee of success for Kaiper Construction in civil engineering.",
    image2: "/assets/services/2.jpg",
    step2: "Gravel works",
    "step2-desc":
      "Thanks to practical cooperation with our customers, we offer everything from a single source, from ordering to delivery.",
    image3: "/assets/services/3.jpg",
    step3: "Concrete work",
    "step3-desc":
      "With the help of advanced processing techniques, we can access our own aggregates from the gravel works.",
    image4: "/assets/services/4.jpg",
    step4: "Precast plant",
    "step4-desc":
      "Building with prefabricated concrete parts is not only contemporary, it also means enormous cost and time savings.",
    image5: "/assets/services/5.jpg",
    step5: "Haulage services",
    "step5-desc": "Convince yourself of our extensive and modern fleet.",
    ...props.content,
  };

  return (
    <section style={{ marginTop: "-12.5rem" }}>
      <Container maxWidth="md">
        <Box pt={8} pb={10}>
          <Grid container spacing={0} className={classes.stepContainer}>
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={content["image1"]}
                />
              </Card>
            </Grid>

            <Grid item xs={12} sm={6} className={classes.gridContainer}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    variant="h5"
                    className={classes.title1}
                    component="h2"
                    gutterBottom={true}
                  >
                    {content["step1"]}
                  </Typography>
                  <Typography
                    className={classes.textWhite}
                    variant="body1"
                    paragraph={true}
                  >
                    {content["step1-desc"]}
                  </Typography>

                  <Link href="/services/1">
                    <KeyboardArrowRightIcon
                      href="/services/1"
                      className={classes.icon}
                    />
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={0} className={classes.stepContainer}>
            <Grid item xs={12} sm={6} className={classes.switchOrder1}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={content["image2"]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.switchOrder0}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    align="left"
                    variant="h5"
                    className={classes.title2}
                    component="h2"
                    gutterBottom={true}
                  >
                    {content["step2"]}
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["step2-desc"]}
                  </Typography>
                  <Box align="left">
                    <Link align="left" href="/services/4">
                      <KeyboardArrowRightIcon className={classes.icon2} />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={content["image4"]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.gridContainer}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    variant="h5"
                    className={classes.title1}
                    component="h2"
                    gutterBottom={true}
                  >
                    {content["step4"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.textWhite}
                    paragraph={true}
                  >
                    {content["step4-desc"]}
                  </Typography>
                  <Box align="left">
                    <Link align="left" href="/services/3">
                      <KeyboardArrowRightIcon className={classes.icon} />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>{" "}
          <Grid container spacing={0} className={classes.stepContainer}>
            <Grid item xs={12} sm={6} className={classes.switchOrder1}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={content["image3"]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.switchOrder0}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    align="left"
                    variant="h5"
                    className={classes.title2}
                    component="h2"
                    gutterBottom={true}
                  >
                    {content["step3"]}
                  </Typography>
                  <Typography
                    align="left"
                    variant="body1"
                    color="textSecondary"
                    paragraph={true}
                  >
                    {content["step3-desc"]}
                  </Typography>
                  <Box align="left">
                    <Link align="left" href="/services/2">
                      <KeyboardArrowRightIcon className={classes.icon2} />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>{" "}
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={content["image5"]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.gridContainer}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  <Typography
                    variant="h5"
                    className={classes.title1}
                    component="h2"
                    gutterBottom={true}
                  >
                    {content["step5"]}
                  </Typography>
                  <Typography
                    variant="body1"
                    className={classes.textWhite}
                    paragraph={true}
                  >
                    {content["step5-desc"]}
                  </Typography>
                  <Box align="left">
                    <Link align="left" href="/services/5">
                      <KeyboardArrowRightIcon className={classes.icon} />
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>{" "}
        </Box>
      </Container>
    </section>
  );
}
