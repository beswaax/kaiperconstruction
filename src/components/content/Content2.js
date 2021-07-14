import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Hidden, useMediaQuery, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: `url(${"/assets/bg-gray.png"})`,
    backgroundRepeat: "repeat",
  },
  card: {
    height: 512,
    [theme.breakpoints.down("sm")]: {
      height: 280,
    },
  },
  title: {
    fontWeight: 500,
    color: theme.palette.primary.main,
  },
}));

export default function Content(props) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const content = {
    "header-p1": "Comprehensive range of services",
    description:
      "Check out what we have to offer. Our range of services extends from civil engineering to the manufacture of precast parts. We also offer transportation and manufacturing services.",
    "primary-action": "Action",
    image: "/assets/5.webp",
    ...props.content,
  };

  return (
    <section className={classes.section}>
      <Box>
        <Box py={10}>
          <Container maxWidth="md" data-aos="fade-up">
            <Box pt={5} pb={20}>
              <Grid container spacing={matchesSM ? 2 : 4}>
                <Grid item xs={12} md={6}>
                  <Box display="flex" height="100%">
                    <Box my="auto">
                      <Typography
                        variant="h3"
                        component="h3"
                        gutterBottom={matchesSM ? false : true}
                      >
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
                  <Box pt={matchesSM ? 1 : 1}>
                    <Typography variant="subtitle1" color="textSecondary">
                      <Typography variant="subtitle1" color="textSecondary">
                        {content["description"]}
                      </Typography>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Box>
      </Box>
    </section>
  );
}
