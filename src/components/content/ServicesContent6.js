import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "../../Link";
import Button from "@material-ui/core/Button";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import { useMediaQuery, useTheme } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: `url(${"/assets/services4.jpg"})`,
  },
  logo: {
    height: 48,
    marginTop: "auto",
    marginBottom: "auto",
  },
  paper: {
    maxHeight: 128,
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.grey[50],
    border: 0,
  },
  title: {
    fontWeight: 700,
    color: theme.palette.common.white,
  },
  button: {
    color: theme.palette.common.white,
    paddingBottom: 9,
    paddingTop: 9,
    paddingLeft: 18,
    paddingRight: 18,
    borderRadius: 0,
    "&:hover": {
      textDecoration: "none",
    },
  },
  box: {
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 0,
  },
}));

export default function Testimonials() {
  const classes = useStyles();
  const theme = useTheme();

  const content = {
    title:
      "Have a question? Not sure if we can help you out? Want to discuss your project's needs?",
    button: "CONTACT US",
  };

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={15}>
          <Grid direction={matchesSM ? "column" : "row"} container spacing={2}>
            <Grid item xs={12} md={7} className={classes.box}>
              <Box
                mt={5}
                align={matchesSM ? "center" : "inherit"}
                style={{
                  paddingTop: 20,
                  paddingBottom: 20,
                  paddingLeft: 15,
                  paddingRight: 15,
                }}
              >
                <Typography variant="h3" component="h2" gutterBottom={true}>
                  <Typography
                    color="primary"
                    variant="h3"
                    className={classes.title}
                    component="span"
                  >
                    {content.title}
                  </Typography>
                </Typography>
                <Box pt={matchesSM ? 0 : 1} px={1} pb={matchesSM ? 3 : 0}>
                  <Button
                    component={Link}
                    disableRipple
                    disableTouchRipple
                    variant="contained"
                    href="/contact"
                    color="primary"
                    className={classes.button}
                    endIcon={<ChevronRightIcon />}
                  >
                    {content.button}{" "}
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box display="flex" flexWrap="wrap" justifyContent="center">
                {/* <Box pt={matchesSM ? 0 : 10} pb={matchesSM ? 3 : 0}>
                  <Button
                    disableRipple
                    disableTouchRipple
                    href="/about"
                    component={Link}
                    className={classes.button2}
                    variant="outlined"
                    color="textSecondary"
                  >
                    {content.button2}
                  </Button>
                </Box> */}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
