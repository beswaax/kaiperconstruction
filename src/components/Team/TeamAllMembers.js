import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import Link from "@material-ui/core/Link";
import { EmailOutlined, PhoneOutlined } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: "100%",
    height: "356px",
    marginBottom: theme.spacing(2),
  },
  title: {
    fontWeight: 700,
    color: theme.palette.secondary.main,
  },
  icon: {
    color: theme.palette.primary.dark,
  },
}));

export default function Team(props) {
  const classes = useStyles();

  const content = {
    "header-p1": "Meet the Team",
    persons: [
      {
        image:
          "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd91&w=500&ah=500&q=80",
        name: "Danny Bailey",
        job: "CPA, CGA",
      },
      {
        image: "/assets/expert/6.jpg",
        name: "Alice Bradley",
        job: "CPA, CPM",
      },
      {
        image: "/assets/expert/16.jpg",
        name: "Ian Brown",
        job: "CPA, CA",
      },
      {
        image: "/assets/expert/7.jpg",
        name: "Tom Renator",
        job: "CA, CPA",
      },
      {
        image: "/assets/expert/8.jpg",
        name: "Timoteo Annelie",
        job: "CPA, CMA",
      },
      {
        image: "/assets/expert/9.jpg",
        name: "Henrik Tolkien",
        job: "Bookkeeper",
      },
      {
        image: "/assets/expert/10.jpg",
        name: "Andrea Szelei",
        job: "Bookkeeper",
      },
      {
        image: "/assets/expert/15.jpg",
        name: "Erica Rosenthal",
        job: "Bookkeeper",
      },
      {
        image: "/assets/expert/12.jpg",
        name: "Marcus Rogan",
        job: "Bookkeeper",
      },
    ],
    ...props.content,
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box pt={13} pb={14}>
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
          <Grid container spacing={9}>
            {content.persons.map((person, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Avatar
                  alt=""
                  variant="rounded"
                  src={person.image}
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
                <Box>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    component="span"
                  >
                    {person.job}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
