import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import PhoneIcon from "@material-ui/icons/Phone";
import PrintIcon from "@material-ui/icons/Print";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: theme.palette.grey[200],
  },
  title: {
    fontWeight: 500,
  },
  card: {
    borderRadius: 0,
    backgroundColor: theme.palette.grey[200],
    boxShadow: "none",
  },
  icon: {
    fontSize: 19,
    color: theme.palette.text.primary,
  },
  cardMedia: {
    height: 300,
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    backgroundColor: theme.palette.grey[200],
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
export default function Content({ content }) {
  const classes = useStyles();

  return (
    <section className={classes.section}>
      <Container maxWidth="lg" data-aos="fade-up">
        <Box pt={10} pb={15}>
          <Box pb={8}>
            <Typography
              align="left"
              style={{ fontWeight: 500 }}
              color="primary"
              variant="h4"
              component="h4"
            >
              {content.title}
            </Typography>
            <Typography
              align="left"
              style={{ fontWeight: 500 }}
              color="textSecondary"
              variant="subtitle1"
              component="span"
            >
              {content.subtitle}
            </Typography>
          </Box>
          <Grid container justify="center" alignItems="center" spacing={8}>
            {content.team.map((member, i) => (
              <Grid item md={6} sm={6} xs={12} key={i}>
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
                <Box py={2}>
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
                      <PrintIcon className={classes.icon} />
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
                      <Typography color="primary" variant="body2">
                        {member.email}
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
