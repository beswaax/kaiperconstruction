import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import Link from "../../Link";
import { EmailOutlined, PhoneOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "90%",
    height: "356px",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },

    transition: "transform 0.3s ease-in",
    "&:hover": {
      transform: "scale3d(1.02, 1.02, 1.02)",
    },
  },
  title: {
    fontWeight: 700,
    color: theme.palette.secondary.main,
  },
  icon: {
    color: theme.palette.primary.main,
  },
  emailAndPhone: {
    textDecoration: "none",
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.dark,
    },
  },
}));

export default function Team(props) {
  const classes = useStyles();

  const content = {
    "header-p1": "Meet the Partners",
    persons: [
      {
        url: 1,
        image: "/assets/expert/1.jpg",
        name: "Hugh Woolley",
        job: "CPA, CA",
        email: "hwoolley@lewisco.bc.ca",
        tel: "604-664-0680 ext:21",
      },
      {
        url: 2,
        image: "/assets/expert/2.jpg",
        name: "Peter Lewis",
        job: "CPA, CA",
        email: "plewis@lewisco.bc.ca",
        tel: "604-664-0680 ext:22",
      },
    ],
    ...props.content,
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={13} pb={13}>
          <Box mb={9} textAlign="center">
            <Container maxWidth="sm">
              <Typography
                className={classes.title}
                variant="h4"
                component="h2"
                gutterBottom={true}
              >
                {content["header-p1"]}{" "}
              </Typography>
            </Container>
          </Box>
          <Grid container spacing={9} alignItems="center" justify="center">
            {content.persons.map((person) => (
              <Grid item xs={12} md={4} sm={6} key={person.name}>
                <Avatar
                  alt=""
                  variant="rounded"
                  src={person.image}
                  component={Link}
                  href={`accountants/${person.url}`}
                  className={classes.avatar}
                />
                <Box display="flex" justifyContent="space-between">
                  <Typography
                    variant="h5"
                    component="h6"
                    gutterBottom={true}
                    className={classes.title}
                  >
                    {person.name}
                  </Typography>
                </Box>
                <Box pb={1}>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="span"
                  >
                    {person.job}
                  </Typography>
                </Box>
                <Box>
                  <Grid container spacing={1}>
                    <Grid item>
                      <EmailOutlined className={classes.icon} />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        component="a"
                        href={`mailto:${person.email}`}
                        className={classes.emailAndPhone}
                      >
                        {person.email}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid container spacing={1}>
                    <Grid item>
                      <PhoneOutlined className={classes.icon} />
                    </Grid>
                    <Grid item>
                      <Typography
                        variant="body1"
                        color="textSecondary"
                        component="a"
                        className={classes.emailAndPhone}
                        href={`tel:${person.tel}`}
                      >
                        {person.tel}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
