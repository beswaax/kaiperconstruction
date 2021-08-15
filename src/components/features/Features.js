import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { Card, CardMedia, useMediaQuery, ButtonBase } from "@material-ui/core";

import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: 500,
  },
  card: {
    borderRadius: 0,
  },
  icon: {
    fontSize: 19,
    color: theme.palette.text.primary,
  },
  cardMedia: {
    height: 250,
    width: "100%",
  },
  text: {
    color: theme.palette.text.secondary,
  },
  gridContainer: {
    borderLeft: `0.2px solid ${theme.palette.grey[400]}`,
    padding: 20,
    [theme.breakpoints.down("xs")]: {
      border: 0,
      padding: 0,
    },
  },
  selectedTitle: {
    color: theme.palette.primary.main,
    fontWeight: 500,
  },
  titleTypo: { fontWeight: 500 },
  gridContainerTitles: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
  },
  gridContainerTitles2: {
    [theme.breakpoints.down("xs")]: {
      backgroundColor: [theme.palette.grey[200]],
      marginBottom: "0.1rem",
      width: "100%",
      paddingTop: 10,
      paddingBottom: 2,
      paddingLeft: 15,
    },
  },
}));

const teams = [
  {
    id: 0,
    title: "Civil Engineering",
    teamMembers: [
      {
        name: "Terry Lake",
        education: "Civil Engineer",
        position: "Executive Partner",
        phone: "08-8395-6063 + 1",
        email: "terry@kaiper.com",
        image: "/assets/expert/1.jpg",
      },
      {
        name: "Jake Aksen",
        education: "Civil Engineer",
        position: "Managing director",
        phone: "08-8395-6063 + 2",
        email: "jake@kaiper.com",
        image: "/assets/expert/2.jpg",
      },
    ],
  },
  {
    id: 1,
    title: "Concrete plant",
    teamMembers: [
      {
        name: "Rodriguez Milhao",
        education: "Master's in Civil Engineering",
        position: "Concrete plant",
        phone: "08-8395-6063 + 3",
        email: "rodriguez@kaiper.com",
        image: "/assets/expert/3.jpg",
      },
      {
        name: "Shelly Kason",
        education: "Mechanical Engineer",
        position: "Concrete plant",
        phone: "08-8395-6063 + 4",
        email: "shelly@kaiper.com",
        image: "/assets/expert/4.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Precast plant",
    teamMembers: [
      {
        name: "Monroe Lawrence",
        education: "MBA",
        position: "Executive Partner",
        phone: "08-8395-6063 + 5",
        email: "monroe@kaiper.com",
        image: "/assets/expert/5.jpg",
      },
      {
        name: "Denholm Deven",
        education: "Mechanical Engineering Master's",
        position: "Technical Director",
        phone: "08-8395-6063 + 6",
        email: "denholm@kaiper.com",
        image: "/assets/expert/6.jpg",
      },
      {
        name: "Nate Braylen",
        education: "MBA, Bachelor's Civil Engineering",
        position: "Head of the technical office",
        phone: "08-8395-6063 + 7",
        email: "nate@something.com",
        image: "/assets/expert/7.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Gravel works",
    teamMembers: [
      {
        name: "Everly Di",
        education: "Master's Mechanical Engineering",
        position: "Gravel Plant Director",
        phone: "08-8395-6063 + 8",
        email: "everly@kaiper.com",
        image: "/assets/expert/8.jpg",
      },
      {
        name: "Timmy Camron",
        education: "Master's Civil Engineering",
        position: "Gravel Plant Vice-Director",
        phone: "08-8395-6063 + 9",
        email: "timmy@kaiper.com",
        image: "/assets/expert/9.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "Haulage services",
    teamMembers: [
      {
        name: "Jax Larry",
        education: "Master's Civil Engineering",
        position: "Transporation Director",
        phone: "08-8395-6063 + 10",
        email: "jax@kaiper.com",
        image: "/assets/expert/10.jpg",
      },
      {
        name: "Napier Shane",
        education: "Master's Mechanical Engineering",
        position: "Technical Director",
        phone: "08-8395-6063 + 11",
        email: "napier@kaiper.com",
        image: "/assets/expert/11.jpg",
      },
    ],
  },
  {
    id: 5,
    title: "Accounting",
    teamMembers: [
      {
        name: "Shelton Sunny",
        education: "MBA, Master's in Accounting",
        position: "Accounting Director",
        phone: "08-8395-6063 + 12",
        email: "shelton@kaiper.com",
        image: "/assets/expert/12.jpg",
      },
      {
        name: "Davin Giles",
        education: "MBA, Bachelor's in Accounting",
        position: "Accounting",
        phone: "08-8395-6063 + 13",
        email: "davin@kaiper.com",
        image: "/assets/expert/13.jpg",
      },
    ],
  },
  {
    id: 6,
    title: "Administration",
    teamMembers: [
      {
        name: "Hadyn Glanville",
        education: "Master's in Business Administration",
        position: "Administration Director",
        phone: "08-8395-6063 + 14",
        email: "hadyn@kaiper.com",
        image: "/assets/expert/14.jpg",
      },
      {
        name: "Hartley Stephen",
        education: "MBA",
        position: "Administration",
        phone: "08-8395-6063 + 15",
        email: "hartley@kaiper.com",
        image: "/assets/expert/15.jpg",
      },
    ],
  },
];

export default function Team() {
  const classes = useStyles();
  const theme = useTheme();
  const [currentItem, setCurrentItem] = useState(teams[0]);

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const changeCurrentItem = (id) => {
    setCurrentItem(teams[id]);
  };

  return (
    <section>
      <Container maxWidth="lg">
        <Box mt={matchesXS ? 5 : 15} mb={15}>
          <Grid
            container
            spacing={5}
            direction={matchesXS ? "column" : "row"}
            alignItems={matchesXS ? "center" : "flex-start"}
            justify={matchesXS ? "space-between" : "center"}
          >
            <Grid
              item
              md={2}
              sm={3}
              xs={12}
              className={classes.gridContainerTitles}
            >
              <Grid container direction="column" className={classes}>
                {teams.map((team) => (
                  <Grid
                    item
                    key={team.id}
                    className={classes.gridContainerTitles2}
                  >
                    <Box pb={1}>
                      <ButtonBase
                        align="left"
                        fullWidth={true}
                        disableRipple
                        className={classes.button}
                        disableTouchRipple
                        onClick={() => changeCurrentItem(team.id)}
                      >
                        <Typography
                          variant="subtitle1"
                          align="left"
                          gutterBottom={true}
                          className={
                            currentItem.id === team.id
                              ? classes.selectedTitle
                              : classes.titleTypo
                          }
                        >
                          {team.title}
                        </Typography>
                      </ButtonBase>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item md={10} sm={9} xs={12} className={classes.gridContainer}>
              <Box pb={3}>
                <Typography
                  variant="h4"
                  component="h3"
                  color="primary"
                  className={classes.title}
                >
                  {currentItem.title}
                </Typography>
              </Box>
              <Grid container spacing={matchesXS ? 7 : 3}>
                {currentItem.teamMembers.map((member, i) => (
                  <Grid item md={5} xs={12} key={i}>
                    <Card className={classes.card}>
                      <CardMedia
                        image={member.image}
                        className={classes.cardMedia}
                      />
                    </Card>
                    <Box pt={2}>
                      <Typography
                        color="primary"
                        variant="h5"
                        className={classes.title}
                      >
                        {member.name}
                      </Typography>
                    </Box>
                    <Box pt={1}>
                      <Typography
                        color="textSecondary"
                        className={classes.text}
                        variant="body2"
                      >
                        {member.education}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        className={classes.text}
                        variant="body2"
                      >
                        {member.position}
                      </Typography>
                    </Box>
                    <Box pt={1}>
                      <Grid container spacing={1}>
                        <Grid item>
                          <Box>
                            <PhoneIcon className={classes.icon} />
                          </Box>
                        </Grid>
                        <Grid item>
                          <Typography color="textPrimary" variant="body2">
                            {member.phone}
                          </Typography>
                        </Grid>
                      </Grid>

                      <Grid container spacing={1}>
                        <Grid item>
                          <MailOutlineIcon className={classes.icon} />
                        </Grid>
                        <Grid item>
                          <Typography color="textPrimary" variant="body2">
                            {member.email}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
