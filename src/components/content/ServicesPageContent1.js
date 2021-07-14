import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, useMediaQuery, useTheme } from "@material-ui/core";

import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: `url(${"/assets/bg-black.jpg"})`,
    backgroundRepeat: "repeat",
  },
  icon: {
    paddingTop: "0.1rem",
  },
  card: {
    borderRadius: 0,
    backgroundImage: `url(${"/assets/bg-black.jpg"})`,
    boxShadow: "none",
  },
  cardMedia: {
    height: 650,
    [theme.breakpoints.down("sm")]: {
      height: 500,
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

export default function Content({ content }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section className={classes.section}>
      <Container maxWidth="lg" data-aos="fade-up">
        <Box pb={matchesSM ? 5 : 15} pt={15}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
                  {" "}
                  <Typography variant="h3" component="h3" gutterBottom={true}>
                    <Typography
                      className={classes.title}
                      variant="h3"
                      component="span"
                    >
                      {content.content1Title}
                    </Typography>
                  </Typography>
                  <Box>
                    {content.content1Advantages.map((adv, i) => (
                      <Grid
                        container
                        spacing={1}
                        alignItems="flex-start"
                        key={i}
                      >
                        <Grid item>
                          <CheckIcon className={classes.icon} color="primary" />
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="subtitle1"
                            className={classes.typography}
                            paragraph={true}
                          >
                            {adv}
                          </Typography>
                        </Grid>
                      </Grid>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Card className={classes.card}>
                <CardMedia
                  image={content.img}
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
