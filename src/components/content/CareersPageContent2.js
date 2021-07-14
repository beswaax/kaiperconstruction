import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import { EmailOutlined, PhoneOutlined } from "@material-ui/icons";
import { useMediaQuery } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: `url(${"/assets/bg-black.jpg"})`,
    backgroundColor: theme.palette.nav,
    // backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2H0v-2h20v-2H0V8h20V6H0V4h20V2H0V0h22v20h2V0h2v20h2V0h2v20h2V0h2v20h2V0h2v20h2v2H20v-1.5zM0 20h2v20H0V20zm4 0h2v20H4V20zm4 0h2v20H8V20zm4 0h2v20h-2V20zm4 0h2v20h-2V20zm4 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2zm0 4h20v2H20v-2z' fill='%23616161' fill-opacity='0.14' fill-rule='evenodd'/%3E%3C/svg%3E")`,
  },
  card: {
    borderRadius: 0,
    backgroundImage: `url(${"/assets/bg-black.jpg"})`,
    boxShadow: "none",
  },
  cardMedia: {
    height: 650,
    [theme.breakpoints.down("sm")]: {
      height: 480,
      width: "60%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  typography: {
    color: theme.palette.common.white,
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
  icon: {
    paddingBottom: "0.57rem",
    paddingRight: "0.5rem",
    color: theme.palette.primary.main,
  },
  badge: {
    color: theme.palette.grey[400],
  },
  anchor: {
    textDecoration: "none",
    color: theme.palette.common.white,
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

export default function Content(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const content = [
    {
      "header-p1": "Jobs",
      descriptions: [
        "Have you already completed vocational training or do you have experience in the construction industry?",
        "Are you just starting your career, looking for a new challenge or want to give your career new impetus? We're currently looking for bricklayers and plumbers",
      ],
    },
    {
      "header-p1": "Apprenticeships",
      descriptions: [
        "A good education is the first step to a successful career.",
        "That is why we offer training for future prospects. We are offering 3 year apprenticeships to bricklayers and industrial clerks.",
      ],
    },
  ];
  // "Years of experience and profound know-how in tax and economic issues enable the high quality that characterizes our tax planning. You benefit from a professional partner for your tax issues and have the certainty that you have done everything right in terms of tax law.",
  return (
    <section className={classes.section}>
      <Container maxWidth="lg" data-aos="fade-up">
        <Box pt={matchesXS ? 0 : matchesSM ? 5 : 10} pb={10}>
          <Grid container spacing={5}>
            {content.map((item) => (
              <Grid item xs={12} md={6} data-aos="fade-up">
                <Box my="auto">
                  <Typography variant="h4" component="h3" gutterBottom={true}>
                    <Typography
                      className={classes.title}
                      variant="h4"
                      component="span"
                    >
                      {item["header-p1"]}
                    </Typography>
                  </Typography>
                  {item.descriptions.map((desc) => (
                    <Typography
                      variant="subtitle1"
                      className={classes.typography}
                      paragraph={true}
                    >
                      {desc}
                    </Typography>
                  ))}
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
