import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "../../Link";
import { Parallax, Background } from "react-parallax";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  sectionbg: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#fffff",
    backgroundImage: `url(${"/assets/header.jpg"})`,
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    backfaceisibility: "hidden",
    [theme.breakpoints.down("sm")]: {
      backgroundSize: "cover",
    },
  },
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
  },
  section: {
    paddingTop: "5%",
    paddingBottom: "5%",
    transformStyle: "preserve-3d",
    backfaceisibility: "hidden",

    [theme.breakpoints.down("md")]: {
      paddingTop: "5%",
      paddingBottom: "5%",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "5%",
      paddingBottom: "5%",
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: "15%",
      paddingBottom: "15%",
    },
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  img: {
    maxWidth: "100%",
  },
  description: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
    },
    color: theme.palette.common.white,
    fontWeight: 500,
  },
  title: {
    color: theme.palette.common.white,
    fontWeight: 700,
  },
  span: {
    color: theme.palette.primary.light,
    fontWeight: 500,
  },
}));

const PageHeader = ({ title, description, background }) => {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const content = {
    "header-p1": title,
    description: "Home",
  };

  return (
    <section className={classes.sectionbg}>
      <Container maxWidth="lg" className={classes.section}>
        <Box py={6}>
          <Grid container>
            <Grid item xs={12}>
              <Box height="100%" data-aos="fade-up">
                <Box my="auto">
                  <Typography
                    align={matchesSM ? "center" : "left"}
                    variant="h3"
                    component="h2"
                    gutterBottom={true}
                  >
                    <Typography
                      align={matchesSM ? "center" : "left"}
                      className={classes.title}
                      variant="h3"
                      component="span"
                    >
                      {content["header-p1"]}
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default PageHeader;
