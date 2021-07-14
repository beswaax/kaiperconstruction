import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  halfLg: {
    [theme.breakpoints.up("lg")]: {
      maxWidth: theme.breakpoints.values["lg"] / 2,
    },
  },
  firstBox: {
    [theme.breakpoints.up("lg")]: {
      marginLeft: "auto",
      paddingRight: theme.spacing(6),
    },
  },
  secondBox: {
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(6),
    },
  },
  icon: {
    marginRight: theme.spacing(2),
    color: "#A9C0DF",
  },
  container: {
    backgroundColor: theme.palette.darkBlue.main,

    borderRadius: 20,
    boxShadow: "1px 1px 1px 3px #cccccc",
  },
  section: {
    padding: 10,
  },
  white: {
    color: theme.palette.common.white,
    fontWeight: 700,
  },
  whiteSmaller: {
    color: [theme.palette.grey[200]],
  },
  gridContaienr: {
    paddingTop: 5,
  },
  button: {
    borderRadius: 20,
  },
  textFieldContainer: {
    marginTop: "0rem",
    [theme.breakpoints.down("sm")]: {
      marginTop: "0.2rem",
    },
  },
  formContainer: {
    backgroundColor: theme.palette.common.white,
    borderRadius: 10,
    paddingTop: "1rem",
    paddingBottom: "2rem",
  },
}));

export default function Contact(props) {
  const classes = useStyles();

  const content = {
    header: "Ask us your questions",
    description:
      "We're here to answer your questions and discuss the decentralized future of the internet.",
    contact1: "Address",
    contact2: "Contact",
    "contact1-desc1": "Suite 1610, Guinness Tower",
    "contact1-desc2": "1055 West Hastings Street",
    "contact1-desc3": "Vancouver, BC  V6E 2E9",
    email: "plewis@lewisco.bc.ca",
    fax: "604-685-3806",
    tel: "+1 604-664-0680",
    "primary-action": "Submit",
    ...props.content,
  };

  return (
    <section className={classes.section}>
      <Box py={5}>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container>
            <Hidden mdUp>
              <Grid item xs={12} md={5} alignContent="center">
                <Box pt={10}>
                  <Box>
                    <Container>
                      <Typography
                        align="center"
                        variant="h3"
                        component="h2"
                        className={classes.white}
                      >
                        {content["header"]}
                      </Typography>
                    </Container>
                  </Box>
                </Box>
              </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid item xs={12} md={5}>
                <Box py={10} display="flex">
                  <Box className={[classes.halfLg, classes.firstBox]}>
                    <Container>
                      <Typography
                        variant="h3"
                        component="h2"
                        className={classes.white}
                        gutterBottom={true}
                      >
                        {content["header"]}
                      </Typography>

                      <Box mt={7}>
                        <Box>
                          <Grid container justify="left" alignItems="center">
                            <Grid item>
                              <RoomIcon className={classes.icon} />
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="h4"
                                className={classes.white}
                              >
                                {content["contact1"]}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                        <Box>
                          <Grid
                            container
                            direction="column"
                            className={classes.gridContaienr}
                          >
                            <Grid item>
                              {" "}
                              <Typography
                                variant="h6"
                                color="textSecondary"
                                className={classes.whiteSmaller}
                              >
                                {content["contact1-desc1"]}
                              </Typography>
                              <Typography
                                variant="h6"
                                color="textSecondary"
                                className={classes.whiteSmaller}
                              >
                                {content["contact1-desc2"]}
                              </Typography>
                              <Typography
                                variant="h6"
                                color="textSecondary"
                                className={classes.whiteSmaller}
                              >
                                {content["contact1-desc3"]}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                        <Box display="flex" mt={7}>
                          <Grid container justify="left" alignItems="center">
                            <Grid item>
                              <PhoneIcon className={classes.icon} />
                            </Grid>
                            <Grid item>
                              <Typography
                                variant="h4"
                                className={classes.white}
                              >
                                {content["contact2"]}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                        <Box>
                          <Grid
                            container
                            direction="column"
                            className={classes.gridContaienr}
                          >
                            <Grid item>
                              {" "}
                              <Typography
                                variant="h6"
                                color="textSecondary"
                                className={classes.whiteSmaller}
                              >
                                {content.email}
                              </Typography>
                              <Typography
                                variant="h6"
                                color="textSecondary"
                                className={classes.whiteSmaller}
                              >
                                F: {content.fax}
                              </Typography>
                              <Typography
                                variant="h6"
                                color="textSecondary"
                                className={classes.whiteSmaller}
                              >
                                T: {content.tel}
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    </Container>
                  </Box>
                </Box>
              </Grid>
            </Hidden>
            <Grid item xs={12} md={7}>
              <Box
                py={10}
                display="flex"
                className={[classes.halfLg, classes.secondBox]}
              >
                <Container className={classes.formContainer}>
                  <form noValidate>
                    <Grid container spacing={2}>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        className={classes.textFieldContainer}
                      >
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="email"
                          id="email"
                          label="First Name"
                          autoComplete="First Name"
                        />
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        sm={6}
                        className={classes.textFieldContainer}
                      >
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="email"
                          id="email"
                          label="Last Name"
                          autoComplete="Last Name"
                        />
                      </Grid>{" "}
                      <Grid item xs={12} className={classes.textFieldContainer}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="email"
                          id="email"
                          label="Email address"
                          autoComplete="email"
                        />
                      </Grid>{" "}
                      <Grid item xs={12} className={classes.textFieldContainer}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="email"
                          id="email"
                          label="Interested in:"
                          autoComplete="email"
                        />
                      </Grid>{" "}
                      <Grid item xs={12} className={classes.textFieldContainer}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          autoComplete="message"
                          name="message"
                          id="message"
                          label="Query"
                        />
                      </Grid>{" "}
                      <Grid item xs={12} className={classes.textFieldContainer}>
                        <TextField
                          variant="outlined"
                          required
                          multiline
                          rows={5}
                          fullWidth
                          autoComplete="message"
                          name="message"
                          id="message"
                          label="How can we help you?"
                        />
                      </Grid>{" "}
                    </Grid>
                    <Box mt={2}>
                      <Button
                        className={classes.button}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                      >
                        {content["primary-action"]}
                      </Button>
                    </Box>
                  </form>
                </Container>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </section>
  );
}
