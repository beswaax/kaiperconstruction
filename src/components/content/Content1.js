import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Button } from "@material-ui/core";

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
}));

export default function Content(props) {
  const classes = useStyles();

  const content = {
    "header-p1": "All-round competence in the construction industry",
    description:
      "Our range of services extends from civil engineering to ready-mixed concrete, the production of prefabricated parts and our own gravel works to earthmoving, backfilling and transport services.",
    description2:
      "Here at Kaiper Construction we have a large and diverse customer base and we offer our services across Australia.",
    "primary-action": "Learn More",
    image: "/assets/pic2.png",
    ...props.content,
  };
  // "Years of experience and profound know-how in tax and economic issues enable the high quality that characterizes our tax planning. You benefit from a professional partner for your tax issues and have the certainty that you have done everything right in terms of tax law.",
  return (
    <section className={classes.section}>
      <Container maxWidth="lg" data-aos="fade-up">
        <Box py={15}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={6} data-aos="fade-up">
              <Card className={classes.card}>
                <CardMedia
                  image={content["image"]}
                  className={classes.cardMedia}
                  alt="image of a highway with skylines in the background"
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto">
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
                  <Box mt={3}>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      className={classes.action}
                      href="/about"
                      endIcon={<NavigateNextIcon />}
                    >
                      {content["primary-action"]}
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
