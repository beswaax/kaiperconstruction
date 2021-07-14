import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, useMediaQuery, useTheme } from "@material-ui/core";

import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import Link from "../../Link";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: `url(${"/assets/bg-black.jpg"})`,
    backgroundRepeat: "repeat",
  },

  card: {
    borderRadius: 0,
    backgroundImage: `url(${"/assets/bg-black.jpg"})`,
    boxShadow: "none",
  },
  cardMedia: {
    height: 512,
    [theme.breakpoints.down("sm")]: {
      height: 480,
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      height: 450,
      width: "100%",
    },
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
  action: {
    textDecoration: "none",
    borderRadius: 0,
    color: theme.palette.grey[100],
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Content(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const content = {
    badge: "OUR DEVISE",
    "header-p1": "Building shapes the world of tomorrow.",
    description:
      "For Kaiper, excellent workmanship and the associated know-how are the guarantors of success in civil engineering. Thanks to reliable planning and execution, many years of experience and smooth cooperation with the planners and companies involved, all orders are carried out professionally. The fourfold competence enables the Kaiper group of companies to carry out earthworks itself and to use its own prefabricated parts and its own ready-mixed concrete. In addition, constant performance optimization and the best construction quality at a fair price are guaranteed.",
    image: "/assets/pic3.png",
    ...props.content,
  };
  return (
    <section className={classes.section}>
      <Container maxWidth="lg" data-aos="fade-up">
        <Box pb={matchesSM ? 5 : 15} pt={15}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  {" "}
                  <Typography
                    variant="body1"
                    className={classes.badge}
                    paragraph={true}
                  >
                    {content["badge"]}
                  </Typography>
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography
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
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Typography
                variant="subtitle1"
                className={classes.typography}
                paragraph={true}
              >
                {content["description"]}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
