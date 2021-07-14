import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Button, useMediaQuery, useTheme } from "@material-ui/core";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: `url(${"/assets/bg-black.jpg"})`,
    backgroundRepeat: "repeat",
  },
  root: {
    borderRadius: 0,
    padding: 5,
    backgroundColor: theme.palette.grey[100],
    maxWidth: "100%",
  },
  rootDifferent: {
    borderRadius: 0,
    padding: 5,
    maxWidth: "100%",
    backgroundColor: theme.palette.primary.main,
  },
  cardMediaDifferent: {
    height: 380,
    [theme.breakpoints.down("sm")]: {
      height: 320,
    },
    [theme.breakpoints.down("xs")]: {
      height: 250,
    },
  },
  actionAreaDifferent: {
    textDecoration: "none",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      textDecoration: "none",
    },
  },
  actionArea: {
    textDecoration: "none",
    "&:hover": {
      backgroundColor: theme.palette.grey[50],
      textDecoration: "none",
    },
  },
  cardMedia: {
    height: 260,
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
    [theme.breakpoints.down("xs")]: {
      height: 170,
    },
  },
  card: {
    borderRadius: 0,
    backgroundImage: `url(${"/assets/bg-black.jpg"})`,
    boxShadow: "none",
  },
  typography: {
    color: theme.palette.common.white,
  },
  badge: {
    color: theme.palette.grey[400],
  },
  title: {
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
  title2: {
    fontWeight: 500,
    color: theme.palette.nav,
  },
  icon2: {
    color: theme.palette.common.white,
    fontSize: "2rem",
  },
  icon: {
    color: theme.palette.secondary.dark,
    fontSize: "2rem",
  },
}));

export default function Content(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const content = {
    image: "/assets/pic3.png",
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
    "step5-desc":
      "Convince yourself of our extensive and modern fleet. We have anything you need.",
    ...props.content,
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="md" data-aos="fade-up">
        <Box pb={matchesSM ? 5 : 15} pt={15}>
          <Grid container spacing={3} justify="center" alignItems="center">
            <Grid item xs={12} sm={6} data-aos="fade-up">
              <Card className={classes.root}>
                <CardActionArea
                  href="/services/1"
                  disableRipple
                  className={classes.actionArea}
                  component={Link}
                  disableTouchRipple
                >
                  <CardContent>
                    <Box pb={2}>
                      <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        alt={content.step2}
                        image={content.image1}
                        title={content.step1}
                      />
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h4"
                      className={classes.title}
                      component="h2"
                    >
                      {content.step1}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      {content["step1-desc"]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box pr={2}>
                      <NavigateNextIcon className={classes.icon} />
                    </Box>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} data-aos="fade-up">
              <Card className={classes.root}>
                <CardActionArea
                  href="/services/4"
                  disableRipple
                  className={classes.actionArea}
                  component={Link}
                  disableTouchRipple
                >
                  <CardContent>
                    <Box pb={2}>
                      <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        alt={content.step2}
                        image={content.image2}
                        title={content.step2}
                      />
                    </Box>
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="h4"
                      component="h2"
                    >
                      {content.step2}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      {content["step2-desc"]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box pr={2}>
                      <NavigateNextIcon className={classes.icon} />
                    </Box>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>{" "}
            <Grid item xs={12} data-aos="fade-up">
              <Card className={classes.rootDifferent}>
                <CardActionArea
                  href="/services/2"
                  disableRipple
                  className={classes.actionAreaDifferent}
                  component={Link}
                  disableTouchRipple
                >
                  <CardContent>
                    <Box pb={2}>
                      <CardMedia
                        className={classes.cardMediaDifferent}
                        component="img"
                        alt={content.step3}
                        image={content.image3}
                        title={content.step3}
                      />
                    </Box>
                    <Typography
                      className={classes.title3}
                      gutterBottom
                      variant="h4"
                      component="h2"
                    >
                      {content.step3}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{ color: "white" }}
                      component="p"
                    >
                      {content["step3-desc"]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box pr={2}>
                      <NavigateNextIcon className={classes.icon2} />
                    </Box>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>{" "}
            <Grid item xs={12} sm={6} data-aos="fade-up">
              <Card className={classes.root}>
                <CardActionArea
                  href="/services/3"
                  disableRipple
                  className={classes.actionArea}
                  component={Link}
                  disableTouchRipple
                >
                  <CardContent>
                    <Box pb={2}>
                      <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        alt={content.step4}
                        image={content.image4}
                        title={content.step4}
                      />
                    </Box>
                    <Typography
                      gutterBottom
                      variant="h4"
                      component="h2"
                      className={classes.title}
                    >
                      {content.step4}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      {content["step4-desc"]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box pr={2}>
                      <NavigateNextIcon className={classes.icon} />
                    </Box>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>{" "}
            <Grid item xs={12} sm={6} data-aos="fade-up">
              <Card className={classes.root}>
                <CardActionArea
                  href="/services/5"
                  disableRipple
                  className={classes.actionArea}
                  component={Link}
                  disableTouchRipple
                >
                  <CardContent>
                    <Box pb={2}>
                      <CardMedia
                        className={classes.cardMedia}
                        component="img"
                        alt={content.step5}
                        image={content.image5}
                        title={content.step5}
                      />
                    </Box>
                    <Typography
                      className={classes.title}
                      gutterBottom
                      variant="h4"
                      component="h2"
                    >
                      {content.step5}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      {content["step5-desc"]}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Box pr={2}>
                      <NavigateNextIcon className={classes.icon} />
                    </Box>
                  </CardActions>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
