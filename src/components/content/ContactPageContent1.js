import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import { EmailOutlined, PhoneOutlined } from "@material-ui/icons";

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

  const content = {
    badge: "CONTACT US",

    "header-p1": "Kaiper Group Construction LLC.",
    description:
      "Thank you for visiting our website. If you have any questions or requests, simply fill out the form below and send it to us. Of course, you can also send us an email. In any case, you will receive an answer from us at short notice.",
    description2: "296 Mill Point Rd.",
    description3: "South Perth, WA 6151",
    email: "info@kaiper.com",
    phone: "08-8395-6063 ",
    "primary-action": "Learn More",
    image: "/assets/pic5.png",
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
                  <Box my={4}>
                    <Typography
                      variant="subtitle1"
                      className={classes.typography}
                      paragraph={true}
                    >
                      {content["description2"]}
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      className={classes.typography}
                      paragraph={true}
                    >
                      {content["description3"]}
                    </Typography>
                  </Box>
                  <Box>
                    <Grid container alignItems="center" justify="flex-start">
                      <Grid item>
                        <EmailOutlined className={classes.icon} />
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          className={classes.typography}
                          paragraph={true}
                        >
                          <a
                            href={`mailto:${content.email}`}
                            className={classes.anchor}
                          >
                            {content.email}
                          </a>
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="flex-start">
                      <Grid item>
                        <PhoneOutlined className={classes.icon} />
                      </Grid>
                      <Grid item>
                        <Typography
                          variant="subtitle1"
                          className={classes.typography}
                          paragraph={true}
                        >
                          <a
                            href="tel:+4915901954867"
                            className={classes.anchor}
                          >
                            {content.phone}
                          </a>
                        </Typography>
                      </Grid>
                    </Grid>
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
