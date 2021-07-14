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
    badge: "OUR HISTORY",
    "header-p1": "A quick glimpse into our company's history",
    description:
      "Our company was founded in 1961 by Jake Gilbert. It began as a concrete company and has today developed into an all-round construction company offering offering a wide range of services including transportation and civil engineering. In 2004 Jake's son, Alex, was appointed director of the company. We have grown from a small company to a 100-employee company that is now one of the best in the community.",
    "primary-action": "Learn More",
    image: "/assets/pic4.png",
    ...props.content,
  };
  // "Years of experience and profound know-how in tax and economic issues enable the high quality that characterizes our tax planning. You benefit from a professional partner for your tax issues and have the certainty that you have done everything right in terms of tax law.",
  return (
    <section className={classes.section}>
      <Container maxWidth="lg" data-aos="fade-up">
        <Box pt={matchesSM ? 5 : 15} pb={15}>
          <Grid container spacing={8}>
            {/* <Grid item xs={12} md={6} data-aos="fade-up">
              <Card className={classes.card}>
                <CardMedia
                  image={content["image"]}
                  className={classes.cardMedia}
                  alt="image of a highway with skylines in the background"
                />
              </Card>
            </Grid> */}
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
                  <Typography
                    variant="subtitle1"
                    className={classes.typography}
                    paragraph={true}
                  >
                    {content["description"]}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className={classes.typography}
                    paragraph={true}
                  >
                    {content["description2"]}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Card className={classes.card}>
                <CardMedia
                  image={content["image"]}
                  className={classes.cardMedia}
                  alt="image of a highway with skylines in the background"
                />
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
