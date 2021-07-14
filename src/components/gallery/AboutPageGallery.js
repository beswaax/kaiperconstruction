import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.grey[50],
  },
  media: {
    height: "256px",
  },
  title: {
    fontWeight: 700,
    color: theme.palette.darkBlue.main,
    paddingBottom: "1rem",
  },
  description: {
    fontWeight: 500,
  },
}));

export default function Gallery(props) {
  const classes = useStyles();

  const content = {
    title: "Take a loot at our gallery",
    description: "Get to know us better and the work we do better",
    image3: "/assets/tax1.jpg",
    image2: "/assets/8.jpg",
    image1: "/assets/tax3.jpg",
    image4: "/assets/11.jpg",
    ...props.content,
  };

  return (
    <section className={classes.section}>
      <Box py={7}>
        <Container maxWidth="lg" data-aos="fade-up">
          <Box py={5}>
            <Grid container justify="center">
              <Grid item align="center">
                <Typography variant="h4" className={classes.title}>
                  {content.title}
                </Typography>
                <Typography
                  variant="h6"
                  color="textSecondary"
                  className={classes.description}
                >
                  {content.description}
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Card>
                <CardMedia
                  className={classes.media}
                  image={content["image1"]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  className={classes.media}
                  image={content["image2"]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  className={classes.media}
                  image={content["image3"]}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Card>
                <CardMedia
                  className={classes.media}
                  image={content["image4"]}
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
}
